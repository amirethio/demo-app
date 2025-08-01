const express = require('express')
const routers =  express.Router()




//importing all routes 
const loginroute = require('./login.routes')
const employeeroute =  require('./employee.route')


routers.use(loginroute);
routers.use(employeeroute);

module.exports = routers