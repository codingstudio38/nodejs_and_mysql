const Users = require('./../Models/Users');
const Healper = require("./Healper");
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const mongodb = require('mongodb');
const moment = require('moment-timezone');
const user_files = path.join(__dirname, './../storage/users');
function File_name_type(t) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    let file_ = t.split(".");
    let ex = file_[file_.length - 1];
    return [result, ex];
}

async function Index(req, resp) {
    try {
        let { page, name, email, skip, limit } = req.query;
        let query= {},searchFilters=[];
        if (!page) {
            page = 1;
        }
        if (parseInt(page) <= 0) {
            page == 1;
        }
        if (!limit) {
            limit = 5;
        }
        if (parseInt(limit) <= 0) {
            limit == 5;
        }
        page = parseInt(page);
        limit = parseInt(limit);
        skip = (page - 1) * limit;
        if (name && name.trim() !== "") {
            searchFilters.push({ name: { $regex: name, $options: 'i' } });
        }
        if (email && email.trim() !== "") {
            searchFilters.push({ email: { $regex: email, $options: 'i' } });
        }
        query = searchFilters.length > 0 ? { $or: searchFilters } : {};
        let matchStage = searchFilters.length > 0 ? { $or: searchFilters } : {};
        
        const pipeline = [
            { $match: matchStage },
            {
                $addFields: {
                    sort_name: {
                        $toLower: {
                            $trim: { input: "$name" }
                        }
                    }
                }
            },
            {"$sort": {"sort_name": 1}},
            { $skip: skip },
            { $limit: limit }
        ];
        let total = await Users.find(query).countDocuments();
        const data = await Users.aggregate(pipeline);
        let resetdata_is=[];
        // let data = await Users.find(query).skip(skip).limit(limit).sort({ name: 1 });
        let filedata = new Promise((resolve, reject) => {
            let resetdata = [];
            try {
                data.forEach(async element => {
                    let Path = path.join(__dirname, `./../storage/users/${element.photo}`);
                    let fdtl = await Healper.FileInfo(Path);
                    fdtl['file_view_path'] = `${process.env.APP_URL}storage-files/users/${element.photo ? element.photo : ''}`;
                    let obj = element;
                    obj.file=fdtl;
                    resetdata.push(obj);
                });
                resolve(resetdata);
            } catch (error) {
                reject(error.message);
            }
        });
        await filedata.then((datais) => {
            resetdata_is = datais;
        }).catch((error) => {
            throw new Error(error);
        });

        const pagination_data =  pagination(resetdata_is,total,limit,page);
        return resp.status(200).json({ "status": 200, "message": "seccess", result:pagination_data });

    } catch (error) {
        return resp.status(400).json({ "status": 400, "message": "Failed..!!", "error": error.message });
    }
}

