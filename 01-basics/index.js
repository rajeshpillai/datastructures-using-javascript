console.clear();

// helper methods
function log(...args) {
    console.log(...args);
}

/* JavaScript - Array 
 *   method: [strings] slice([begin, [, end]])
 *
**/

/* slicex
     parameters:  
        arr (the array element to be sliced)
        begin (the start index)
        length (the number of items to be extracted)
*/
function slicex(arr, begin, length) {
    return arr.slice(begin, begin + length);
}


// https://www.javascripttutorial.net/javascript-array-slice/

// Step 1: Explanation

// Step 2: Clone array

// Step 3: Copy a portion of the array

// Step 3: Convert array like objects to arrays

let num = [1,2,3,4,5];  
log("full array: ", num);    
log("from 1 index: ", num.slice(1));
log("from 2,4 index: ", num.slice(2,4));

log("last: 2 ", num.slice(-2));
log("last: 2 ", num.slice(-2,2));



