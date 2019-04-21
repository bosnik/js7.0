var num = 33721;
var multiplication= eval(num.toString().split('').join('*'));
var power = multiplication**3;
var twoLast = eval(power.toString().slice(0,2));

console.log(multiplication);
console.log(power);
alert(twoLast);


/* cycle for */

/* var num = 33721;
var arr= eval(num.toString().split(''));
var a = 1,
b;
for(i=0;i<arr.length;i++) {

    a = a * parseInt(arr[i]);
    b = a**3;
 
}

var line = eval(a.toString().split(''));
var r = eval(b.toString().slice(0,2));

console.log(a);
console.log(b);

alert(r); */

/* cycle for */