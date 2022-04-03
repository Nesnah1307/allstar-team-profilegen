const inquirer = require("inquire");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generate = require("./src/page-template.js");

const newAllstars = [];
const allstarIdArr = [];

function askManager() {
    console.log("Let's create your team!")
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is the allstar team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the allstar manager's name.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the allstar manager's id?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the allstar manager's id.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the allstar manager's email?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter the allstar manager's email.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "managerNumber",
            message: "What is the allstar manager's office number?",
            validate: managerNumberInput => {
                if (managerNumberInput) {
                    return true;
                } else {
                    console.log("Please enter the allstar manager's office number.")
                    return false;
                }
            }
        }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        newAllstars.push(manager);
        allstarIdArr.push(answers.managerId);
        otherAllstarTeam();
    });
}


function otherAllstarTeam() {

    inquirer.prompt([
        {
            type: "list",
            name: "addAllstar",
            message: "Select which type of allstar team member you'd like to add",
            choices: [
                "Engineer",
                "Intern",
                "There are no other allstar memebers to add."
            ]
        }
    ]).then(allstarChoice => {
        switch (allstarChoice.otherAllstarTeam) {
            case "Engineer":
                allstarEngineer();
                break;
            case "Intern":
                allstarIntern();
                break;
            default:
                createAllstars();
        }
    });
}