const user = document.querySelector("#user");
const inputUser = document.querySelector("#input-user");
const email = document.querySelector("#email");
const inputEmail = document.querySelector("#input-email");
const cpf = document.querySelector("#cpf");
const inputCpf = document.querySelector("#input-cpf");
const adress = document.querySelector("#cpf");
const inputAdress = document.querySelector("#input-cpf");
const city = document.querySelector("#city");
const inputCity = document.querySelector("#input-city");
const state = document.querySelector("state");
const inputState = document.querySelector("#input-state");

let states = [
  "Escolha um Estado",
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins",
];

const selec = document.querySelector("#states");

function estados() {
  // https://www.sergiotoledo.com.br/tutoriais/javascript/populando-select-com-javascript-dinamicamente

  states.forEach((estado) => {
    option = new Option(estado);
    selec.options[selec.options.length] = option;
  });

  const opt = document.getElementsByTagName("option");
  for (index = 1; index < opt.length; index += 1) {
    opt[index].setAttribute("id", "input-state");
  }

  opt[0].setAttribute("disabled", "disabled");
}

function dados(event) {
  event.preventDefault();
  user.innerHTML = inputUser.value;
  email.innerHTML = inputEmail.value;
  cpf.innerHTML = inputCpf.value;
  adress.innerHTML = inputAdress.value;
  city.innerHTML = inputCity.value;
  state.innerHTML = inputState.value;
}

function limparDados(event) {
  event.preventDefault();
  user.innerHTML = "";
  email.innerHTML = "";
  cpf.innerHTML = "";
  adress.innerHTML = "";
  city.innerHTML = "";
  state.innerHTML = "";
}

window.onload = function () {
  estados();

  const buttonSubmit = document.querySelector(".submit-button");
  const buttonClear = document.querySelector(".clear-button");

  buttonSubmit.addEventListener("click", dados);
  buttonClear.addEventListener("click", limparDados);
};
