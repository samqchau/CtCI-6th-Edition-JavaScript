//brute force - generate every string one edit away from a and see if b matches any of them - unreasonable.

//optimized way - if they are the same length; check to see if they are only one replacement away. if they are different lengths, check to see if they are one insertion or removal away

function oneAway(a, b) {
  if (a.length === b.length) {
    return oneReplacement(a, b);
  } else if (a.length + 1 === b.length) {
    return oneEdit(a, b);
  } else if (b.length + 1 === a.length) {
    return oneEdit(b, a);
  }
  return false;
}

function oneReplacement(a, b) {
  let numEdits = 0;
  for (i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      numEdits++;
    }
    if (numEdits > 1) {
      return false;
    }
  }
  return true;
}

function oneEdit(short, long) {
  let longPointer = 0;
  let shortPointer = 0;
  while (longPointer < long.length && shortPointer < short.length) {
    if (short[shortPointer] !== long[longPointer]) {
      if (longPointer !== shortPointer) {
        return false;
      }
      longPointer++;
    } else {
      longPointer++;
      shortPointer++;
    }
  }
  return true;
}

// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
