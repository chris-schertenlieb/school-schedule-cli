/**
 * Helper functions
 */




/**
 * Validate answers from the add_class operation
 * @param a - answers from the inquierer add_course prompt 
 * @returns {boolean}
 */
export function validateAnswers(a){
    // only validator right now is checking that some class days were selected (since cli lets you select none)
    if(a.class_days.length > 0){
        // answers are valid, return true
        return true;
    } else {
        // no class days selected, return false
        return false;
    }
}
/**
 * 
 * @param a - answers from the inquierer add_course prompt
 * @param courseData - existing course data loaded from ./data/courses.json during the add_class script
 * @returns {boolean}
 */
// validate that the course they're trying to add doesn't overlap with a class they're already enrolled for
export function validateClassOverlap(a, courseData){
    const existing_courses = courseData.courses;

    const new_course_time = a.course_time;
    const new_course_days = a.course_days;

    const overlapping_course = existing_courses.find(
        (c) => {
            // find a course where the course time matches, and at least one day is the same (array intersect)
            return (c.course_time == new_course_time) && (c.course_days.filter((x) => {new_course_days.includes(x)}));
        }
    );
    if(overlapping_course){
        return false;
    } else {
        return true;
    }
}
