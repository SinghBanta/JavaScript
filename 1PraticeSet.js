//1.Create a variable of type string and try to add a number to it.

// let str="Banta Singh"
// let result=str+22;
// console.log(result)
//Banta Singh22 because it is doing concatenation not addition, it is not adding 22 to the string but it is adding 22 as a string to the string.


//2.use typeof operator to check the data type of the variable.
// console.log(typeof(result))
//string


//3.Create a constant object in JavaScript,can you change it to hold a number later.

// const info={
//     name:"Banta Singh",
//     age:22,
//     section:"A"
// }

// info["section"]=2;
//or
// info.section=2;
// console.log(info)
//{ name: 'Banta Singh', age: 22, section: 2 }
//yes we can change the value of the object but we can't change the object itself.



//4.Try to add new key to the const object in problem 3.

// info["gender"]="Male";
// console.log(info)

//{ name: 'Banta Singh', age: 22, section: 'A', gender: 'Male' }
//Yes, we can add new key to the object but we can't change the object itself.



//5.Write a Js programme to create a word meaning dictionary of 5 words.

// const dictionary={
//     Abandon:"Cease to support or look after (someone); desert.",
//     Benevolent:"Well meaning and kindly.",
//     Candid:"Truthful and straightforward; frank.",
//     Diligent:"Having or showing care and conscientiousness in one's work or duties.",
//     Eloquent:"Fluent or persuasive in speaking or writing."
// }

// console.log(dictionary)
// console.log(dictionary["Abandon"])
//or
// console.log(dictionary.Diligent)