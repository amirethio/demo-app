const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const database = require("./config/db.config");


// import routes
const all_router =  require("./routes/index.route")


// middlewares
app.use(cors());
app.use(express.json());
app.use(all_router)



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





const PORT = process.env.PORT;
// server is running
app.listen(PORT, () => {
  console.log(`app is running on port http://localhost:${PORT}`);
});
