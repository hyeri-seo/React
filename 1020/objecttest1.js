let user = {id:1,name:'hong',age:30};
let user2 = user;
let user3 = {...user};
user.name = 'song';
console.log(user);
console.log(user2);
console.log(user3);

let user4 = {...user, age:40};
console.log(user4);