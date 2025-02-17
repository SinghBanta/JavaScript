//1.Write a programmer to print marks of a student in a object using for loop.

// const students={
//     Banta_Singh:98,
//     Ajay_Kumar:97,
//     Aryan_Jha:100
// }

// for(let key in students){
//     console.log("Marks of " + key + " " + students[key])
// }


//2.Using purely using for loop.

// const students={
//     Banta_Singh:98,
//     Ajay_Kumar:97,
//     Aryan_Jha:100
// }
// for(let i=0;i<Object.keys(students).length;i++){//Object.keys(students).length will give the length of the object and Object.keys(students) will give the keys of the object.
//     console.log("Marks of " + Object.keys(students)[i] + " " + Object.values(students)[i])//Object.keys(students)[i] will give the keys of the object and Object.values(students)[i] will give the values of the object.
// }


//3.Write a programme to print "try again" until the user enters the correct number.
// let number=4;
// let guess;

// while(guess!=number){
//     guess=Number(prompt("Enter the number"))
//     console.log("Try again")
// }
// console.log("Congratulations you have entered the correct number")


//4.Find mean of the numbers entered by the user.

// function mean(a){
//     let sum=0
//     let avg
//     for(let i=1;i<=a;i++){
//         sum+=i
//         avg=sum/a
//     }
//     return avg;

// }

// let n=5
// let result=mean(n)
// console.log(result)


//or

// const mean=(a)=>{
//     let sum=0
//     let avg;
//     for(let i=0;i<a.length;i++){
//         sum+=a[i]//a[i] will give the elements of the array.
//         avg=sum/a.length
//     }
//     return avg;
// }

// let number=[1,2,3,4,5]
// let result=mean(number)
// console.log(result)


//or

// const mean=(a,b,c,d,e)=>{
//     return (a+b+c+d+e)/5

// }
// let result=mean(1,2,3,4,5)
// console.log(result)



//Some Questions Based on operators,loops and functions.


// let a=10

// console.log(++a)//11 in memory 11
// console.log(a++)//11 in memory 12
// console.log(--a)//11 in memory 11
// console.log(a--)//11 in memory 10
// console.log(a)//10   in memory 10
// console.log(a--)//10 in memory 9


// let sum=0
// let n=5

// for(let i=0;i<n;i++){
//   sum+=i+1
  
// }

// console.log(sum)


// let info={
//   Banta:51,
//   Ajay:49,
//   Aryan:54
// }

// for(let key in info){
//   console.log("Marks of " + key + " are " + info[key])
// }


// for(let b of "Harry"){
//   console.log(b)
// }


// let n=10
// i=0

// while(i<n){
//   console.log(i)
//   i++
// }

// let i=0

// do{
//   console.log(i)
//   i++
  
// }while(i<10)



// function average(x,y,z){
//   return x+y+z/3
// }

// let a=23
// let b=24
// let c=20

// let result=average(a,b,c)
// console.log(result)


// const average=(x,y,z)=>{
//   return x+y+z/3
  
// }

// let a=23
// let b=24
// let c=20

// let result=average(a,b,c)
// console.log(result)


