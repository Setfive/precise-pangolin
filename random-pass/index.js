/** DO NOT MODIFY START **/
const got = require('got');
const Api = {
    remoteRandom: function(fn) {
        got.get(baseUrl + "/interview/remote-random").then(res => fn(JSON.parse(res.body).password));
    },

    remoteValidate: function(password, fn) {
        const options = {
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ password: password })
        };

        got.post(baseUrl + "/interview/remote-validate", options).then(res => fn(JSON.parse(res.body)));

    },
};

function validatePassword(password) {
    const alphaNumericRegex = /^[a-z0-9]+$/i;
    const upperRegex = /[A-Z]/;

    if (password.match(alphaNumericRegex) === null) { return false; }
    if (password.match(upperRegex) === null) { return false; }

    const charMap = new Map();
    for (const i = 0; i < password.length; i++) {
        if (charMap.get(password.charAt(i)) !== undefined) { return false; }
        charMap.set(password.charAt(i), true)
    }

    return true;
}
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