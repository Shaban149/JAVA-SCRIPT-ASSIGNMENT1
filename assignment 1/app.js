Q:1 =  Write a script to greet your website visitor using JS alert box. (Welcome to 
    Our Website)? 

Answer = alert('Welcome to Banoqabil Students');

Q2: =  Write a script to display message on your web page. (Error! Please Enter a 
    valid password)?

Answer = <p id="error-message">Error! Please enter a valid password.</p>

Q:3 =  Write a script to display message on your web page: (Hint : Use line break)?

Answer =  var message = "This is a message that spans\nmultiple lines on your webpage.\nUse line breaks to create new lines.";

Q:4 =  Write a script to display messages in sequence (3 Alerts)?

Answer =  alert("This is the first message.");
          alert("This is the second message.");
          alert("This is the third message.");

Q:5 =  Make use of alerts in your new/existing HTML & CSS project?
 
Answer = <button id="alertButton">Click me for an alert</button>
    // Get the button element
    var alertButton = document.getElementById("alertButton");

    // Add a click event listener to the button
    alertButton.addEventListener("click", function() {
        // Display an alert when the button is clicked
        alert("Hello! This is an alert from your HTML & CSS project.");
    });

?Q:6 = Practice placement of element in following sections of your project in 
exercise 5: 
a. Head 
b. Body (before your page’s HTML)
c. Body (inside your page’s HTML)
d. Body (after your page’s HTML

Q:7 =  Declare a variable called username?

Answer = var username;

Q:8 =  Declare a variable called myName & assign to it a string that represents 
your Full Name?

Answer = var myName = "Shaban Ali";
let myName = "Shaban Ali";
const myName = "Shaban Ali";

Q:9 =  Write script to 
a) Declare a JS variable, titled message. 
b) Assign “Hello World” to variable message 
c) Display the message in alert box?

Answe:a = var message;
// Assign "Hello studends" to the 'message' variable
b) message = "Hello studends";
// Display the message in an alert box
c) alert(message);

Q:10 = Write a script to save student’s bio data in JS variables and show the data in 
alert boxes?

Answer =  // Student's bio data variables
var studentName = "Shaban ali";
var age = 19;
var grade = "A1";
var city = "Karachi";

// Display the bio data in alert boxes
alert("Student Name: " + studentName);
alert("Age: " + age);
alert("Grade: " + grade);
alert("City: " + city);

Q:11 = Declare a variable called email and assign to it a string that represents your 
Email Address(e.g. example@example.com). Show the blow mentioned 
message in an alert box.(Hint: use string concatenation)?

Answer =  // Declare a variable called 'email' and assign an email address
var email = "shaikhshaban009@gmail.com";
// Display a message in an alert box using string concatenation
alert("Your email address is: " + email);

Q:12 = Write a script to display this in browser through JS?

Answer =   // Declare a variable called 'email' and assign an email address
var email = "example@example.com";

// Create a new paragraph element
var paragraphElement = document.createElement("p");

// Set the text content of the paragraph with the email address
paragraphElement.textContent = "Your email address is: " + email;

// Append the paragraph element to the body
document.body.appendChild(paragraphElement);

Q:13 = Store following string in a variable and show in alert and browser through JS?

Answer = // Store the string in a variable
var myString = "Hello, world! This is a string.";

// Show the string in an alert
alert(myString);

// Display the string in the browser
document.write("<p>" + myString + "</p>");

Q:14 = .Declare a variable called age & assign to it your age. Show your age in an 
alert box?

Answer =  // Declare a variable called age and assign your age
var age = 25; // Replace 25 with your actual age
// Show your age in an alert
alert("Your age is: " + age);

Q:15 = Declare & initialize a variable to keep track of how many times a visitor has 
visited a web page. Show his/her number of visits on your web page. For 
example: “You have visited this site N times”?

Answer =   // Check if the 'visits' key exists in localStorage
if (localStorage.getItem('visits') === null) {
    // If not, initialize it with 1 (first visit)
    localStorage.setItem('visits', 1);
} else {
    // If it exists, increment the value
    var visits = parseInt(localStorage.getItem('visits'), 10);
    localStorage.setItem('visits', visits + 1);
}

