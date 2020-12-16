//Create a function (class) called Student that return an object that contains the following properties:
//Name, Date of Birth, Gender, Age
//Create an array and fill it with 5 students
//Create a function that takes a student as parameter and print out the details of the student
//Create a function that takes the array of students and sort them out based on age (younger-to-older)
//Create a function that takes the array and a string either “M” or “F” and returns the male students if “M” was passed and female students if “F” was passed
var array = [
Student('hiba', 1996, 'female', 24),
 Student('israa', 1995, 'female', 25),
 Student('rasha', 1989, 'female', 32),
  Student('rami', 2000, 'male', 21), 
  Student('braa', 1999, 'male', 22)
  ]



function classStudent(name,dateOfBirth,gender,age){
	var student={}
	student.name=name;
	student.dateOfBirth=dateOfBirth;
	student.gender=gender;
	student.age=age;
	return student;

}

var  StudentDisplay = function (student){
	return "student name: "+this.name+" student dateOfBirth: "+this.dateOfBirth+" student gender: "+this.gender+" student age: "+this.age;
}

var sortBasedOnAge = function(array ){

var genderCheck= function(array,string){
	for (var i=0; i < array.length; i++){
		if (array[i].gender[0] === "M"){
			return "Male"
	}
	return "Female"
}