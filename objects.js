"use strict";


// 1. countWords
function countWords(phrase) {
  const newPhrase = phrase.split(' ');
  let phraseObject = {};
  for (const word of newPhrase) {
    // Syntax below returns {'word1': NaN, 'word2': NaN, ...}
    // phraseObject[word] += 1;
    if (phraseObject.hasOwnProperty(word)) {
      phraseObject[word] += 1;
    } else {
      phraseObject[word] = 1;
    }

  }
  return phraseObject;
}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
