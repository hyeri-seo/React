import './App.css';
import MyComponent from './MyComponent';
import PropsBoolean from './PropsBoolean';
import PropsDataType from './PropsDataType';
import PropsNode from './PropsNode';
import PropsRequired from './PropsRequired';

function App() {
  //let info
  return (
    <div className='App'>
      {/*<MyComponent name="song" age="20"/>*/}
      <MyComponent info={{name:"gong", age:"40"}}/>
      <PropsDataType
        String="react"
        Number={501}
        Boolean={1==1} //true를 넘기는 것
        Array={[1,2,3]}
        ObjectJson={{react:'리액트',version:501}}
        Fuction={console.log("FunctionProps:function!")}
      />
      <PropsBoolean BooleanTrueFalse = {false}/>
      <PropsBoolean BooleanTrueFalse/>
      <PropsRequired ReactVersion={501}/>
      <PropsRequired/><br/>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
    //이름만 보낼 때는 boolean type의 true 보낸 것
  );
}

export default App;
