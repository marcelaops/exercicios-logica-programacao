// Algoritmo p calcular o peso ideal de uma pessoa.
// Peso ideal de um adulto é calculado assim: 
  // Homens: 22 * alturaˆ2
  // Mulheres: 21 * alturaˆ2

const idealWeight = (gender, height) => {

  if (gender == 'feminine') {
    return (21 * height ** 2).toFixed(2);
  } else return (22 * height ** 2).toFixed(2);
};  

console.log(`O peso ideal é ${idealWeight('feminine', 1.65)}kg.`);