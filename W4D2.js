
//Part1:

// create a data model to represent your classmates
// 	-think of different attributes of your classmates? what do all of them have ?
// 	-create a factory function.
// 	-create an array to hold the classmates that you created and what you created to it .  
// 	-write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
// 	-write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
// 	-calculate the number of male friends that your class have by writing a function called nbOfMale.
function makeClassmates(name , age , place , gender){
	return { 
	    name : name ,
	    age : age ,
	    place : place ,
	    gender : gender
    }
}

makeClassmates(classmate1)

var classMates= [classmate1 , classmate2]

 function displayFriend(obj){
 	var gen = " she's"
 	if(obj.gender === "male") 
 		gen = "he's"
 	return ("my classMates is" + obj.name + gen + obj.age )
 }

function addFriend(obj) {
    classMates.push(obj)
    return "New friend added"
}

function nbOfMale(obj) {
    var count = 0
    if(key['gender'] === "male")
            count++
    }
    return "I have " + count + " male friendS"
}












//Part2:
// Using recursion Write a JavaScript function to find the greatest common divisor (gcd) of two positive numbers.
// Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summation, you'll need to use recursion in this.

