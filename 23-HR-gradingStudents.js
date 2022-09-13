function gradingStudents(grades) {
  let index = 0;

  for (index in grades) {
    if (grades[index] >= 38) {
      if (grades[index] % 5 === 3) grades[index] += 2;
      else if (grades[index] % 5 === 4) grades[index] += 1;
    }
  }

  return grades;
}

// grades = integer array of grades

console.log(gradingStudents([73, 67, 38, 33])); 
// tem q retorna [75 67, 40, 33]