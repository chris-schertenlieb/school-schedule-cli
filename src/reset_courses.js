//import courseData from "./data/courses.json" assert {type: "json"};
import defaultCourseData from "./data/courses.default.json" assert {type: "json"};
import fs from "fs";

function resetCourseData(){
    // load default
    const default_data = JSON.stringify(defaultCourseData);

    //* overwrite the courses file with the default course data
    fs.writeFile('src/data/courses.json', default_data, 'utf8', function writeCallback(err, data){
        if(err){
            console.error(err);
        }
        else {
            console.log('\nReset complete!');
        }
    });
}

// todo CRS | 2022-11-26: Add another inquirer input here that asks if you're sure you want to reset course data
resetCourseData();

