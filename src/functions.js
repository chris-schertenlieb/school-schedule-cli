/**
 * Helper functions
 */
// the CLI library we're using
export function validateAnswers(a){
    // only validator right now is checking that
    // some class days were selected (since you can technically select none)
    if(a.class_days.length > 0){
        return true;
    } else {
        return false;
    }
}
