
// Write a function called onlyPayForHealthyThings, that takes an array of objects.

// Each object is a grocery item with the following properties: name,p nutritionalValue, Price.
// The nutritionalValue is also an object, which has the following properties: lowSugar, lowSodium
// Your function should add the prices of all the items in the array if the item is true for both lowSugar and lowSodium

// Finally, your function should return the sum total of all the healthy items
// input : myCart
// output : sum of total price


var myCart = [ 
  { name: 'chips',
    nutritionalValue: { lowSugar: true, lowSodium: false },
    price: 0.75 },
  // { name: 'carrots',
  //   nutritionalValue: { lowSugar: true, lowSodium: true },
  //   price: 1.5 },
  { name: 'cookies',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 2.5 },
  // { name: 'apples',
  //   nutritionalValue: { lowSugar: true, lowSodium: true },
  //   price: 0.6 },
  { name: 'soda',
    nutritionalValue: { lowSugar: false, lowSodium: true },
    price: 1.1 },
  // { name: 'avocados',
  //   nutritionalValue: { lowSugar: true, lowSodium: true },
  //   price: 0.75 } 
  ];
// Calling onlyPayForHealthyThings(myCart) should return 2.85 from adding the prices of "carrots", "apples", and "avocados"

function onlyPayForHealthyThings(array) {
  var foodListPrice = []
  var sum = 0
  for(var i = 0 ; i< array.length ; i++){
    if(array[i]["nutritionalValue"]["lowSugar"] === true && array[i]["nutritionalValue"]["lowSodium"]=== true){
     foodListPrice.push(array[i]["price"])
  }
}

for(var j = 0 ; j < foodListPrice.length ; j++){
  sum = sum +foodListPrice[j]
 
}
 return sum
    }
    console.log(onlyPayForHealthyThings(myCart))