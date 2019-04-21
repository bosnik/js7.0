var num = 33721;
var multiplication= eval(num.toString().split('').join('*'));
var power = multiplication**3;
var twoLast = eval(power.toString().slice(0,2));

console.log(multiplication);
console.log(power);
alert(twoLast);


