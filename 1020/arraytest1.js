let arr = [10,20,30,40];
console.log(arr.length);
arr.splice(1,1); //배열의 n번째 거부터 m개 삭제
console.log(arr);
console.log(arr.length);

arr.splice(1,2,100,200); //배열의 1번째 거부터 2개를 삭제하고 100, 200을 삽입
console.log(arr);

//10,100,300,400,200
arr.splice(2,0,300,400); //배열의 2번째부터 0개 삭제(삭제하지 않고), 그 자리에 300, 400 삽입
console.log(arr);

//slice: 배열의 부분 요소 가져오기
let narr = [10,20,30,40,50,60,70,80];
let subarr = narr.slice(2,5); //2번째부터 5번째 전까지의 배열 요소 가져오기
console.log(narr);
console.log(subarr);

//concat
let arr2=[1,2];
let totarr = arr2.concat(3,4);
console.log(arr2);
console.log(totarr);

let totarr2 = arr2.concat([3,4]);
console.log(totarr2);
let arr3=[10,20];
let totarr3 = arr2.concat(arr3);
console.log(totarr3);
let totarr4 = arr2.concat(3,4,[5,6],arr3);
console.log(totarr4);