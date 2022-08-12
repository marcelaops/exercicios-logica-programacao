// Análise e Desenvolvimento de Sistemas (ENADE 2021 - Questão 3).
// Considere a realização de uma pesquisa com 1 000 pessoas para obtenção das seguintes informações:
// o valor da maior altura; o valor da menor altura; a média das alturas; quantas pessoas têm altura inferior à média das alturas.
// Considere, ainda, que um programador foi selecionado para desenvolver um modelo de código que soluciona o problema automatizando a coleta das alturas e a geração das informações.
// Com base nas informações apresentadas, desenvolva o código adequado para resolver o problema usando pseudocódigo ou uma linguagem de programação.

const heigthAnalysis = (heigths) => {
  const heigthsCrescent = heigths.sort();
  const highest = heigthsCrescent[heigthsCrescent.length - 1];
  const lower = heigthsCrescent[0];
  
  const heigthsSum = heigths.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  const heigthsSize = heigths.length;
  const averageHeigth = heigthsSum / heigthsSize;
  
  const lowersAverageSum = (heigths.filter((heigth) => heigth < averageHeigth)).length;

  return `
    Maior altura: ${highest.toFixed(2)}m
    Menor altura: ${lower.toFixed(2)}m
    Média das alturas: ${averageHeigth.toFixed(2)}m
    Pessoas com altura menor do que a média: ${lowersAverageSum}
  `;
};

const heigthSearch = [1.80, 1.40, 1.65, 1.35, 1.70];
const heigthSearch2 = [1.80, 1.67, 1.90, 2.03, 1.68];
// console.log(heigthAnalysis(heigthSearch2));

// Extra: para popular a array das alturas das pessoas.
let heights = [];
const createPeople = (amount) => {
  for (let index = 0; index < amount; index += 1) {
    heights.push((Math.random() * (2.5 - 1.3) + 1.3));
  }
};
createPeople(10);
// console.log(heights); 
console.log(heigthAnalysis(heights));


