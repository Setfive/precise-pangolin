# Random Passwords

## Tips and such

* DON'T cheat
* You can add as many helper functions as you want
* You can use the randInt(min, max) function included in search file to generate a random integer
* sampleJavascript.js has some sample JavaScript code which might be helpful

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
* Is "len" characters long
* Contains only alphanumeric characters
* Contains at least one uppercase letter
* Contains no duplicate characters

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

## Substring password
Write a function which calls "getRandomString" to retrieve a random character string 
and then find a substring which meets the following conditions:
* Is "len" characters long
* Contains only alphanumeric characters
* Contains at least one uppercase letter
* Contains no duplicate characters

If no such substring exists return "null".

```javascript
/**
* Uses getRandomString() to get a random string and returns a substring from that value which:
* Is "len" characters long
* Contains only alphanumeric characters
* Contains at least one uppercase letter
* Contains no duplicate characters
* @param len number
*/
function substringPassword(len){
    
}
```

## Search for file
Write a function "searchForFile" which given "filename" and "files" scans files to find if filename exists within it.
files will be an array of arrays of strings of arbitrary depth, similar to a directory structure.

files will be something like:
```bash
[
    "Photos",
    [
        "Downloads",
        "Desktop",
        ...
   ],
   "Home",
   "cats.gif",
   [
        "puppies.png",
        "1.png"
   ]
```

**Protip:** You'll probably want some recursion.

```javascript
/**
* Searches files and returns if filename is contained within the list of lists.
* @param files array
* @param filename string
*/
function searchForFile(files, filename){
    
}
```
