// Assincronicidade

const food1 = "Lasanha";
const food2 = "Peixe";

const seconds = 1000;

// setTimeout (callback, delay em milissegundos)
const printFood1 = setTimeout(function () {
  //devolve um ID do setTimeout
  console.log(food1);
}, seconds);

console.log(printFood1);
clearTimeout(printFood1); // essa função para cancelar a execução do setTimeout

console.log(food1);
console.log(food2);

// setInterval (callback, intervalo em milissegundos)
// ela executa a callback a cada loop do intervalo

let count = 0;

const printHello = setInterval(() => {
  count++;
  console.log(count);
}, 1000);

// clearInterval(printHello) //  para a execução do intervalo
