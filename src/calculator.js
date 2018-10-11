function add (number){ //ef input er emtpy string, return 0;
  if(number == ""){
    return 0;
  }
  if(parseInt(number) < 0) //ef input er ein minus tala , throw error
  {
    throw "Negatives not allowed: " + number;
  }
  var numbers = number.replace(/[^0-9-]/g,',').split(',').filter(function(n) { return n; });
  //replace-a öll tákn nema tölustafi og minus merki með kommu,
  //splita svo á kommunni, ef það urðu eitthver empty indexed filtera þau út

  negativenumbers(numbers); //checka hvort það séu negative numbers
  return sum(numbers); //skila summu talna
}

function sum(numberarray){
  var retValue = 0;
  var numbersfiltered = numberarray.filter(function(n) { return n <= 1000; });
  //fylki buid ad filtera ut tölur stærri en 1000

  for(var i = 0; i < numbersfiltered.length; i++){
      retValue = retValue + parseInt(numbersfiltered[i]);
  }
  return retValue;
}

function negativenumbers(numbers){
  var negativeValues = numbers.filter(function(n) { return n < 0 });
  //bua til fylki bara med negative numbers

  if(negativeValues.length != 0){
    throw "Negatives not allowed: " + negativeValues;
  }
}

module.exports = add;
