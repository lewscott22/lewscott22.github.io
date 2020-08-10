// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/ 
_.identity = function(value) { // identity takes in a value and
    return value;             //returns that value.
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

// typof takes a value 
// and returns a string that says what type of value it is

_.typeOf = function(value) {
     if (Array.isArray(value)) { // use .isArray to determine if input value is an array
        return "array"; // return string array if input is an array.
    
    } else if (value === null) { // check to see if value is null.
         return "null";     //return null if value is null.
   
    } else if (value instanceof Date) { // use instanceof Date to check if the value is a date.
         return "date";     // return date if input value is a date.
   
    } else {
    
    return typeof value; // if none of the above are true use typeof to determine what type input value is and return a string that says what type it is.
    }
    
    // YOUR CODE ABOVE HERE //
};

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
* 
*/

// takes an array and a number as parameters
// if array is not an array it returns []
_.first = function(array, number) {
    let returnArray = [];   //create empty array to store the values located at each index up to and including the given number
    
if (Array.isArray(array) === false) { // if no array is given return an empty array.
    return [];
    
} else if (number > array.length) { //if the number given is greater than the length of the array return the entire array.
    return array;
    
} else if (number < 0) { // if the number is negative return an empty array.
    return [];
    
} else if (number === undefined) { //if no number is given return the value at the first index of the array.
    return array[0];
    
} else {                            //else loop through the array and push the first (given number) values to the new returnArray.
    for (var i = 0; i < number; i++) {
        returnArray.push(array[i]);
    }
}
return returnArray; //return the array containing the first (given number) values.
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/
_.last = function(array, number) { // last takes an input array and an input number as parameters.
    let returnArray = [];
    
    if (Array.isArray(array) === false) { //if the array input is not an array.
        return []; //return [];
    
  } else if (number === undefined) { //if the input number = undefined 
         return (array[array.length - 1]);// return the last element in the array. 
    
  } else if (number < 0) { //if the input number is negative 
        return [];//return [];
      
  } else if (number > array.length) { //if the input number is greater than the length og the array 
        return array;  //return the entire array.
      
  } else {
    for (var i = array.length - number; i <= array.length - 1; i++) {// a loop that begins counting (given number) elements from the end of the input array and increments by one.
          returnArray.push(array[i]);//pushes the element at each index to the new returnArray array.
      }
  }
  return returnArray;// returns the new array of (given number) elements.
}; 

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
_.indexOf = function(array, value) {

  for (var i = 0; i < array.length; i++) {// loop through the array 
    if (array[i] === value) {// if current element of array === value 
      return i; //return the index of the element/value's first appearance in the array.
      }  
    } 
    {
      return -1;// else return -1 if value is not inside the array.
    }
    
   };
    
  

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){// takes and array and a value as parameters.
 return  (array.includes(value) ? true : false);// uses the ternary operator to check if the current index of the array === the value returns true if it does and false if it does not.
};



/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action) {// takes a collection and an action as parameters. the action will do something to the collection.
    if (Array.isArray(collection)) {// if the collection is an array 
        for (let i = 0; i < collection.length; i++) {// loop of the entire array 
            action(collection[i], i, collection);// perform the input action on every value(element) in the array.
        }
    } else {
        for (let key in collection) {// if the  input collection is an object 
            action(collection[key], key, collection); // loop over the object and perform the action an every value(property) in the object.
        }
    }
};


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
   let newArray = [];// declare an empty array called new array to store data
    
    for (let i = 0; i < array.length; i++) { //loop over every element of the input array 
        if (_.indexOf(newArray, array[i])=== -1) { // uses indexOf to check the newArray for the current element in the input array if it is not in the newArray
            newArray.push(array[i]); //push the current element of the input array into the newArray.
        }
    }
    return newArray; //return the newArray which array with duplicates removed.
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function (array, action) {//takes an array and a function as parameters.
    let newArray = [];// create new empty array to hold values that pass the function's test.
    
    _.each(array, (element, index, collection) => {// each takes in an array and anonymous function
        
        if (action(element, index, collection)) {//the function tests every element of the array 
            newArray.push(element);// pushes the eleemnts to the return array if they past the test.
        }
    });
    
    return newArray; //returns the newArray of elements that passed the function's test.
        
};
 

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
* 
*/

