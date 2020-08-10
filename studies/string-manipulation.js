/*JavaScript has many applications, working with string values is one of the most popular. 
Strings are objects within the JavaScript language. They are not stored as character arrays, so built-in functions must be used to manipulate their values. 
The functions provide various ways to access the contents of a string variable. Manipulating string values is common. 
This ranges from extracting portions of a string to determining if a string contains a specific character. 
*/
var string1 = 'Lew';
var string2 = 'Scott';

//STRING CONCATENATION:

console.log(string1 + " " + string2); //prints Lew Scott to the console.

//concat() - Combines the text of two or more strings and returns a new string.
console.log(string1.concat(string2)); // prints string1 and string2 concatenated together.

//indexOf() – Returns the starting index of a substring within another string. A –1 is returned if no match is found.
console.log(string1.indexOf("i", 0)); //prints -1 to the console.

//charAt() – Returns the character at the specified location.
console.log(string1.charAt([2])); //prints w to the console.

//lastIndexOf() - Returns the index within the string of the last occurrence of the specified value, or -1 if not found.
console.log(string2.lastIndexOf("t")); //prints 4 to the console.

//substring() – A portion of a string is returned. A starting and ending location are passed to this function.
console.log(string2.substring(1, 4)); //prints cott to the sonsole.

//slice() - Extracts a section of a string and returns a new string.
var string3 = "Hollywood";
console.log(string3.slice(5, 9)); //prints wood to the console.

//split() - Splits a string into an array of strings by separating the string into substrings.
console.log(string1.split("")); //prints the array [L, e, w]to the console.

//length() – The length of the string is returned as the count of the number of characters it contains.
console.log(string1.length); // prints 3 to the console.

//toLowerCase() – Converts the entire string to lower case.
console.log(string1.toLowerCase()); //prints lew to the console.

//toUpperCase() – Converts the entire string to upper case.
console.log(string1.toUpperCase()); //prints LEW to the console.