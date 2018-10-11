function add (number){
  if(number == ""){
    return 0;
  }
  if(parseInt(number) < 0)
  {
    throw "Negatives not allowed: " + number;
  }

  if(number.includes(",") || number.includes("\n")){
    var numberArray = number.replace(/\n/g, ",").split(",");
    negativenumbers(numberArray);
    return sum(numberArray);
  }
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

module.exports = add;
