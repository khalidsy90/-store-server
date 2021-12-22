'use strict';
// 3rd party modules
require('dotenv').config()

// internal modules
const server = require('./src/server.js');
const {db} = require('./src/models/index'); //destructuring es6
// app and config files
// dotenv.config();


// file logic


db.sync().then(()=> {
    server.start(process.env.PORT|| 8000);
})
.catch(console.error);