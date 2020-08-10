// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return{
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
        
    };
    
}




function makeContactList(addContact, findContact, removeContact, length) {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = []; //create a contacts array.
    
    return {
        // we implemented the length api for you //
        length: function() {
            
            return contacts.length;
        },
        
        addContact: function(contact) { //create addContact function that pushes the contact to the contacts array.
            
            return contacts.push(contact);
        },
        
        findContact: function(fullName) {
            for (var i = 0; i < contacts.length; i++) { //loop over contacts array
                if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) { // if fullName is equal to the current contacts first and last names return the current contact.
                    
            return contacts[i];
                }
            }
        },
        
        removeContact: function(contact) {
            for (var i = 0; i < contacts.length; i++) { // loop over contacts array
                if (contacts[i].id === contact.id) {  //if the current contact object's id = the input contact id 
                     
            return contacts.splice(i, 1); // remove the contact from the array using the splice() method.
                }
            } 
        },
        
        printAllContactNames: function (){
            var allContacts = [];  // create an empty contacts array.
            
            for (var i = 0; i < contacts.length; i++) {  // loop over the contacts array 
               allContacts.push(contacts[i].nameFirst + " " + contacts[i].nameLast) ; // push each element from the contacts array's first and last name to the new allContacts array.
            }
            
            return allContacts.join("\n"); //return allContacts array joined at newlines.
                }
                
            };
            
        }
        
        
        
        
    
    
    





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}