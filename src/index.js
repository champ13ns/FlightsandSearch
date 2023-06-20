const express = require('express');
// require('dotenv').config();

const {PORT} = require('./config/serverConfig')

const startServer = async() =>{
    const app = express();
    // console.log(process.env)
    app.listen(PORT, () => {
        console.log("server started on Port ",PORT);
    })
}

startServer();
