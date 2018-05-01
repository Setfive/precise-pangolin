/** Output some stuff **/
console.log("Hello evil world!");

/** A for loop **/
let total = 0;
for(let i = 0; i < 10; i++){
    total += i;
}
console.log(total);

/** A while **/
total = 0;
while(total <= 10){
    total += 1;
}
console.log(total);

/** Function callin **/
function isEven(num){
    return num > 0 && num % 2 == 0;
}

/** Check is in array **/
const someList = ["A", "B", "C"];
const searchFor = "X";
const isInArray = someList.indexOf(searchFor) > -1;
console.log("X is " + isInArray ? " IN ARRAY" : " NOT IN ARRAY");

console.log("173 is " + (isEven(173) ? " even " : "odd"));