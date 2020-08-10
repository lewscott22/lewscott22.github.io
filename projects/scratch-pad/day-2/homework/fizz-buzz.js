// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
      for (var i = 1; i <= 100; i++) {  // loop that counts from 1 to 100
        
        if (i % 3 === 0 && i % 5 === 0) {  //  if the current number is divisible by 3 and 5 log FizzBuzz to the console.
            console.log("FizzBuzz");
            
        } else if (i % 3 === 0) {  // if the current number is divisible by 3 log Fizz to the console.
            console.log("Fizz");
            
        } else if (i % 5 === 0) { // if the current number is divisible by 5 print Buzz to the console.
            console.log("Buzz");
            
        } else { // if the current number is not divisible by either 3 or 5 or both print the number to the console.
            console.log(i); 
        }
    }




    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}