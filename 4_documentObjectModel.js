// *** Document Object Model (DOM) ***

// ------------------------------------------------------------
// Selecting HTML Elements with Javascript

// it will through the web page and it searches for the element with a particular tag name
document.getElementsByTagName("li");

// check the length of the tag, since it's an array data type
document.getElementsByTagName("li").length;

// e.g
document.getElementsByTagName("li")[2].style.color = "green";

// ------------------------------------------------------------
// it allows you to select an element based on the name of class
document.getElementsByClassName("btn");

// check the length of the tag, since it's an array data type
document.getElementsByClassName("btn").length;

// ------------------------------------------------------------
// if you use this method, you only get back one item instead of an array
document.getElementById("title")

// e.g
document.getElementById("title").innerHTML = "Good Bye";

// ------------------------------------------------------------
//DOM Challange

document.firstElementChild.lastElementChild
let body = document.firstElementChild.lastElementChild;

body.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.lastElementChild.innerHTML = "Wigar"

// ------------------------------------------------------------
// this method similar to getElementById, also only returns a single item, but it works a little bit differently
document.querySelector("h1");
document.querySelector("#title");
document.querySelector(".btn");
document.querySelector("li a");
document.querySelector("li.item");
document.querySelector("#list a");

// ------------------------------------------------------------
// to get all the class (as an array type) use querySelectorAll

document.querySelector("#list item");
document.querySelectorAll("#list item");

document.querySelector(".item a").style.color = "red";
document.querySelectorAll("#list item")[2].style.color = "blue";

// ------------------------------------------------------------
// Manipulating and Changing Styles of HTML Elements with Javascript

// use camel casing for css selector in javascript
document.querySelector("button").style.backgroundColor = "yellow";

// ------------------------------------------------------------
//  gives us list of the classes that are attached to this element that we found.

document.querySelector("button").classList;

// add class to a classList
document.querySelector("button").classList.add("invisible");

// remove class from a classList
document.querySelector("button").classList.remove("invisible");

// if the class inivisible is already applied then remove it, and if it's not applied then apply it
document.querySelector("button").classList.toggle("invisible");


// ------------------------------------------------------------
// *** Text Manipulation and the Text Content Property ***

// it will literally give you all of the HTML that is inside that element tags, including any other HTML tags.
document.querySelector("h1").innerHTML;
// "<strong>Hello</strong>"

// it will only give you the text content of it
document.querySelector("h1").textContent;
// "Hello"

// ------------------------------------------------------------
// *** Manipulating HTML Element Attributes ***

document.querySelector("a");

// it will give us a list of all the attributes that are currently attached to this HTML element
document.querySelector("a").attributes;

// to retrieve the current value of that attribute by saying:
document.querySelector("a").getAttributes("href");

// to change the current value of the attribute, it take to input (which attribute, what do you want to change to):
document.querySelector("a").setAttributes("href", "https://www.bing.com");

// ------------------------------------------------------------

