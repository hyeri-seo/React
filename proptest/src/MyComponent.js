//import React, {Component} from 'react';
// function MyComponent(props) {
//     let {name,age} = props.info;
function MyComponent({name,age}) { 
    //function형은 import 필요 없음
    return(
        <>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </>
    )
}
//function형이랑 component형이랑 섞어서 써도 상관 없음

// class MyComponent extends Component {
//     render() {
//         let {name,age} = this.props.info;
//         //객체를 분리해서 담음
//         return (
//             <div>
//                 {/*<h1>{this.props.name}</h1>
//                 <h1>{this.props.age}</h1>*/}
//                 <h1>{name}</h1>
//                 <h1>{age}</h1> //태그 내에서 자바스크립트 변수 쓸 때 중괄호
//             </div>
//         )
//     }
// }

export default MyComponent;