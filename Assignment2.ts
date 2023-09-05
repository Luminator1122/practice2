// Q No.1.	Write a program to convert the temperature from Celsius to Fahrenheit and 
//vice verse.
//(0°C × 9/5) + 32 = 32°F
let tempinPut:number=0
let tempinFh:number=(tempinPut*9/5)+32       //(0°C × 9/5) + 32 = 32°F
let tempinCelc:number=(tempinPut-32)*5/9      //(32°F − 32) × 5/9 = 0°C
let tempinKlvn:number=(tempinPut*5/9)+459.67 //    (T)K = 5/9 (T)F + 459.67.

console.log("The Temperature in Celcius Degree of the Given F input is ==", tempinCelc)
console.log("The Temperature in FareignHeight Degree of the Given C input is ==", tempinFh)
console.log("The Temperature in Kelvin Degree of the Given F input is ==", tempinKlvn)



// Q No.2.	Write a program that calculates the percentage.
let countvalue:number=210
let totalValue:number=300
let percentageValue:number=(countvalue/totalValue)*100
console.log("The Perventage will be :" , percentageValue,"%")


// Q No.3.	Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and
// 3 days.

let inputValue:number=75
let days:number=inputValue%7
let weeks:number=inputValue/7
let roundedweeks:number=Math.floor(weeks)
console.log("There are", roundedweeks,"Weeks and", days, "Days in the given number", inputValue)

// Q No.4.	Write a program that calculates the discount for a product based on its price.
// If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.
let priceValue:number=90
let discount10:number=10/100
let discount5:number=5/100
if (priceValue>=100)
{
let discountValue:number=priceValue*discount10
console.log("The Discounted Price of the Product is", priceValue-discountValue)
}
else if (priceValue<100)
{
let discountValue:number=priceValue*discount5
console.log("The Discounted Price of the Product is", priceValue-discountValue)
}




// Q No.5.	Create a program that determines the category of a user-provided age. If the age is between 0 and 12, 
// print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."
let age:number=22
if (age>=0 && age<=12) 
{
    console.log("'A Child' as the age is between 0-12 Years i,e", age)    
}
else if (age>=13 && age<=19) 
{
    console.log("'A Teenager' as the age is between 13-19 Years i,e", age)    
}
else if (age>=19) 
{
    console.log("'An Adult' as the age is Above 19 Years i,e", age)   
}
else{
    console.log("Please Engter a Valid age", age)   
}

// Q No.6.	Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm 
// clothes and so on according to the weather.

// Q No.7.	Write a program that checks if the given number is  by 3 or 5 or both or not divisible by anyone 
// show output accordingly.
// Q No.8.	Write a program that checks if the given year is leap year or not.
// Q No.9.	Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested
// if statements to print the corresponding day's name.
// Q No.10.	Write a program that takes the number of units consumed by a user if it is greater than 100 then add 
// 10% tax if greater than 200 then add 15% of tax so on up to if greater than 500 then add 25% of tax.
// Where the tax amount will be calculated by the amount of bill.
