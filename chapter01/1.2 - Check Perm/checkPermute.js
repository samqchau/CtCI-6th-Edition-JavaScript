// var checkPermute = function(stringOne, stringTwo) {
//   // if different lengths, return false
//   if (stringOne.length !== stringTwo.length) {
//     return false;
//   // else sort and compare
//   // (doesnt matter how it's sorted, as long as it's sorted the same way)
//   } else {
//     var sortedStringOne = stringOne.split('').sort().join('');
//     var sortedStringTwo = stringTwo.split('').sort().join('');
//     return sortedStringOne === sortedStringTwo;
//   }
// };

//O(a) runtime. Checks if they are the same length. If they are not the same length, returns false. Iterates through string a and counts frequency of every char in string a and stores in hash table. Iterates through b and decrements values in hash table. If key value pair doesn't exist or if value is less than 0 after decrementing, returns false. After iterating through both strings, returns true.
function checkPermute(a, b) {
  if (a.length !== b.length) {
    return false;
  }
  let map = {};
  for (i = 0; i < a.length; i++) {
    map[a[i]] ? (map[a[i]] += 1) : (map[a[i]] = 1);
  }
  console.log(map);
  for (i = 0; i < b.length; i++) {
    if (!map[b[i]]) {
      return false;
    }
    map[b[i]] -= 1;
    if (map[b[i]] < 0) {
      return false;
    }
  }
  return true;
}

//O(aloga + blogb) converts a and b to arrays and sorts them (nlogn). Converts back to strings and returns whether they are equal or not.
const sortCheckPerm = (a, b) => {
  if (a.length !== b.length) {
    return false;
  }
  const aarr = [...a].sort().join(',');
  const barr = [...b].sort().join(',');
  return aarr === barr;
};

// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);

console.log(sortCheckPerm('aba', 'aab'), true);

console.log(sortCheckPerm('aba', 'aaba'), false);

console.log(sortCheckPerm('aba', 'aa'), false);
