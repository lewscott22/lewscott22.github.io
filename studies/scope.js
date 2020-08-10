/*
* SCOPE:
What is scoping?
What are the different scopes in JavaScript?
What variables are bound to those scopes?
There is a variable in the global scope and a parameter with the same name, if you are within the function body which would you access? If you were in the global scope which would you access? Why?

JavaScript is function scoped: Each function creates a new scope. Scope determines the accessabiity/visibility of our variables.

There are two types of scope:

Local and Global scope.


Variables defined inside a function are not accessible (visible) from outside the function, they become LOCAL to the function.

Local variables have Function scope: And can only be accessed from within the function.
Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.
Local variables are created when a function starts, and deleted when the function is completed.

A variable declared outside a function, becomes GLOBAL, global variables has global scope: All scripts and functions can access it. 
(In other words The child has access to the parent)
*/

var dogName = "Oreo"; //variable is declared outside of a function in the Global object. It has global scope.

// code here can use dogName

function barkFunction() {
    console.log(dogName + " says woof!!");
  // code here can also use dogName

}

console.log(barkFunction(dogName)); //prints Oreo says woof!! to the console.

/*
Since objects and functions are also variables, scope determines the accessibility of variables, objects, and functions 
from different parts of the code.
*/

//(The parent does not have access to the child.)
// code here cannot use myrName.



function nameFunction() {
 var myName = "Lew"; //declares a global variable myName.
 console.log(myName); 
}

 console.log(myName); //will throw a Reference error because myName is not defined.