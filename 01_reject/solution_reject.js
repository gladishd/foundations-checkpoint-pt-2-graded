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
const reject = (arr, func) => {
    return arr.filter(element => {
        return (!func(element)) ? true : false;
    })
};