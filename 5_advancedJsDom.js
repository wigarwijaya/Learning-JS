// *** Adding Event Listener, Higher Order Functions and Functions as Arguments, Javascript Object ***

// ------------------------------------------------------------
// *** Event Listener ***

document.querySelector("button").addEventListener("click", function () {
  alert("I got clicked!");
});

// ------------------------------------------------------------
// *** Higher Order Functions and Functions as Arguments ***

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

// make function as input to another function
function calculator(num1, operator, num2) {
  return operator(num1, num2);
}

// debugger; to show you the step-by-step of a function flow
calculator(3, add, 4);

// ------------------------------------------------------------
// *** Javascript Object ***

// structure || has variable name (bellBoy1), property (name, age, hasWorkPermit, ect), value ("Depp", 24, etc)
// let bellBoy1 = {
//     name : "Depp",
//     age : 24,
//     hasWorkPermit : true,
//     language : ["English", "French"]
// }
// bellBoy1l;
// console.log(bellBoy1.name);
// alert("hello, my name is " + bellBoy1.name);

// create an object template calles Constructor Function (name of the function has to be capitalized)
// function BellBoy (name, age, hasWorkPermit, languages) {
//     this.name = name;
//     this.age = age;
//     this.hasWorkPermit = hasWorkPermit;
//     this.languages = languages;
// }

// // Initialise Object
// let bellBoy1 = new BellBoy("Depp", 24, true, ["English", "French"]);

// ------------------------------------------------------------
// *** Switch Statement ***

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

switch (buttonInnerHTML) {
  case "w":
    let tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  case "a":
    let tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  case "s":
    let tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
  case "d":
    let tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
  case "j":
    let snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
  case "k":
    let crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "l":
    let kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
  default:
    console.log(buttonInnerHTML);
    break;
}

// ------------------------------------------------------------
// *** Objects, Their Methods and the Dot Notation ***

let bellBoy1 = {
  name: "Depp",
  age: 24,
  hasWorkPermit: true,
  language: ["English", "French"],
  moveSuitcase: function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    this.moveSuitcase();
  },
};

bellBoy1.moveSuitcase();

// Constructure Function

function BellBoy(name, age, hasWorkPermit, languages) {
  this.name = name;
  this.age = age;
  this.hasWorkPermit = hasWorkPermit;
  this.languages = languages;
  this.moveSuitcase = function () {
    alert("May I take your suitcase?");
    pickUpSuitcase();
    this.moveSuitcase();
  };
}

// isn't it similar?

// let tom1 = new Audio("sounds/tom-1.mp3");
// let bellBoy1 = new BellBoy("Depp", 24, true, ["English", "French"]);

// we can guess that Audio constructor function could be like this:

// function Audio (fileLocation){
//     this.fileLocation = fileLocation;
//     this.play = function() {
//      Tap the audio hardware
//      Check the file at filelocation exist
//      Check the file at filelocation is a sound file
//      Play the file at filelocation
//     }
// }

// ------------------------------------------------------------
// *** Understanding Callbacks and How to Respond to Events ***

// document.addEventListener("click", function(event){
//     console.log(event);
// })

// what happend behind is:

// function anotherAddEventListener(typeOfEvent, callback){

// // Detect Event Code

// let eventThatHappened = {
//     eventType: "keypress",
//     key: "p",
//     durationOfKeypress: 2
// }
// if (eventThatHappened.eventType === typeOfEvent){
//     callback(eventThatHappened);
// }
// }

// ------------------------------------------------------------

// *** All of the implementation of this course is on Drum-Kit Challange ***

