// PSEUDO TIME //
// Data flow ~~ 
/* 
1. node command to initiate app 
2. Prompt user function to run through questions on info for employee. (input example of inquirer)
3. Ask user if they want to create info for another employee. 
4. If no -- process.exit()
4a. If yes, run the prompts for that specific employee.  
5. Repeat steps 3 - 4a until user exits. 
6. Generate HTML. 
*/

const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
let engineerNum = 1

//everyone has id name and email
generalQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'What is this employee\'s ID?'
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is thier name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is thier email?'
        },
    ])
}
//manager question: office number
managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their officeNumber?'
        }
    ])
}
// engineer question : github
engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub?'
        }
    ])
}
//intern question: school
internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?'
        }
    ])
}

addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'newEmployee',
            message: 'Would you like to add another employee?',
            choices: [ 'Engineer', 'Intern', 'No' ]
        }
    ])
}

employeeType = (answers) => {
    if(answers.newEmployee === 'Engineer'){
        addEngineer()
    } else if (answers.newEmployee === 'Intern'){
        addIntern()
    } else {
        process.exit()
    }
}

function init() {
    let manager = new Manager
    generalQuestions()
        .then((answers) => {
            manager.id = answers.id;
            manager.name = answers.name;
            manager.email = answers.email
        })
        .then(() => managerQuestions())
        .then((answers) => manager.officeNumber = answers.officeNumber)
        .then(() => addEmployee())
        .then((answers) => employeeType(answers))
}

function addEngineer() {
    let engineer = new Engineer
    generalQuestions()
        .then((answers) => {
            engineer.id = answers.id;
            engineer.name = answers.name;
            engineer.email = answers.email
        })
        .then(() => engineerQuestions())
        .then((answers) => engineer.github = answers.github)
        .then(() => addEmployee())
        .then((answers) => employeeType(answers))
  }

  function addIntern() {
    let intern = new Intern
    generalQuestions()
        .then((answers) => {
            intern.id = answers.id;
            intern.name = answers.name;
            intern.email = answers.email
        })
        .then(() => internQuestions())
        .then((answers) => intern.school = answers.school)
        .then(() => addEmployee())
        .then((answers) => employeeType(answers))
  }












init()
