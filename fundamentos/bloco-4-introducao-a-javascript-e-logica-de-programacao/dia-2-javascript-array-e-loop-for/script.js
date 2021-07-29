/*****Exercício 1*****/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}
*/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (number of numbers) {
  console.log(number);
}
*/

/*****Exercício 2*****/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (i = 0; i < numbers.length; i += 1) {
  resultado += numbers[i];
}
console.log(resultado);
*/

/*****Exercício 3*****/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

let resultado = soma / numbers.length;
console.log(resultado);
*/

/*****Exercício 4*****/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (i = 0; i < numbers.length; i += 1) {
  soma += numbers[i];
}

let resultado = soma / numbers.length;
if (resultado > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor que 20");
}
*/

/*****Exercício 5*****/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

x = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  if (x < numbers[i]) {
    x = numbers[i];
  }
}

console.log(x);
*/

/*****Exercício 6*****/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 == 1) {
    console.log(numbers[i]);
  } else {
    console.log("Nenhum valor impar encontrado");
  }
}
*/

/*****Exercício 7*****/
/*
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

x = numbers[0];

for (i = 0; i < numbers.length; i += 1) {
  if (x > numbers[i]) {
    x = numbers[i];
  }
}

console.log(x);
*/

/*****Exercício 8*****/
/*
let arr = [];

for (i = 1; i <= 25; i += 1) {
  arr = arr.push(i);
}

console.log(arr);
*/

/*****Exercício 9*****/
/*
let arr = [];

for (i = 1; i <= 25; i += 1) {
  arr.push(i);
}

for (let i = 0; i < arr.length; i += 1) {
  console.log(arr[i] / 2);
}
*/

/*********************Bônus*********************/
let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
