"use strict";
var palindrome = prompt("Enter possiable palindrome here:");
function palindrome(myString){
	
}

function palindrome(myString){

/* remove special characters, spaces and make lowercase*/
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
if(removeChar === checkPalindrome){
  
  console.log("<div>"+ myString + " is a Palindrome <div>");
}else{
  
  console.log("<div>" + myString + " is not a Palindrome </div>");
}
}


/*Working code below*/
var myString = prompt("Enter possiable palindrome here:");
function palindrome(myString){

/* remove special characters, spaces and make lowercase*/
var removeChar = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();

/* reverse removeChar for comparison*/
var checkPalindrome = removeChar.split('').reverse().join('');

/* Check to see if myString is a Palindrome*/
if(removeChar === checkPalindrome){
  
  console.log("<div>"+ myString + " is a Palindrome <div>");
}else{
  
  console.log("<div>" + myString + " is not a Palindrome </div>");
}
}
palindrome(myString)




/*Workin better code*/
/* x=word y=newWord */
var word = prompt("Enter possiable palindrome")
var palindromeFunction= function(word){
word = word.toLowerCase();
word = word.split(" ").join("");
var newWord = word.split("").reverse().join("");
if(newWord===word){
return word + " is a palindrome";
}else{
return word + " is not a palindrome";
}
}
console.log(palindromeFunction(word));



