//1.Create an array of numbers and take input from the user to add numbers to this array.

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let a=prompt("Enter the number to check in the array")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)



//2.Keep adding numbers to the array until the user enters 0.

// let arr=[1,2,3,4,5,6,7,8,9,10]
// let a;
// do{

//     a = prompt("Enter the number to add to the array (enter 0 to stop)")
//     a = Number.parseInt(a)
//     arr.push(a)
//     }while(a!=0)


// console.log(arr)


//3.Filter four numbers divisible by 10 from the array.

// let arr=[10,20,30,1,2,4,50]

// let result = arr.filter(function(a) {
//     return a % 10 === 0;
// });
// console.log(result);

//or

// let arr=[10,20,30,1,2,4,50]
// let result=arr.filter((a) => a%10==0)
// console.log(result)


//4.Create an array of square of given numbers.

// let arr=[1,2,3,4,5,6,7,8,9,10]

// let result=arr.map((a) => a*a)  
// console.log(result)


//5.Use reduce to calculate factorial of a given number from an array of first n natural numbers.(n being the number whose factorial needs to be calculated)

// let arr=[1,2,3,4,5,6]

// let result=arr.reduce((x1,x2)=>{
//     return x1*x2
// })
// console.log(result)