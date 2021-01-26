//we want to compress the string. the fastest concievable runtime seems to be O(n) because we have to iterate through the string at least once.

//uses string concatenation
function strComp(str) {
  let i = 0;
  let res = '';
  while (i < str.length) {
    let pointer = i + 1;
    let num = 1;
    let char = `${str[i]}`;
    while (str[i] === str[pointer]) {
      pointer++;
      num++;
    }
    i = pointer;
    res = res.concat(`${char}${num}`);
  }
  return res.length < str.length ? res : str;
}

//uses array and joins to string
function joinComp(str) {
  let i = 0;
  let res = [];
  while (i < str.length) {
    let pointer = i + 1;
    let num = 1;
    let char = `${str[i]}`;
    while (str[i] === str[pointer]) {
      pointer++;
      num++;
    }
    i = pointer;
    res.push(`${char}${num}`);
  }
  res = res.join('');
  return res.length < str.length ? res : str;
}

// console.log('aaaaaa', strComp('aaaaaa'), 'a6');
// console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');

console.log('aaaaaa', joinComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', joinComp('aabcccccaaa'), 'a2b1c5a3');
