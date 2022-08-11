// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example: arr = [1, 1, 2, 2, 3]

// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

function migratoryBirds(arr) {
  // Write your code here
  let frequencys = {};
  
  // Eu percorro a array e jogo no objeto frequencys a chave (id) com a quantidade de vezes que ela aparece (valor). Fica assim: { '1': 1, '3': 1, '4': 3, '5': 1 }
  arr.forEach((frequency) => frequencys[frequency] = (frequencys[frequency] || 0) + 1);

  // Acho que é o valor (frequencia) mais alto em frequencys -> 3
  const highestFrequency = Math.max(...Object.values(frequencys));
  
  // Quero saber quais são as chaves (ids) -> [ '1', '3', '4', '5' ]
  const ids = Object.keys(frequencys); 
  
  // Para enfim achar qual é o o id do passaro (key) que aparece com maior frequencia.
  const highestFrequencyId = ids.find((id) => frequencys[id] === highestFrequency );

  return highestFrequencyId;
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]));
