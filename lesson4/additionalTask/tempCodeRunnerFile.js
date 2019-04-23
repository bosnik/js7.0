let arr =[20, 33, 1, 'Человек', 2, 3];

var removed = arr.splice(3, 1);

let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3);
}
let sumSqrt = Math.sqrt(sum);
console.log(sumSqrt);