/* eslint-disable no-unused-vars */
/* Great job. This is as simple as it could possibly be. */
const newObj = (func) => Object.create(func.prototype);
/* What I'm doing with this newObj function, which
 * takes an input constructor function as an argument,
 * is to return the object created using func.prototype
 * as the prototype of the object.

 * So I opened up the
 * README file and in it they say please do not use
 * .__proto__ and I hope they don't mean .prototype,
 * please correct me if I'm wrong.  I don't think I'm wrong.

 * This is the end of my solutions.  One topic I would
 * like to talk about is how to make a more concise version
 * of the `thrice` function from 03_thrice.  Thank you for
 * reading these comments, I know they are quite long compared
 * to the actual code :)*/

 /* You are right that __proto__ and .prototype are different things.
  * __proto__ is a property of an instance of a constructor function.
  * .prototype is the object on a constructor function that will be used as the __proto__ when instances are created. */
