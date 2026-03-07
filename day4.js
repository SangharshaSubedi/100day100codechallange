// Array is the collection of the similar kind of the data.


let Array = [10,12,14,16,18,20];
// Accessing the element of the array
console.log("Array:", Array);  // it gives the whole array
console.log(Array[0]); // it gives the first element of tha array ie 10.
console.log(Array[1]);



// Array index starts with 0 and ends with n-1 where n is the number of the element in the array.
// String is inmutable daya type but the Array is the mutable data type which means we can change the value of the array. i.e.
console.log(Array[0] + 1); //it will give the 11 cause array0 is 10 + 1 means 11.
console.log(Array[1] + " year"); // it wil give 12 year cuase it will convert the number into string and print 12 year.   

//Loopimng through the array
let hobbies = ["coding", "playing", "singing", "dancing", "travelling"];
for(let i = 0; i < hobbies.length; i++)
    {
    console.log(`Hobbies at ${i}: ${hobbies[i]} `); // it will print as this way Hobbies at 0: coding, Hobbies at 1: playing,
                                                    // Hobbies at 2: singing, Hobbies at 3: dancing, Hobbies at 4: travelling.
    }



//Q.....For a given array of numbers, find the sum of all the elements in the aray
let numbers = [21,23,2,4,64,24,141,141,1,14,13,25,26,27,28,29,30];
let sum = 0;
let averge =0;
for (let i =0; i<numbers.length;i++)
{
    sum = sum + numbers[i];
    averge = sum / numbers.length;
}
console.log("Sum of the array is:", sum); // it will give the sum of the array which is 529.
console.log("Average of the array is:", averge); // it will give the average of the array which is 31.11.

//Q....For a given array with prices of 5 items ->{ 250,546,100,680,300}  All items have an offer of 10% OFF on them. 
// Change the array to store final price after applying offer.

    let price = [250,546,100,680,300];

for (let i = 0; i < price.length; i++)
    {
        let original = price[i];
        let final = original - (original * 10 / 100);   // this will aplly 10% discount 
        console.log(`Final price of ${original} after 10% discount: ${final}`);//// this will print the new price.
    }

//Array methiods and always start with lowerCase letter and camelCase.
foodItems = ["Pizza", "Burger", "Pasta", "Fries", "Sandwich"];

//1. push() method -> it adds the element at the end of the array.
foodItems.push("Ice Cream");
console.log("After push method:", foodItems); // it will add the Ice Cream at the end of the array.


//2.toString() method -> it converts the array into string.
let foodString = foodItems.toString();
console.log("After toString method:", foodString); // it will convert the array into string and print as this       
                                                 //  way Pizza,Burger,Pasta,Fries,Sandwich.

   // things that to remeber about ther array is , it doesnot change the original array just the new array
   //Ie even aftet toStrig or other, if we print foodItems it will give the original array not the new one.
   
  //3.concat() method -> it is used to merge two or more arrays. i.e...
    let vegetables = ["Tomato", "Potato", "Onion", "Carrot"];
    let foodAndVeggies = foodItems.concat(vegetables);
    console.log("After concat method:", foodAndVeggies); // it will merge the two arrays and print as this way 
                                                        // Pizza,Burger,Pasta,Fries,Sandwich,Tomato,Potato,Onion,Carrot.

  //4.unshift() method -> it adds the element at the beginning of the array.
  foodItems.unshift("Noodles");
  console.log("After unshift method:", foodItems); // it will add the Noodles at the beginning of the array.                                                      
 
  //5.pop() method -> it removes the last element of the array.
foodItems.pop();
console.log("After pop method:", foodItems); // it will remove the last element of the array which is Ice Cream.

//6.shift() method -> it removes the first element of the array.
foodItems.shift();
console.log("After shift method:", foodItems); // it will remove the first element of the array which is Noodles.

//7.push() method -> it adds the element at the end of the array.
foodItems.push("Waffles");
console.log("After push method:", foodItems); // it will add the Waffles at the end of the array.

//Q..Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"
//a. Remove the first company from the array
//b. Remove Netflix & Add Ola in the first place
//c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();// it remove the Bloomberg from the array.
companies.pop(); // it remove the Netflix from the array.
companies.unshift("Ola"); // it adds Ola at the beginning of the array.
companies.push("Amazon"); // it adds Amazon at the end of the array.