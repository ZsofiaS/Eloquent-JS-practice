function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    return "The values are equal."
  }
}

console.log(min(0, 10));
console.log(min(0, -10));
//////////////////////////
let even = 0;
let odd = 1;

function isEven(number) {
  if (number < 0) {
    number = Math.abs(number);
  }
  if (number === even) {
    return true;
  } else if (number === odd) {
    return false;
  } else {
    odd = odd + 2;
    even = even + 2;
    return isEven(number);
  }
}
//////////////////////////
function countBs(string) {
  let counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == "B") {
      counter ++;
    }
  }
  return counter;
}
//////////////////////////
function countChar(string, char) {
  let counter = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i] == char) {
      counter ++
    }
  }
  return counter;
}
