const employee_sevice = require("./../services/employee.service");

async function employee(req, res, next) {
  const result = await employee_sevice.add_employee(req.body);
  if (result.length == 2) {
    res.status(200).json("used registered sucesfully");
  } else {
    res.status(409).json(result.message);
  }
}

module.exports = { employee };
