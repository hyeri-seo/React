import Component5 from "./Component5";

const Component4 = ({user,setUser}) => {
    return(
        <>
        <h1>Component3</h1>
        <Component5 user = {user} setUser = {setUser}/>
        </>
    )
}

export default Component4;