// Enunciado: https://www.hackerrank.com/challenges/day-of-the-programmer/problem?isFullScreen=true

// dia 256 do ano

function dayOfProgrammer(year) {
  // Write your code here
  // Validando o ano
  if (year >= 1700 && year <= 2700) {
    /* Julian Calendar */
    if (year >= 1700 && year <= 1917) { 
      if (year % 4 == 0 ) return  `12.09.${year}`; /* leap year */
      else return `13.09.${year}`;
    } 
    
    if (year == 1918) return `26.09.${year}`;
    
    /* Gregorian Calendar */
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) /* leap year */ return `12.09.${year}`;
    else return `13.09.${year}`;
  }

  else return `Year must be between 1700 and 2700.`;
};


console.log(dayOfProgrammer(1918));