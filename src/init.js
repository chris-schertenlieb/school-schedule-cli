/**
 * The init file that runs on NPM Start.
 * Substitute for a --help functionality
 */
function init(){
    console.log("Welcome to the Class Command Line!\n");
    setTimeout(function(){
        console.log("1. Begin by running 'print_courses' or 'add_course'");
        setTimeout(function(){
            console.log("2. You can run 'reset_courses' at any time to start over");
            setTimeout(function(){
                console.log("\nHave fun!");
            }, 2500);
        }, 1000);
    }, 1000);



}
init();
