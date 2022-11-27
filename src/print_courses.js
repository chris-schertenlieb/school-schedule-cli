import courseData from "./data/courses.json" assert {type: "json"};

const tabspace = "    "

function printCourseSchedule(){
    // constants that build our schedule grid
    const TIMES = ['COL', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM'];
    const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    
    //* loop over rows (time)
    TIMES.forEach((t) => {
        var text = '\n';
        //* if header row (i.e. index = 0)
        if(t == 'COL'){
            // first section of header column is a blank space
            text += tabspace + ' ';
            // then loop over columns (day)
            DAYS.forEach((d) => {
            // since we're in the first row, we just need to output the day name
              text += ('| '+ d + ' ');
            });
            // output
            console.log(text);
        } else {
            //* else we're looping actual times
            // spacing adjustment
            text += t + (t.length > 3 ? ' ' : '  ');
            // then loop over columns (day)
            DAYS.forEach((d) => {
                //*check if there is a course on day d (at time t)
                // padding const
                const padding = d.length + 3;

                // find a course with the same class_time as t and has class_days that include day d
                const course = courseData.courses.find((x) =>{return (x.class_time == t && x.class_days.find(x => x == d))});

                //* if we found a course, output class_code
                if(course){
                    var str = ('| ' + course.class_code).padEnd(padding);
                    text += str;
                } else {
                //* else blank space
                    text += ('|'.padEnd(padding));
                }
            });
            // output
            console.log(text);
        }

    });
}

printCourseSchedule();

