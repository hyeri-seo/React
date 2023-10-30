import React, {Component} from "react";

class MyComponent extends Component {
    //컴포넌트 생성자 메서드, 컴포넌트가 생성되면 가장 먼저 실행
    //this.props, this.state에 접근 가능하고 리액트 요소를 반환함
    constructor(props) {
        super(props)
        this.state = {}
        console.log("constructor");
    }

    //props로부터 파생된 state를 가져온다. 즉, props로 받아온 것을 state에 넣어주고 싶을 때 사용한다.
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return {test:props.data};
    }
    
    //컴포넌트를 렌더링하는 메소드
    render() {
        console.log("render");
        return(
            <h2>[ THIS IS IMPORTED COMPONENT ]</h2>
            )
        }
        
        //컴포넌트가 마운트됨. 즉 컴포넌트의 첫 번째 렌더링을 마치며 호출되는 메서드
        //이 메서드가 호출되는 시점에는 화면에 컴포트트가 나타난 상태이다.
        //여기서 주로 DOM을 사용해야 하는 외부 라이브러리 연동, 해당 컴포넌트에서 필요로 하는 데이터를 요청한다.
        componentDidMount( ) {
            console.log("componentDidMount:"+this.state.test.param1);
        }

        //컴포넌트가 리렌더링 할지 말지를 결정하는 메서드. true/false 반환
        shouldComponentUpdate(props, state) {
            console.log("shouldComponentUpdate");
            return true;
        }

        //컴포넌트가 업데이트 되고 난 후 발생
        componentDidUpdate() {
            console.log("componentDidUpdate");
        }
}

export default MyComponent;