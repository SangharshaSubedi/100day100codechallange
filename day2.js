
// this is comment which is not visible in output. 
console.log(" Hellor world its you man");

//operator in js, which is same in all kind of language.
// Arithematic operators ie +, -, *, /, %
let a = 10;
let b = 20;
let c = 15
let d= 2;
let e = 3;
console.log("a =", a, "b =", b,"c =", c,"d =", d, "e =", e); 
console.log("a + b"); // this will print a + b as it is in double quotes
console.log(a + b);   // this will print 30 as it is the sum of a and b
console.log(a * b);
console.log(b % c);  // this will print 5 as it is the remainder of b divided by c
console.log(d ** e); // this will print 8 as it is d raised to the power of e (2^3 = 8)

//Unary operators ie ++, --, +, -
number = 5;
number++; // this will increment the value of number by 1
console.log(number); // this will print 6
number--; // this will decrement the value of number by 1
console.log(number); // this will print 5 because it was decremented back to its original value
console.log(-number); // this will print -5 as it is the negation of number and same œœrule with+

// assignment operators ie =, +=, -=, *=, /=, %=
let x = 10;
let y = 5;
x += y; // this is equivalent to x = x + y, so x becomes 15
console.log(x); // this will print 15
x -= y; // this is equivalent to x = x - y, so x becomes 10
console.log(x); // this will print 10

//comaprison operators ie ==, !=, ===,!==, >, <, >=, <=
let num1 = 10;
let num2 = "20"; // even its a strng but it will act as a number as 20.
console.log(num1 == num2); // these operators only return either true or false . Here this will print the flase because both are not equal
console.log(num1 != num2); // this will print true because num1 is not equal to num2
console.log;(num1 === num2); // this will print false because num1 is a number and num2 is a string, === checl strictly


//logical operators ie &&, ||, !
let k =5;
let m = 10;
let cond1 = k < m; // true
console.log(" cond 1 &&  k > m: ", cond1 &&  k > m); // this will print false because both conditions are not true
console.log(" cond 1 ||  k > m: ", cond1 ||  k > m); // this will print true because at least one condition is true
console.log(" !cond1: ", !cond1); // this will print false because cond1 is true and !cond1 change to true if false and vice versa

//conditional (ternary) operator  ie if, else if, else
let age = 20;
let result;
if (age < 18) 
    {
    result = "you are junior citizen";
    }
 if (age < 60 && age >= 18)
    {
    result = "you are a senior citizen ";
    }
 else 
    {
    result = "middle age citizen";
    }
console.log(result); // this will print "you are a senior citizen " because age is greater than to 18  and less than 60


//ODD and EVEN number 
let number1 = 7;
let result1;
if (number1 % 2 === 0) 
    {
    result1 = number1 + " is an even number";
    } 
else 
    {
    result1 = number1 + " is an odd number";
    }
console.log(result1); // here it will print "7 is odd" because 7 is an odd number

// ternary operator synatx -> condition ? expressionIfTrue : expressionIfFalse
let age1 = 25;
let result2 = age1 >= 18 ? "adult" : "minor"; // this will return "adult" because age1 is greater than or equal to 18
console.log(result2);  // this is the easiest way to write if else statement.

// Syntax -> nothing just the rule


//Switch statement
let expr = " Mangoes";
switch (expr)  // whichever case matches the expr that will print the corrospondiing value
 {
  case "Oranges": console.log("Oranges are $0.59 a pound.");
    break;

  case "Mangoes":  console.log("Mangoes are $2.79 a pound.");
    break;

  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;

    default:// default condition is not necessary but good way to write the codes.
    console.log(" Sorry, we are out of " + expr + "." ); 
}