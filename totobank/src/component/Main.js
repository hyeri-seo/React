import Section7 from "../Section7";
import Section0 from "./Section0";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
const Main = () => {
    return(
        <div style={{top:"80px", width:"100%", height:"100%"}}>
            <Section0/>
            <Section1/>
            <div className="bar"></div>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
        </div>
    )
}

export default Main;