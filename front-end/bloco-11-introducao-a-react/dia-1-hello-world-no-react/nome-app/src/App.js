import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  )
}

const tarefas = ['Acordar', 'Cuidar da Higiene', 'Comer', 'Estudar', 'Abraçar a mãe']

class App extends React.Component {
  render() {
    return (
      <ul>{tarefas.map(tarefa => Task(tarefa))}</ul>
    )
  }
}

export default App