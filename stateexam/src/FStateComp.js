import {useState} from 'react';
function FStateComp() {
    const [stateString, setStateString] = useState('react'); //userState: 객체를 줌
    const [stateNumber, setStateNumber] = useState(501);
    return(
        <>
            {/* 
            <button onClick={this.stringChange}>String 변경</button><br/>
            <button onClick={this.numberChange}>Number 변경</button><br/> */}
            <button onClick={()=>setStateString('리액트')}>String 변경</button><br/>
            <button onClick={()=>setStateNumber(502)}>Number 변경</button><br/>

            {/* 
            StateString : {this.state.stateString}<br/>
            StateNumber : {this.state.stateNumber} */}
            StateString : {stateString}<br/>
            StateNumber : {stateNumber}
        </>
    )
}

export default FStateComp;