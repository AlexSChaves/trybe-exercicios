/**********Exercício 01**********/

/*
let a = 10;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
*/

/**********Exercício 02**********/

/*
let a = 10;
let b = 15;

if (a > b) {
  console.log(a);
} else {
  console.log(b);
}
*/

/**********Exercício 03**********/

/*
let a = 5;
let b = 10;
let c = 15;

if (a > b && a > c) {
  console.log(a);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}
*/

/**********Exercício 04**********/

/*
let number = 5;
if (number > 0) {
  console.log("Positivo");
} else if (number < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}
*/

/**********Exercício 05**********/

/*
let a = 90;
let b = -300;
let c = 45;

tri = a + b + c;

if (tri == 180) {
  console.log(true);
} else if (tri > 180 && tri < 180 && tri >= 0) {
  console.log(false);
} else if (tri < 0) {
  console.log("Inválido");
}
*/

/**********Exercício 06**********/

/*
let pecaXadrez = "BISPO";

let xx = pecaXadrez.toLowerCase();

console.log(xx);

if (xx == "rei") {
  console.log(
    "O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez."
  );
} else if (xx == "rainha") {
  console.log(
    "A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças."
  );
} else if (xx == "bispo") {
  console.log(
    "O bispo move-se ao longo da diagonal. Não pode pular outras peças."
  );
} else if (xx == "cavalo") {
  console.log(
    "É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa."
  );
} else if (xx == "torre") {
  console.log(
    "A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças."
  );
} else if (xx == "peao") {
  console.log(
    "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo."
  );
} else {
  console.log("Inválido");
}
*/

/**********Exercício 07**********/

/*
let nota = 91;

if (nota >= 90) {
  console.log("A");
} else if (nota >= 80 && nota <= 89) {
  console.log("B");
} else if (nota >= 70 && nota <= 79) {
  console.log("C");
} else if (nota >= 60 && nota <= 69) {
  console.log("D");
} else if (nota >= 50 && nota <= 59) {
  console.log("E");
} else if (nota < 50) {
  console.log("F");
}
*/

/**********Exercício 08**********/

/*
let a = 1;
let b = 2;
let c = 3;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}
*/

/**********Exercício 09**********/

/*
let a = 1;
let b = 2;
let c = 3;

if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
  console.log(false);
} else {
  console.log(true);
}
*/

/**********Exercício 10**********/

/*
let valorCusto = 500;
let valorVenda = 1000;
let impostoSobreOCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;

if (lucro > 0) {
  console.log("O lucro foi de: R$ " + lucro * 1000);
} else if (lucro < 0) {
  console.log("Houve prejuízo");
}
*/

/**********Exercício 11**********/

/*
let inss;
let ir;

let salarioBruto = 2000.0;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

let salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = salarioBase * 0.075 - 142.8;
} else if (salarioBase <= 3751.05) {
  ir = salarioBase * 0.15 - 354.8;
} else if (salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13;
} else {
  ir = salarioBase * 0.275 - 869.36;
}

console.log("Seu salário liquido é de R$ " + (salarioBase - ir));
*/
