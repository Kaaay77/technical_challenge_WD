require("dotenv/config");
const express = require("express");



const app = express();
require("./config")(app);


// 👇 MIDDLEWARE MISSING

const indexRoutes = require('./routes/index.routes')
app.use("/", indexRoutes)

const phoneRoutes = require('./routes/phone.routes')
app.use("/phones", phoneRoutes)



module.exports = app;




