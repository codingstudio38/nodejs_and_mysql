const MyController = require('./../Controllers/MyController');
const jwt = require('jsonwebtoken');
const connect = require('./../Config/Connection');
async function Auth(req, resp, next) {
    try {
        let header_token, sanitize_token, getquery, findquery;
        const bearer_token = req.headers['authorization'];
        var allowlist = ['http://localhost:4200', 'http://localhost:3000'];
        // if (allowlist.indexOf(req.header('Origin')) == -1) {
        //     return resp.status(400).json({ "status": 400, "message": "Access denied..!!" });
        // }
        if (!bearer_token) {
            return resp.status(401).json({ "status": 401, "message": "Unauthorized..!!" });
        }
        header_token = bearer_token.slice(7);

        sanitize_token = MyController.mysql_real_escape_string(header_token);
        getquery = `SELECT * FROM users WHERE token ='${sanitize_token}'`;
        findquery = `SELECT COUNT(id) AS TOTAL FROM users WHERE token ='${sanitize_token}'`;
        connect.query(findquery, (error, result) => {
            if (error) return resp.status(401).json({ "status": 401, "message": "Failed..!!", "error": error });
            if (result[0].TOTAL <= 0) {
                return resp.status(401).json({ "status": 401, "message": "Unauthorized..!! Token does not found." });
            }
            connect.query(getquery, (erroris, resultis) => {
                if (erroris) return resp.status(401).json({ "status": 401, "message": "Failed..!!", "error": erroris });
                const user_data = resultis[0]
                const user_token = resultis[0].token;
                const varifyUsers = jwt.verify(user_token, process.env.SECRET_KEY);
                if (!varifyUsers) {
                    return resp.status(401).json({ "status": 401, "message": "Invalid token detected..!!" });
                }
                req.token = user_token;
                req.user = user_data;
                next();
            })
        });
    } catch (error) {
        return resp.status(400).json({ "status": 400, "message": "Failed..!!", "error": error });
    }
}

module.exports = Auth;