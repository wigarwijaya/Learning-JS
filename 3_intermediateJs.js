// *** Intermediate Javascript (If Else, Comparators & Equality), Arrays ***

// ------------------------------------------------------------
// *** Get a random number (Math.random()) ***

// let n = Math.random();
// n = n * 6;
// n = Math.floor(n * 6) + 1;
// n

// var yourName = prompt("Input your name here!");
// var theirName = prompt("Input her / his name here!");

// var yourNameLength = yourName.length;
// var theirNameLength = theirName.length;

// var calculate = Math.floor(n * 100) + 1;
// calculate
// alert("Your love score is " + calculate + "%");

// ------------------------------------------------------------
// *** If Else ***
// *** important that the order of the "IF" is important, because once it's found a condition that's true, it will skip every other avenue!!!

// if (calculate >= 70) {
//     alert("Your love score is " + calculate + "%" + " Your love is like Ellie's love");
// } else {
//     alert("Your love score is " + calculate + "%");
// }

// ------------------------------------------------------------
// *** Combining Comparators ***

// if (calculate >= 70) {
//     alert("Your love score is " + calculate + "%" + " Your love is like Ellie's love");
// } else if (calculate >= 30 && calculate < 70) {
//     alert("Your love score is " + calculate + "%" + " Your love is like Karen's love");
// } else if (calculate < 30) {
//     alert("Your love score is " + calculate + "%" + " Your love is like Karen's love");
// } else {
//     alert("Your love score is " + calculate + "%");
// }

// ------------------------------------------------------------
// BMI Calculator Advanced (IF/ELSE)

// function bmiCalculator (weight, height) {
//     let bmiCalc = weight / Math.pow (height,2);
//     let interpretation = Math.floor(bmiCalc);
//     if (interpretation <= 18.5) {
//     return  "Your BMI is "+interpretation+", so you are underweight.";
//     } else if (interpretation > 18.5 && interpretation <= 24.9){
//     return  "Your BMI is "+interpretation+", so you have a normal weight.";
//     } else if (interpretation > 24.9){
//     return  "Your BMI is "+interpretation+", so you are overweight.";
//     } return interpretation;
// }

// bmiCalculator(60, 2);

// ------------------------------------------------------------
// Leap Year Challenge Excercise

// function isLeap(year) {
//     /**************Don't change the code above****************/

//     let dividedBy4 = year % 4;
//     let dividedBy100 = year % 100;
//     let dividedBy400 = year % 400;

//     if (dividedBy4 !== 0){
//         return "Not leap year.";
//     } else if (dividedBy4 === 0 && dividedBy100 !== 0){
//         return "Leap year.";
//     } else if (dividedBy4 === 0 && dividedBy100 === 0 && dividedBy400 !== 0){
//         return "Not leap year.";
//     } else if (dividedBy4 === 0 && dividedBy100 === 0 && dividedBy400 === 0){
//         return "Leap year.";
//     }

//     /**************Don't change the code below****************/
//  }

//  OR

// function isLeap(year){
//     if (year % 4 === 0){
//         if (year % 100 === 0){
//             if (year % 400 === 0){
//                 return "Leap year."
//             } else {
//                 return "Not leap year."
//             }
//         } else {
//             return "Leap year."
//         }
//     } else {
//         return "Not leap year."
//     }
// }

// isLeap(2024);

// ------------------------------------------------------------
// *** Arrays ***

// let guestList = [ "Alpha", "Beta", "Charlie", "Delta", "Echo" ];
// let guestName = prompt("What's your name?");

// // guestList.includes(guestName);

// let firstLetter = guestName.slice(0,1);
// let nameInUpperCase = firstLetter.toUpperCase();

// let restOfTheName = guestName.slice(1, guestName.length);
// let nameInLowerCase = restOfTheName.toLowerCase();

// let assemble = nameInUpperCase + nameInLowerCase;

