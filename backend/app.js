const express = require("express");
const mysql = require("mysql2");
const PORT = 3000;
const cors = require("cors");

const app = express();
// db connectionconst

// middlewares
app.use(cors());
app.use(express.json());

database = mysql.createConnection({
  database: "demoapp",
  user: "demoapp",
  password: "test",
  host: "127.0.0.1",
});
database.connect((err) => {
  console.log("database connected sucessfully");
});




// get requiest
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("working");
});
// responseconst
response = { message: "successfully sent" };
app.get("/", (req, res) => {
  res.send("i am on send me something");
});
app.post("/add-employment", (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const sql = `INSERT INTO employee_test(first_name, last_name, email, password) VALUES(? ,?,?,?)`;
  database.query(
    sql,
    [first_name, last_name, email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("✅ Employee inserted:");
      }
    }
  );
  res.status(200).json(response);
});

// login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = ` SELECT password from employee_test where email = ?;`;
  database.query(sql, [email], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result[0].password == password) {
        res.status(200).json("logedin sucessfully");
      } else {
        res.status(401).json("wrong email adress");
      }
    }
  });
});
// server is running
app.listen(PORT, () => {
  console.log(`app is running on port http://localhost:${PORT}`);
});
