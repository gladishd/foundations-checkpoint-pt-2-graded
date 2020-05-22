/* eslint-disable no-unused-vars */
/* Because we are meant to use closure, 
 * which is demonstrated in the test specs 
    * (initializing new functions using thrice 
    * which are based on any number of particular 
    * input functions called func()), 
 * I have created this thrice function with 
 * a counter nCalls which starts at 0 
    * (so that every new instantiation 
    * consists of a counter) 
 * which increments with each call while also 
 * returning func() or alternatively undefined. */
const thrice = (func) => {
    let nCalls = 0;
    return function() {
        nCalls += 1;
        return (nCalls <= 3) ? func() : undefined;
    }
};
/* The function returned from thrice, 
 * invokes the function passed to thrice *up to* three times. 
 * This is completely different from 00_runNumTimes, 
 * in which there is no function returned, and for which 
 * the function passed in is run exactly n times, not 
 * up to and including. */
