"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classNames = "my naMe Is Mohammad asif Riaz my Friend kAshif aNd ali toqeer and zahid";
var makelowercase = classNames.toLowerCase();
console.log(makelowercase);
var colleagues = "HERE is my Cousion woRKING with me Inn My offICE";
var upperColleagues = colleagues.toUpperCase();
console.log(upperColleagues);
var sentenceOfTitle = "u have to go to islamabad to visit muree and enjoy"; //new vriable to work on
var titleWords = sentenceOfTitle.split(" "); //created new variable array of type string and applied split command which will split each word of the string values
var Titlesentence = " "; // created a  new variable of type string to store the case changed values in this  variable
for (let i = 0; i < titleWords.length; i++) // loop started with index value of the string in the array
 {
    Titlesentence += titleWords[i].charAt(0).toUpperCase() + titleWords[i].slice(1).toLowerCase() + " "; // changes will be done and will be stored in the variable created for this purpose
}
console.log(Titlesentence); // consoled
var myName = "my name is muhammad asif  riaz";
var names = myName.split(" ");
var caseNamesto = "";
for (let i = 0; i < names.length; i++) {
    caseNamesto += names[i].charAt(0).toUpperCase() + names[i].slice(1).toLowerCase() + " ";
}
console.log(caseNamesto);
var schoolnames = "allied punjab aliusman educator city rex ";
var schoolArray = schoolnames.split(" ");
var schoolTitleNames = "";
for (let i = 0; i < schoolArray.length; i++) {
    schoolTitleNames += schoolArray[i].charAt(0).toUpperCase() + schoolArray[i].slice(1).toLowerCase() + " ";
}
console.log(schoolTitleNames);
var family = "father mother brother sister me wife son daughter ";
var arrayFamily = family.split(" ");
var TitlecaseFamily = "";
for (let i = 0; i < arrayFamily.length; i++) {
    TitlecaseFamily += arrayFamily[i].charAt(0).toUpperCase() + arrayFamily[i].slice(1).toLowerCase() + " ";
}
console.log(TitlecaseFamily);
