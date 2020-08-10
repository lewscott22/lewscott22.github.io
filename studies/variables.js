/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
*We use variables as containers to store values and to give contextual names for our values. 
*
*/

/*
* CONSTANTS:
*
* 0. Contants are containers whose values never change. The are block scoped and are not hoisted. They are created using the keyword const.
*
* 1. Constants  are usually formatted using all uppercase and must be assigned a value immediatley upon creation.
*
*/

const HOMETOWN = "New Orleans";

/*
* 2. Constants are block scoped to the code block in which they are created and will not be hoisted to the top of their enclosing block of code.
* their values remain undefined until declaration/assignment.
*/

/*
* LETS:
*
* 0. The let keyword lets us declare block scoped local variables that can be reassigned.
*
*/
function printFavFood () {
let favFood = "Ramen";
favFood = "Pizza";
favFood = "Ramen";
console.log(favFood);
}
// favFood is not available outside of the function printFavFood. 
console.log(printFavFood());

/*
* HOISTING:
* In JavaScript  all declarations are moved to the top of the current scope.
* (to the top of the current script or the current function).
*/