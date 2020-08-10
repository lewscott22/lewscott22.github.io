/*
* HOISTING 
How are variables hoisted in JavaScript?
How are function declarations hoisted? How are function expressions hoisted?
What is the JS Interpreter 



In JavaScript declarations are moved to the top of their scope by default. This is refered to as hoisting.
A variable can be used before it has been declared. It will simply have the value of undefined. Only declarations are hoisted not initializations. 
This goes for functions as well. They are moved to the top of their scope before the code is executed.No matter where functions and variables are declared they are
moved to the top of their scope whether it be global or local. Funcion expressions are not hoisted and can't be used before their creation. In Javascript code is not compiled 
it is interpreted. In other programing languages the source code is passed through a program called a compiler, which translates it into bytecode that the machine understands and can execute. 
JavaScript doesn't have a compilation step. Instead an iterpreter in the browser reads over our code, interprets each line, and runs it.
To avoid bugs it is good practice to declare variables at the beginning of every scope, since that is how JS interprets the code.
*/

sayHello(); //prints Hello undefined to the console.  

console.log(sayHello(myName));  //prints Hello undefined to the console.

myName = "Lew";

console.log(myName);  //prints Lew to the console.

function sayHello (string) {
    console.log("Hello" + " " + myName);
}

var myName;

console.log(sayHello(myName)); //prints Hello Lew to the console.

