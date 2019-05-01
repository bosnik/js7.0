'use strict'

let replacement = /-/gi;
let  replace = /легким/gi;
let str = 'урок-3-был слишком легким';

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
alert(capitalize(str.replace(replacement, ' ').replace(replace, 'легкoo'))); 

let arr =[20, 33, 1, 'Человек', 2, 3];

let removed = arr.splice(3, 1);

let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3);
}
let sumSqrt = Math.sqrt(sum);
console.log(sumSqrt);


function fun(arg) {
 for (let i = 0; i < 1; i++){
        
  arg = prompt('Введите текст').trim();
 
       if ( (typeof(arg)) === 'string'
       && (typeof(arg)) !== null 
       && arg != '' 
       && arg.length < 20){
       alert(arg);
  }else if( arg.length > 20) {
    arg = arg.slice(0, 1) + arg.slice(-5)  + '...';
    alert(arg);
  }
   else if( alert("Не ввели данные")){

  } else{
       i--;
  }
}
}
fun();




