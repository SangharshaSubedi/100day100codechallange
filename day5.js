//Function is a block of code that perform a specific task,can invoked whenever needed.

//1. Declaring a function
function myIntro()
{
   str1 = "\n My name is Strugglr";
   str2 = "\n I  am a student of a Computer Sccience";
    str3 = "\n I am learning JavaScript";
    console.log(str1 + str2 + str3);
}
myIntro(); // Now it call the function and print the output.

//2.`Function with parameter
function myIntro(name,course)
{
   str1 = "\n My name is " + name;
   str2 = "\n I  am a student of a " + course;
    str3 = "\n I am learning JavaScript";
    console.log(str1 + str2 + str3);
}
myIntro("Strugglr","Computer Sccience");  // Now first it give the value to the parameter imeans
                                         //  name and course get value and then it print as it is 
                                        // the value we give to the parameter is called argument



//Q.. Let's writre a function which use to calulate the sum of two number.
function sum(x,y)
{
    let sum = x +y;
    console.log("The sum of " + x + " and " + y + " is " + sum);
}
    sum(5,10);      // Now the above(sum(x,y) function get value from sum(5,10) because it call the function 
                 // and to call the function it should have the same signature means same number of parameter same type.




    //3. Arrow function,Arrow function is a shorter syntax for writing function in JavaScript. 
    const multiply = (x,y) => 
    {
        let product = x * y;
        console.log("The product of " + x + " and " + y + " is " + product);
    }
    // One thing we can write the main function on the console directly without writing here.

//Q..create a function which take string as an argument and return the the number of vowels in the  the string.

function countVowels(str)
{
    let count =0;
    for (let i = 0; i <str.length;i++)
    {
        let char = str[i].toLowerCase();
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')
        {
            count++;
        }
    } 
    return count;
}

let myString = "Hello, mates!";
console.log(`Total vowels in the string  is ${countVowels(myString)}`);

//4. forEach loop
let numbers = [1,2,3,4,5];
numbers.forEach(function(number)
{
    console.log(number); /// nothing but it will print all the number one by one
})      

let cities =["tokyo","osaka","kyoto","nagoya","sapporo"];
    cities.forEach(function(cities,idx) // here idx is the index of the array amdn it give the index along eith name.
    {
        console.log(cities.toUpperCase(),idx); // it will print all the cities one by one
    })      


//Q.for a given array of the number, find the square of each number and print it.
let number = [2,4,6,7,3,5,8,9];
number.forEach(function(num)
{
 console.log(`The square of ${num} is ${num * num}`);
})

