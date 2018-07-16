// input a number
// click a button either + - / *
//event listner for addition
document.getElementById('add').onclick = addNums

//event listner for subtraction
document.getElementById('sub').onclick = subNums

//event listner for multiply
document.getElementById('multi').onclick = multiNums

//event listner for division
document.getElementById('divide').onclick = divNums

//calculation occurs arethmatic happens
//generates an answer
//function for addition
function addNums(){
  //get value out of first userInput1
  var num1 = parseFloat(document.getElementById('userInput1').value)
  //get value out of second userInput2
  var num2 = parseFloat(document.getElementById('userInput2').value)
  //add both Values
  var sum = num1 + num2
  //alert the sum
  alert(sum)// displays answer
}

//function for subtraction
function subNums(){
  //get value out of first userInput1
  var num1 = parseFloat(document.getElementById('userInput1').value)
  //get value out of second userInput2
  var num2 = parseFloat(document.getElementById('userInput2').value)
  //add both Values
  var minus = num1 - num2
  //alert the sum
  alert(minus)// displays answer
}
//function for multiply
function multiNums(){
  //get value out of first userInput1
  var num1 = parseFloat(document.getElementById('userInput1').value)
  //get value out of second userInput2
  var num2 = parseFloat(document.getElementById('userInput2').value)
  //add both Values
  var mult = num1 * num2
  //alert the sum
  alert(mult)// displays answer
}

//function for division
function divNums(){
  //get value out of first userInput1
  var num1 = parseFloat(document.getElementById('userInput1').value)
  //get value out of second userInput2
  var num2 = parseFloat(document.getElementById('userInput2').value)
  //add both Values
  var divide = num1 / num2
  //alert the sum
  alert(divide)// displays answer
}