// Get the updated number of visits
var totalVisits = localStorage.getItem('visits');

// Display the number of visits on the web page
document.write("<p>You have visited this site " + totalVisits + " times.</p>");

Q:16 = Declare a variable called birthYear & assign to it your birth year. Show the 
following message in your browser?

Answer =  // Declare a variable called birthYear and assign your birth year
var birthYear = 2004; // Replace 2004 with your actual birth year

// Display a message in the browser
document.write("<p>Your birth year is: " + birthYear + "</p>");

Q:17 = A visitor visits an online clothing store www.xyzClothing.com . Write a script 
to store in variables the following information: a. Visitor’s name b. Product 
title c. Quantity i.e. how many products a visitor wants to order Show the 
following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ 
Clothing store”'?

Answer = // Store visitor's information in variables
    var visitorName = "Shaban Ali"; // Replace with actual visitor's name
    var productTitle = "T-shirt"; // Replace with actual product title
    var quantity = 5; // Replace with actual quantity
    // Display a message in the browser
    document.write("<p>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.</p>");

Q:18 = Declare 3 variables in one statement?

Answer = var variable1 = "Value1", variable2 = "Value2", variable3 = "Value3";

Q:19 = Declare 5 legal & 5 illegal variable names?

Answer = 
        Legal Variable Names:
        firstName
        _counter
        $totalAmount
        myVariable123
        user_age
        Illegal Variable Names:
        123illegalName (starts with a digit)
        my-variable (contains a hyphen)
        spaces are illegal (contains spaces)
        #hashSymbol (contains a hash symbol)
        2ndVariable (starts with a digit)

Q:20 = Display this in your browser 
a) A heading stating “Rules for naming JS variables” 
b) Variable names can only contain __, __, __ and __. For 
example $my_1stVariable 
c) Variables must begin with a __, __ or ___. For example 
$name, _name or name 
d) Variable names are case ___ 
e) Variable names should not be JS ___?

Answer = 
a)  document.write("<p>1. Variable names can only contain letters, numbers, underscores, or dollar signs.</p>");
document.write("<p>2. Variable names must begin with a letter, underscore, or dollar sign.</p>");
document.write("<p>3. Variable names are case-sensitive.</p>");
b)$my_myVariable123, 
c) $myVariable123,_user_age or $totalAmount
d) myVariable  # This is different from
myvariable  # this variable
e) var, function,

Q:21 = .Write a program that take two numbers & add them in a new variable. 
Show the result in your browser?

Answer =  // Prompt the user to enter two numbers
var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");

// Convert input to numbers
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

// Check if the input is valid numbers
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Please enter valid numbers.");
} else {
  // Perform addition
  var sum = firstNumber + secondNumber;

  // Display the result in the browser
  document.write("<h2>Result:</h2>");
  document.write("<p>" + firstNumber + " + " + secondNumber + " = " + sum + "</p>");
}

Q:22 = Repeat task21 for subtraction, multiplication, division & modulus?

Answer =  // Prompt the user to enter two numbers
var firstNumber = prompt("Enter the first number:");
var secondNumber = prompt("Enter the second number:");

// Convert input to numbers
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);

// Check if the input is valid numbers
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Please enter valid numbers.");
} else {
  // Perform arithmetic operations
  var addition = firstNumber + secondNumber;
  var subtraction = firstNumber - secondNumber;
  var multiplication = firstNumber * secondNumber;
  var division = firstNumber / secondNumber;
  var modulus = firstNumber % secondNumber;

  // Display the results in the browser
  document.write("<h2>Results:</h2>");
  document.write("<p>" + firstNumber + " + " + secondNumber + " = " + addition + "</p>");
  document.write("<p>" + firstNumber + " - " + secondNumber + " = " + subtraction + "</p>");
  document.write("<p>" + firstNumber + " * " + secondNumber + " = " + multiplication + "</p>");
  document.write("<p>" + firstNumber + " / " + secondNumber + " = " + division + "</p>");
  document.write("<p>" + firstNumber + " % " + secondNumber + " = " + modulus + "</p>");
}

