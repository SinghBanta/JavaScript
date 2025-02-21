//1.What will the following print in  JavaScript.[console.log("har\" ".length)];

// console.log("har\"".length); //5


//2.Explore the includes, startsWith and endsWith methods in JavaScript and write a program to test these methods.

// let str = "Let me finish this";
// let word="finish";
// console.log(str.includes(word))
// console.log(`The word ${word} ${str.includes(word) ? 'is' : 'is not'} in the string`)


// const str1 = "Saturday night plans";

// console.log(str1.startsWith("Sat"));
// // Expected output: true

// console.log(str1.startsWith("Sat", 3));
// // Expected output: false


// const str1 = "Cats are the best!";

// console.log(str1.endsWith("best!"));
// // Expected output: true
// console.log(str1.endsWith("best", 17));
// // Expected output: true

// const str2 = "Is this a question?";
// console.log(str2.endsWith("question"));
// // Expected output: false


//4.Write a program to convert a given string to lowercase.

// let str="My aim to EXPLORE new things."
// console.log(str.toLowerCase(str))


//5.Extract the amount out of this string "Please give Rs 1000"

// let str="Please give Rs 1000"
// console.log(str.slice(15))


//6.Try to change 4th characters of a given string where you able to do it.

// let str="I watt to become Software Developer"
// let result=str.replace("t","n")
// console.log(result)

//or

// let str="Virat"
// str[2]="t"
// console.log(str)//String remain same as Vitat because string is immutable

