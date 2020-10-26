/* 
Group Members
Joshua Makula
Julius Wasajja
Queen Emily
Trevor Kakuba
  Fibonacci numbers are numbers obtained by adding the two previous numbers in the sequence to obtain the next higher number.
  Example: 1+1= 2, 2+3= 5, 5+8= 13...
  The formula is: Fn = Fn-1 + Fn-2
*/

module.exports = fibonacci;
function fibonacci(num) {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}

console.log(fibonacci(6));

module.exports = fibonacci;
