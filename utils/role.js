const inquirer = require("inquirer");
const db = require("../config/connections");

const showRole = function () {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("\nRoles Table");
    console.table(rows);
  });
};

const addRole = function () {
  inquirer
    .createPromptModule([
      {
        type: "text",
        name: "title",
        message: "What is the role title being added?",
      },
      {
        type: "number",
        name: "salary",
        message: "What is the salary for the role being added?",
      },
      {
        type: "text",
        name: "department",
        message: "Which department is this role being added to?",
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)`;
      const params = [answers.title, answers.salary, answers.department];
      db.query(sql, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Added Successfully!");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { showRole, addRole };
