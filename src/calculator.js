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

function sum(numberArray){
  var retValue = 0;

  for(var i = 0; i < numberArray.length; i++){
      retValue = retValue + parseInt(numberArray[i]);
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

module.exports = add;
