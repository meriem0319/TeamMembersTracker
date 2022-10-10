const inquirer = require("inquirer");
const { ConnectableObservable } = require("rxjs");
const db = require("../config/connections");

const showEmployees = function () {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("\nEmployees Table");
    console.table(rows);
  });
};

const addEmployee = function () {
  inquirer
    .createPromptModule([
      {
        type: "text",
        name: "firstName",
        message: "What is the first name of the employee being added?",
      },
      {
        type: "text",
        name: "lastName",
        message: "What is the last name of the employee being added?",
      },
      {
        type: "text",
        name: "role",
        message: "What is the role ID# the employee being added?",
      },
      {
        type: "text",
        name: "manager",
        message: "What is the manager ID# of the employee being added?",
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
        VALUES (?,?,?,?)`;
      const params = [
        answers.firstName,
        answers.lastName,
        answers.role,
        answers.manager,
      ];
      db.query(sql, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Added Successfully!");
      });
    })
    .catch((err) => console.log(err.message));
};

//one of the bonuses is to update employee

const updateEmployee = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "updateParam",
        message: "Which would you like to update for Employee?",
        choices: [`first_name`, `last_name`, `role_id`, `manager_id`],
      },
      {
        type: "number",
        name: "indexValue",
        message: "What is the index value for Employee?",
        choices: [`first_name`, `last_name`, `role_id`, `manager_id`],
      },
      {
        type: "list",
        name: "newValue",
        message: "Type the new value to replace previous value",
        choices: [`first_name`, `last_name`, `role_id`, `manager_id`],
      },
    ])
    .then((answers) => {
      const sql = `UPDATE employees SET last_name = ? WHERE id = ?`;
      const params = [answers.newValue, answers.indexValue];
      db.query(sql, params, (err, result) => {
        console.log(params);
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("Updated Successfully!");
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { showEmployees, addEmployee, updateEmployee };
