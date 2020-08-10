/*
* OPERATORS:
*Operators act on our data. They assign them to variables, compare them and include them in arithmetic operations. They are classed by 
*what they do and how many operands(values that operators act on) they require. Unary operators work with one value. Binary operators work 
*with two values. And ternary operators work with three.
*Types of Operators: Assignment operators, Comparison operators, Arithmetic operators, Logical operators, String operators, 
*Conditional(ternary) operator, and Unary operators.
*/

/*
0. ASSIGNMENT OPERATORS:
*Assignment operators assign values to JavaScript variables.
*They are: =, +=, -=, *=, /=, and %=
*/

//The = assignment operator assigns a value to a variable.

var luckyNumber = 13; // assigns the value 13 to the variable luckyNumber.
console.log(luckyNumber);

//The += assignment operator adds a value to a variable.
var a = 10;
a += 5;
console.log(a); // prints 15 to the console. 

//The -= assignment operator subtracts a value from a variable.
var b = 10;
b -= 5;
console.log(b); //prints 5 to the console.

//The *= assignment operator multiplies a variable.
var c = 10;
c *= 5;
console.log(c); //prints 50 to the console

//The /= assignment divides a variable.
var d = 10;
d /= 5;
console.log(d); // prints 2 to the console.

//The %= assignment operator assigns a remainder to a variable.
var e = 10;
e %= 5;
console.log(e); //prints 0 to the console.

/*
* 1. COMPARISON OPERATORS:
* Comparison Opertors compare two values(operands) and evaluate to a Boolean (true/false) value.
They are:
*/

// ==	equal to, ===	equal value and equal type,

var x = 3;

console.log(x == 3);	//prints true to the console.
console.log(x == "3");	//prints true to the console.
console.log(x === "5");	 // prints false to the console.	


// !=	not equal	
console.log(x != 8); //prints true to the console.

//!==	not equal value or not equal type	
console.log(x !== 3);	//prints false to the console.
console.log(x !== "5");  //prints true to the console.	
console.log(x !== 8);    //prints true to the console.	

//>	greater than, <	less than,
// > greater than.
console.log(x > 8);	//prints false to the console.	
// < less than.
console.log(x < 8);  //prints true to the console.

// >=	greater than or equal to, <=	less than or equal to,
// >=
console.log(x >= 8); //prints false to the console.	
// <=
console.log(x <= 8); //prints true to the console.


// 2. ARITHMETIC OPERATORS perform arithmetic on numbers (literals or variables).
//A typical arithmetic operation operates on two numbers.

// +	Addition
 1 + 1; //equals 2.

// -	Subtraction
4 - 2; //equals 2.

// *	Multiplication
10 * 10; //equals 100.

// ^	Exponentiation
2^3; //equals 8.

// / 	Division
6/2;     //equal 3.

// %	Moduluo (Remainder)
var n = 5;
var y = 2;
console.log(n % y); //prints 1 to the console.


// ++	Increment
var num1 = 1;
console.log(num1++); //equals 2.

// --	Decrement
num1--; // num1 equals 1.


//3. LOGICAL OPERATORS are used to determine the logic between variables or values.
var q = 6;
var h = 3;
// &&	and	
(q < 10 && h > 1); //is true

// ||	or	
(q == 5 || h == 5); //is false	
// !	not
!(x == y);  // is true


/* 
* 4. the TERNARY OPERATORr:
*   JavaScript contains a conditional operator that assigns a value to a variable based on some condition
*   
*   The syntax is:
*   variableName = (condition) ? value1 : value2 
*/
var age = 38;
var canDrink = (age < 21) ? "Too young":"Old enough";
console.log(canDrink); //prints Old enough to the console.