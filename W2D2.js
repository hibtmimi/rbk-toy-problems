// 1-using the console calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15].
function averageAge(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,n) {
return (n1+n2+n3+n4+n5+n6+n7+n8+n9+n10)/n
}
console.log(averageAge(13,14,13,15,16,17,19,13,16,15,10);
// 2-using the console calculate your age in seconds.
function age(y,d,h,m,s){
	return y*d*h*m*s;
}
	console.log(age(24,360,24,60,60))

// 3- Write a function identity that takes one parameter and returns that input value.
// Calling your function should result in:
function identity(p){
	return p;
}
identity("hello world");  ==> "hello world"
 identity(500);  ==> 500

// identity("hello world");  ==> "hello world"
// identity(500);  ==> 500

// 4- Write a function convertTo that takes  a string and a number as parameters.
// If the string input is "cm", then the function should convert the 2nd argument into centimeters by multiplying it to 2.54 and returning that value.
// If the string input is "in", then the function should convert the 2nd argument into inches by dividing it by 2.54.
// Calling your function should result in something like:
// convertTo('cm', 100);  ==> 254
// convertTo('in', 50.8); ==> 20

  function convertTo(units, num) {
  // write your code here
  if("unit" === "cm") {
  	 return num * 2.54
  }else if ("unit" === "in") {
}
 return num / 2.45
  }
convertTo('cm', 100);
convertTo('in', 50.8)
;
//4- Write a function dogsIWouldPet that takes an item (string), 
//and returns a sentence stating dogs you would pet in comparison to the item (see sample call below).
// Calling your function should result in:
// dogsIWouldPet("ottoman"); //"I would pet dogs no bigger than an ottoman"
// dogsIWouldPet("small horse"); //"I would pet dogs no bigger than an small horse"
// dogsIWouldPet("Terrier"); //"I would pet dogs no bigger than an Terrier"
// Bonus (extra): If your function were passed in a string "I do not like dogs", 
//you can have your function return "I would not pet dogs".

function dogsIWouldPet(string) {
	if ("string" == "ottoman" ) {
	return "I would pet dogs no bigger than an ottoman"
}
else if("string" == "small horse") {
  
return"I would pet dogs no bigger than an small horse"
  }
   else("string" == "Terrier") 
   {
}
return "I would pet dogs no bigger than an Terrier"
}
console.log(dogsIWouldPet("ottoman"))

// 5- Write a function convertToKilometers that takes a number of miles passed in as parameter, 
// and returns that number multiplied by 1.60934 (an accepted approximation of 1 mile in kilometers).
// Calling your function should result in:
// convertToKilometers(50);   ==> 80.467
// convertToKilometers(361);  ==> 580.973

function convertToKilometers(num) {
	return num*1.60934
}
console.log(convertToKilometers(50));