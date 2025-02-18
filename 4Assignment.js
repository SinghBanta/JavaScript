/*1.Write a function sum that finds the sum of two numbers. 
Side quest - Try passing in a string instead of a number and see what happens?*/

// const sum = (a, b) => {
//   return a + b;
// };

// let x=2
// let y=3

// let result = sum(x, y);
// console.log("Sum:", result);


//2.Write a function called canVote that returns true or false if the age of a user is > 18

// const canVote = (age) => {
//   if(age>18){
//     return true
//   }else{
//     return false
//   }
// }

// let age = 21
// let result = canVote(age)
// console.log(result)


//3.Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

// const oddoreven=(n)=>{
//   if(n%2==0){
//     return "even"
//   }else{
//     return "odd"
//   }
  
// }

// let n=21
// let result=oddoreven(n)
// console.log(result)


//4.Write a function called sum that finds the sum from 1 to a number
// const sum=(n)=>{
//   let add=0
//   for(let i=0;i<n;i++){
//     add+=i+1
    
//   }
//   return add
// }


// let n=5
// let result=sum(n)
// console.log(result)


//5.Write a function that takes a user as an input and greets them with their name and age4

// const greet=(name,age)=>{
//   return `Hello My name is ${name} of age is ${age}.`
// }

// let name="Banta Singh"
// let age=22

// let result=greet(name,age)
// console.log(result)


//6.Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
// const greet=(info)=>{
//   // return `Hi ${info["gender"]} ${info["name"]}, your age is ${info["age"]}`
//   return `Hi ${info.gender} ${info.name}, your age is ${info.age}`
// }

// let info={
//   name:"Banta Singh",
//   age:22,
//   gender:"Mr"
// }

// let result=greet(info)
// console.log(result)


//7.Write a function that takes an array of numbers as input, and returns a new array with only even values.

// const even = (numbers) => {
//   let evens = []; // Store even numbers
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       evens.push(numbers[i]); // Add even numbers to the array
//     }
//   }
//   return evens; // Return the array of even numbers
// };

// let numbers = [1, 2, 3, 4, 5];

// let result = even(numbers);
// console.log(result); // Output: [2, 4]


/*8.Create a function that takes an array of objects as input,
and returns the users whose age > 18 and are male*/

// const age = (users) => {
//   let eligibleUsers = [];
  
//   // users.forEach(user => {
//   //   if (user.age > 18) {
//   //     eligibleUsers.push(user.name);
//   //   }
//   // });
//   //or
  
//   for (let i=0;i<users.length;i++){
//     if (users[i].age>18){
//       eligibleUsers.push(users[i].name)
//     }
//   }

//   return eligibleUsers; // Return an array of names
// };

// const users = [
//   { name: "Harkirat", age: 17 },
//   { name: "Ajay", age: 22 }
// ];

// let result = age(users);
// console.log(result); // Output: ["Ajay"]




