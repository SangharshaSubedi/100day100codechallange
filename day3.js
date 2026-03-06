 let name = prompt("Enter your name:");
 console.log("Hello, " + name + "! Welcome to JavaScript programming!");


//1...loops and strings
for(let i = 0; i<10; i++)
{
    console.log("hellp its me your frined mr, struggle" );
}
//Q.....calcualte the sum of 1 to 10
let sum = 0;
let number = 1;

for(let i = 0; i<=10; i++)
{
    sum = sum + i; 
}
  console.log("the sum of 1 to 10 is: ", sum);



  //2...while loop
  let count = 1;
  while(count <= 5)
  {
    let sum = 0;
  sum+=count; // this is equivalent to sum = sum + count
    count++;
    console.log("the sum of 1 to 5 is: ", sum);
  }
    console.log("the sum of 1 to 5 is: ", sum);




    //3...do while loop
    let strg = "hello its TUJ owl";
    let index = 0;     
    do {
        strg = strg + "";
        index++;
    } while(index < 5);
    console.log("the string is: ", strg);


    //for of loop
    let str = "hello world";
    let size =0;
    for(let char of str)    // in simple word it will print all the characater 
                            // of string one by one and count space as a character.
    {
        console.log(char);
        size++;
    }
    console.log("the size of the string is: ", size);


    //Q....print all the even numbers from 1 to 100

    for(let i = 1;i<=10;i++)
    {
        if(i%2== 0)
            console.log(i);
    }

    //String is a sequene of character used to represent text.
    let str1 = "hello world";
    let str2 = 'hello world';  // it is same as str1 ie " " and ' ' are same.
    console.log(str1.length); //  print the length of the string including space
    console.log(str1[0]);//. it will print h.  this is used to print the individual character of the string.


    // template literals also called string interpolation.
    let bioData =
    {
        name: "mr struggle",
        age: 19,
        profession: "student"
    };
    let profile1 = `My name is ${bioData.name}, I am ${bioData.age} years old and I am a ${bioData.profession}.`;
        // it is same as "My name is " + bioData.name + ", I am " + bioData.age +
        //  " years old and I am a " + bioData.profession + ".";
    console.log(profile1);
    

    //escape characters in string
    let str3 = "hello \nworld"; 
    console.log(str3);    //// now hello and world will be print in different liuen because of \n.   



    //String methods 
    // there are built in method to manipualte the string.

    let str4 = "hello javaScript learners";
    console.log(str4.toUpperCase()); // this will print HELLO JAVASCRIPT LEARNERS becasue of toUpperCase().
    console.log(str4.toLowerCase()); // this will print hello javascript learners.

//Q...Let the user to enter their name  and we have to make the username 
// usename should be lowercase, starting with @ and no space in between and namelenght at last.

let name1 = prompt("Enter your name: ");
let username = name1.trim().toLowerCase(); // here first remove the space and then change into lowercase.
let usename = `@${username}${name1.length}`;// here get the username and join it with @ and the lenght.
console.log("your username is: ", usename);