/*
* LOOPS: Loops can execute a block of code a number of times. If you want to run the same code over and over again use a loop.
* JavaScript supports different kinds of loops:

0. For - loops through a block of code a number of times.

The for loop has the following syntax:

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}
Statement 1 is executed (one time) before the execution of the code block.
Statement 2 defines the condition for executing the code block.
Statement 3 is executed (every time) after the code block has been executed.
*/

for (var i = 1; i <= 100; i++) { // for loop that starts at 1 and prints numbers to 100;
    console.log(i);
}
/*
Statement 1 sets a variable before the loop starts (var i = 1).
Statement 2 defines the condition for the loop to run (i must be less than or equal to 100).
Statement 3 increases a value (i++) each time the code block in the loop has been executed.
*/

for (var i = 100; i >= 1; i--) { //for loop that starts at 100 and counts down to 1.
    console.log(i); //prints each number to the console.
}

//iterable - An object that has iterable properties.

// 1. Looping forwards over an Array:
//We can use For Loops to loop forwards and backwards over arrays.Accounts
 var friends = ['Sam', 'Ray', 'William', 'Russell'];

for (var i = 0; i < friends.length; i++) {// loops over the friends array.
    console.log(friends[i]); //prints values at each index of the friends array to the console.
}

for (var i = friends.length -1; i >= 0; i--) { // a loop that begins at the last value of the friends array and prints its element backwards.
    console.log(friends[i]);// prints values at each index of the friends array to the console.
}

/*
*2. While Loops can execute a block of code while a specified condition is true.
*
*Syntax:
*
*while (condition) {
*  // code block to be executed
*}
*/
/*var num = 0;
while (num < 10) {// as long as the value num is than 10 the code will run.
  console.log("The number is " + i); // the message The number is ... will be logged to the console.
  i++; // increments by one. 
}
*/


/*3.For/in - loops through the properties of an object
The JavaScript for/in loops  loop through the properties of an object:
*/
var person = {firstName:"Lew", lastnName:"Scott", age:38};

for (var key in person) { //loops over person object 
 console.log(key + ": " + person[key]); //prints each  key/value pair in the person object.
}
 
