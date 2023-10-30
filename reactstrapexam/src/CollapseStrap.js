import {UncontrolledCollapse, Button, CardBody, Card} from "reactstrap";
function CollapseStrap() {
    return(
        <>
        <Button color="warning" id="toggle">펼치기/접기</Button>
        <UncontrolledCollapse toggler="#toggle">
            <Card>
                <CardBody>
                방역당국은 가축전염병인 럼피스킨병 확산을 막기 위해 내달 초까지 전국 소 사육 농장을 대상으로 해외에서 안전성과 유효성이 입증된 백신을 접종할 계획이라며 백신 효과는 1년간 유지될 것이라고 25일 밝혔다.
                당국은 또 해외 사례를 볼 때 국내에서 백신 접종이 완료되면 다음 달 안에는 럼피스킨병 발생 건수가 감소할 것이라며 상황이 안정화하면 살처분 범위 조정을 검토하겠다고 덧붙였다.
                다음은 25일 중앙사고수습본부의 설명을 바탕으로 럼피스킨병 백신과 방역 조치에 대한 내용을 문답 형식으로 정리한 것이다.
                </CardBody>
            </Card>
        </UncontrolledCollapse><br/>
        <Button style={{marginBottom:"10px"}} color="warning">테스트 버튼</Button>
        </>
    )
}

export default CollapseStrap;