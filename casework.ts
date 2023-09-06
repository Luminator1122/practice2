var classNames:string="my naMe Is Mohammad asif Riaz my Friend kAshif aNd ali toqeer and zahid"
var makelowercase:string=classNames.toLowerCase()
console.log(makelowercase)

var colleagues:string="HERE is my Cousion woRKING with me Inn My offICE"
var upperColleagues:string=colleagues.toUpperCase()
console.log(upperColleagues)

var sentenceOfTitle:string="u have to go to islamabad to visit muree and enjoy"  //new vriable to work on
var titleWords:string[]=sentenceOfTitle.split(" ") //created new variable array of type string and applied split command which will split each word of the string values
var Titlesentence:string=" "   // created a  new variable of type string to store the case changed values in this  variable
for (let i = 0; i < titleWords.length; i++)  // loop started with index value of the string in the array
{
    Titlesentence += titleWords[i].charAt(0).toUpperCase()+titleWords[i].slice(1).toLowerCase()+" " // changes will be done and will be stored in the variable created for this purpose
}
console.log(Titlesentence) // consoled



var myName:string="my name is muhammad asif  riaz"
var names:string[]=myName.split(" ")
var caseNamesto:string=""
for (let i = 0; i < names.length; i++) 
{
    caseNamesto+= names[i].charAt(0).toUpperCase()+names[i].slice(1).toLowerCase()+" ";
}
console.log(caseNamesto)


var schoolnames:string="allied punjab aliusman educator city rex "
var schoolArray:string[]=schoolnames.split(" ")
var schoolTitleNames:string=""
for (let i = 0; i < schoolArray.length; i++)
{
    schoolTitleNames+= schoolArray[i].charAt(0).toUpperCase()+schoolArray[i].slice(1).toLowerCase()+" ";
}
console.log(schoolTitleNames)

var family:string="father mother brother sister me wife son daughter "
var arrayFamily:string[]=family.split(" ")
var TitlecaseFamily:string=""
for (let i = 0; i < arrayFamily.length; i++)
{
    TitlecaseFamily+= arrayFamily[i].charAt(0).toUpperCase()+arrayFamily[i].slice(1).toLowerCase()+" ";
}
console.log(TitlecaseFamily)



















export {};
