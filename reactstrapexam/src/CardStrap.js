import {Card,CardBody,CardImg, CardSubtitle, CardText, CardTitle, Button} from 'reactstrap';
function CardStrap() {
    return(
        <>
            <Card style={{width:"300px"}}>
                <CardImg style={{width:"252px", height:"189px", margin:"20px"}} src="어깡곰.jpg" alt="어깡곰"></CardImg>
                <CardBody className="text-left">
                    <CardTitle>REACT</CardTitle>
                    <CardSubtitle>front component</CardSubtitle>
                    <CardText>React is a front component</CardText>
                    <Button>조회</Button>
                </CardBody>
            </Card>
            <br/>

            <Card body style={{width:"300px"}} className="text-center">
                <CardTitle>카드 제목</CardTitle>
                <CardText>카드 내용입니다.</CardText>
                <Button>선택</Button>
            </Card>
        </>
    )
}

export default CardStrap;