#!/usr/bin/node

function createClassRoom(numberOfStudents) {
    const students = [];
  
    function studentSeat(seat) {
      return function () {
        return seat;
      };
    }
  
    for (let i = 0; i < numberOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  const classRoom = createClassRoom(10);
  
  console.log(classRoom[0]()); // Cela affichera 1
  console.log(classRoom[3]()); // Cela affichera 4
  console.log(classRoom[9]()); // Cela affichera 10
  