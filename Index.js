const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('../team-profile-generator/lib/Employee.js');
const Engineer = require('../team-profile-generator/lib/Engineer.js');
const Intern = require('../team-profile-generator/lib/Intern.js');
const Manager = require('../team-profile-generator/lib/Manager.js');
const generateHTML = require('../team-profile-generator/util/generateHTML.js');
const teamArray = []

const addTeam = team => {
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'add',
            message: 'Add more employee:',    
        }
    ])
    .then(addConfirm => {
            if (addConfirm.add === true) {
                return build();
            } else {
                console.log(teamArray)
                return generateHTML(team);
            }
    })
}

const build = team => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter name:',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name!');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter employee id:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address:'
        },
        {
            type: 'list',
            name: 'role',
            message: 'Enter your role:',
            choices: ['Manager', 'Engineer', 'Intern']
        },
    ])
    .then (answers =>{
        if (answers.role === 'Manager') {
            inquirer.prompt ([
                {
                    type: 'input',
                    name: 'office',
                    message: 'Enter office number:' 
                }
            ])
            .then ( addAnswer => {
                const employee = new Manager (answers.name, answers.id, answers.email, answers.role, addAnswer.office);
                teamArray.push(employee);
                console.log(employee.name);
                addTeam();
            })
        } else if (answers.role === 'Engineer') {
            inquirer.prompt ([
                {
                    type: 'input',
                    name: 'github',
                    message: 'Enter github username:' 
                }
            ])
            .then ( addAnswer => {
                const employee = new Engineer (answers.name, answers.id, answers.email, answers.role, addAnswer.github);
                teamArray.push(employee);
                addTeam();
            })
        } else if (answers.role === 'Intern') {
            inquirer.prompt ([
                {
                    type: 'input',
                    name: 'school',
                    message: 'Enter school attended:' 
                }
            ])
            .then ( addAnswer => {
                const employee = new Intern(answers.name, answers.id, answers.email, answers.role, addAnswer.school);
                teamArray.push(employee);
                addTeam();
            })
        }
    })
    .catch(function (err) {
        console.log("There was an error.");
        console.log(err);
    })
}


const writeHTML = team =>
fs.writeFile('../team-profile-generator/dist/Index.html', team, err => {
    if (err) throw err;
    // console.log('Your team is ready! Check out Index.html in /dist directory to see it!');
})

build()
    .then(team => {
        return writeHTML(team);
    })
    









    
