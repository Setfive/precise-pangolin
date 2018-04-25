/** DO NOT MODIFY START **/
const got = require('got');
const Api = {
    remoteRandom: function(fn) {
        got.get("https://jointdj.com/interview/remote-random")
           .then(res => fn(JSON.parse(res.body).password));
    },

    remoteValidate: function(password, fn) {
        const options = {headers: {'Content-type': 'application/json'},body: JSON.stringify({ password: password })};
        got.post("https://jointdj.com/interview/remote-validate", options)
           .then(res => fn(JSON.parse(res.body)));
    },
};

function validatePassword(len, password) {
    const alphaNumericRegex = /^[a-z0-9]+$/i;
    const upperRegex = /[A-Z]/;

    if(!password || password.length != len){
        return false;
    }

    if (password.match(alphaNumericRegex) === null) { return false; }
    if (password.match(upperRegex) === null) { return false; }

    const charMap = new Map();
    for (const i = 0; i < password.length; i++) {
        if (charMap.get(password.charAt(i)) !== undefined) { return false; }
        charMap.set(password.charAt(i), true)
    }

    return true;
}

const len = 1 + Math.floor(Math.random() * 5);
console.log("Testing with len = " + 5);

const pass1 = randomPassword(len);
if(!pass1 || pass1.length != len){
    console.log("randomPassword: FAILED!");
}else{
    console.log("randomPassword: OK!");
}

const pass2 = betterRandomPassword(len);
if(validatePassword(len, pass2) == false){
    console.log("betterRandomPassword: FAILED!");
}else{
    console.log("betterRandomPassword: OK!");
}

const pass3Timeout = setTimeout( () => {
    console.log("remoteRandomPassword: FAILED. TIMEOUT after 5 sec.");
}, 5000);

const pass3Done = (pass3) => {
    clearTimeout(pass3Timeout);
    if(validatePassword(len, pass3) == false){
        console.log("remoteRandomPassword: FAILED!");
    }else{
        console.log("remoteRandomPassword: OK!");
    }
};

remoteRandomPassword(len, pass3Done);

const pass4Timeout = setTimeout( () => {
    console.log("remoteValidatedPasswordd: FAILED. TIMEOUT after 5 sec.");
}, 5000);

const pass4Done = (pass4) => {
    clearTimeout(pass4Timeout);
    if(validatePassword(len, pass4) == false){
        console.log("remoteValidatedPasswordd: FAILED!");
    }else{
        console.log("remoteValidatedPasswordd: OK!");
    }
};

remoteRandomPassword(len, pass3Done);

Api.remoteRandom((randomString) => {
    console.log("Got some randomness! Here's a sample: " + randomString.substr(0, 100));
});

/** END DO NOT MODIFY **/


/**
 * Returns a random password of length "len".
 * Password requirements:
 * - Contains "len" characters
 * - Contains only alphanumeric characters
 * @param len number
 */
function randomPassword(len) {

    return null;
}

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

/**
 * Invoke "remoteRandom" with a callback to get a random string.
 * Call 'done' with the generated password as an argument or "null" if none could be generated.
 * @param len number
 * @param done function
 */
function remoteRandomPassword(len, done){

}

/**
 * Implement a similar function to betterRandomPassword except use remoteValidate to validate the password.
 * @param len number
 * @param done function
 */
function remoteValidatedPasswordd(len, done){

}