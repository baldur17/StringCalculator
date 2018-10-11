function add (number){
  if(number == ""){
    return 0;
  }
  if(parseInt(number) < 0)
  {
    throw "Negatives not allowed: " + number;
  }
  var numbers = number.replace(/[^0-9-]/g,',').split(',').filter(emptystring);

  console.log(numbers);
  negativenumbers(numbers);
  return sum(numbers);
  return parseInt(number);
}

function sum(numberarray){
  var retValue = 0;
  var numbersfiltered = numberarray.filter(numberrangecheck);

  for(var i = 0; i < numbersfiltered.length; i++){
      retValue = retValue + parseInt(numbersfiltered[i]);
  }
  return retValue;
}

function negativenumbers(numbers){
  var negativeValues = numbers.filter(negativecheck);

  if(negativeValues.length != 0){
    throw "Negatives not allowed: " + negativeValues;
  }
}

function negativecheck(number){
  return number < 0;
}
function numberrangecheck(number){
  return number < 1000;
}
function emptystring(number){
  return number;
}
module.exports = add;
