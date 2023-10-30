import { Button } from "reactstrap";
const Section4 = () => {
    return(
        <div style={{width:"100%"}}>
            <div className="section_left " style={{paddingTop:'15%'}}>
                <div className="textBox attachRight">
                    <div className="L-text">
                        함께 도전해서<br/>
                        재미있는 26주 적금
                    </div>
                    <div className="S-text">
                        26주 동안 변화하는 재미에 빠져 있는 사이<br/>
                        어느덧 만기 달성 경험을 맛보게 됩니다.
                    </div><br/>
                    <Button color="light" size="md">26주 적금&gt;</Button>
                </div>
            </div>
            <div className="section_right">
                <div className="imgBox attachLeft">
                    <img src="/img/main-26weeks.png" height='480px' width='520px' alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Section4;