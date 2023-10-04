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
