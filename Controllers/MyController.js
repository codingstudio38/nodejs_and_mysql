const connect = require('./../Config/Connection');
//const readXlsxFile = require('read-excel-file/node');
const xlsx = require('xlsx');
//const nodemailer = require('nodemailer');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');
const pdf = require('html-pdf');
const export_xl = path.join(__dirname, './../public/export-xl');
const export_pdf = path.join(__dirname, './../public/export_pdf');
function currentDateTime(t) {
    const now = new Date();
    let file_ = t.split(".");
    let ex = file_[file_.length - 1];
    let month = now.getMonth() + 1;
    if (month <= 9) {
        month = `0${month}`;
    } else {
        month = month;
    }
    return [`${now.getFullYear()}-${month}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}-${now.getMilliseconds()}`, ex];
}


function modifyDate(date) {
    let dateis, H, M, S, MS, D, MO, Y, TIME, DATE_, stringdate, utcstring, fulldatetime;
    dateis = new Date(date);
    D = dateis.getDate();
    if (D <= 9) {
        D = "0" + D;
    } else {
        D = D;
    }
    MO = dateis.getMonth();
    if (MO <= 9) {
        MO = "0" + MO;
    } else {
        MO = MO;
    }
    Y = dateis.getFullYear();

    H = dateis.getHours();
    if (H <= 9) {
        H = "0" + H;
    } else {
        H = H;
    }
    M = dateis.getMinutes();
    if (M <= 9) {
        M = "0" + M;
    } else {
        M = M;
    }
    S = dateis.getSeconds();
    if (S <= 9) {
        S = "0" + S;
    } else {
        S = S;
    }
    MS = dateis.getMilliseconds();
    if (MS <= 9) {
        MS = "0" + MS;
    } else {
        MS = MS;
    }
    DATE_ = `${Y}:${MO}:${D}`;
    TIME = `${H}:${M}:${S}:${MS}`;
    stringdate = `${dateis.toDateString()} ${TIME}`;
    utcstring = dateis.toUTCString();
    fulldatetime = `${DATE_} ${TIME}`;
    return {
        'stringdate': stringdate,
        'utcstring': utcstring,
        'fulldatetime': fulldatetime
    };
}


async function GetAllDate(req, resp) {
    try {
        let query_ = "SELECT * FROM `users`";
        connect.query(query_, (err, result) => {
            if (err) {
                return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': err, });
            } else {
                return resp.status(200).json({ 'status': 200, 'message': 'success', 'result': result });
            }
        });
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': error });
    }
}

async function PdfTblView(req, resp) {
    try {
        var data;
        let query_ = "SELECT * FROM `users`";
        connect.query(query_, (err, result) => {
            if (err) {
                data = { 'status': 400, 'message': 'failed', 'error': err, 'result': [], "i": 1 };
                return resp.render(`userlist`, data);
            } else {
                data = { 'status': 400, 'message': 'failed', 'error': err, 'result': result, "i": 1 };
                return resp.render(`userlist`, data);
            }
        });
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': error, });
    }
}



