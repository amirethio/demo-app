const loginservice = require("./../services/login.service");

async function login(req, res, next) {
  const employee_res = await loginservice.login(req.body);
  if (employee_res) {
    res.status(200).json("status :its working");
  }else{
        res.status(403).json("status : access denied");

  }

  console.log(req.body);
}

module.exports = {
  login,
};
