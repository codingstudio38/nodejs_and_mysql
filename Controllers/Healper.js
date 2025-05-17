const path = require('path');
const fs = require('fs');
const mime = require('mime');
const os = require('os');
const data_secretKey = 'bc665a1f223dba15f5fbf5df08838647';  // 16-byte key
const data_ivString = 'bc66-f223-dba1-8647-2345-fd45-dfg3';
async function FileExists(filePath) {
    try {
        if (filePath == "" || filePath == undefined || filePath == null) return false;
        if (fs.existsSync(filePath)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function DeleteFile(filePath) {
    try {
        if (filePath == "" || filePath == undefined || filePath == null) return false;
        if (fs.existsSync(`${filePath}`)) {
            fs.unlinkSync(`${filePath}`, (err) => {
                if (err) return false;
                return true;
            });
        } else {
            return false;
        }
    } catch (error) {
        throw new Error(error.message);
    }
}

async function FileInfo(filePath) {
    try {
        if (filePath == "" || filePath == undefined || filePath == null) return { filetype_st: '', filetype: '', filesize: '' };
        if (fs.existsSync(`${filePath}`)) {
            const filedata = fs.statSync(filePath);
            const size = filedata.size;
            const fileType = mime.getType(filePath);
            let filetype_st = path.extname(filePath)
            filetype_st = filetype_st.replace('.', '', filetype_st).toLowerCase();
            return { filetype_st: filetype_st, filetype: fileType, filesize: size };
        } else {
            return { filetype_st: '', filetype: '', filesize: '' };
        }
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { FileExists, DeleteFile,FileInfo}