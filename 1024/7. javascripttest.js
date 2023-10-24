let user = {id:10, name:'John', age:30};
let {id, name, age} = user;
console.log(id);
console.log(name); //name이 자바스크립트의 공용 변수라서 선
console.log(age);

function func() {
    console.log('func');
}
let f = func;
f();

let [a,b,c] = [10,20,30];