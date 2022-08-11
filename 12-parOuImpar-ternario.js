// Elaborar um algoritmo que leia um número e informe se ele é par ou ímpar.

const evenOrOdd = (number) => {
  const rest = number % 2;

  return (rest == 0 ? 'O número é par' : 'O número é ímpar');
};

console.log(evenOrOdd(136));