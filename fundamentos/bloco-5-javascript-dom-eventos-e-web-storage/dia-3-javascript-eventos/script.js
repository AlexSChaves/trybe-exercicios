function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

let dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function createDaysOfTheMonth() {
  let getDayList = document.querySelector("#days");

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement("li");

    if ((day === 24) | (day === 31)) {
      dayItem.className = "day holiday";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    } else if ((day === 4) | (day === 11) | (day === 18)) {
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday friday";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    } else {
      dayItem.className = "day";
      dayItem.innerHTML = day;
      getDayList.appendChild(dayItem);
    }
  }
}

createDaysOfTheMonth();

function botaoFeriados() {
  let botao = document.createElement("button");
  let botaoPai = document.querySelector(".buttons-container");

  botao.id = "btn-holiday";
  botao.innerHTML = "Feriados";
  botaoPai.appendChild(botao);
}

botaoFeriados();

function selecionarFeriados() {
  let botaoFeriado = document.querySelector("#btn-holiday");
  let feriado = document.querySelectorAll(".holiday");
  let backgroundColor = "rgb(238,238,238)";
  let setNewColor = "white";

  botaoFeriado.addEventListener("click", function () {
    for (let index = 0; index < feriado.length; index += 1) {
      if (feriado[index].style.backgroundColor === setNewColor) {
        feriado[index].style.backgroundColor = backgroundColor;
      } else {
        feriado[index].style.backgroundColor = setNewColor;
      }
    }
  });
}

selecionarFeriados();

function botaoSexta() {
  let sexta = document.createElement("button");
  let sextaPai = document.querySelector(".buttons-container");

  sexta.id = "btn-friday";
  sexta.innerHTML = "Sexta-Feira";
  sextaPai.appendChild(sexta);
}

botaoSexta();

function sextou() {
  sextas = [4, 11, 18, 25];

  let botaoSexta = document.querySelector("#btn-friday");
  let sextou = document.querySelectorAll(".friday");

  botaoSexta.addEventListener("click", function () {
    for (let index = 0; index < sextou.length; index += 1) {
      if (sextou[index].innerHTML !== "Sextou!!!") {
        sextou[index].innerHTML = "Sextou!!!";
      } else {
        sextou[index].innerHTML = sextas[index];
      }
    }
  });
}

sextou();

function mouseOver() {
  let dias = document.querySelector("#days");

  dias.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "600";
  });
}

function mouseOut() {
  let dias = document.querySelector("#days");

  dias.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
    event.target.style.fontWeight = "200";
  });
}

mouseOver();
mouseOut();

function newTaskSpan() {
  let taskNome = document.createElement("span");
  let myTask = document.querySelector(".my-tasks");

  taskNome.innerHTML = "Projeto:";
  myTask.appendChild(taskNome);
}

newTaskSpan();

function newTaskDiv() {
  let taskNome = document.createElement("div");
  let myTask = document.querySelector(".my-tasks");

  taskNome.className = "task";
  taskNome.style.backgroundColor = "green";
  myTask.appendChild(taskNome);
}

newTaskDiv();

function setTaskClass() {
  let selectedTask = document.getElementsByClassName("task selected");
  let myTasks = document.querySelector(".task");

  myTasks.addEventListener("click", function (event) {
    if (selectedTask.length === 0) {
      event.target.className = "task selected";
    } else {
      event.target.className = "task";
    }
  });
}

setTaskClass();

function setDayColor() {
  let selectedTask = document.getElementsByClassName("task selected");
  let days = document.querySelector("#days");
  let taskDiv = document.querySelector(".task");
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener("click", function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = "rgb(119,119,119)";
    }
  });
}

setDayColor();

function addNewTask() {
  let getInputField = document.querySelector("#task-input");
  let addInputButton = document.querySelector("#btn-add");
  let getTaskList = document.querySelector(".task-list");

  addInputButton.addEventListener("click", function () {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    } else {
      alert("Error: Digite ao menos 1 caractere.");
    }
  });

  getInputField.addEventListener("keyup", function (event) {
    if (event.keyCode === 13 && getInputField.value.length > 0) {
      let newLi = document.createElement("li");
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = "";
    }
  });
}

addNewTask();
