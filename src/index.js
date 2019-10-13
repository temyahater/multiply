function multiply(first, second) {
  /*var str = '';
  var temp = 0;
  var a = '';
  var b = '';
  var first2 = '';
  for(var i = 0; i < first.length;i++){
    for (var j = 0; j< second.length; j++) {
      if(first.length > 1){
        a = first[i]
        for(var f = 0; f < first.length-1;f++){
          a += '0';
          first2 += first[f+1]; 
        }
        alert(first2);
      }
      temp += (Number(first[i])*Number(second[j]));
    } 
    str = Number(str) + temp;
  } */
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
  console.log(str);
}
