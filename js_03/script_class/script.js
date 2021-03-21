// let a = 1;
// let b = 2;
// let result = a + b;

// console.log(result);

// let c = 3;
// let d = 4;
// result2 = c + d;
// console.log(result2);


// INPROPER FUNCTION CALLING
// calculateTwoNumbers();

//function declaration
// function  calculateTwoNumbers() {
//     let e = 1;
//     let f = 2;
//     let result3 = e + f;
//     console.log(result3);

// }

// PROPER FUNCTION CALLING
// calculateTwoNumbers();

// function sayHello() {
//     alert("Hello World");
// }

// sayHello();
// sayHello();
// sayHello();


// function myFunction(  x,y  ) {
//     let myVar = x * y;
//     console.log(myVar);
// }

// myFunction(1,3);
// myFunction(2.3);
// myFunction(100,232131);


// function sayHelloToUser(firstName) {
//     console.log(`Hello ${firstName} `)
// }

// sayHelloToUser('Peter');
// sayHelloToUser(false);

// function sayHelloToUser(firstName, lastName) {
//     console.log(`Hello ${firstName} ${lastName}`)
// }



// sayHelloToUser("Viktor","Zafirovski");

// function  calculateTwoNumbers(e, f) {
//         let result3 = e + f;
//         console.log(result3);
    
//  }


 // properly called func
//  calculateTwoNumbers(1, 2);
//  calculateTwoNumbers(4, 4);
//  calculateTwoNumbers(10, 20);
// non properly called
//  calculateTwoNumbers(1.3, 0.02);
//  calculateTwoNumbers('Hello',  'Viktor');
// calculateTwoNumbers();
// calculateTwoNumbers(4);
// calculateTwoNumbers("Viktor");
// calculateTwoNumbers(1, 2, 3, 4);

// function average(num1, num2, num3){
//     if((typeof(num1) === 'number' && num1 > 0)
//     && (typeof(num2) === 'number' && num2 > 0)
//     && (typeof(num3) === 'number' && num3 > 0)){
//         let result = (num1 + num2 + num3) / 3;
//         console.log(`Average of three numbers ${num1},
//         ${num2} and ${num3} is ${result}`);
//     }else{
//         console.log("Please enter a number that is positive.")
//     }
// }

// average('number', 4, 4);
// average();
// average(10,20,30);
// average(10,20,350);
// average(10,20,30,40,50);

// Func returning values;
// function sumOfThreeNumbers(num1, num2, num3) {
//     let result = num1 + num2 + num3;
//     return result;
// }

// console.log(sumOfThreeNumbers(1, 2, 3));

// function sumsNumber(num1, num2) {
//     let result = num1 + num2;
     
//      return result;
// }

// let sum = sumsNumber(54, 42);

// function subNumber(a, b) {
//    let result = a - b;
    
//     return result;
// }

// let sub = subNumber(123, 213);

// function multNumber(a, b) {
//     let result = a * b;
//     return result;
// }

// let mult = multNumber(83, 8);

// function divNumber(a, b) {
//     let result = a / b;
//     return result;
// }

// let div = divNumber(790, 34);


// function print(message){
    
// }

// print(sum);
// print(sub);
// print(mult);
// print(div);

// function parametersName(firstName, lastName, age) {
//     if(age >= 60) {
//         console.log(`Hi ${firstName} ${lastName}, Welcome to the site`);
//     }
//     else(age < 60); {
//         console.log(`Sorry ${firstName} ${lastName}, you are not allowed`);
//     }
// }

// parametersName("Viktor", "Zafirovski", 37);


// SCOPE

// function convertToFar( celsius, x, fanhrenheit ) {
//     let convert = celsius * x + fanhrenheit;
//     console.log(convert);
// }

// convert(40,1.8,32);

// function convertToFar( celsius, x, fanhrenheit ) {
//     let convert = (celsius / x) * (fanhrenheit - 32);
//     console.log(convert);
// }

// convert(5,9,32);

function calculateAge( birthYear, currentYear  ) {
    let calculateAge = currentYear - birthYear;
    console.log(calculateAge);
}

let promptInput = prompt("Enter your birth year");
console.log(promptInput);

let birthYear = parseInt(promptInput);
console.log(birthYear);

calculateAge( birthYear ,new Date().getFullYear());

