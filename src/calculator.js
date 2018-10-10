function add (number){
  if(number == ""){
    return 0;
  }
  if(number.includes(",") || number.includes("\n")){
    var numberArray = number.replace(/\n/g, ",").split(",");
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
