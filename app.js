const dotenv = require('dotenv');
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

require('dotenv').config({path:"./config.env"});

require("./db/conn");
// const User = require("./model/userSchema");

app.use(cookieParser());
app.use(express.json());

app.use(require("./router/auth"));

if (process.env.NODE_ENV == "production") {
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`server is runing: http://localhost:${port}`);
});