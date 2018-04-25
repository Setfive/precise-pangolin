# Random Passwords

## Simple random password
 
Write a function that given a required number of characters (len) 
returns a random password containing only alphanumeric characters 
(numbers and letters, no special characters) containing len characters.

```javascript

/**
* Returns a random password of length "len".
* Password requirements:
* - Contains "len" characters
* - Contains only alphanumeric characters
* @param len number
*/
function randomPassword(len){
    
}
```

## Better random password
Write a function simlar to randomPassword where the generated password 
obeys some additional requirements:
* Contains only alphanumeric characters
* Contains at least one uppercase letter
* Contains no duplicate characters
* The "validatePassword" function returns true when called with the password

```javascript
/**
 * Returns a random password of length "len".
 * Password requirements:
 * - Contains "len" characters
 * - Contains only alphanumeric characters
 * - Contains no duplicate characters
 * - The "validatePassword" function returns true when called with the generated password
 * @param len number
 */
function betterRandomPassword(len) {

    return null;
}
```

## Remote randomness
Write a function which uses callbacks and the remoteRandom function  to retrieve a random string from a remote source.
The "randomness" source will return a long (10,000) character string and the goal is to find a qualifying substring.

To qualify, the substring needs to meet the following conditions:
* Contains only alphanumeric characters
* Be "len" characters long


One the substring is found, invoke the "done" callback. If no such substring just invoke "done" with "null".

```javascript
/**
* Call "remoteRandom" with a callback to get a random string.
* And then call 'done' with the generated password as an argument.
* @param len number
* @param done function
*/
function remoteRandomPassword(len, done){
    
}
```

## Remote validation
Write a function similar to "betterRandomPassword" but call the "remoteValidate" function to check that the generated password is valid. 

**Note:** "remoteValidate" is asyncronous (uses a callback) but your function should always invoke the "done" callback with a valid password.

**Note:** "remoteValidate" does NOT follow identical rules as the local "validatePassword", it may fail unexpectedly.

**Protip:** You'll probably want some recursion.

```javascript
/**
* Implement a similar function to betterRandomPassword except use remoteValidate to validate the password.
* @param len number
* @param done function
*/
function remoteValidatedPasswordd(len, done){
    
}
```