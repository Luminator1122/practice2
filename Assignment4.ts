// // Q No.1.	Create a function that takes an array, an index, and a value as parameters. 
// //Inside the function, use the splice method to insert the value at the specified index
// // in the array. Return the modified array.

// var friends:string[]=["asif","adnan","usman","umer","faisal","irfanali","salyana"]
// console.log(friends.length)
// function addtoFriends(num1:number,num2:number,name:string)
// {
// friends.splice(num1,num2,name)
// return friends
// }
// var newFriends:string[]=addtoFriends(2,1,"Kashif")
// console.log(newFriends)
// console.log(newFriends.length)

// // Q No.2.	Implement a simple shopping cart program using an array. Create functions to
// // add items, remove items, and update quantities using the splice method. 
// //Print the cart's contents after each operation



// // Q No.3.	Write a program that uses a while loop to print the first 25 integers.

// var inTegertostart:number=0
// while (inTegertostart<=25)
// {
//  console.log(inTegertostart)
//  inTegertostart++   
// }

// //practicre to run a table

// var tableToRun:number=2
// let i=1
// while (i<=10)
// {
//     let table=tableToRun*i
//  console.log(tableToRun, "X",i,"==",table)
//  i++   
// }


// // Q No.4.	Write a program that uses a while loop to print the first 10 even numbers 
// OR Odd Numbers
var allNumbers:number=0
var evenNumbers:number=0
while (evenNumbers<10)
{
    if (allNumbers%2==0)   // if to take odd numbers write  ass {allNumbers%2 !==0} and  change variable name evenNumbers to OddNumbers
    {
    console.log(allNumbers)
    evenNumbers++
    }
    allNumbers++
}
console.log("************************")
// Q No.5.	Create a function that takes a positive integer as parameter and uses a while loop
// to calculate and return the factorial of that number.

function factorialofNumber(factorNumber:number)
{
    var multiplier:number=1
    while (factorNumber>0)
    {
    multiplier=factorNumber*multiplier
    factorNumber--
    }
return multiplier
}
var result:number=factorialofNumber(6)
console.log(result)
console.log("**************")


function calcFactorial(inputdata:number)
{
var multiplier:number=1
while (inputdata>0)
    {
    multiplier=multiplier*inputdata
    inputdata--    
    }
return multiplier
}
var sum:number=calcFactorial(4)
console.log(sum)
console.log("***********")

// Q No.6.	Write a program having an array of numbers if the number is negative it 
//should remove the negative  number from the array.



// Q No.7.	Create a function that takes an array of numbers as parameter. Use a while loop to calculate and return 
// the sum of all the numbers in the array.
// Q No.8.	Implement a program that takes a list of temperatures in Celsius as input from the user. Convert each 	temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted temperatures in 	an array. Use a while loop to perform the conversion for each temperature.
