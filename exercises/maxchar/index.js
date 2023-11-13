// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const char = {};
    let maxNum = "";
    let maxChar = "";
    for(const c of str){
        char[c] = char[c] + 1 || 1
    }

    for(const c in char){
        if(char[c] > maxNum){
            maxNum = char[c];
            maxChar = c
        }
    }
    return maxChar
}

module.exports = maxChar;
