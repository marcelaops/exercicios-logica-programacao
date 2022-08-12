// Algoritmo q recebe todas contas do mês, some e diminua do seu salário. Na saída mostre o salário, total de gastos e a sobra.

// Fazendo como se as contas viessem em uma array:
const expenses = (bills, wage) => {
  const billsSum = bills.reduce((previousValue, currentValue) => previousValue + currentValue, 0); 
  const leftovers = wage - billsSum;
  
  return `
    O salário é de R$${wage},
    O total dos gastos é de R$${billsSum},
    E a sobra é de R$${leftovers}.
  `;
};

// console.log(expenses([100, 400, 24], 1400));

// Fazendo iguale mostrou no exercício, como se os gastos viessem em um objeto. 

const expenses2 = (bills, wage) => {
  const billsValues = Object.values(bills); /* -> retorna um array */
  const billsSum = billsValues.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const leftovers = wage - billsSum;
  
  return `
    O salário é de R$${wage},
    O total dos gastos é de R$${billsSum},
    E a sobra é de R$${leftovers}.
  `;
};

const billsObject = {
  'Aluguel': 800,
  'Luz': 40,
  'Água': 50,
  'Internet': 100,
};

console.log(expenses2(billsObject, 1400));