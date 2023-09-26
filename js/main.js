// Math 1

var a;
var b;
var c;
var d;

let first_number = prompt("Enter Fist Number : ");
let second_number = prompt("Enter Second Number :");
a = parseInt(first_number);
b = parseInt(second_number);
var add = a + b;
console.log(add);

let third = prompt("Enter third Number : ");
let fourth = prompt("Enter fourth Number :");
c = parseInt(third);
d = parseInt(fourth);

var sub = c - d;
console.log(sub);

var finalResult = add * sub;

if(finalResult % 2 != 0 ){
    console.log("Odd Number")
}else{
    console.log('Even Number');
}

// Math 2
var result = 30.7865;
var result2 = 30.32;
// result *= result2;
result = result * result2;

var finalResult = result.toFixed(2);
var finalNumber = parseFloat(finalResult);
console.log(typeof(finalNumber));
console.log(finalNumber);


// Math 3

// Statement 1: The elephant weighs less than the mouse
const eleWeight = 1000;
const mouseWeight = 2;

if(eleWeight < mouseWeight){
    console.log("elephants weigh less than mice!?");
}else{
    console.log("False — of course an elephant is heavier than a mouse!");
}

// Statement 2: The Ostrich is taller than the duck
const ostrichHeight = 2;
const duckHeight = 0.3;

if(ostrichHeight > duckHeight){
    console.log("True — an ostrich is indeed taller than a duck!");
}else{
    console.log("False — apparently a duck is taller than an ostrich!?")
}

// Statement 3: The two passwords match
const pwd1 = 'stromboli';
const pwd2 = 'stROmBoLi';

if(pwd1 == pwd2){
    console.log("True — the passwords match.");
}else{
    console.log("False — the passwords do not match")
}