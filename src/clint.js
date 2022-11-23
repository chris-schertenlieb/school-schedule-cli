#!/usr/bin/env node
// Command Lint Integration = CLInt :)

import inquirer from "inquirer";
const add_prompt = [
    {
        type: 'input',
        name: 'class_name',
        msg: 'What is the name of the class? e.g.: Economics'
    },
    {
        type: 'input',
        name: 'class_code',
        msg: 'What is the class code? e.g.: ECON'
    },
    {
        type: 'list',
        name: 'class_time',
        msg: 'What time is the class?',
        choices: ['8AM','9AM','10AM','11AM','12AM','1PM','2PM','3PM'],
        default: '8AM'
    },
    {
        type: 'checkbox',
        name: 'class_days',
        msg: 'What days is the class on?',
        choices: ['Monday','Tuesday','Wednesday','Thursday','Friday']
    },
    {
        type: 'input',
        name: 'instructor_name',
        msg: 'What is the instructor name?',
    },
    {
        type: 'input',
        name: 'room_name',
        msg: 'What is the room name?'
    }
];

inquirer.prompt(add_prompt).then(
    answers => {
        console.log(answers);
    }
)

/*const cmd = require("commander");

cmd.command('add').alias('a').action(() => {
    prompt(add_prompt).then(
        (data) => {
            console.log('omg we did it?')
            console.log(data);
        }
    )
});*/