async function Create(req, resp) {
    var new_file_name = '';
    const session = await Users.startSession(); 
    try {
        session.startTransaction(); 
        let { name, email, phone, password } = req.body;
        let salt = await bcrypt.genSalt(10);
        let pass = await bcrypt.hash(password, salt);
        if(password==undefined || password=="" || password==null){
            return resp.status(200).json({ "status": 400, "message": "Password is required" });
        }
        let insert = { 'name': name.trim(), 'email': email.trim(), 'phone': phone.trim(), 'password': pass };
        let phone_total = await Users.find({'phone': phone}).countDocuments();
        let email_total = await Users.find({'email': email}).countDocuments();
        if(phone_total > 0){
            await session.abortTransaction();
            session.endSession();
            return resp.status(200).json({ "status": 400, "message": "Phone number already exists" });
        } else if(email_total > 0){
            await session.abortTransaction();
            session.endSession();
            return resp.status(200).json({ "status": 400, "message": "Email already exists" });
        }
        if (req.files) {
            let fileIs = req.files.photo;
            let file_name = `${File_name_type(fileIs.name)[0]}.${File_name_type(fileIs.name)[1]}`;
            if (!fs.existsSync(user_files)) {
                fs.mkdirSync(user_files, { recursive: true });
            }
            await fileIs.mv(`${user_files}/${file_name}`);
            insert.photo = file_name;
            new_file_name= file_name;
        }
        let NewUser = new Users(insert);
        const savedUser = await NewUser.save();
        await session.commitTransaction(); 
        session.endSession();
        return resp.status(200).json({
            status: 200,
            message: "Success",
            data: savedUser
        });
    } catch (error) {
        await session.abortTransaction(); 
        session.endSession();
        if(new_file_name!==''){
            await Healper.DeleteFile(`${user_files}/${new_file_name}`);
        }
        return resp.status(400).json({ "status": 400, "message": "Failed..!!", "error": error.message });
    }
}
async function Update(req, resp) {
    var new_file_name = '';
    const session = await Users.startSession(); 
    try {
        session.startTransaction(); 
        let { name, email, phone, password,id } = req.body;
        let file=false;
        if(id==undefined || id=="" || id==null){
            return resp.status(200).json({ "status": 400, "message": "id is required" });
        }
        let update_data = { 'name': name.trim(), 'email': email.trim(), 'phone': phone.trim(), updated_at: moment().tz(process.env.TIMEZONE).format('YYYY-MM-DD HH:mm:ss')};
        if(password==undefined || password=="" || password==null){
        } else {
            let salt = await bcrypt.genSalt(10);
            let pass = await bcrypt.hash(password, salt);
            update_data.password = pass;
        }
        let phone_total = await Users.find(
            { 
               _id: { $ne: new mongodb.ObjectId(id) },
              'phone': phone,
            }
        ).countDocuments();
        let email_total = await Users.find(
            { 
               _id: { $ne: new mongodb.ObjectId(id) },
              'email': email,
            }
        ).countDocuments();
        if(phone_total > 0){
            await session.abortTransaction();
            session.endSession();
            return resp.status(200).json({ "status": 400, "message": "Phone number already exists" });
        } else if(email_total > 0){
            await session.abortTransaction();
            session.endSession();
            return resp.status(200).json({ "status": 400, "message": "Email already exists" });
        }

        if (req.files) {
            let fileIs = req.files.photo;
            let file_name = `${File_name_type(fileIs.name)[0]}.${File_name_type(fileIs.name)[1]}`;
            if (!fs.existsSync(user_files)) {
                fs.mkdirSync(user_files, { recursive: true });
            }
            await fileIs.mv(`${user_files}/${file_name}`);
            update_data.photo = file_name;
            file=true;
            new_file_name = file_name;
        }
        let user_data = await Users.find({ '_id': new mongodb.ObjectId(id) });
        user_data= user_data.length > 0 ? user_data[0] : false;
        let user_old_photo = user_data==false?'':user_data.photo;
        const update = await Users.findByIdAndUpdate(
            { _id: new mongodb.ObjectId(id) }, 
            update_data, 
            { new: true });
        if(file){
            await Healper.DeleteFile(`${user_files}/${user_old_photo}`);
        }
        await session.commitTransaction();
        session.endSession();
        return resp.status(200).json({
            status: 200,
            message: "Success",
            data: update
        });
    } catch (error) {
        await session.abortTransaction(); 
        session.endSession();
        if(new_file_name!==''){
            await Healper.DeleteFile(`${user_files}/${new_file_name}`);
        }
        return resp.status(400).json({ "status": 400, "message": "Failed..!!", "error": error.message });
    }
}
function pagination(data,total, limit, page) {
    var totalpage, nextPage, pagingCounter, hasNextPage, hasPrevPage, prevPage, page_links, skip;
    skip = (page - 1) * limit;
    totalpage = Math.ceil(total / limit);
    nextPage = parseInt(page + 1);
    pagingCounter = skip + 1;
    if (page * limit < total) {
        hasNextPage = true;
        nextPage = nextPage;
    } else {
        hasNextPage = false;
        nextPage = null;
    }
    if (page <= 1) {
        hasPrevPage = false;
        prevPage = null;
    } else {
        hasPrevPage = true;
        prevPage = parseInt(page - 1);
    }
    page_links = [];
    for (let i = 1; i <= totalpage; i++) {
        if (page == i) {
            page_links.push({ 'link': i, active: true });
        } else {
            page_links.push({ 'link': i, active: false });
        }
    }
    return { data:data, 'totalpage': totalpage, 'nextPage': nextPage, 'pagingCounter': pagingCounter, 'hasNextPage': hasNextPage, 'hasPrevPage': hasPrevPage, 'prevPage': prevPage, 'page_links': page_links };

}

module.exports = { Index, Create,Update }