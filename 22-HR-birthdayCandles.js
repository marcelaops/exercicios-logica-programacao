// enunciado: https://www.hackerrank.com/challenges/birthday-cake-candles/problem?h_r=internal-search

function birthdayCakeCandles(candles) {
  let tallestCandle = 0;
  let countOfCandles = 0;
  let index = 0;

  for (index in candles) {
    if (candles[index] >= tallestCandle) tallestCandle = candles[index];
    // if (candles[index] == tallestCandle) countOfCandles += 1;    Botando dentro desse for deu erro nos testes do HR, então deixei fora. Poderia ter usado o sort igual o Gus fez
  }

  // Usando o sort e depois pegando o ultimo item da array (o maior item). Depois teria que faze rum for ou forEach e ver quantas vezes esse item aparece na array cnadles

  for(index in candles) {
    if(candles[index] == tallestCandle)countOfCandles += 1;
  }

  return countOfCandles;
}


console.log(birthdayCakeCandles([3, 2, 1, 3]));
// console.log(birthdayCakeCandles([3, 3, 3, 3]));
