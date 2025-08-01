const express = require('express')
const routers =  express.Router()
const employeeController = require("./../controllers/employee.controller")


routers.post("/add-employment" , employeeController.employee)




module.exports =  routers