'use strict'

var re = /-/gi;
var rew = /легким/gi;
let str = 'урок-3-был слишком легким';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
alert(capitalize(str.replace(re, ' ').replace(rew, 'легкoo'))); 

let arr =[20, 33, 1, 'Человек', 2, 3];
let bar = "Человек";
arr.splice( arr.indexOf( bar ), 3 );

let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3);
}
let sumSqrt = Math.sqrt(sum);
console.log(sumSqrt);


function fun(arg) {
 for (let i = 0; i < 1; i++){
        
  arg = prompt('Введите текст');
 
       if ( (typeof(arg)) === 'string'
       && (typeof(arg)) !== null 
       && arg != '' 
       && arg.trim()
       && arg.length < 20){
       alert(arg);
  }else if( arg > 20 && (typeof(arg)) !== null) {
  arg = arg.slice(0, 1) + arg.slice(-5)  + '...';
    alert(arg);
  }
   else if( alert("Не ввели данные")){

  } else{
       i = i - 1;
  }
}
}
fun();





