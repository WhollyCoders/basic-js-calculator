//Functions
function getDisplayValue() {
  return calculatorDisplay.innerHTML;
}

function setDisplayValue(value) {
  calculatorDisplay.innerHTML = value;
}

function addDisplayValueToArray(){
  displayValue = getDisplayValue();
  numbers.push(displayValue);
}

function getCurrentOperation(operation){
  return currentOperation;
}

function setCurrentOperation(operation){
  currentOperation = operation;
}

function setInitialDisplayValue(){
  calculatorDisplay.innerHTML = "0";
}

//Variables
var buttonElement, buttonValue, displayValue, firstNumber, secondNumber, result;
var numbers = [];
var currentOperation = 'none';
var maxDisplayCharacters = 10;

//Element Handles
let calculatorDisplay = document.getElementById("js-cal-display");
let clearButton = document.getElementById("btn-clear");
let oppositeButton = document.getElementById("btn-opposite");
let percentButton = document.getElementById("btn-percent");
let oneButton = document.getElementById("btn-one");
let twoButton = document.getElementById("btn-two");
let threeButton = document.getElementById("btn-three");
let fourButton = document.getElementById("btn-four");
let fiveButton = document.getElementById("btn-five");
let sixButton = document.getElementById("btn-six");
let sevenButton = document.getElementById("btn-seven");
let eightButton = document.getElementById("btn-eight");
let nineButton = document.getElementById("btn-nine");
let zeroButton = document.getElementById("btn-zero");
let decimalButton = document.getElementById("btn-decimal");
let additionButton = document.getElementById("btn-addition");
let subtractionButton = document.getElementById("btn-subtraction");
let multiplicationButton = document.getElementById("btn-multiplication");
let divisionButton = document.getElementById("btn-division");
let equalButton = document.getElementById("btn-equal")

//Event Listeners
clearButton.addEventListener("click", function() {
  calculatorDisplay.innerHTML = "0";
});

oppositeButton.addEventListener("click", function() {
  calculatorDisplay.innerHTML = calculatorDisplay.innerHTML * -1;
});

percentButton.addEventListener("click", function() {
  calculatorDisplay.innerHTML = calculatorDisplay.innerHTML / 100;
});

//Event Listener - One Button
oneButton.addEventListener("click", function() {

  // console.log("This is the ONE Button");

  let displayValue = getDisplayValue();
  buttonElement = oneButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});


twoButton.addEventListener("click", function() {

  // console.log("This is the TWO Button");

  let displayValue = getDisplayValue();
  buttonElement = twoButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});

threeButton.addEventListener("click", function() {

  // console.log("This is the THREE Button");

  let displayValue = getDisplayValue();
  buttonElement = threeButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});
fourButton.addEventListener("click", function() {

  // console.log("This is the FOUR Button");

  let displayValue = getDisplayValue();
  buttonElement = fourButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});
fiveButton.addEventListener("click", function() {

  // console.log("This is the FIVE Button");

  let displayValue = getDisplayValue();
  buttonElement = fiveButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});
sixButton.addEventListener("click", function() {

  // console.log("This is the SIX Button");

  let displayValue = getDisplayValue();
  buttonElement = sixButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});
sevenButton.addEventListener("click", function() {

  // console.log("This is the SEVEN Button");

  let displayValue = getDisplayValue();
  buttonElement = sevenButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});
eightButton.addEventListener("click", function() {

  // console.log("This is the EIGHT Button");

  let displayValue = getDisplayValue();
  buttonElement = eightButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});
nineButton.addEventListener("click", function() {

  // console.log("This is the NINE Button");

  let displayValue = getDisplayValue();
  buttonElement = nineButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue == "0"){
    setDisplayValue(buttonValue);
  }else{
    setDisplayValue(displayValue+buttonValue);
  }

});

zeroButton.addEventListener("click", function() {

  // console.log("This is the ZERO Button");

  let displayValue = getDisplayValue();
  buttonElement = zeroButton;
  buttonValue = buttonElement.innerHTML;

  if(displayValue != "0"){
    setDisplayValue(displayValue+buttonValue);
  }

});

decimalButton.addEventListener("click", function() {

  // console.log("This is the DECIMAL Button");

  let displayValue = getDisplayValue();
  buttonElement = decimalButton;
  buttonValue = buttonElement.innerHTML;

  if(!displayValue.includes(".")){

      setDisplayValue(displayValue+buttonValue);
  
  }

});

additionButton.addEventListener("click", function(e) {

  let currentButtonElement = e.target;

  addDisplayValueToArray();
  setCurrentOperation(currentButtonElement.name);
  setInitialDisplayValue();

});

equalButton.addEventListener("click", function() {

  addDisplayValueToArray();

  firstNumber = parseFloat(numbers[0]);
  secondNumber = parseFloat(numbers[1]);

  switch(getCurrentOperation()){

    case 'add':
        result = firstNumber + secondNumber;
      break;

    case 'subtract':
        result = firstNumber - secondNumber;
      break;

    case 'multiply':
        result = firstNumber * secondNumber;
      break;

    case 'divide':
        result = firstNumber / secondNumber;
      break; 

    default:
      console.log("There is an ERROR!!!");
  }

  setDisplayValue(result);
  numbers = [];

});