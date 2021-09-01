var a = 9;
var b;

for (var i = 1; i <= 10; i++) {

    b = a * i;

    console.log(" "+a+ "*" +i+ "=", + b +"<br>");
}

/* Oplossing

// Multiplication tables
const multiplier = 9;
for (let i = 0; i <= 10; i++) {
  let result = multiplier * i;
  console.log(multiplier + " * " + i + " = " + result);
}

// Bonus
for (let multiplier = 0; multiplier <= 10; multiplier++) {
  for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
  }
  
  */
