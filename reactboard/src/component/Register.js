import { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button, Card, InputGroup, InputGroupText} from "reactstrap";
const Register = () => {
    const [writer, setWriter] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [img, setImg] = useState("");
    const goToList = () => {
        window.location.href="/boardList";
    };

    return(
        <Form>
           <h4 style={{textAlign:'center'}}>게시판 글 등록</h4><br/>
           <Card style={{width:"800px", margin:"20px auto", padding:"20px"}}>
           <FormGroup row>
                <Label for="writer" sm={3}>글쓴이</Label>
                <Col sm={9}>
                    <Input type="text" name="writer" id="writer" value={writer} onChange={e=>setWriter(e.target.value)}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="title" sm={3}>제 목</Label>
                <Col sm={9}>
                    <Input type="text" name="title" id="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="content" sm={3}>내 용</Label>
                <Col sm={9}>
                    <Input type="textarea" name="content" id="content" value={content}
                    onChange={e=>setContent(e.target.value)} rows="20"/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="img" sm={3}>이미지 파일 첨부</Label>
                <Col sm={9}>
                    <InputGroup>
                        <InputGroupText>파일 선택</InputGroupText>
                        <Input placeholder="선택된 파일 없음" type="img" value={img}
                        onChange={e=>setImg(e.target.value)} width='300px' height='300px'/>
                    </InputGroup>
                </Col>
            </FormGroup>
            <FormGroup row style={{margin:"auto"}}>
                <Col>
                    <Button color="primary" onClick={goToList}>등록</Button>&nbsp;&nbsp;
                    <Button color="primary" onClick={goToList}>게시판 목록</Button>
                </Col>
            </FormGroup>
            </Card>
        </Form>
    )
}

export default Register;