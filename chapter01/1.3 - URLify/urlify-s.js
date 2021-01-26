function urlify(str) {
  return str.trim().replace(/ /g, '%20');
}
function replaceSpaces(str) {
  const arr = str.trim().split('');
  for (let i in arr) {
    if (arr[i] === ' ') {
      arr[i] = '%20';
    }
  }
  return arr.join('');
}
//tests
// console.log(urlify('Sai Charan P'));
// console.log(urlify('Mr John Smith    '), 'Mr%20John%20Smith');

console.log(replaceSpaces('Sai Charan P'));
console.log(replaceSpaces('Mr John Smith    '), 'Mr%20John%20Smith');
