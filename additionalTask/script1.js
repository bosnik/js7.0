var num = 33721;
var test = eval(num.toString().split('').join('*'));
var step = test**3;
var last = (eval(step.toString().split('')));

console.log(test);
console.log(step);
alert(last.slice(0,2));


