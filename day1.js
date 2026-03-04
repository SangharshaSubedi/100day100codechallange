const identity =
 {
    fullName: "Mr. Struggle",
    age: 30,
    profession: "student"
};

console.log(identity.fullName);


const pie = 3.14;
// Reassign let variable
let stringType = "Hello";
stringType = "Goodbye";  // it will work because we can reassign let variable
 
let numberType = 10;
let booleanType = true;
let undefinedType;
let nullType = null;

// Object property access methods
console.log(stringType);     // it print goodbye not hello
console.log(typeof stringType);
console.log(typeof numberType);




const profile =
{
    username: "@struggle",
    isFollow: true,
    followers: 1000,
    following: 500
};