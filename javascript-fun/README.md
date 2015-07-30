# getRandomPassword

## Part 1

Write a function named "getRandomPassword(len)" which generates a random password that obeys the following constraints:
* Is "len" characters long
* Contains alphmanumeric characters
* Contains at least one uppercase letter
* Contains no duplicates

## Part 2
Update "getRandomPassword(len)" so that every two letters in the generated password are adjacent on a QWERTY keyboard. For example, "qwiomn" would be valid but "tnpl" would not be.


## Part 3
Implement the same "getRandomPassword(len)" function from Part 1, *EXCEPT* this time don't use any loops - while, for, for..in


# getBadlyShuffledList

## Part 1

Implement a function called "getBadlyShuffledList(list)" which does the following: 
* The list parameter is an array
* "getBadlyShuffledList" randomizes the array
* *EXCEPT* elements in indexes divisible by 2 are NOT moved

So for example, given [A, H, D, Y, U] a valid "bad shuffle" would be [A, Y, D, H, U] since D and U aren't moved.

## Part 2

Add "getBadlyShuffledList(list)" to native Javascript arrays so that you could do the following:

var lst = [A, H, D, Y, U];
console.log( lst.getBadlyShuffledList() );

## Part 3

