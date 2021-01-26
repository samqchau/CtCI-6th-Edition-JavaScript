//characteristics of a palindrome. All characters have an even frequency, can have 1 odd frequency.
//Can solve by mapping frequencies and checking if all fit criteria, if more than 1 odd return false. O(n) runtime has to go through string at least once

function palinPerm(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  let map = {};
  let oddCount = 0;
  for (i = 0; i < str.length; i++) {
    map[str[i]] ? map[str[i]]++ : (map[str[i]] = 1);
  }
  console.log(map);
  for (key in map) {
    if (map[key] % 2 === 1) {
      oddCount++;
      if (oddCount > 1) {
        return false;
      }
    }
  }
  return true;
}

//tests
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
