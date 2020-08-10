// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (value) { // function takes a value 
         
        return value > base; // returns true if the input value is greater than the base and false if not.
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function (value) { // functon takes an input value.
        
        return value < base;  // returns true if the base is greater than the input value and false if not.
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (string) {
        
        return string[0].toLowerCase() === startsWith.toLowerCase(); // returns true if the first character of the string is the same as the input character.
    };                                                              // uses toLowerCase() to compare characters
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function (string) {
      
      return string[string.length -1].toLowerCase() === endsWith.toLowerCase(); // returns true if the last character of string === the input ends with character. 
    };                                                                          // use toLowerCase to compare.
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let modifiedStrings = []; // declare an array to hold modified strings.
    
    for (var i = 0; i < strings.length; i++) {// for loop that loops over strings array.
        var string = strings[i]; // string = element at current index of strings array. 
       
        modifiedStrings.push(modify(string)); //push the modified string to the modified strings array.
    }
    
    return modifiedStrings;//return array of modified strings.
      // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    let stringsThatPassedTest = []; // array that holds strings that passed the test.
     
    for (var i = 0; i < strings.length; i++) {// loop that iterates over strings array and passes them to test.
        var string = strings[i]; // string = string at the current index of strings array
        if (test(string) === true) {
            stringsThatPassedTest.push(string);// if a string passes the test push it to the stringsThatPassedTest array 
        } else {
            return false; // if not return false.
    }
    
   }
   
    if (stringsThatPassedTest.length === strings.length) { // if the strings and stringThatPassedTest array are equal in lenfth return true.
        return true;
    }
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}