import React,{Component} from 'react';

class StateComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stateString : 'react',
            stateNumber : 501
        }
    }
    stringChange = (e) => {
        //this.state.stateString = '리액트'; //렌더링 되지 않는다
        this.setState({stateString:'리액트'});
    }
    numberChange = (e) => {
        this.setState({stateNumber:502});
    }
    render() {
        return(
            <>
            {/* 
            소괄호에 익명 함수를 넣은 것임. 파라미터 넘겨줘야 할 때 이렇게 씀
            <button onClick={(e)=>{this.stringChange(e)}}>String 변경</button><br/>
            <button onClick={(e)=>{this.numberChange(e)}}>Number 변경</button><br/> */}
            <button onClick={this.stringChange}>String 변경</button><br/>
            <button onClick={this.numberChange}>Number 변경</button><br/>
            StateString : {this.state.stateString}<br/>
            StateNumber : {this.state.stateNumber}
            </>
        )
    }
}
export default StateComp;