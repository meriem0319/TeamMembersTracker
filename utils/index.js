const inquirer = require("inquirer");

const { showData } = require("./data");
const { showDepartment, addDepartment } = require("./department");
const { showEmployees, addEmployee, updateEmployee } = require("./employee");
const { showRole, addRole } = require("./role");

const mainView = function () {
  inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message: "Please select an option:",
        choices: [
          "Show All",
          "Show Departments",
          "Show Employees",
          "Show Roles",
          "Add Department",
          "Add Employee",
          "Add Role",
          "Update Employee",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers.menu);
      switch (answers.menu) {
        case "Show All":
          showData();
          break;
        case "Show Departments":
          showDepartment();
          break;
        case "Show Employees":
          showEmployees();
          break;
        case "Show Roles":
          showRole();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Role":
          addRole();
          break;
        case "Update Employee":
          updateEmployee();
          break;
        default:
          console.log("Bye...leaving the program.");
          break;
      }
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = { mainView };
