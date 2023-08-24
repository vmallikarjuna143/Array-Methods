// Import stylesheets
// import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Join
const num = ['1', '2', '3', '4'];
console.log(num.join('*'));

// push
const nam = ['arjun', 'krishna', 'Malli'];
console.log(nam.push('kk', 'test'));

const name1 = [1, 2, 3, 4, 5, 6];
console.log(name1.push(7, 8));

// pop
const num1 = ['aa', 'bb', 'cc', 'dd'];
console.log(num1.pop());

const num2 = [1, 2, 3, 4, 5, 6];
console.log(num2.pop());

// shift

// unshift

// for
// foreach
// filter
// splice
// slice
// every
// some
// reduce
// map

const id = [1, 2, 3, 4, 5, 6, 7, 8];
for (var i = 0; i < 5; i++) {
  console.log('abc');
}

const ar = [1, 2, 3, 4, 5, 6, 7];
console.log(ar.includes(4));

// Generate a list of 10 employees
// for (i = 2; i < 12; i++) {
//   console.log("Employee Index:", i);
//   let hobbies;
//   getHobbies();
//   employees.push({
//     id: i,
//     name: 'Arjun - ' + i,
//     gender: i % 2 ? 'M' : 'F',
//     hobbies: ["Music", "Cricket"],
//     phoneNumbers: [{
//       type: 'mobile',
//       number: '',
//       code: ''
//     }],
//   });
// }
// console.log("Employees:", employees);

function getHobbies() {
  const length = Math.floor(Math.random() * 3) + 1;
  console.log('getHobbies - Length:', length);
  let randomNum = [];
  for (i = 0; i < length; i++) {
    const ran = Math.floor(Math.random() * 11);
    console.log('getHobbies - random ' + i + ':', ran);
    if (!randomNum.includes(ran)) randomNum.push(ran);
    else i -= 1;
  }
  console.log('getHobbies - Random Numbers:', randomNum);
  console.log(
    'getHobbies:',
    randomNum.filter((ran) => hobbies[ran])
  );
}

// getHobbies();
