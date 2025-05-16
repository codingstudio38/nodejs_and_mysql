const Users = require('./../Models/Users');
const bcrypt = require('bcrypt');
const path = require('path');
const fs = require('fs');
const user_files = path.join(__dirname, './../public/users');
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
        let data = await Users.find();
        return resp.status(200).json({ "status": 200, "message": "seccess", daata: data });

    } catch (error) {
        return resp.status(400).json({ "status": 400, "message": "Failed..!!", "error": error.message });
    }
}

async function Create(req, resp) {
    try {
        let { name, email, phone, password } = req.body;
        let salt = await bcrypt.genSalt(10);
        let pass = await bcrypt.hash(password, salt);

        let insert = { 'name': name, 'email': email, 'phone': phone, 'password': pass };
        if (req.files) {
            let fileIs = req.files.photo;
            let file_name = `${File_name_type(fileIs.name)[0]}.${File_name_type(fileIs.name)[1]}`;
            if (!fs.existsSync(user_files)) {
                fs.mkdirSync(user_files, { recursive: true });
            }
            await fileIs.mv(`${user_files}/${file_name}`);
            insert.photo = file_name;
        }
        let NewUser = new Users(insert);
        const savedUser = await NewUser.save();
        return resp.status(200).json({
            status: 200,
            message: "Success",
            data: savedUser
        });
    } catch (error) {
        return resp.status(400).json({ "status": 400, "message": "Failed..!!", "error": error.message });
    }
}


module.exports = { Index, Create }