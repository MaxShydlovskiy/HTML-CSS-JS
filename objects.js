/* JavaScript Objects
Real Life Objects, Properties, and Methods
In real life, a car is an object.
A car has properties like weight and color, and methods like start and stop:
Object	    Properties	            Methods

          car.name = Fiat           car.start()

Car       car.model = 500           car.drive()

          car.weight = 850kg        car.brake()

          car.color = white         car.stop()

All cars have the same properties, but the property values differ from car to car.
All cars have the same methods, but the methods are performed at different times.
JavaScript Objects
You have already learned that JavaScript variables are containers for data values.
This code assigns a simple value(Fiat) to a variable named car: */
let car = "Fiat";
// Objects are variables too.But objects can contain many values.
// This code assigns many values(Fiat, 500, white) to a variable named car:
const car = { type: "Fiat", model: "500", color: "white" };
// The values are written as name:value pairs(name and value separated by a colon).
// It is a common practice to declare objects with the const keyword.
// Object Definition
// You define(and create) a JavaScript object with an object literal:
const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
// Spaces and line breaks are not important.An object definition can span multiple lines:
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
/* Object Properties
The name:values pairs in JavaScript objects are called properties:

  Property	  Property Value
  
  firstName	  John
  
  lastName	  Doe
  
  age	        50
  
  eyeColor	  blue
  Accessing Object Properties
You can access object properties in two ways: */
objectName.propertyName
// or
objectName["propertyName"]

person.lastName;

person["lastName"];
/* JavaScript objects are containers for named values called properties.
Object Methods
Objects can also have methods.
Methods are actions that can be performed on objects.
Methods are stored in properties as function definitions.
Property	Property Value
firstName	John
lastName	Doe
age	50
eyeColor	blue
fullName	function() { return this.firstName + " " + this.lastName; }
A method is a function stored as a property. */

const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};
/* The this Keyword
In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.
In other words, this.firstName means the firstName property of this object.
Read more about the this keyword at JS this Keyword.
Accessing Object Methods
You access an object method with the following syntax: */

objectName.methodName()
name = person.fullName();
// If you access a method without the() parentheses, it will return the function definition:
name = person.fullName;
// Do Not Declare Strings, Numbers, and Booleans as Objects!
// When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
// Avoid String, Number, and Boolean objects.They complicate your code and slow down execution speed.
