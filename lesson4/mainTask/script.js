'use strict';
nextPrime:
  for (var i = 2; i <= 100; i++) {
    for (var j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;   
    }
    console.log(i + ' Делители этого числа: ' + ' 1' + ' и ' + j); 
  }