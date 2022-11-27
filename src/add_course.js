#!/usr/bin/env node

import inquirer from "inquirer";
import { validateAnswers, validateClassOverlap } from "./functions.js";
import courseData from "./data/courses.json" assert {type: "json"};
import fs from "fs";

//* Configure the add prompt
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
        choices: ['8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM'],
        default: '8AM'
    },
    {
        type: 'checkbox',
        name: 'class_days',
        msg: 'What days is the class on?',
        choices: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
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

//* prompt the user
inquirer.prompt(add_prompt).then(
    answers => {
        const answersValid = validateAnswers(answers);
        const overlapCheck = validateClassOverlap(answers, courseData);

        //* check if inputs are valid
        if (answersValid) {
            //* check if new class overlaps with an existing class
            if(overlapCheck.valid){
                console.log('Saving...\n');

                // we would do a database operation here, but for sake of scope, we can just save to our JSON file to imitate back end functionality

                //* Append the new class
                courseData.courses.push(answers);
                const data = JSON.stringify(courseData);
    
                //* Save the new class
                // Overwrite course file
                fs.writeFile('src/data/courses.json', data, 'utf8', function writeCallback(err, data){
                    if(err){
                        console.log(err);
                    }
                    else {
                        console.log('Course added successfully! Try running print_courses to see your new schedule!\n')
                    }
                });
            } else {
                console.error('\nUh oh! \nThe course you added overlaps with another course you\'re enrolled in! \nOverlapping Course: %s', overlapCheck.msg);
            }

        } else {
            console.error('\nUh oh! \nThere was an issue with your course input! Please check your answers and try again.');
        }
    }
);