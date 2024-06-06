1 //  converts an array of strings to uppercase

var strings = ["hello", "world"];
var stringsUpper

 = [];

for (let i = 0; i < strings.length; i++) {
    stringsUpper[i] = strings[i].toUpperCase();
     }
    console.log(stringsUpper);


    2 //  create a new array that only contains the even numbers
    

function evennum(){

const numbers = [1, 2, 3, 4, 5, 6];
const evennumbers = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (i % 2 === 0) {
            evennumbers.push(num);
        }
    }

            console.log(evennumbers);
}  

3 //  removes all the empty strings from an array of strings.

    strings = ["hello","","world","","javascript"];
    cleanedstrings = removeEmptystrings(strings);

    function removeEmptystrings(array){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] !== ""){
            result.push(array[i]);
        }
    }
    return result;
}
    console.log(cleanedstrings);

4 // using the reduce method that concatenates an array of strings into a single string, with each word separated by a space.


    words = ["hello", "world", "javascript"];
   
    const concatenateWords = (words) => {
        return words.reduce((accumulator, currentValue) => {
          return accumulator + ' ' + currentValue;
        });
      };
      result = concatenateWords(words);
      console.log(result);


5 // user needs the sum of squared numbers in this array.


    const array = [4, 'hello', 3, true, 'Uki', 5];

    let sumOfSquares = 0;

    for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number') {
    sumOfSquares += array[i] * array[i];
     }
}

    console.log(sumOfSquares);


6 // returns a new array with the elements in reverse order.


let originalArray = [1,2,3,4,5];
let reversedArray = reverseArray(originalArray);

function reverseArray(array){
    return array.slice().reverse();
}
console.log(reversedArray);


7 // Create a function createPerson that returns an object representing a person with
// properties name, age, and a method greet that logs a greetinmessage something like
// "Hello, my name is John and I am 25 years old." 

const person = createPerson('John', 25);
person.greet(); 

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${name} and I am ${age} years old.`);
        }
    };
}




const student = [
    { name: 'Alice', grade: 90 },
    { name: 'Bob', grade: 70 },
    { name: 'Charlie', grade: 85 }
];

function getHighGrades(students) {
    return students.filter(student => student.grade > 80).map(student => student.name);
}
    console.log(getHighGrades(students));


10 // Write a JavaScript code to check if a variable age is greater than or equal to 18, and print
// "Adult" if true.

function FindAge(){
    let age = 18;

    if(age >= 18){
        console.log("Adult")
    }else {
        console.log("Minor")
    }
}

11 // Write a JavaScript code to check if a variable score is passing (>=50), and print "Pass" if true,
// otherwise print "Fail".

function FindScore(){
    score = 50;

    if(score >= 50){
        console.log("Pass")
    }else{
        console.log("Fail")
    }
}

12 //  Write a JavaScript code to categorize a variable grade into "Excellent" (>=90), "Good"
// (>=75), "Average" (>=50), and "Poor" (<50).

function FindGrade(){
    var mark = 50;

    if(mark >= 90){
        console.log("Excellent")

    }else if(mark >=75 && mark < 90){

        console.log("Good")

    }else if(mark >= 50 && mark < 75){

        console.log("Average")
    }else if(mark <50){

        console.log("Poor")
    }
}


13 //  Write a function addTask that takes an array of tasks and a task to add to the list. The
// function should return the updated array of tasks.

    const tasks = ['Buy groceries', 'Clean the house'];

    function addTask(tasks, newTask) {

    tasks.push(newTask);
    return tasks;

    }

    console.log(addTask(tasks, 'Pay bills'));



14 // 14. Write a function findCommonElements that takes two arrays and returns an array
// containing the common elements between the two.


function FindCommonElements(){
    const array1 = [1,2,3,4,5,6,7,8,9,10];
    const array2 = [2,4,5,7,11,15];
    const common = [];
    
    for(let i = 0; i < array1.length; i++){
    for(let j = 0; j < array2.length; j++){
        if(array1[i] === array2[j])
            common.push(array1[i]);
        }
    }
    console.log(common);
}

15 // Write a function updateEmployeeRecord that takes an employee object and an object of
// updates, and returns the updated employee object.

const employee = {
    name : "John",
    position : "Developer",
    salary : 50000
}

const updates = {
    position : "Senior Developer",
    salary : 60000,
    age :29
}

const updatedEmployee = UpdateEmployeeRecord(employee, updates);

function UpdateEmployeeRecord(employee, updates){
    console.log({...employee});
    console.log({...updates});
    console.log({...employee,...updates})

}


    
        
    






17 //  Write a function applyDiscount that takes a price and a discount percentage, and returns the
// price after the discount has been applied. Use default parameters to set the discount
// percentage to 10% if not provided.


function applyDiscount(price, discount = 10) {
    const discountAmount = (discount / 100) * price;
    return price - discountAmount;
}

console.log(applyDiscount(100)); 
console.log(applyDiscount(100, 20));

    





18 // Write a recursive function factorial that takes a number n and returns the factorial of n.


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));


19 // Write a function registerUser that takes an array of user objects and a new user object,
// checks if the username already exists, and if not, adds the new user to the array.

function registerUser(users, newUser) {
    
    const existingUser = users.find(user => user.username === newUser.username);

    if (existingUser) {
        console.log(`Username ${newUser.username} already exists.`);
    } else {
        users.push(newUser);
        console.log(`User ${newUser.username} added successfully.`);
    }

    return users;
}


let users = [
    { username: 'john_doe', email: 'john@example.com' },
    { username: 'jane_doe', email: 'jane@example.com' }
];

let newUser = { username: 'alice_smith', email: 'alice@example.com' };
users = registerUser(users, newUser);

console.log(users);
















    