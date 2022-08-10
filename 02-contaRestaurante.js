
// EXERCÍCIO 2 
// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO: 
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00
// ---------------------------------------------------------------

let valor = 80;
let taxaGarcom = 10;

const taxa = valor * taxaGarcom / 100;
const total = valor + taxa;

console.log(`Valor do jantar: R$${valor},00`);
console.log(`Taxa do garçom: R$${taxa},00`);
console.log(`Total a pagar: R${total},00`);
