function Calculator(x,y) {
    this.x = x;
    this.y = y;

    this.sum = () => {
        return this.x+this.y;
        //this.x와 x는 다름. 이름만 x로 같을 뿐임
    }

    this.mul = () => {
        return this.x*this.y;
    }
}

let calc = new Calculator(20,10);
console.log(`sum=${calc.sum()}`);
console.log(`mul=${calc.mul()}`);

//sum=30;
//mul=200;
