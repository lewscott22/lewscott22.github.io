/*
DATATYPES:
*
* 0.The different types of values in JavaScript are called data-types.
*
* There are simple and complex data-types.
*
* 1.Simple/ Primitve Data-types 
* Are atomic and immutable. They don't hold or collect other values. Operations on them produce new simple values. They copied by value meaning that 
* simple data-types are copied from one variable to the next.
*/

//The simple Datatypes Are:
/*
* 0. Numbers : Numeric values on which mathematical operations can be performed.
*/
var number1 = 1; //number1 is declared and assinged the value 1.

var number2 = 2; //number2 is declared and assigned the value 2.

console.log(number1 + number2); //prints the sum of number1 and number2 to the console.

// 1. Strings : Textual/character data wrapped in single or double quotes.

var firstName = "Lew";

console.log(firstName);
// We can combine or concatenate strings.
var lastName = "Scott";

var fullName = firstName + " " + lastName;
console.log(fullName);

// 2. Booleans: Expressions that evaluate to true or false values. Used in Control Flow. 
var isSaintsFan = true; //declares variable isSaintsFan and assigns it the value true.

if (isSaintsFan === true) {
    console.log("Who Dat!"); //prints Who Dat! to the console.
}
// 3. NaN: Not a number.
 NaN;
 
/*4. Undefined: Undefined is used when JavaScript does not have a value for something.
* A variable that has been declared but not initialized evaluates as undefined.
*/
 var dogName;
 console.log(dogName); //prints undefined to the console.
 
 
//5. Null: Null is used to deliberatly set a value as empty.
var catName= null;
console.log(catName); //prints null to the console.

// COMPLEX DATA-TYPES

/*
*0. ARRAYS AND OBJECTS:
*In JavaScript we use complex data-types to hold large amounts of data. These collections are Arrays and Objects.
*They allow use to group values together to be processed as one.
*
*1. ARRAYS: Arrays are zero indexed lists. They start numbering and ordering their elements at 0. You can think of the index as the position of
*a value in an array.
*/
var array = []; // empty array.

array = ["Lew", "Scott", 38, "male"]; // array containing 4 elements. Arrays can hold elements of different types.

console.log(array); // prints array to the console.

/*
*We can access elements using array(bracket) notation. 
*/
console.log(array[1]); // prints Scott to the console.
/*

/*
*The first value of an array will always be stored at index [0].
*/
console.log(array[0]); //prints Lew to the console.

/*
*Arrays have a .length property that gives us the number of elements in an array. The last element of an array can always be found at [array.length -1].
*/
console.log(array[array.length -1]);// prints male to the console.

/*
* 1. OBJECTS: Objects are collections of unordered key/value pairs. The keys in an object can be thought of as the position of a value in the object. 
* Objects are considered associative array since there should be an association between keys and the values that are stored with them. 
*/
var object = {}; //declares an empty object literal.
console.log(object);  //prints an empty object to the console.

object = {firstName:"Lew",
          lastName: "Scott",
          age: 38
};
console.log(object); //prints object to the console containing 3 key/value pairs.

//AN OBJECTS KEYS ARE ALWAYS STRINGS!!

/*
We can add key/value pairs to objects using either DOT or Array/Bracket notation.
*/

object.homeTown = "New Orleans"; //adds a homeTown key to the object with the value of New Orleans.
object['favFood'] = "Pizza";     // adds a favFood key ot the object with the value of Pizza.
console.log(object); //prints object with new key/values.


/* INFINITY AND -INFINITY 
* Infinity is a numeric value representing infinity and -infintiy is it's negative counterpart they are  global values.
*
*/


/*
COPY BY VALUE AND COPY BY REFERENCE 
Javascript has 5 data types that are passed by value: Boolean, null, undefined, String, and Number. We’ll call these primitive types.
If a primitive type is assigned to a variable, we can think of that variable as containing the primitive value.
*/

var name = "Lew" // The variable container name actually contains the string value Lew.

//When we assign these variables to other variables using =, we copy the value to the new variable. They are copied by value.

var myName = name; //Both name and myName now contain Lew. 
console.log(name);
console.log(myName);

name = "Charlie";// name has been reassined the value Charlie.
console.log(name);
console.log(myName); //myName still contains the value Lew.

/*They’re separate, as the values themselves were copied.
*Changing one does not change the other. Think of the variables as having no relationship to each other.
*/


/*Javascript has 3 data types that are passed by reference: Array, Function, and Object. 
Variables that are assigned a non-primitive value are given a reference to that value. 
That reference points to the object’s location in memory. The variables don’t actually contain the value.
When a reference type value, an object, is copied to another variable using =, the address of that value is what’s actually copied over as if it were a primitive. 
Objects are copied by reference instead of by value.
*/

