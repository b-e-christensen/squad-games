
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const script = require('./script')

//All employees have id name and email
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

// Questions that only pertain to managers
managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their officeNumber?'
        }
    ])
}

// Questions that only pertain to engineers
engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?'
        }
    ])
}

// Questions that only pertain to interns
internQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?'
        }
    ])
}

// Function to see if user wants to keep adding employees.
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

// Takes value of addEmployee and checks what type was chosen to then run those specific questions. Ends the app if user does not want to add anymore.
employeeType = (answers) => {
    if(answers.newEmployee === 'Engineer'){
        addEngineer()
    } else if (answers.newEmployee === 'Intern'){
        addIntern()
    } else {
        script.writeHTML()
    }
}

// Runs questions for engineer. Saves the info and pushes it to an array to use in html generation
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
        .then((answers) => {
            script.employeeCard(engineer)
            employeeType(answers)
        })
  }

  // Runs questions for intern. Saves the info and pushes it to an array to use in html generation
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
        .then((answers) => {
            script.employeeCard(intern)
            employeeType(answers)
        })
  }

// Starts the app.
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
        .then((answers) => {
            script.employeeCard(manager)
            employeeType(answers)
        })
}

init()