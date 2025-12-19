// 1
function votersAge (age) {
    if (age >= 18) {
        console.log('You are ELIGIBLE to vote!')
    } else {
        console.log('You are NOT ELIGIBLE to vote!!!')
    }
}
votersAge(16)

// 2
for (let i = 0; i <= 20; i++){
    if (i % 3 === 0){  //if (i / 3 && % === 0) {. [what i initially wrote before correcting with chatgbt]
        continue;
    } else {
         console.log(i);
    } 
}

// 3
const num = [22, 440, 37, 105, 10, 1100, 86, 52];
const calcAverage = function (arr) {
    let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i]; //sum = sum + arr[i];
  }
      return sum / arr.length;
};

console.log(calcAverage(num));

// 4
const students = [
    {
        name: 'Claire',
        age: 24,
        class: 'Axia Africa',
        course: 'Front-end Development',
        address: {
            street: '31 Samuel Crescent',
            city: 'Kubwa, Abuja'
        },
        grade: 77
    },
    {
        name: 'John',
        age: 27,
        class: 'Axia Africa',
        course: 'Back-end Development',
        address: {
            street: '89 Niger by Ibo Road',
            city: 'Sabon-gari, Kano State'
        },
        grade: 24
    }
];

function score (student) {
    if (student.grade >= 50) {
        console.log(student.name + ' Passed')
    } else {
        console.log(student.name + ' Failed')
    }
}

students.forEach(student => {
    score(student);
});

// 5
function grade (score) {
    if (score >= 75) {
        console.log('A');
    } else if (score >= 65) {
        console.log('B');
    } else if (score >= 60) {
        console.log('C');
    } else if (score >= 50) {
        console.log('D');
    } else {
        console.log('F')
    }
} 
grade(88);
