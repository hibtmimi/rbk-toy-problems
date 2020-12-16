/*

Exercise 1
Currently, you have a budget of $100. You have a shopping list in decreasing priority, 
and you want to report how many items you bought and how much it cost you. 
Write a function called shoppingSummary that takes an array of shopping items (objects), 
and returns a string with the number of items you bought, and the total amount you spent.

Notes:

You cannot spend more than your budget ($100).
You have enough room for all the items (if you end up buying everything), 
so there's no item limit -- your only limit is your budget.
The list is mentioned to be in "decreasing priority" simply because you do not have to sort the input array to optimize for anything else.
 So do not worry about coming up with any other sorting algorithm for the most "bang for your buck" or what not :-)
Take for example the data below:
*/
//output = number of item bought + coust 

var shoppingList = [
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "cookware",
    price: 79.99,
    weightInPounds: 35
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
Calling your function should result in:

shoppingSummary(shoppingList); //"I got 3 items at $99.73"


  var budget = 100
   var x = number of item  
  var y = cost


function shoppingSummary(obj) {
  var sum = 0;
 for (var i = 0 ; i < obj.length ; i++) {
  function sum (y){
  if (sum y[i] <= 100){
    retrn sum = sum + y
  }
  y = 79.99 + 6.99 + 3.99 + 2.55 +2.58

  if ()
 //    sum = sum + obj.price;
  }
  
  return "I got" +  + obj.length + " " + "at" + " " + "$" + sum; 
   x = "cookware" + "chicken" + "celery" + "green beans" + "carrots" 
  y = 79.99 + 6.99 + 3.99 + 2.55 +2.58

/*
Exercise 2
Suppose that you wanted to take out the most expensive item on your shopping list. 
Write a function called removeMostExpensive 
which returns a new array without the most expensive thing in the list. 
Your function should preserve the order of the items in this array.

removeMostExpensive(shoppingList);
Would return a new array with the following elements:

[
  {
    item: "rice",
    price: 12.75,
    weightInPounds: 20
  },
  {
    item: "chicken",
    price: 6.99,
    weightInPounds: 1.25
  },
  {
    item: "celery",
    price: 3.99,
    weightInPounds: 2
  },
  {
    item: "carrots",
    price: 2.85,
    weightInPounds: 2
  },
  {
    item: "green beans",
    price: 2.55,
    weightInPounds: 2
  }
];
//notice that the element with "cookware" is missing

/*


// your answer is here