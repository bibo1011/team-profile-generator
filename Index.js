const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('../team-profile-generator/lib/Employee.js');
const Engineer = require('../team-profile-generator/lib/Engineer.js');
const Intern = require('../team-profile-generator/lib/Intern.js');
const Manager = require('../team-profile-generator/lib/Manager.js');
const generateHTML = require('./util/generateHTML.js');
const teamArray = []

const addTeam = choices => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Add engineer or intern:',
            choices: [
                {name: 'Engineer', value: 1},
                {name: 'Intern', value: 2},
                {name: 'Finish building team', value: 3}
            ]   
        }
    ])
    .then ((team)=> {
        if (team.add === 1) {
            return buildEngr();
            // console.log('github')
        } else if (team.add === 2) {
            return buildIntern();
            // console.log('school')
        } else {
            console.log('Your team is ready!')
        }
    })
    .catch(function (err) {
        console.log("There was an error.");
        console.log(err);
    })
}

const buildEngr = engineer => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team Engineer\'\s name:'  
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
            type: 'input',
            name: 'github',
            message: 'Enter github username:'
        },
        {
            type: 'list',
            name: 'job',
            message: 'Confirm your role:',
            choices: [
                {name: 'Engineer'}
            ]
        }
    ])
    .then (inquirer =>{
        return addTeam()
    })
}

const buildIntern = intern => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter team Intern\'\s name:'  
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
            type: 'input',
            name: 'school',
            message: 'Enter school name:'
        },
        {
            type: 'list',
            name: 'job',
            message: 'Confirm your role:',
            choices: [
                {name: 'Intern'}
            ]
        }
    ])
    .then (inquirer =>{
        return addTeam()
    })
}

const build = team => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter Manager\'\s name:'
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
            type: 'input',
            name: 'number',
            message: 'Enter office number:'
        },
        {
            type: 'list',
            name: 'job',
            message: 'Confirm your role:',
            choices: [
                {name: 'Manager'}
            ]
        },
    ])
    .then (inquirer =>{
        return addTeam()
    })
}

build()
    .then ((name, id, email, job)=> {
        if (job === 'Manager') {
            this.employee = new Manager(name, id, email, number, job)
            teamArray.push(Employee);
            // console.log(number)
            // console.log(teamArray)
        } else if (job === 'Engineer') {
            this.employee = new Engineer(name, id, email, github, job)
            teamArray.push(Employee);
            // console.log(github)  
            // console.log(teamArray)
        } else if (job === 'Intern') {
            this.employee = new Intern(name, id, email, school, job)
            teamArray.push(Employee);
            // console.log(school)
            // console.log(teamArray)
        }
        console.log(teamArray)

    })
    .catch(function (err) {
        console.log("There was an error.");
        console.log(err);
    })
    .then(team => {
        return generateHTML(team)
    })
    .then(team => {
        return writeHTML(team)
    })
    
// function displayTitle(employee) {
//     if (employee.job === "Manager") {
//         console.log(employee.officeNumber);
//         return `office number: ${employee.officeNumber}`;
//     }
//     if (employee.job === "Intern") {
//         return `school: ${employee.school}`;
//     }
//     if (employee.job === "Engineer") {
//         return `gitHub: ${employee.github}`;
//     }

// }


const writeHTML = team =>
fs.writeFile('../team-profile-generator/dist/Index.html', team, err => {
    if (err) throw err;
    console.log('Your team is ready! Check out Index.html in /dist directory to see it!');
})








    
