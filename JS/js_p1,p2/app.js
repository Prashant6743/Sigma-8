// console.log("testing");
let a = 5
let b = 10 
let output = `total price is ${a + b}`;
console.log(" Sum is: ", a + b);
console.log("before if statement");
let age = 10;
console.log("you can vote");
if (age >= 18) {
    console.log("You are eligible to vote");
}
console.log("after if statement");

let fname = "Prashant";
if (fname === "Prashant") {
    console.log(`Hello ${fname}, welcome to the site!`);
}

let color = "red";
if (color === "red") {
    console.log(`STOP ${color}`);
}
else if (color === "green") {
    console.log(`GO ${color}`);
}
 else if (color === "yellow") {
    console.log(`SLOW DOWN ${color}`);
}
//switch statement example
let day = "3";
switch (day) {
    case "1":
    console.log("It's Monday, start of the week!");
    break;
    case "2":
    console.log("It's Tuesday, keep going!");
    break;
    case "3":
    console.log("It's Wednesday, halfway through!");
    break;
    case "4":
    console.log("It's Thursday, almost there!");
    break;
    case "5":
    console.log("It's Friday, weekend is near!");
    break;
    case "6":
    console.log("It's Saturday, enjoy your day!");
    break;
    case "7":
    console.log("It's Sunday, relax and recharge!");
    break;
    default:
    console.log("Invalid day, please enter a number between 1 and 7.");
}
let test =  prompt("write something here ");
 msg = (`${test}`);
 alert(msg);


alert("This is an alert message!");

let firstname = prompt("Please enter your first name:");
let lastname = prompt("Please enter your first name:");
console.log("User's name is: ", firstname + " " + lastname);



let num = "50";
if (num  % 10 === 0) {
    console.log("Good");
}
else {
    console.log("Bad");
}

let name = prompt("Enter your name:");
let ageofuser = prompt("Enter your age:");
let disp = `Hello ${name}, you are ${ageofuser} years old.`;
alert(disp);
