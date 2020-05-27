/* eslint-disable no-unused-vars */
/* extract each word
 * from a properly spaced sentence,
 * and then map this array to
 * a version in which each element
 * (word) is capitalized. */
/* Great job */
const useMapToUpperCase = (str) => str.split(' ').map(word => word.toUpperCase());

/* One interesting thing I realized is that
 * you can use the .includes() method on strings, and
 * search for whether or not they include a specific
 * character.  That is what I am doing here, with method
 * chaining and filtering, retaining only those
 * elements which include the @ symbol. */

/* I'm glad that you noticed that there is an includes method on both the Array and the String prototype.
 * Your solution looks great. */
const useFilter = (arr) => arr.filter(element => element.includes('@'));

/* in this particular function, I'm reducing the
 * array to the sum of its elements.  That is, the reduce
 * function is taking in arr, as well as a function.
 * This function converts the accumulator and the current
 * element to the sum of the accumulator and that element.

 * What ended up happening initially
 * is that startingValue can be undefined
 * if it's not passed into the sumWithReduce()
 * function.  So if startingValue exists, use
 * startingValue as the accumulator.  Otherwise,
 * set the initial value of acc to be 0. */

 /* This looks great.
  * The default value for the starting value could be written in two other ways.
  *
  * const sumWithReduce = (arr, startingValue) => arr.reduce((acc, element = 0) => acc + element, startingValue);
  * const sumWithReduce = (arr, startingValue) => arr.reduce((acc, element) => acc + element, startingValue || 0);
  *
  * I prefer the former of these. It is making use of a default parameter value.
  * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
  * */
const sumWithReduce = (arr, startingValue) => arr.reduce((acc, element) => acc + element, startingValue ? startingValue : 0);

/* So here what we want to do is take
 * the array, filter out everything except
 * the even numbers, double each element,
 * and then sum over the elements.

 * What's interesting is how the .map method
 * can be written in a shorthand way, so that
 * the function returns element * 2 without needing
 * a return statement.  The arrow notation has
 * allowed me to remove all the return statements.

 * In the previous functions I had return statements
 * within the .filter, .map and .reduce methods
 * and now, I just got rid of them so that
 * you can see how nicely formatted they are.  */

 /* Aren't arrow functions so nice? I love their simplicity especially when writing simiple array prototype callbacks */
const filterEvensDoubleAndSum = (arr) => {
    return arr
    .filter(element => element % 2 === 0)
    .map(element => element * 2)
    .reduce((acc, element) => acc + element, 0)
};
