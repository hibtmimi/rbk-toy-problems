//1.Write a function called sameLength that takes two strings as parmeters, 
//and returns true if those strings have the same length, and false otherwise.
function sameLength(str1,str2) {
	if(str1.length === str2.length) {
		return true;
	}
	return false;
}
console.log(sameLength("hi","by"))
//2.Write a function called passwordLongEnough that takes a 'password' as a parameter 
//and returns true if that password is long enough -- you get to decide what constitutes long enough.
function passwordLongEnough(password) {
if(password.length >= 20) {
	return true;
}
return false
}
console.log(passwordLongEnough("montonimo123456789poi"))
//3.Write a function called rentalCar that takes a person's name and age as parmeters, 
//and returns either 'You cannot have the keys, .', or "Have fun driving", 
// depending on whether or not the person is old enough. 
//In the US, most rental car companies do not allow you to rent a car until you are 21.

function rentalCar(name,age) {
	if(name <= 21) {
		return 'You cannot have the keys';
	}

	return "Have fun driving";
}
console.log(rentalCar("loie" , 25))

// 4.Write a function called max that takes two numbers as parameters, 
//and returns the larger o
	// body...
function max(n1,n2) {
	 if( n1 > n2) {
	 	return n1;
	 }else if(n2 > n1) {
	return n2;
}
}
console.log(max(5,6))



// 5.Write a function called  min that takes two numbers as parameters,
// and returns the smaller one.


function min(n1,n2) {
	 if( n1 < n2) {
	 	return n1;
	 }else if(n2 < n1) {
	return n2;
}

console.log(min(5,6))


/*
1-Write a function called loopAString that takes one parameter, a string of characters, 
and logs all of its characters (one at a time) to the console. 
Your function should use a while loop to log each character 
from the beginning to the end of the string, then return nothing. 
Below is an example of the code running.

loopAString('nodeJS');
// console output:
  // n
  // o
  // d
  // e
  // J
  // S

loopAString('abcd');
// console output:
  // a
  // b
  // c
  // d

*/
function loopAString(string) {

  // create an index variable
  var i=0;
  // create a loop which iterates over the input string
  while(i<string.length){

  // log current string character to the console
  console.log(string[i])
  // increment value of index variable
  i++;
}
}



// 2-Write a function called reverseStr that takes a string as an parameter 
//and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// reverseStr('hello'); "o1l2l3e4h"
// Your code is here
function reverseString(str) {
  var revers = ""
  var i = str.length - 1
  while (i >= 0) {
    ans += str[i]
    i--
  }
  return revers;
}
console.log(reverseString("hello") // result is "olleh"


