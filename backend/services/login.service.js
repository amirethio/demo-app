const database = require("./../config/db.config");

async function login(employee_data) {
  console.log("inside the service");
  console.log(employee_data);
  try {
    const { email } = employee_data;
    const sql = ` SELECT password from employee_test where email = ?;`;
    const result = await database.query(sql,[email]);
    console.log(result[0])
    if (result[0].length > 0) {
      return result;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
}


module.exports= {
    login
}

// const login = app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const sql = ` SELECT password from employee_test where email = ?;`;
//   database.query(sql, [email], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       if (result[0].password == password) {
//         res.status(200).json("logedin sucessfully");
//       } else {
//         res.status(401).json("wrong email adress");
//       }
//     }
//   });