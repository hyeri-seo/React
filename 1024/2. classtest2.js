//클래스 생성
class Clock {
    constructor({template}) { //객체를 생성할 때 호출됨. template는 매개변수
        this.template = template; //template는 시계에 표시할 형식을 나타내는 문자열
    }
    render() { //현재 시간을 가져오고, 시간을 template 시식에 맞게 표시하는 역할
        let date = new Date();
        let hour = date.getHours();
        if(hour<10) hour = '0'+hour;
        let mins = date.getMinutes();
        if(mins<10) mins = '0'+mins;
        let second = date.getSeconds();
        if(second<10) second = '0'+second;
        let output = this.template.replace('h',hour).replace('m',mins).replace('s',second);
        console.log(output);
        // let year = date.getFullYear();
        // if(year<10) year = '0'+year;
        // let month = date.getMonth()+1; //Month는 0부터 시작하기 문문
        // if(year<10) month = '0'+month;
        // if(day<10) day= '0'+day;
        // let output = this.template.replace('y',year).replace('m',month).replace('d',day);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render(); //현재 시간 표시
        this.timer = setInterval(()=>this.render(), 1000); //1000밀리sec(1초)마다 시간 업데이트
    }
}
로
let clock = new Clock({template:'h-s-m'}); //시-초-분 형식으로 새로운 시계 객체 생성.
clock.stop();
setTimeout(()=>clock.stop(),10000); //10초 후에 clock.stop() 호출해서 시계를 다시 멈춤