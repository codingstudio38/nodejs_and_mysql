require('dotenv').config();
const path = require('path');
const Fileupload = require('express-fileupload');
var cors = require('cors')
const express = require('express');
const ejs = require('ejs');
var bodyParser = require("body-parser");
// const curl = require('curl-request');
 
const public_path = path.join(__dirname, "./public/asset/");
const views_path = path.join(__dirname, "./views/");
const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(Fileupload());
app.use(cors());
app.use("/asset", express.static(public_path));

app.set("view engine", "ejs");
app.set("views", views_path);
app.use(require('./routes/Route'));


app.listen(port, () => {
    // console.log(`server is running at port no ${port}`);
});