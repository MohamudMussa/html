

let str = "Jeff tried to study, but the room was so dusty he became stressed. So instead, he ate desserts."


//remove punctuation 
const sanitizeString = (str) => {
    return str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");

}
const word = str.split(" "); //split it by the white space


function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
    return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

anagrams('monk', 'konm')
console.log(sanitizeString)

