//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object and return its values in an array"

function objectValues(object) {
    
    return Object.values(object); // use Object.values() to return an array of an objects values.
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    
    return Object.keys(object).join(" "); // use Object.keys to return an array of an objects values use .join() to return an array as a string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
   
    Object.values(object);
    let arr = []; // an array of the values in object 
    
    for (let i = 0; i <= Object.values(object).length; i++) { //loop over the object values array
        
        if (typeof Object.values(object)[i] === "string") { // use typeof to check if the current value === string
            arr.push(Object.values(object)[i]); //if it does push the value to the array arr.
        }
    }
    
    return arr.join(" "); // return arr joined togehter with .join();
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
    if (Array.isArray(collection)) { // use Array.isArray to determine whether or not the collection is an array if it is return the string "array".
        return "array";
    } else {
        
    }
    return "object"; // else return object.
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1); //use .toUpperCase() to capitalize the char at index [0] of the string and then concatenate it with 
    //the string begining at char [1] using the slice method.
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
 let stringArray = string.split(" ");
    for (var i = 0; i < stringArray.length; i++) {
      stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1);
    }
    return stringArray.join(" ");
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //concatenate name prop of object with Welcome
   let name = object.name;
    return "Welcome" + " " + name[0].toUpperCase() + name.slice(1) + "!";
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    let name = object.name;
    let species = object.species;
   return name[0].toUpperCase() + name.slice(1) + " is a " + species[0].toUpperCase() + species.slice(1);
  

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Should take an object, if this object has a noises array return them as a string separated by a space, 
//if there are no noises return 'there are no noises' 
function maybeNoises(object) {
    let objectArray = [];
    
  if (object.noises === undefined) {
      return "there are no noises";
      
  } else if (object.noises[0] === undefined) {
      return "there are no noises";
      
  } else if (typeof object.noises[0] === "string") {
      for (let i = 0; i < object.noises.length; i++) {
          objectArray.push(object.noises[i]);
      }
      
      return(objectArray.join(" "));
  }
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var data = "This is a super awesome string of words";
function hasWord(string, word) {
let dataArray = [];

dataArray = data.split(" ");

for (let i = 0;  i < dataArray.length; i++) {
    if (dataArray[i] === word) {
        return true;
    }
}
for (let i = 0; i < dataArray.length; i++) {
    if (i !== word) {
        return false; 
    }
}

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    

  //check to see if name is in friends array
  if (object.friends === undefined) {
      return false;
  }
  else if (object.friends.includes(name)) { 
      return true;
     
 }  else {
        
      return false;
    }
  }


//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 //Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
function nonFriends(name, array) {
// loop over list of names 
//retrun new array list with names that are not in the friends array
let enemies = [];

for (let i = 0; i < array.length; i++) {
    
    if (  !(array[i]["name"] === name) && !array[i]["friends"].includes(name)) {
       
        enemies.push(array[i]["name"]);
    }
}

return enemies;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it
 //var data = {a: "one", b: "two", "hokey": false};
 
function updateObject(object, key, value) {

   //if the object alredy contains the input key update it with input value
  //if key does not exist create it.
    object[key] = value;
    
    return object;
}
//console.log(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
//console.log(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
//console.log(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//"removeProperties() : Should take an object and an array of strings.
//Should remove any properties on <object> that are listed in <array>",
//loop object get keys 
//check their are duplicates remove them.
function removeProperties(object, array) {
    for (var key in object) {
        
      { for (var index of array) {
          if (key === index){
          delete object[key];
         
        }
    } 
     
      }
      
    }
return object;
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
   var uniqueArray = [];
        
        // Loop through array values
        for(let i=0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }

       return uniqueArray; 
    }



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}