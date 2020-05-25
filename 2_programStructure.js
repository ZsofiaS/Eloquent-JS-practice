string = "";
size = 8;

for (var i = 1; i <= size; i++) {
  for (var j = 1; j <= size; j++) {
    if ((i+j) % 2 == 0) {
      string = string + " ";
    } else {
      string = string + "#";
    }
  }
  string = string + "\n";
}
console.log(string)

////////////////////////
for (var i = "#"; i.length < 7; i = i + "#") {
  console.log(i);
}

///////////////////////
for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz")
  } else if (i % 3 == 0) {
    console.log("Fizz")
  } else if (i % 5 == 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}
////////////////////////
