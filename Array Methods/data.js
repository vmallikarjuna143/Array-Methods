const employees = [];
const maleFirstName = [
  'Arjun',
  'Gautham',
  'Krishna',
  'Pavan',
  'Kiran',
  'Venky',
  'Arun',
  'Hari',
  'Sudhakar',
  'Jashu',
];
const femaleFirstName = [
  'Divya',
  'Shivani',
  'Anitha',
  'Usha',
  'Gouthami',
  'Akhila',
  'Alekhya',
  'Mounika',
  'Kareena',
  'Katrina',
];
const lastName = [
  'Reddy',
  'Varma',
  'Rao',
  'Goud',
  'Yadav',
  'Singh',
  'Choudary',
  'Naidu',
  'Kapoor',
  'Chopra',
];
const hobbies = [
  'Music',
  'Cricket',
  'Meditation',
  'Chess',
  'Painting',
  'Puzzles',
  'Games',
  'Reading',
  'Swimming',
  'Yoga',
  'Treaking',
];
const salary = [
  10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000,
];

// Generate a list of employees
function generateEmployeesData() {
  for (i = 1; i <= 10; i++) {
    // console.log("Employee Index:", i);
    let firstName = getData(i, 1, 10, 'firstName').toString();
    let lastName = getData(i, 1, 10, 'lastName').toString();
    let hobbies = getData(i, 3, 11, 'hobbies');
    let salary = getData(i, 1, 10, 'salary')[0];
    employees.push({
      id: i,
      firstName: firstName,
      lastName: lastName,
      fullName: firstName + ' ' + lastName,
      gender: i % 2 ? 'M' : 'F',
      hobbies: hobbies,
      phoneNumbers: [
        {
          type: 'mobile',
          number: '',
          code: '',
        },
      ],
      salary: salary,
    });
  }
  console.log('Employees:', employees);
}

function getData(empIndex, min, max, type) {
  const length = Math.floor(Math.random() * min) + 1;
  // console.log("getHobbies - Length:", length);
  let randomNum = [];
  for (j = 0; j < length; j++) {
    const ran = Math.floor(Math.random() * max);
    // console.log("getHobbies - random " + j + ":", ran);
    if (!randomNum.includes(ran)) randomNum.push(ran);
    else j -= 1;
  }
  // console.log("getHobbies - Random Numbers:", randomNum);
  // console.log("getHobbies:", randomNum.map(ran => hobbies[ran]));
  if (type === 'firstName') {
    return randomNum.map((ran) =>
      empIndex % 2 ? maleFirstName[ran] : femaleFirstName[ran]
    );
  } else if (type === 'lastName') {
    return randomNum.map((ran) => lastName[ran]);
  } else if (type === 'hobbies') {
    return randomNum.map((ran) => hobbies[ran]);
  } else if (type === 'salary') {
    return randomNum.map((ran) => salary[ran]);
  }
}
