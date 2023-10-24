//클래스 생성
class User {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        console.log(`Hello!, ${this.name}`);
    }
 }

 let user = new User('hong');
 user.sayHello();