async function ExportPdf(req, resp) {
    try {
        var data;
        let query_ = "SELECT * FROM `users`";
        connect.query(query_, (err, result) => {
            if (err) {
                data = { 'status': 400, 'message': 'failed', 'error': err, 'result': [], "i": 1 };
                return resp.status(200).json(data);
            } else {
                data = { 'status': 400, 'message': 'failed', 'error': err, 'result': result, "i": 1 };
                // return resp.status(400).json(data);
                const pdf_file_path = path.join(__dirname, './../views/pdfuserlist.ejs');
                const htmlString = fs.readFileSync(pdf_file_path).toString();
                const ejsData = ejs.render(htmlString, data);
                let pdffilename = `${currentDateTime("users.pdf")[0]}.${currentDateTime("users.pdf")[1]}`;
                let filefullpath = `${export_pdf}/${pdffilename}`;
                let option = {
                    format: "A4",
                    orientation: 'portrait',
                    border: {
                        "top": "50px",            // default is 0, units: mm, cm, in, px
                        // "right": "1in",
                        // "bottom": "2in",
                        // "left": "1.5in"
                    },
                    "header": {
                        "height": "10px",
                        "contents": {
                            // first: 'Cover page',
                            //2: 'Second page', // Any page number is working. 1-based index
                            default: 'Page <span style="color: #444; margin-bottom:10px;">{{page}}</span> of <span>{{pages}}</span>',
                            //last: 'Last Page'
                        }
                    },
                    "quality": "100",
                    // "footer": {
                    //     "height": "28mm",
                    //     "contents": {
                    //         first: 'Cover page',
                    //         2: 'Second page', // Any page number is working. 1-based index
                    //         default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                    //         last: 'Last Page'
                    //     }
                    // }
                }
                pdf.create(ejsData, option).toFile(filefullpath, (err, res) => {
                    if (err) {
                        return resp.status(400).json(err);
                    }
                    fs.readFile(filefullpath, (error, file) => {
                        if (error) {
                            return resp.status(400).json(error);
                        }
                        resp.setHeader('Content-Type', 'application/pdf');
                        resp.setHeader('Content-Disposition', `attachment;filename=${pdffilename}`);
                        resp.send(file);
                    });
                });
            }
        });
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': error });
    }
}


async function ExportExcel(req, resp) {
    let allPost, workSheetName, filename, filePath, query_;
    query_ = "SELECT * FROM `users`";
    connect.query(query_, (err, result) => {
        if (err) {
            return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': err, });
        } else {
            allPost = result;
            workSheetName = "UsersData";
            filename = `${currentDateTime("users-post.xlsx")[0]}.${currentDateTime("users-post.xlsx")[1]}`
            filePath = `${export_xl}/${filename}`;
            const workSheetColumnName = [
                "NAME", "EMAIL ID", "PHONE", "CREATED AT"
            ];
            const data = allPost.map((post) => {
                return [post.name, post.email, post.phone, post.created_at];
            })
            const workBook = xlsx.utils.book_new();
            const workBookData = [
                workSheetColumnName,
                ...data
            ];
            const workSheet = xlsx.utils.aoa_to_sheet(workBookData);
            xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
            xlsx.writeFile(workBook, filePath);
            //return DownloadFile(req, resp, export_xl, filename);
            return resp.download(`${export_xl}/${filename}`, filename,
                (err) => {
                    if (err) {
                        return resp.status(404).json({
                            error: err,
                            msg: "Problem downloading the file"
                        })
                    }
                })
        }
    });
}




async function ExportCostumeExcel(req, resp) {
    let allPost, workSheetName, filename, filePath, query_;
    query_ = "SELECT * FROM `users`";
    connect.query(query_, (err, result) => {
        if (err) {
            return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': err, });
        } else {
            allPost = result;
            workSheetName = "UsersData";
            filename = `${currentDateTime("users-post.xlsx")[0]}.${currentDateTime("users-post.xlsx")[1]}`
            filePath = `${export_xl}/${filename}`;
            const workSheetColumnName = [
                "NAME", "EMAIL ID", "PHONE", "CREATED AT"
            ];
            const data = allPost.map((post) => {
                return [post.name, post.email, post.phone, post.created_at];
            })
            const workBook = xlsx.utils.book_new();
            const workBookData = [
                workSheetColumnName,
                ...data
            ];
            const workSheet = xlsx.utils.aoa_to_sheet(workBookData);
            xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
            xlsx.writeFile(workBook, filePath);
            //return DownloadFile(req, resp, export_xl, filename);
            return resp.download(`${export_xl}/${filename}`, filename,
                (err) => {
                    if (err) {
                        return resp.status(404).json({
                            error: err,
                            msg: "Problem downloading the file"
                        })
                    }
                })
        }
    });
}






