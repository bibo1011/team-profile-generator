const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('../team-profile-generator/lib/Employee.js');
const manager = require('../team-profile-generator/lib/Manager.js');
const engineer = require('../team-profile-generator/lib/Engineer.js');
const intern = require('../team-profile-generator/lib/Intern.js');
const Engineer = require('../team-profile-generator/lib/Engineer.js');
const Intern = require('../team-profile-generator/lib/Intern.js');
const Manager = require('../team-profile-generator/lib/Manager.js');
const teamArray = []

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
    // .then ((name, id, email, github, job)=> {
    //     this.employee = new Engineer(name, id, email, github, job)
    //     teamArray.push(employee);
    //     console.log(teamArray)
    // })
    // .catch(function (err) {
    //     console.log("There was an error.");
    //     console.log(err);
    // })
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
    // .then ((name, id, email, school, job)=> {
    //     this.employee = new Intern(name, id, email, school, job)
    //     teamArray.push(employee);
    //     console.log(teamArray)
    // })
    // .catch(function (err) {
    //     console.log("There was an error.");
    //     console.log(err);
    // })
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
    // .then ((name, id, email, number, job)=> {
    //     this.employee = new Manager(name, id, email, number, job)
    //     teamArray.push(employee);
    //     console.log(teamArray)
    // })
    // .catch(function (err) {
    //     console.log("There was an error.");
    //     console.log(err);
    // })
}

// const writeHTML = team =>
// fs.writeFile('../dist/Index.html', team, err => {
//     if (err) throw err;
//     console.log('Your team is ready! Check out Index.html in /dist directory to see it!');
// })

build()
    .then ((name, id, email, number, job)=> {
        if (job === 'Manager') {
        this.employee = new Manager(name, id, email, number, job)
        teamArray.push(employee);
        console.log(teamArray)
        } else if (job === 'Engineer') {
            this.employee = new Engineer(name, id, email, github, job)
            teamArray.push(employee);
            console.log(teamArray)  
        } else if (job === 'Intern') {
            this.employee = new Intern(name, id, email, school, job)
            teamArray.push(employee);
            console.log(teamArray)

        }
    })
    .catch(function (err) {
        console.log("There was an error.");
        console.log(err);
    })


    
