var num = 33721;
var a= eval(num.toString().split(''));
var qwe = 1 ;
for(i=0;i<a.length;i++) {

    qwe = qwe * parseInt(a[i]);

 
}

var w = eval(qwe.toString().split(''));
var r = eval(qwe.toString().slice(0,2));

console.log(qwe);
alert(r);