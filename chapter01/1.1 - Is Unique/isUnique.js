// var allUniqueChars = function (string) {
//   // O(n^2) approach, no additional data structures used
//   // for each character, check remaining characters for duplicates
//   for (var i = 0; i < string.length; i++) {
//     for (var j = i + 1; j < string.length; j++) {
//       if (string[i] === string[j]) {
//         return false; // if match, return false
//       }
//     }
//   }
//   return true; // if no match, return true
// };

// const everyCharUnique = (str, indexOffset = 'a'.charCodeAt()) => {
//   let counterTable = Number();
//   for (let index of [...str].map((c) => c.charCodeAt() - indexOffset)) {
//     const mask = 1 << index;
//     if (counterTable & mask) return false;
//     counterTable |= mask;
//   }
//   return true;
// };

// function everyCharUnique(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] && obj[str[i]] >= 1) {
//       return false;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   return true;
// }

//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

//O(n^2) run time. Nested for loops. Brute force. For every character in the string, it checks the rest of the string to see if the char pair matches. If they do, returns false. Returns true after checking every pair.
function hasUniqueCharacters(str) {
  for (i = 0; i < str.length; i++) {
    for (j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

//O(n) runtime. Iterates through the string a single time. As iterating through the string, adds char to hash table. If the key value pair already exists, returns false, else keeps going. After iterating through the whole string, returns true.
function uniqueCharsHash(str) {
  //iterate through string and add chars to hash table, if key value pair already exists, return false
  let myobj = {};
  for (i = 0; i < str.length; i++) {
    if (myobj[str[i]]) {
      return false;
    } else {
      myobj[str[i]] = 1;
    }
  }
  return true;
}

//O(nlogn) runtime.
function sortAndSearch(str) {
  let sorted = [...str].sort((a, b) => (a > b ? 1 : -1)).join('');
  for (i = 1; i < str.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      return false;
    }
  }
  return true;
}

/* TESTS */
console.log(hasUniqueCharacters('abcd'), 'true');
console.log(hasUniqueCharacters('abccd'), 'false');
console.log(hasUniqueCharacters('bhjjb'), 'false');
console.log(hasUniqueCharacters('mdjq'), 'true');

console.log(uniqueCharsHash('abcd'), 'true');
console.log(uniqueCharsHash('abccd'), 'false');
console.log(uniqueCharsHash('bhjjb'), 'false');
console.log(uniqueCharsHash('mdjq'), 'true');

console.log(sortAndSearch('abcd'), 'true');
console.log(sortAndSearch('abccd'), 'false');
console.log(sortAndSearch('bhjjb'), 'false');
console.log(sortAndSearch('mdjq'), 'true');
