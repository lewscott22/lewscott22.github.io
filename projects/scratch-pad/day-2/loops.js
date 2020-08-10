// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i <= array.length; i++) { // for loop that prints value at each index of an input array. 
    var element = array[i]; // element = current value at index of the array.
      
      console.log(element);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  for (var i = array.length - 1; i > -1; i--) { // for loop starts at last element of an input array and prints backward.
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var keys = [];  // empty array to hold keys 
  
  for (var key in object) { // for in loop to loop over object and push keys to key array.
    keys.push(key);
     
  }
  
  return keys; // function returns keys array.
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) { // for in loop that loops over object and print its keys too console.
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var array = [];// empty array
 
  for (var key in object) {         // for in loop that loops over an object 
    array.push(object[key]); // pushes values of the object to the array.
  } 
  
  return array;  //returns the array.
 
 
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
 for (var key in object)  {   // for in loop that prints the values of an object.
   console.log(object[key]);
 } 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object).length;  //return the number of keys in the object using the properties Object.keys() and .length.
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var array = []; // declare empty array to hold values from object
                  // can also use object.values(object) to return an array of the object's values.

  for (var key in object)  {   // for in loop that pushes the values of an object into the empty array.
   array.push((object[key]));
  } 
  
  for (var i = array.length - 1; i >= 0; i--) { // for loop that loops over object values array backwards and logs them to the console.
   console.log(array[i]);

 }
  

 


  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
