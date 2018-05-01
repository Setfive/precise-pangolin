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
 * @param len number
 */
function randomPassword(len){

}

const len = randInt(5, 10);
console.log("Testing with len = " + len);

const pass1 = randomPassword(len);
if(!pass1 || pass1.length != len){
    console.log("randomPassword: FAILED!");
}else{
    const alphaRe = new RegExp("^[A-Za-z0-9]+$");
    if(alphaRe.test(pass1)) {
        console.log("randomPassword: OK!");
    }else{
        console.log("randomPassword: FAILED!");
    }
}