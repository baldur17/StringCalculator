function add (number){
  if(number == ""){
    return 0;
  }
  if(number.includes(",")){
    var numberArray = number.split(",");
    var retValue = 0;
    for(var i = 0; i < numberArray.length; i++){
      retValue = retValue + parseInt(numberArray[i]);
    }
    return retValue;
  }
  return parseInt(number);
}

module.exports = add;
