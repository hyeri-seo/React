function Person(name, age) { //생성자 함수는 대문자로 시작한다. 반드시 new 연산자를 붙여 실행한다.
    this.name = name;
    this.age = age;

    this.info = () => {
        return `이름:${this.name}, 나이:${this.age}`;
    }
}

let person = new Person('hong',20);
console.log(person.info());