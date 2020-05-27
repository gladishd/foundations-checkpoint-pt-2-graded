/* eslint-disable no-unused-vars */
/* This question is essentially asking
 * for the subset consisting of all elements
 * which do not fulfill the requirement
 * set forth by func().  So I'm invoking
 * the built-in .filter method which takes
 * in an array and a filtering function and
 * outputs the subset which fulfills the
 * filtering function.  This filtering function
 * is not equal to func() but is derived from it.
 *
 * To be more specific, the .filter method is using
 * the negation of the filtering function
    * (if func(current element) returns false, return true.
    * If func() returns true, return false)
 * using the conditional operator. */

/* This looks really good. Nice work. */
const reject = (arr, func) => {
    return arr.filter(element => {
		/* If you ever find yourself writing a ternary that evaluates to a boolean, you can just simplify it to
		 * the first part of the ternary expression. Below is the exact same thing as:
		 *
		 * return !func(element); // this evaluates to true or false
		 *
		 * The same thing goes for stuff like this which you will see sometimes:
		 *
		 * let a = 3;
		 * if (a > 4) {
		 * 	 return true;
		 * } else {
		 *   return false;
		 * }
		 *
		 * This should just be written as:
		 * return a > 4;
		 * */
        return (!func(element)) ? true : false;
    })
};