async function DownloadFile(req, resp, filepath, name) {
    if (fs.existsSync(`${filepath}/${name}`)) {
        return resp.download(`${filepath}/${name}`, name,
            (err) => {
                if (err) {
                    return resp.status(200).json({
                        error: err,
                        msg: "Problem downloading the file"
                    })
                }
            });
    } else {
        return resp.status(404).json({ status: 404, msg: "Downloads directory not found" })
    }
}

async function ViewCreate(req, resp) {
    return resp.render('index');
}

async function Create(req, resp) {
    try {
        // return resp.status(200).json(req.body);
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        let query_ = `INSERT INTO users SET name='${name}',email='${email}',phone='${phone}'`;
        connect.query(query_, (err, result) => {
            if (err) {
                return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': err, });
            } else {
                return resp.status(200).json({ 'status': 200, 'message': 'success', 'result': result });
            }
        });
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': error, });
    }
}


async function UpdateData(req, resp) {
    try {
        let id = req.body.id;
        let name = req.body.name;
        let email = req.body.email;
        let phone = req.body.phone;
        let query_ = `UPDATE users SET name='${name}',email='${email}',phone='${phone}' WHERE id='${id}'`;
        connect.query(query_, (err, result) => {
            if (err) {
                return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': err, });
            } else {
                return resp.status(200).json({ 'status': 200, 'message': 'success', 'result': result });
            }
        });
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': error, });
    }
}


async function DeleteData(req, resp) {
    try {
        let id = req.query.id;
        let query_ = `DELETE FROM users WHERE id='${id}'`;
        connect.query(query_, (err, result) => {
            if (err) {
                return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': err, });
            } else {
                return resp.status(200).json({ 'status': 200, 'message': 'success', 'result': result });
            }
        });
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': error, });
    }
}

async function FetchData(req, resp) {
    try {
        var time_zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        var Date_now = Date.now();
        var data = new Date(new Date().toLocaleString('en', { timeZone: time_zone })).toString();
        return resp.status(200).json({ 'Date_now': Date_now, 'data': data, "time_zone": time_zone });
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                return resp.status(200).json({ 'status': 200, 'message': 'success', 'result': data });
            });
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed', 'error': error, });
    }
}


async function BaseCode(req, resp) {
    try {
        let filepath, filepath_fullpath, ex_data, mage_type_aux, filetype, base64, imageName, imagepath;
        filepath = path.join(__dirname, "./../public");
        filepath_fullpath = `${filepath}/bas46.txt`;//y-1.jpg
        if (fs.existsSync(filepath_fullpath)) {
            fs.readFile(filepath_fullpath, 'utf8', (err, data) => {
                if (err) return resp.status(400).json({ 'status': 400, 'message': 'failed', 'result': err });
                ex_data = data.split(";base64,");
                mage_type_aux = ex_data[0].split("image/");
                filetype = mage_type_aux[1];
                base64 = new Buffer(ex_data[1], 'base64'); //atob(ex_data[1]);
                imageName = `${Math.floor(Math.random() * 10000)}.${filetype}`;
                imagepath = `${filepath}/base64/${imageName}`;
                fs.writeFileSync(imagepath, base64, 'utf8');
                return resp.download(imagepath, imageName,
                    (err) => {
                        if (err) {
                            return resp.status(404).json({
                                error: err,
                                msg: "Problem downloading the file"
                            })
                        }
                    })
            });
        } else {
            return resp.status(400).json({ 'status': 400, 'message': 'Directory not found.', 'result': filepath_fullpath });
        }
    } catch (error) {
        return resp.status(400).json({ 'status': 400, 'message': 'failed..!!', 'error': error, });
    }
}




module.exports = { GetAllDate, ViewCreate, Create, UpdateData, DeleteData, FetchData, PdfTblView, ExportExcel, ExportPdf, ExportCostumeExcel, BaseCode }