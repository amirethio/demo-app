const database = require("./../config/db.config");

async function add_employee(employee_data) {
  try {
    const { first_name, last_name, email, password } = employee_data;
    const sql = `INSERT INTO employee_test(first_name, last_name, email, password) VALUES(? ,?,?,?)`;
    const result = await database.query(sql, [
      first_name,
      last_name,
      email,
      password,
    ]);
    return result;
  } catch (error) {
    return error
  }
}

module.exports = {
  add_employee,
};
