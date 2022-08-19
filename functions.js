// Data Types (String, Number, Boolean, Null, Undefined, Array, Object, Function)

// ------------------------------------------------------------
// Functions

// function fungsiSatu(a, b) {
//     return a + b;
// }
// console.log(fungsiSatu(5, 3));


// const fungsiDua = (a, b) => {
// return a * b;
// }
// console.log(fungsiDua(5, 3));

// ------------------------------------------------------------
// Run Down number (Math.floor()), return

// function getMilk(money) {   
//     let milkCost = 1.5;
//     let numberOfBottles = Math.floor(money / milkCost);
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + numberOfBottles + " bottles of milk");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return money % 1.5;
//   }

//   let change = getMilk(10);
//   console.log(change);

// ------------------------------------------------------------

//   function getMilk(money, price) {   
//     console.log("leaveHouse");
//     console.log("moveRight");
//     console.log("moveRight");
//     console.log("buy " + calcBottle(money, price) + " bottles of milk");
//     console.log("moveLeft");
//     console.log("enterHouse");
//     return calcChange(money, price)
//   }

//   function calcBottle(startingMoney, costPerBottle) {
//     let numberOfBottles = Math.floor(startingMoney / costPerBottle);
//     return numberOfBottles;
//   }

//   function calcChange(startingAmount, costPerBottle) {
//     let change = startingAmount % costPerBottle;
//     return "Your change is " + change;
//   }

//   let change = getMilk(10, 1.5);
//   console.log(change);


// ------------------------------------------------------------
// Life in Weeks Coding Exercise

function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        let remainingAge = 63 - age;
        
        let x = remainingAge * 365;
        let y = remainingAge * 52;
        let z = remainingAge * 12;
        
       console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.")
        
    /*************Don't change the code below**********/
    }

    lifeInWeeks(29);

// ------------------------------------------------------------
// BMI Calculator Challenge & Raise a number to a power (Math.pow()) & Rounded number to nearest whole number (Math.round)

//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

const bmiCalculator = (weight, height) => {
    let bmi = weight / Math.pow(height , 2);
    return Math.round(bmi);
}

/* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = bmiCalculator(65, 1.8); 

bmi should equal 20 when it's rounded to the nearest whole number.

*/
