const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('../team-profile-generator/lib/Employee.js');
const manager = require('../team-profile-generator/lib/Manager.js');
const engineer = require('../team-profile-generator/lib/Engineer.js');
const intern = require('../team-profile-generator/lib/Intern.js');

const buildEngr = team => {
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
            message: 'Add engineer or intern:',
            choices: [
                {name: 'Engineer', value: 1},
                {name: 'Intern', value: 2},
                {name: 'Finish building team', value: 3}
            ]   
        }
    ])
    .then ((team)=> {
        if (team.job === 1) {
            return buildEngr();
            // console.log('github')
        } else if (team.job === 2) {
            return buildIntern();
            // console.log('school')
        } else {
            console.log('Your team is ready!')
        }
    })
}

const buildIntern = team => {
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
            name: 'github',
            message: 'Enter school name:'
        },
        {
            type: 'list',
            name: 'job',
            message: 'Add engineer or intern:',
            choices: [
                {name: 'Engineer', value: 1},
                {name: 'Intern', value: 2},
                {name: 'Finish building team', value: 3}
            ]   
        }
    ])
    .then ((team)=> {
        if (team.job === 1) {
            return buildEngr();
            // console.log('github')
        } else if (team.job === 2) {
            return buildIntern();
            // console.log('school')
        } else {
            console.log('Your team is ready!')
        }
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
            name: 'email',
            message: 'Enter office number:'
        },
        {
            type: 'list',
            name: 'job',
            message: 'Add engineer or intern:',
            choices: [
                {name: 'Engineer', value: 1},
                {name: 'Intern', value: 2},
                {name: 'Finish building team', value: 3}
            ]   
        }
        
    ])
    .then ((team)=> {
        if (team.job === 1) {
            return buildEngr();
            // console.log('github')
        } else if (team.job === 2) {
            return buildIntern();
            // console.log('school')
        } else {
            console.log('Your team is ready!')
        }
    })
}

build()


    
