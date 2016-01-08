"use strict";
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



