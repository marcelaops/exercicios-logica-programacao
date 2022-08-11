// Staircase detail

// This is a staircase of size n = 4:
      // #
      // ##
      // ###
      // ####

// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

function staircase(n) {
  // Write your code here
  let symbol = '#';
  let inputLine = '';
  let inputPosition = n - 1;

  for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
    for (let columnIndex = 0; columnIndex < n; columnIndex += 1){
      if (columnIndex < inputPosition) inputLine += ' ';
      else inputLine += '#'

    }
    console.log(inputLine);
    inputLine = '';
    inputPosition -= 1;
  }
}

staircase(4);