_.reject = function(array, action) {//takes an array and a function as parameters.
    let newArray = [];// creates an empty newArray array to hold values that pass the function's test.
    
    _.each(array, (element, index, collection) => { //each takes in an array and anonymous function
        if (action(element, index, collection) !== true) { //the function tests every element of the array 
            newArray.push(element);// pushes the eleemnts to the return array if they do not past the test
        }
    });
    
    return newArray;// returns a new array of the element from the array that do not pass the test.
    
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, action) {// partition takes an array and a function as parameters 
    let returnArray = [];// create an empty array to hold both the array of the truthy values and falsey values returned from the function.
    let truthyArray = [];//an array to hold truthy values from the function.
    let falseyArray = [];//an array to hold falsey values from th efunction 
    
    _.each(array, (element, key, array) => {//use each and an anonymous function to test every element and key of an array.
        if (action(element, key, array)) { //if the result resovles to true push the element to the truthy array.
            truthyArray.push(element);
             
        } else if (action(element, key, array) !== true) {// if the result resolves to false push th element into the falsey array.
       
            falseyArray.push(element);
        }
    });
    
    returnArray.push(truthyArray);//push the truthyArray into the returnArray.
    returnArray.push(falseyArray);//push the falseyArray into the returnArray.
    
    return returnArray;//return the returnArray which is now an array of arrays.
};


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


_.map = function(collection, action) {// takes a collection and a function as parameters 
    let mapped = [];//create an empty array to hold data that has been manipuated by the input function.
    
    if(Array.isArray(collection)) {//checks to see if the collection is an array.
        for (let i = 0; i < collection.length; i++) {// if the collection is an array loop over the entire array 
        mapped.push(action(collection[i], i, collection));//performs a function/ action on the entire array and pushes it to the mapped array. 
    }
    
    return mapped; // returns mapped array.
    } else {// if the collection is not an array it is a function.
        
        for (let key in collection) {//loop over the entire input object.
        mapped.push(action(collection[key], [key], collection));// performs a function/action on the entire array and pushes it to the mapped array.
    }
       
    return mapped;//return mapped array.

    }
};
  
     


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(objectArray, prop) {// pluck takes in an array of objects and a property in as parameters 
    let returnArray = []; //arr is an empty array to hold the the input property of every object in the array.
    
    _.map(objectArray, function(elements, i, array) {//uses map to loop over the array of objects 
        returnArray.push(array[i][prop]); //and push the input property into the return array.
    });
    
    return returnArray;// returns the array with the input property of every object in the input array.
};



/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
* 
*/

_.every = function(collection, action) {//every takes in an input collection and a function as parameters.
    let results = true; //results is a variable that will return true or false after the function is called for every element in the collection.

    if(!action) {//if there is no function/action given 
    for (let i = 0; i < collection.length; i++) { //loop over the entire collection.
     if (!collection[i]) {// if the current element evealuates to a falsey value 
        results = false; //return false.
     }
    }
} else {//if a collection is given
    let array = _.map(collection, function(element, i, collection) { //use map to iterate over and perform a fucntion on the entire collection.
        return action(element, i, collection); //return every altered element, index, and collection.
     });
    
    _.each(array, function(element, i, collection) { // user each to check every element in the collection 
        if (element === false) { //if any element evalutes to false 
            results = false;// return false.
         }
    });
    
}

return results; //return results.
};
/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, testFunction) {// some is a function that takes a collection and a test function as its parameters.
    if (typeof collection === 'object') {// use typeof to determine if the input collection is an object 
        for (let key in collection) {//loop over the object 
          if (testFunction) {// if statement the test function 
                if (testFunction(collection[key], key, collection) ? true : false) {//if the testFuntion evaluates to true for all elements of the collection
                    return true; //return true 
                }
         } else {
                 if (collection[key] ? true : false) {// if the the function returns true for any value.
                    return true;// return true.
                }
            }
        }
            return false;// return false.
            
         } else {
             
        for (let i = 0; i <= collection.length - 1; i++) { // for loop iterates over the entire input array.
            if (testFunction(collection[i], i, collection) ? true : false) {// passes each element, index, and the entire collection into the test function
                return true; // if the value is true for all elements return true.
         } else {
             
            if (collection[i] ? true : false) {// if the value at the current index evaluates to true after being passed into the function
                return true; //return true.
            }
        }
    }
    
    return false; //if all else is not true. return false.
   }
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/
_.reduce = function(array, callback, seed) {//reduce takes in an array, callback function, and a seed 
    if(seed !== undefined) {// if seed is not undefined 
        _.each(array, function(element, index, array) {// use each to loop over the array and perform an action on each value at every index of the entire array
            seed = callback(seed, element, index, array); 
        });
    } else {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            seed = callback(seed, array[i], i, array);
        }
    }
    
    return seed;
};

/*_.reduce = function(array, testFunction, seed) {
    let previousNum = typeof seed === "number" ? testFunction(seed, array[0], 0) : array[0]; //variable previousNum is a number. 
    for( let i = 1; i <= array.length - 1; i++) {
        previousNum = testFunction(previousNum, array[i], i);
    }
    
    return previousNum;
};
*/

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(object,...moreObjects) { // takes in an object and as many more as desired 
    for (let i = 0; i <= moreObjects.length -1; i++) {//use for loop to iterate over all input objects
        for (let key in moreObjects[i]) {//access each value at all keys in the object 
            object[key] = moreObjects[i][key];// assign the values to one another.
        }
    }
    
    return object;// return the updated object.
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
