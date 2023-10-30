import { Form, FormGroup, Label, Col, Input, Button, Card} from "reactstrap";
const BoardDetail = () => {
    const goToList = () => {
        window.location.href="/boardList";
    };

    return(
        <Form>
           <h4 style={{textAlign:'center'}}>게시판 글 상세</h4><br/>
           <Card style={{width:"800px", margin:"20px auto", padding:"20px"}}>
           <FormGroup row>
                <Label for="writer" sm={3}>글쓴이</Label>
                <Col sm={9}>
                    <Input type="text" name="writer" id="writer" disabled/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="title" sm={3}>제 목</Label>
                <Col sm={9}>
                    <Input type="text" name="title" id="title" disabled/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="content" sm={3}>내 용</Label>
                <Col sm={9}>
                <Input type="textarea" name="content" id="content" rows="20" disabled/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="img" sm={3}>이미지 파일 첨부</Label>
                <Col sm={9}>
                    <img src="/꿍이.jpg" width='300px' height='300px' alt='꿍이'/>
                </Col>
            </FormGroup>
            <FormGroup row style={{margin:"auto"}}>
                <Col>
                    <Button color="primary">수정</Button>&nbsp;&nbsp;
                    <Button color="primary" onClick={goToList}>게시판 목록</Button>
                </Col>
            </FormGroup>
            </Card>
        </Form>
    )
}

export default BoardDetail;