const express = require('express');

const {PORT} = require('./config/serverConfig');
const { createCity , deleteCity  } = require('./repository/cityRepository.js')
const startServer = async() =>{
    const app = express();
    // console.log(process.env)
    app.listen(PORT, () => {
        console.log("server started on Port ",PORT);
        // createCity({
        //     name:"Delhi"
        // })
        deleteCity({id : 1})
    })
}

startServer();
