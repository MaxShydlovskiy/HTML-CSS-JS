// String Methods and Properties
// Primitive values, like "John Doe", cannot have properties or methods (because they are not objects).
// But with JavaScript, methods and properties are also available to primitive values, because JavaScript treats primitive values as objects when executing methods and properties.
// String Length
// The length property returns the length of a string:

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = txt.length;
/* Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
The slice() Method
slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included).
This example slices out a portion of a string from position 7 to position 12 (13-1): */

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
// Remember: JavaScript counts positions from zero. First position is 0.
// If a parameter is negative, the position is counted from the end of the string.
// This example slices out a portion of a string from position -12 to position -6:

let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
// If you omit the second parameter, the method will slice out the rest of the string:

let part = str.slice(7);
// or, counting from the end:

let part = str.slice(-12);
// The substring() Method
// substring() is similar to slice().
// The difference is that substring() cannot accept negative indexes.

let str = "Apple, Banana, Kiwi";
let part = substring(7, 13);
// If you omit the second parameter, substring() will slice out the rest of the string.
// The substr() Method
// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.

let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
// If you omit the second parameter, substr() will slice out the rest of the string.
let str = "Apple, Banana, Kiwi";
let part = str.substr(7);
// If the first parameter is negative, the position counts from the end of the string.

let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);
// Replacing String Content
// The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
// The replace() method does not change the string it is called on. It returns a new string.
// By default, the replace() method replaces only the first match:

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
let text = "Please visit Microsoft!";
let newText = text.replace("MICROSOFT", "W3Schools");
// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "W3Schools");

// Note that regular expressions are written without quotes.
// To replace all matches, use a regular expression with a /g flag (global match):
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");
// You will learn a lot more about regular expressions in the chapter JavaScript Regular Expressions.

// Converting to Upper and Lower Case
// A string is converted to upper case with toUpperCase():
let text1 = "Hello World!";
let text2 = text1.toUpperCase();
// A string is converted to lower case with toLowerCase():

let text1 = "Hello World!";       // String
let text2 = text1.toLowerCase();  // text2 is text1 converted to lower
// The concat() Method
// concat() joins two or more strings:
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
// The concat() method can be used instead of the plus operator. These two lines do the same:
text = "Hello" + " " + "World!";
text = "Hello".concat(" ", "World!");
// All string methods return a new string. They don't modify the original string.
// Formally said: Strings are immutable: Strings cannot be changed, only replaced.

// String.trim()
// The trim() method removes whitespace from both sides of a string:
let text = "      Hello World!      ";
// let text.trim()    // Returns "Hello World!"
// JavaScript String Padding
// ECMAScript 2017 added two String methods: padStart and padEnd to support padding at the beginning and at the end of a string.

let text = "5";
let padded = text.padStart(4,0);

let text = "5";
let padded = text.padEnd(4,0);
