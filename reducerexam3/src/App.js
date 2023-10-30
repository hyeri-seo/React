import './App.css';
import { initState, reducer } from './MyReducer';
import { useReducer } from 'react';
import MyNickname from './MyNickname';

function App() {
  const [info, dispatch] = useReducer(reducer, initState);
  return (
    <div className="App">
      <label>{info.id}</label>&nbsp;&nbsp;&nbsp;
      <input type='text' onInput={(e)=>dispatch({type:"ID",payload:e.target.value})}/><br/>
      <MyNickname info={info} dispatch={dispatch}/>
      <label>{info.subject}</label>
      <input type='text' onInput={(e)=>dispatch({type:"SUBJECT",payload:e.target.value})}/><br/>
      <label>{info.grade}</label>
      <input type='text' onInput={(e)=>dispatch({type:"GRADE",payload:e.target.value})}/>
    </div>
  );
}

export default App;
