import './App.css';
import {useState, useReducer} from 'react';
//reducer : state를 업데이트 하는 역할. 즉 함수
//dispatch : state 업데이트를 위한 요구
//action : 요구의 내용

const action_type = {
  deposit:'deposit',
  withdraw:'withdraw'
};

const reducer = (state,action) => { //action ==> {type:'deposit', payload:10000}
  switch(action.type) {
    case action_type.deposit: return +state+ +action.payload;
    case action_type.withdraw: return +state- +action.payload;
    default: return + state;
  }
}
//action(무엇)을 보고 state를 변경하는 함수
//data를 payload라고 많이 씀

function App() {
  const [money, setMoney] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0);
  return (
    <div className="App">
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input type = "number" value={money} onInput={(e)=>setMoney(e.target.value)} step="1000"/>
      <button onClick={()=>dispatch({type:'deposit',payload:money})}>입금</button>
      <button onClick={()=>dispatch({type:'withdraw',payload:money})}>출금</button>
    </div>
  );
}

export default App;
