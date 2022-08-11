// Two cats and a mouse are at various positions on a line. You will be given their starting positions. Your task is to determine which cat will reach the mouse first, assuming the mouse does not move and the cats travel at equal speed. If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

// You are given  queries in the form of , , and  representing the respective positions for cats  and , and for mouse . Complete the function  to return the appropriate answer to each query, which will be printed on a new line.

// If cat  catches the mouse first, print Cat A.
// If cat  catches the mouse first, print Cat B.
// If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.
// Example: x = 2, y = 5,, z = 4


// The cats are at positions 2 (Cat A) and 5 (Cat B), and the mouse is at position 4 . Cat B, at position 5 will arrive first since it is only 1 unit away while the other is 2 units away. Return 'Cat B'.

function catAndMouse(x, y, z) {
  // const queries = 
  const differenceAC = Math.abs(x - z);
  const differenceBC = Math.abs(y - z);

  if (differenceAC < differenceBC) return ('Cat A');
  else if (differenceAC > differenceBC) return('Cat B');
  else return ('Mouse C');
}

console.log(catAndMouse(1, 3, 2));