Q:23 = Do the following using JS Mathematic Expressions 
a. Declare a variable. 
b. Show the value of variable in your browser like “Value after variable 
declaration is: ??”. 
c. Initialize the variable with some number. 
d. Show the value of variable in your browser like “Initial value: 5”. 
e. Increment the variable. 
f. Show the value of variable in your browser like “Value after 
increment is: 6”. 
g. Add 7 to the variable. 
h. Show the value of variable in your browser like “Value after addition 
is: 13”. 
i. Decrement the variable. 
j. Show the value of variable in your browser like “Value after 
decrement is: 12”. 
k. Show the remainder after dividing the variable’s value by 3. 
l. Output : “The remainder is : 0”?

Answer = 
a) let myVariable = 42;

b)   // Declare a variable
let myVariable;
// Display the value in the browser
document.write("<p>Value after variable declaration is: " + myVariable + "</p>");

c)  // Declare and initialize a variable with a number
let myVariable = 42;
// Display the value in the browser
document.write("<p>Value after variable initialization is: " + myVariable + "</p>");

d) // Declare and initialize a variable with a number
let myVariable = 5;
// Display the value in the browser
document.write("<p>Initial value: " + myVariable + "</p>");

e)     // Declare and initialize a variable with a number
let myVariable = 5;
// Increment the variable
myVariable++;
// Display the updated value in the browser
document.write("<p>Value after increment: " + myVariable + "</p>");

f)  // Declare and initialize a variable with a number
let myVariable = 5;
// Increment the variable
myVariable++;
// Display the updated value in the browser with a specific message
document.write("<p>Value after increment is: " + myVariable + "</p>");

g)  // Declare and initialize a variable with a number
let myVariable = 5;
// Increment the variable
myVariable++;
// Add 7 to the variable
myVariable += 7;
// Display the updated value in the browser with a specific message
document.write("<p>Value after increment and addition: " + myVariable + "</p>");

h)  // Declare and initialize a variable with a number
let myVariable = 5;
// Add 7 to the variable
myVariable += 7;
// Display the updated value in the browser with a specific message
document.write("<p>Value after addition is: " + myVariable + "</p>");

i) // Declare and initialize a variable with a number
let myVariable = 13;
// Decrement the variable
myVariable--;
// Display the updated value in the browser with a specific message
document.write("<p>Value after decrement is: " + myVariable + "</p>");

j)  // Declare and initialize a variable with a number
let myVariable = 13;
// Decrement the variable
myVariable--;
// Display the updated value in the browser with a specific message
document.write("<p>Value after decrement is: " + myVariable + "</p>");

k)  // Declare and initialize a variable with a number
let myVariable = 12;
// Calculate the remainder after dividing by 3
let remainder = myVariable % 3;
// Display the remainder in the browser with a specific message
document.write("<p>Remainder after division by 3 is: " + remainder + "</p>");

l)    // Declare and initialize a variable with a number
let myVariable = 12;
// Calculate the remainder after dividing by 3
let remainder = myVariable % 3;
// Display the remainder in the browser with a specific message
document.write("<p>The remainder is: " + remainder + "</p>");

Q:24 = .Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a 
variable & calculate the cost of buying 5 tickets to a movie?

Answer =  // Store the ticket price in a variable
let ticketPrice = 600;
// Calculate the cost of buying 5 tickets
let totalCost = ticketPrice * 5;
// Display the result in the browser
document.write("<p>The cost of buying 5 tickets is: " + totalCost + " PKR</p>");


Q:25 = Write a script to display multiplication table of any number in your browser?

Answer = 
    // Prompt the user to enter a number
    let userInput = prompt("Enter a number:");

    // Convert user input to a number
    let number = parseFloat(userInput);

    // Check if the input is valid
    if (isNaN(number)) {
      alert("Please enter a valid number.");
    } else {
      // Display the multiplication table in the browser
      document.write("<h2>Multiplication Table for " + number + ":</h2>");

      for (let i = 1; i <= 10; i++) {
        let result = number * i;
        document.write("<p>" + number + " x " + i + " = " + result + "</p>");
      }