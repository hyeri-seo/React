let user = {id:1,name:'hong',age:30};
let user2 = user;
let user3 = {...user};
user.name = 'song';
console.log(user);
console.log(user2);
console.log(user3);

let user4 = {...user, age:40};
console.log(user4);

function func() {

}
//부모 거를 갖다가 못 씀

const func = function() {

}

const funct = () => {

}
//부모 거 갖다가 쓸 수 있음
//자기의 this가 없으면 부모의 this 갖다가 씀
//callback함수. 화살표 함수를 사용하는 게 일반적임

func;