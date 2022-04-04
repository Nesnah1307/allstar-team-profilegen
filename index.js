const inquirer = require("inquirer");
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
                "There are no other allstar members to add."
            ]
        }
    ]).then(allstarChoice => {
        switch (allstarChoice.addAllstar) {
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


function allstarEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the allstar engineer's name?",
            validate: engineerNameInput => {
                if (engineerNameInput) {
                    return true;
                } else {
                    console.log("Please enter the allstar engineer's name.")
                }
            }
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the allstar engineer's id?",
            validate: engineerIdInput => {
                if (engineerIdInput) {
                    return true;
                } else {
                    console.log("Please enter the allstar engineer's id.")
                }
            }
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the allstar engineer's email?",
            validate: engineerEmail => {
                if (engineerEmail) {
                    return true;
                } else {
                    console.log("Please enter the allstar engineer's email.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the allstar engineer's GitHub username",
            validate: engineerGithubInput => {
                if (engineerGithubInput) {
                    return true;
                } else {
                    console.log("Please enter the allstar engineer's GitHub username.")
                    return false;
                }
            }
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        newAllstars.push(engineer);
        allstarIdArr.push(answers.engineerId);
        otherAllstarTeam();
    });
}

function allstarIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "allstarInternName",
            message: "What is the allstar intern's name?",
            validate: allstarInternName => {
                if (allstarInternName) {
                    return true;
                } else {
                    console.log("Please enter the allstar Intern's name.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "allstarInternId",
            message: "What is the allstar intern's id?",
            validate: allstarInternId => {
                if (allstarInternId) {
                    return true;
                } else {
                    console.log("Please enter the allstar intern's id.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "allstarInternEmail",
            message: "What is the allstar intern's email?",
            validate: allstarInternEmail => {
                if (allstarInternEmail) {
                    return true;
                } else {
                    console.log("Please enter the allstar intern's email.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "allstarInternSchool",
            message: "Where did your intern attend school?",
            validate: allstarInternSchool => {
                if (allstarInternSchool) {
                    return true;
                } else {
                    console.log("Please enter the school your intern attended.")
                    return false;
                }
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.allstarInternName, answers.allstarInternId, answers.allstarInternEmail, answers.allstarInternSchool);
        newAllstars.push(intern);
        allstarIdArr.push(answers.internId);
        otherAllstarTeam();
    });
}

function createAllstars() {

    fs.writeFileSync("./dist/index.html", generate(newAllstars), "utf-8");

};

askManager();