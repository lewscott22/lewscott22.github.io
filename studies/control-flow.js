/*
* 0. CONTROL FLOW:
*
*When your program contains more than one statement, the statements are executed from top to bottom.
*Not all programs are straight roads. We may, for example, want to create a branching road, 
*where the program takes the proper branch based on the situation at hand. This is called conditional execution.
*
*Conditional execution is created with the if keyword in JavaScript.
*
*In the simple case, we want some code to be executed if, and only if, a certain condition holds.
*The if keyword executes or skips a statement depending on the value of a Boolean expression.
*
*The deciding expression is written after the keyword, between parentheses, followed by the statement to execute.
*You often won’t just have code that executes when a condition holds true, but also code that handles the other case. This alternate path is represented by the second arrow in the diagram. 
*You can use the else keyword, together with if, to create two separate, alternative execution paths.
*/
/*Syntax: 
*  if (condition) {
*  //  block of code to be executed if the condition is true
*  } 
*/
var name = 'Lew'; 

if (name === 'Lew') { //condition that evalutaes to a Boolean value
    console.log('Hello Lew!!');  //code that is executed because the value is true. Hello Lew! will b e printed to the console.
}


//1. We use the else statement to specify a block of code to be executed if the condition is false.

name = 'Phil';
if (name === 'Lew') { //condition to be checked.
    console.log('Hello Lew');// because the condition is false it is not run.
} else {
    console.log('Hello Phil'); //the message Hello prints to the console instead.
}

/*
*2. If you have more than two paths to choose from, you can “chain” multiple if/else pairs together. 
*The last statement is the default staement and is expressed with an else statement.
*/

if (name === 'Lew') {
    console.log('Hello Lew!');
    
} else if (name === 'Phil') {
    console.log('Hello Phil!');
    
} else if (name === 'Bob') {
    console.log('Hello Bob!');
    
} else if (name === 'Oreo') {
    console.log('Woof Woof Oreo');
    
} else {
    console.log('Who the heck are you??!!');
}

/*
* 3.SWITCH: The switch statement is used to perform different actions based on different conditions.
* Syntax: 
*
*switch(expression) {
*  case x:
*    // code block
*    break;
*  case y:
*    // code block
*    break;
*  default:
*    // code block
* }
The switch expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
If there is no match, the default code block is executed.
*/
var fruit = "Strawberry";
switch
(fruit) {
  
case
 "Banana":
    console.log("It's a Banana");
    break;
  
case
 "Strawberry":
    console.log("It's a Strawberry!");//prints It's Strawberry to the console.
    break;    
}