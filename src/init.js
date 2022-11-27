/**
 * The init file that runs on NPM Start.
 * Substitute for --help functionality
 */
function init(){
    console.log("Welcome to the Class Command Line!\n");
    setTimeout(function(){
        console.log("1. Begin by running 'print_courses' or 'add_course'");
        setTimeout(function(){
            console.log("2. You can run 'reset_courses' at any time to start over");
            // todo CRS | 2022-11-27: If we notice courses.json does not equal courses.default.json, let them know we found "save data" and ask if they want to load it or perform a reset
            setTimeout(function(){
                console.log("\nHave fun!");
            }, 2500);
        }, 1000);
    }, 1000);



}
init();
