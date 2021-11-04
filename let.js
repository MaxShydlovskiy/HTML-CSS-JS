let x = "John Doe";

let x = 0;

// SyntaxError: 'x' has already been declared

{
  let x = 2;
}
// x can NOT be used here
{
  var x = 2;
}
// x CAN be used here

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2
let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10
var x = 2;    // Allowed
let x = 3;    // Not allowed

{
let x = 2;    // Allowed
let x = 3     // Not allowed
}

{
let x = 2;    // Allowed
var x = 3     // Not allowed
}

let x = 2;    // Allowed

{
let x = 3;    // Allowed
}

{
let x = 4;    // Allowed
}