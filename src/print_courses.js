import courseData from "./data/courses.json" assert {type: "json"};


function printCourseSchedule(){
    console.log('The schedule!');
    const courses = courseData.courses;
    courses.forEach( (c) => {
        console.log(c.class_name);
    });
}
printCourseSchedule();

