/*Parte I*/

/*
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};
/*Exercício 1*/
/*
console.log("Welcome, " + info.personagem);
*/

/*Exercício 2*/
/*
console.log(info);
*/

/*Exercício 3*/
/*
for (key in info) {
  console.log(key);
}
*/

/*Exercício 4*/
/*
for (key in info) {
  console.log(info[key]);
}
*/

/*Exercício 5*/
/*
let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
if (info.recorrente == info2.recorrente) {
  console.log("Ambos recorrentes");
}
*/

/*Parte II*/

/*Exercicio 1*/
/*
function verificaPalindrome(string) {
  let reverse = string.split("").reverse().join("");
  if (reverse === string) {
    return true;
  } else {
    return false;
  }
}

console.log(verificaPalindrome("arara"));
console.log(verificaPalindrome("desenvolvimento"));
*/

/*Exercício 2*/
/*
let teste = [2, 25, 6, 15, 10, 1];

function biggerIndex(numbers) {
  let bigIndex = 0;
  for (let index in numbers) {
    if (numbers[bigIndex] < numbers[index]) {
      bigIndex = index;
    }
  }
  return bigIndex;
}

console.log(biggerIndex(teste));
*/

/*Exercício 3*/
/*
let teste = [2, 4, 6, -10, 10, 0, -3];

function smallerIndex(numbers) {
  smallIndex = 0;
  for (let index in numbers) {
    if (numbers[smallIndex] > numbers[index]) {
      smallIndex = index;
    }
  }
  return smallIndex;
}

console.log(smallerIndex(teste));
*/

/*Exercício 4*/
/*
let teste = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (index in palavras) {
    if (maiorPalavra.length < palavras[index].length) {
      maiorPalavra = palavras[index];
    }
  }
  return maiorPalavra;
}

console.log(maiorPalavra(teste));
*/

/*Exercício 5*/
/*
function maisRepete(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;

  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}
console.log(maisRepete([2, 3, 2, 5, 8, 2, 3]));
*/
/*Exercício 6*/
/*
function sumAllNumbers(numbers) {
  let total = 0;
  for (index = 0; index <= numbers; index += 1) {
    total = total + index;
  }
  return total;
}

console.log(sumAllNumbers(10));
*/
/*Exercício 7*/
/*
function checkWordEnding(word, wordEnding) {
  word = word.split("");
  wordEnding = wordEnding.split("");
  control = true;

  for (index = 0; index < wordEnding.length; index += 1) {
    if (word[word.length - wordEnding.length + index] != wordEnding[index]) {
      control = false;
    }
  }

  return control;
}

console.log(checkWordEnding("trybe", "be"));
console.log(checkWordEnding("joaofernando", "fernan"));
*/
