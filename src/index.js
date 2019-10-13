module.exports = function multiply(first, second) {
  var arr = [];
  var firstD = first.split('').reverse();
  var secondD = second.split('').reverse();
  for(var i = 0; i < firstD.length; i++){
    for(var j = 0; j < secondD.length; j++){
      var a = firstD[i]*secondD[j];
      arr[i+j] = (arr[i+j])?arr[i+j]+a:a;
    }
  }
  for(var i = 0; i< arr.length-1; i++){
    var digit = arr[i]% 10;
    if(first.length > 1 || second.length > 1){
      var step = Math.floor(arr[i]/10);
      arr[i] = digit;
    }
    if(arr[i+1]) arr[i+1] += step;
    else if(step != 0) arr[i+1];
  }
  var str = arr.reverse().join('');
  return str;
}
