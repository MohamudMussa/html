
// 1. the sentence
let str = "Jeff tried to study, but the room was so dusty he became stressed. So instead, he ate desserts."

//2. remove punctuation and convert it all to lowercase
const sanitizeString = (str) => {
    return str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
}

//3. split the str into words
const word = str.split(" "); //split it by the white space and have it as an array

// 4. take each word and check it against each of the words, do this for every word.

// 5.  if word has the same length then continue to check that they match letter for letter match. charMap?

//6. if the word hasn't got the same length then continue as this can't be an anagram.


/*Hi, I struggled with this one to be honest. 
If asked I can walk through my thought process on what I'd do.
However after spending some time on this task I have to raise the white flag.
I would however love to be able to get the soltion for this task, only so I can learn and grow as a developer. 
I made a basic anagram finder that compares two strings but I know that wasn't the task. */

function anagram(stringOne, stringTwo) {
    const a = stringOne.replace(/\s/g, '').toLowerCase().split('').sort().join('');
    const b = stringTwo.join('').split('').sort().join('');
    return a == b;
}

anagrams('monk', 'konm')


