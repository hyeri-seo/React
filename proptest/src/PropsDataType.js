import datatype from 'prop-types';
function PropsDataType(props) {
    let {String,Number,Boolean,Array,ObjectJson,Function} = props;
    return(
        <>
            <p>StringProps : {String}</p>
            <p>NumberProps : {Number}</p>
            <p>BooleanProps : {Boolean.toString()}</p>
            <p>ArrayProps : {Array.toString()}</p>
            <p>ObjectJsonProps : {JSON.stringify(ObjectJson)}</p>
            <p>FunctionProps : {Function}</p>
        </>
    )
}

PropsDataType.propTypes = { //각각의 datatype을 지정
    String:datatype.string,
    Number:datatype.number,
    Boolean:datatype.bool,
    Array:datatype.array,
    ObjectJson:datatype.object,
    Function:datatype.func
}
export default PropsDataType;
//export 시키지 않으면 다른 곳에서 import 불가능