import courseData from "./data/courses.json" assert {type: "json"};

const tabspace = "    "

function printCourseSchedule(){
    const TIMES = ['COL', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM'];
    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    TIMES.forEach((t) => {
        var text = '\n';
        if(t == 'COL'){
            text += tabspace + ' ';
            DAYS.forEach((d) => {
              text += ('| '+ d + ' ');
            });
            console.log(text);
        } else {
            text += t + (t.length > 3 ? ' ' : '  ');
            DAYS.forEach((d) => {
                const course = courseData.courses.find((x) =>{return x.class_time == t && x.class_days.filter(x => x == d)});
                if(course){
                    text += '| ' + course.class_code + '   ';
                } else {
                    text += '|' + tabspace + tabspace;
                }
            });
            console.log(text);
        }

    });
}

printCourseSchedule();

