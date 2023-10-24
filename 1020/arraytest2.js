let fruits = ['banana'];
let arr = fruits;
fruits.push('orange');
console.log(fruits);
console.log(arr);

console.log(arr==fruits);

let carr = [...fruits]; //중요! 배열의 깊은 복사(전개연산자(...) 사용하여 복사)
fruits.push('strawberry');
console.log(fruits);
console.log(carr);
console.log(carr==fruits);


