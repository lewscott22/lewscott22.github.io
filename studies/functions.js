/*
0. FUNCTIONS:
*A JavaScript function is a block of code designed to perform a particular task. 
*You can reuse code: Define the code once, and use it many times.
*
*You can use the same code many times with different arguments, to produce different results. Functions keep us from having to repeat ourselves.
*A function is executed when "something" invokes it.

*A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().
*Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).
*The parentheses may include parameter names separated by commas:
*(parameter1, parameter2, ...)
*The code to be executed, by the function, is placed inside curly brackets: {}
*
*
*You can use the same code many times with different arguments, to produce different results.
*
*function name(parameter1, parameter2, parameter3) {
*  // code to be executed
*}
*
*Function parameters are listed inside the parentheses () in the function definition.
*Function arguments are the values received by the function when it is invoked.
*Inside the function, the arguments (the parameters) behave as local variables.
*
*The code inside the function will execute when "something" invokes (calls) the function:
*When JavaScript reaches a return statement, the function will stop executing.
*If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.
*Functions often compute a return value. The return value is "returned" back to the "caller":
*/
function myFunction(num1, num2) {
  return num1 * num2;   // The function returns the product of p1 and p2
}
console.log(myFunction(2,2)); // calls the function myFunction with 2 and 2 as arguments. Will print 4 to the console.

//We can assign functions to variables.

var multipy = function (a, b) { // An anonymous function assigned to the variable multiply with a and b parameters.
   return a * b; // returns the product of the two parameters.
};

console.log(multipy(3, 2)); //function called with 3 and 2 as arguments. Will print 6 to the console.

/*
* 1. SCOPE: 
* Scope determines the accessibility (visibility) of variables.

In JavaScript there are two types of scope:
*/

/*Global scope:
A variable declared outside a function, becomes GLOBAL.
Global variables have global scope: All scripts and functions on a web page can access it. 
*/

var dogName = "Oreo";

// code here can use dogrName

function myDog() {
  
  console.log(dogName + " says woof!"); // code here can also use dogName

}
console.log(myDog); //prints Oreo says woof! to the console.

/*
Local scope:
Variables declared within a JavaScript function, become LOCAL to the function.
Local variables have Function scope: They can only be accessed from within the function.
Each function creates a new scope.
Variables defined inside a function are not accessible (visible) from outside the function.
*/


// code here can NOT use carName
function myCat() {
  var catName = "Garfield";
  // code here CAN use carName
  console.log(catName);
}
 
 console.log(myCat); // prints Garfield to the console.
 
 /*
 * 2. CLOSURE: A closure is a function having access to the parent scope, even after the parent function has closed.
 */
 var happyBirthday = (function () {
  var counter = 35;
  return function () {counter += 1; return counter};
})();

console.log(happyBirthday()); //prints 36 to the console.
console.log(happyBirthday()); //prints 37 to the console
console.log(happyBirthday()); //prints 38 to the console.

// the counter is now 38.

/*The variable happyBirthday is assigned the return value of a self-invoking function.
The self-invoking function only runs once. It sets the counter to zero (35), and returns a function expression.
This way happyBirthday becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
The counter is protected by the scope of the anonymous function, and can only be changed using the happyBirthday function.
*/