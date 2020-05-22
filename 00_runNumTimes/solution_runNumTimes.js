/* eslint-disable no-unused-vars */
const runNumTimes = (func, n) => {
    for (let i = 0; i < n; i++) {
        func();
    }
};
/* I simply directly call the function 
 * with a for-loop which does nothing except 
 * repeat exactly n times.  I think that because 
 * this function exhibits the specified behavior 
 * of running a function n times, it should be 
 * enough.  However, I know there must be better 
 * ways of doing this! */

/* For example, try uncommenting this one 
 * (and commenting the other one out!): */

// const runNumTimes = (func, n) => [...Array(n)].forEach(func);

/* Here, the spread operator does the same thing 
 * as Array.from (with no map function or this argument) 
 * in that it creates a new array of n undefined objects, 
 * based on Array(n).  What is Array(n)?  It's a completely 
 * empty array (ex. Array.isArray(Array(5))).  That is, it 
 * inherits everything from JavaScript's Array prototype 
 * with only the property that length is equal to n. 
 * .forEach() can now be used to produce the excellent 
 * side effect of running func for each undefined element 
 * in this generated array. */
