const inquirer = require("inquirer");
const db = require("../db/connections");

const showDepartment = function () {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("\nDepartments Table");
    console.table(rows);
  });
};

const addDepartment = function () {
  inquirer
    .createPromptModule([
      {
        type: "text",
        name: "name",
        message: "What is the name of the Department you are adding?",
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO departments (name) VALUEs (?)`;
      const params = [answers.name];
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

module.exports = { showDepartment, addDepartment };
