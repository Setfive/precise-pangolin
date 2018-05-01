/**
 * Returns a random integer between min and max
 * @param min
 * @param max
 * @returns {*}
 */
function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validatePassword(len, password) {
    const alphaNumericRegex = /^[a-z0-9]+$/i;
    const upperRegex = /[A-Z]/;

    if(!password || password.length != len){
        return false;
    }

    if (password.match(alphaNumericRegex) === null) {
        return false;
    }

    if (password.match(upperRegex) === null) {
        return false;
    }

    let usedChars = "";
    for (let i = 0; i < password.length; i++) {
        if(usedChars.indexOf(password[i]) > -1){
            return false;
        }

        usedChars += password[i];
    }

    return true;
}

const len = randInt(5, 10);

const pass3 = substringPassword(len);
console.log(pass3);

if(pass3 !== null && validatePassword(len, pass3) == false){
    console.log("substringPassword: FAILED!");
}else{
    console.log("substringPassword: OK!");
}

function getRandomString(){

    const asciiRanges = [ [48, 57], [65, 90], [97, 122] ];
    const alphaRange = [];

    for(let i = 0; i < asciiRanges.length; i++) {
        for (let j = asciiRanges[i][0]; j <= asciiRanges[i][1]; j++) {
            alphaRange.push(String.fromCharCode(j));
        }
    }

    let finalPass = String.fromCharCode(randInt(65, 90));
    while (finalPass.length < len) {
        let nextChar = alphaRange[randInt(0, alphaRange.length - 1)];
        if (finalPass.indexOf(nextChar) == -1) {
            finalPass += nextChar;
        }
    }

    let resultStr = "";
    const pos = randInt(1, 10000);
    const allChars = [];
    for(let i = 48; i <=122; i++){
        allChars.push( String.fromCharCode(i) );
    }

    while(resultStr.length < 10000){
        resultStr += allChars[ randInt(0, allChars.length - 1) ];
        if(resultStr.length == pos){
            resultStr += finalPass;
        }
    }

    return resultStr;
}

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