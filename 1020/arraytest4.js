let arr = ['사과','오렌지','바나나'];

arr.forEach(function(item,index,array) {
    console.log(`${item}, ${item}, ${array}`);
});

let users = [{id:1,name:'John',age:15},{id:2,name:'Pete',age:20},{id:3,name:'Mary',age:25},{id:4,name:'Mary',age:40}];
//find : 조건을 족족하는 데이터를 찾는다
let user1 = users.filter(function(item) {
    return item.id==1;
})
console.log(user1);

//filter : 조건을 만족하는 데이터들을(여러 개일 때) 찾는다
let user2 = users.filter(function(item) {
    return item.name=='Mary';
})
//find, map 같은 거는 return을 받음
console.log(user2);

let user20 = users.filter(item => {
    if (item.age>=20 && item.age<30) return true;
    else return false;
})
console.log(user20);

let usersp = users.map(function(item) {
    item.age++;
    return item;
})
console.log(usersp);

users.sort(function(item1, item2) {
    return item2.age-item1.age;
})
console.log(users);

users.sort(function(item1, item2) {
    return item1.name.localeCompare(item2.name);
})
console.log(users);