// if (guestList.includes(assemble) === true){
//     alert("Hello " + assemble + ", welcome back!");
// } else {
//     alert("Lau sokap?");
// }

// ------------------------------------------------------------
// *** Arrays (Push) ***

// let output = [];
// let count = 1;

// function fizzBuzz() {
//     if (count % 3 === 0 && count % 5 === 0){
//         output.push("FizzBuzz");
//     } else if (count % 3 === 0){
//         output.push("Fizz");
//     } else if (count % 5 === 0){
//         output.push("Buzz");
//     } else {
//         output.push(count);
//     }
//     count++;
//     console.log(output);
// }

// fizzBuzz();

// ------------------------------------------------------------
// Who's Buying Lunch? Code Challenge

// let names = ["Wigaro", "Kokousro", "Bejo", "Reno", "Bale", "Temon", "Labieb"];

// function whosPaying(names) {

//     /******Don't change the code above*******/

//     //Write your code here.
//     let numberOfNames = names.length;
//     let randomPick = Math.floor(Math.random() * numberOfNames);
//     let randomNames = member[randomPick];
//     return randomNames + " is going to buy lunch today!";

//     /******Don't change the code below*******/
//     }

// ------------------------------------------------------------
// *** While Loops ***

// let output = [];
// let count = 1;

// function fizzBuzz() {
//     while(count <= 100) {
//     if (count % 3 === 0 && count % 5 === 0){
//         output.push("FizzBuzz");
//     } else if (count % 3 === 0){
//         output.push("Fizz");
//     } else if (count % 5 === 0){
//         output.push("Buzz");
//     } else {
//         output.push(count);
//     }
//     count++;
//     console.log(output);
//     }
// }

// ------------------------------------------------------------
// Bottles Challange

// function beer() {
//   let numberOfBottle = 99;
//   while (numberOfBottle >= 0) {
//     if (numberOfBottle > 1) {
//       console.log(
//         numberOfBottle +
//           " bottles of beer on the wall, " +
//           numberOfBottle +
//           " bottles of beer. Take one down and pass it around, " +
//           (numberOfBottle - 1) +
//           " bottles of beer on the wall"
//       );
//     } else if (numberOfBottle === 1) {
//       console.log(
//         numberOfBottle +
//           " bottle of beer on the wall, " +
//           numberOfBottle +
//           " bottle of beer. Take one down and pass it around, no more bottles of beer on the wall"
//       );
//     } else {
//       console.log(
//         "No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall."
//       );
//     }
//     numberOfBottle--;
//   }
// }

// ------------------------------------------------------------
// *** For Loops ***

// let output = [];

// function fizzBuzz() {
//   for (let count = 1; count <= 100; count++) {
//     if (count % 3 === 0 && count % 5 === 0) {
//       output.push("FizzBuzz");
//     } else if (count % 3 === 0) {
//       output.push("Fizz");
//     } else if (count % 5 === 0) {
//       output.push("Buzz");
//     } else {
//       output.push(count);
//     }
//     // console.log(output);
//   }
//   console.log(output);
// }

// ------------------------------------------------------------
// The Fibonacci Excercise

// function fibonacciGenerator(n) {
//   //Do NOT change any of the code above 👆

//   //Write your code here:
//   let output = [];
//   let a = 0;
//   let b = 1;

//   if (n === 0) {
//     return (output = []);
//   } else if (n === 1) {
//     return (output = [a]);
//   } else if (n === 2) {
//     return (output = [a, b]);
//   }

//   output = [a, b];
//   for (let i = 3; i <= n; i++) {
//     let c = b + a;
//     output.push(c);
//     a = b;
//     b = c;
//   }
//   return output;
//   //Return an array of fibonacci numbers starting from 0.

//   //Do NOT change any of the code below 👇
// }

// OR

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:
  let output = [];
  if (n === 0) {
    output = [];
  } else if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (let i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  return output;
  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}
