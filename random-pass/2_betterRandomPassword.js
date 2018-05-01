/**
 * Returns a random integer between min and max
 * @param min
 * @param max
 * @returns {*}
 */
function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns a random password of length "len".
 * Password requirements:
 * - Contains "len" characters
 * - Contains only alphanumeric characters
 * - Contains no duplicate characters
 * -
 * @param len number
 */
function betterRandomPassword(len) {

    return null;
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
console.log("Testing with len = " + len);

const pass2 = betterRandomPassword(len);
if(validatePassword(len, pass2) == false){
    console.log("betterRandomPassword: FAILED!");
}else{
    console.log("betterRandomPassword: OK!");
}