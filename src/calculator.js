function add (number){
  if(number == ""){
    return 0;
  }
  if(number.includes(",")){
    var numberArray = number.split(",");
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

module.exports = add;
