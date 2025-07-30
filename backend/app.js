const express = require("express");
const mysql = require("mysql2");

const PORT = 3000;
const app = express();

// db connection
const database = mysql.createConnection({
  database: "demoapp",
  user: "root",
  password: "test",
  host: "localhost",
});

database.connect((err) => {
  console.log("database connected sucessfully");
});

app.use(express.json());
// get requiest

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("working");
});

// response
const response = {
  message: "successfully sent",
};

// post request

app.get("/", (req, res) => {
  console.log(req.body);
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


app.post("/login",(req,res)=>{
    const {email , password} =  req.body;
    const sql = ` SELECT password from employee_test where email = ?;`;
    database.query(sql ,[email] ,(err , result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result[0].password);
            
            if (result[0].password == password) {
              res.send("user logedin sucessfully");
            } else {
              res.send("you have used wrong password");
            }
        }
    })
})
// server is running

app.listen(PORT, () => {
  console.log(`app is running on port http://localhost:${PORT}`);
});
