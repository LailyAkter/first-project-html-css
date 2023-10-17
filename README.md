<h1>The Window Object</h1>

The window object is supported by all browsers. It represents the browser's window.

All global JavaScript objects, functions, and variables automatically become members of the window object.

Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:

window.document.getElementById("header");
is the same as:

document.getElementById("header");


<h1>Other Window Methods
Some other methods:</h1>
<ul>
    <li>window.open() - open a new window</li>
    <li>window.close() - close the current window</li>
    <li>window.moveTo() - move the current window</li>
    <li>window.resizeTo() - resize the current window</ul>
</ul>


<h1>Window Screen</h1>
The window.screen object can be written without the window prefix.

Properties:

<ul>
    <li>screen.width</li>
    <li>screen.height</li>
    <li>screen.availWidth</li>
    <li>screen.availHeight</li>
    <li>screen.colorDepth</li>
    <li>screen.pixelDepth</li>
</ul>


<h1>Window Location</h1>
<ul>
    <li>window.location.href returns the href (URL) of the current page</li>
    <li>window.location.hostname returns the domain name of the web host</li>
    <li>window.location.pathname returns the path and filename of the current page</li>
    <li>window.location.protocol returns the web protocol used (http: or https:)</li>
    <li>screen.colorDepth</li>
    <li>window.location.assign() loads a new document</li>
</ul>


<h1>A JavaScript function is a block of code designed to perform a particular task.</h1>

function myFunction(num1, num2) {
  return num1 * num2;
}


<h1>Function Return</h1>
// Function is called, the return value will end up in x
let x = myFunction(4, 3);

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}


<h2> An array is a special variable, which can hold more than one value: </h2>

<code>
  const colors = ["blue", "green", "yellow"];
  let color = colors[0];
  console.log(color);
</code>

<h2>Changing an Array Element
This statement changes the value of the first element in colors:</h2>

<code>
  colors[0] = "orange";
</code>

<h2>The length Property
The length property of an array returns the length of an array (the number of array elements).</h2>

<code>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
</code>

<h2>Accessing the First Array Element</h2>

<code>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
</code>

<h2>Accessing the Last Array Element</h2>
<code>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
</code>

<h2>
Adding Array Elements
The easiest way to add a new element to an array is using the push() method:
</h2>

<code>
const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits
</code>

<h2>
JavaScript Array toString()
The JavaScript method toString() converts an array to a string of (comma separated) array values.
</h2>

<code>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
</code>

<h2>
JavaScript Array pop()
The pop() method removes the last element from an array:
</h2>

<code>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
</code>

<h2>
JavaScript Array shift()
The shift() method removes the first array element and "shifts" all other elements to a lower index.
</h2>

<code>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
</code>

<h2>JavaScript Array unshift()
The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:</h2>
<code>
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
</code>

<h2>Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.
The flat() method creates a new array with sub-array elements concatenated to a specified depth.</h2>

<code>
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
</code>


<h2>JavaScript For Loop</h2>
<p>Loops can execute a block of code a number of times.</p>

<h2>Different Kinds of Loops</h2>
<p>JavaScript supports different kinds of loops:</p>
<ul>
  <li><mark>for</mark> - loops through a block of code a number of times</li>
  <li><mark>for/in</mark> - loops through the properties of an object</li>
  <li><mark>for/of</mark> - loops through the values of an iterable object</li>
  <li><mark>while</mark> - loops through a block of code while a specified condition is true</li>
  <li><mark>do/while</mark> - also loops through a block of code while a specified condition is true</li>
</ul>

<h2>The For Loop</h2>

for (expression 1; expression 2; expression 3) {
  // code block to be executed
}

<p>
Expression 1 is executed (one time) before the execution of the code block.

Expression 2 defines the condition for executing the code block.

Expression 3 is executed (every time) after the code block has been executed.
</p>

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  console.log("The number is " + i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) { continue; }
  console.log("The number is " + i);
}

<h2>The For In Loop</h2>
const person = {fname:"laily", lname:"akter", age:21};

for (let x in person) {
  console.log(person[x]);
}

<h2>The For Of Loop</h2>

const mixed = ["Mango", "Orange", "Yellow"];

for (let x of mixed) {
  console.log(x);
}

<h2>The While Loop</h2>
var i = 3;
while (i < 10) {
  console.log("The number is " + i);
  i++;
}



































