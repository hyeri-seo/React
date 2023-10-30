import { Badge, Button } from "reactstrap";
const Section3 = () => {
    return(
        <div style={{width:"100%"}}>
            <div className="section_left attachRight" style={{paddingTop:'15%'}}>
                <div className="textBox">
                    <span className="L-text">
                        함께 쓰고 같이 보는<br/>
                        <Badge color="warning" style={{color:'white'}}>B</Badge>모임통장
                    </span>
                    <span className="S-text">
                        토토톡 친구들 바로 모임통장으로 초대하고<br/>
                        친구들과 함께 잔액과 입출금 현황을 확인할 수 있습니다.<br/>
                        재미있는 메시지 카드로 회비 입금 요청도 해보세요.
                    </span><br/>
                    <Button color='light' size='md'>모임통장&gt;</Button>&nbsp;&nbsp;&nbsp;
                </div>
                /*서혜리 나 두고 어디갔는지,,*/
            </div>
            <div className="section_right">
                <div className="imgBox attachRight">
                    <img src="/img/main-moim.png" alt="" height='680px' width='500px'/>
                </div>
            </div>
        </div>
    )
}

export default Section3;
