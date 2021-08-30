// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       },
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       },
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     },
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   const deliveryPerson = order.order.delivery.deliveryPerson;
//   const customerName = order.name;
//   const customerPhone = order.phoneNumber;
//   const street = order.address.street;
//   const number = order.address.number;
//   const apartment = order.address.apartment;

//   console.log(
//     `Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`
//   );
// };

// customerInfo(order);

// const orderModifier = (order) => {
//   order.name = 'Luiz Silva';
//   order.payment.total = 50;

//   const name = order.name;
//   const pizza = Object.keys(order.order.pizza);
//   const beverage = order.order.drinks.coke.type;
//   const total = order.payment.total;

//   console.log(
//     `Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${beverage} é R$:${total}`
//   );
// };
// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, turno, mat) => {
  obj[turno] = mat;
};

addTurno(lesson2, 'turno', 'manhã');

const listKeys = (obj) => Object.keys(obj);

const sizeOfObj = (obj) => Object.keys(obj).length;

const valueOfObj = (obj) => Object.values(obj);

const allLessons = {};

Object.assign(allLessons, { lesson1, lesson2, lesson3 });

const totalStudents = (obj) => {
  let total = 0;
  const arr = Object.keys(obj);
  for (index in arr) {
    total += obj[arr[index]].numeroEstudantes;
  }

  return total;
};

const getValueByNumber = (obj, pos) => {
  Object.values(obj)[pos];
};

const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let igual = false;

  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) igual = true;
  }
  return igual;
};

console.log(verifyPair(lesson3, 'turno', 'noite'));
