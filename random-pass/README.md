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

## Remote randomness
Write a function which uses callbacks and the remoteRandom function 
to retrieve a random string from a remote source.
Using that random string, generate a random password following the same rules as above:
* Contains only alphanumeric characters
* Contains at least one uppercase letter
* Contains no duplicate characters
* The "validatePassword" function returns true when called with the password

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
Write a function similar to above but in addition call the "remoteValidate" 
function to check that the generated password is valid. 
Note: "remoteValidate" is asyncronous (uses a callback) but your function should always complete with a valid password.

```javascript
/**
* Call "remoteRandom" with a callback to get a random string.
* Validate it by calling "remoteValidate" with the generated password and a callback.
* And then call 'done' with the generated password as an argument.
* @param len number
* @param done function
*/
function remoteRandomPassword(len, done){
    
}
```