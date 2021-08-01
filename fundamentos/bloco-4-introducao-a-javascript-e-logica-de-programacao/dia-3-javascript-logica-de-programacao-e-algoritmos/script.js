/*Exercício 1*/

/*
let n = 5;
let symbol = "*";
let inputLine = "";

for (i = 0; i < n; i += 1) {
  inputLine = inputLine + symbol;
}

for (i = 0; i < n; i += 1) {
  console.log(inputLine);
}
*/

/*Exercício 2*/

/*
let n = 5;
let symbol = "*";
let inputLine = "";

for (i = 0; i < n; i += 1) {
  inputLine = inputLine + symbol;
  console.log(inputLine);
}
*/

/*Exercício 3*/

/*
let n = 5;
let symbol = "*";
let inputLine = "";
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + " ";
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = "";
  inputPosition -= 1;
}
*/

/*Exercício 4*/

/*
let n = 5;
let symbol = "*";
let inputLine = "";

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex > controlLeft && columnIndex < controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + " ";
    }
  }
  console.log(inputLine);
  inputLine = "";
  controlLeft -= 1;
  controlRight += 1;
}
*/
