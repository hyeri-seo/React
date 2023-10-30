import { Form, FormGroup, Col, Input, Button, Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
const BoardList = () => {
    const tableStyle = {width:'1000px',  margin:'20px auto', border:'1px solid lightgray'}
    const goToDetail = () => {window.location.href="/boardDetail"};
    const goToReg = () => {window.location.href="/register"};
    const data = [
        { id: 1, title: '제목1', writer: '홍길동', date: '2023-10-01', views: 5 },
        { id: 2, title: '제목2', writer: '고길동', date: '2023-10-02', views: 4 },
        { id: 3, title: '제목3', writer: '가길동', date: '2023-10-03', views: 1 },
        { id: 4, title: '제목4', writer: '나길동', date: '2023-10-04', views: 2 },
        { id: 5, title: '제목5', writer: '다길동', date: '2023-10-05', views: 7 },
      ];

    return(
        <Form style={{width:"60%", textAlign:"center", margin:"0 auto"}}>
           <h4 style={{textAlign:'center'}}>게시판 글 목록</h4><br/>
           <FormGroup row>
                <Col sm={3}>
                    <select>
                        <option value="title">제목</option>
                        <option value="writer">작성자</option>
                        <option value="content">내용</option>
                    </select>
                </Col>
                <Col sm={3}>
                    <Input type='text' name='searchBox' id='searchBox'/>
                </Col>
                <Col sm={3}>
                    <Button>검색</Button>
                </Col>
                <Col sm={3}>
                    <Button color="success" onClick={goToReg}>글쓰기</Button>
                </Col>
           </FormGroup>
           <FormGroup row>
                <Table style={tableStyle} bordered>
                    <thead>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                        <th>삭제</th>
                    </thead>
                    <tbody>
                        {data.map((i) => (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td onClick={goToDetail}>{i.title}</td>
                                <td>{i.writer}</td>
                                <td>{i.date}</td>
                                <td>{i.views}</td>
                                <td><Button color="secondary">삭제</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
           </FormGroup>
           <FormGroup row style={{display:"flex", justifyContent:"center"}}>
                <Pagination size="md">
                    <PaginationItem disabled>
                        <PaginationLink previous href="#"/>
                    </PaginationItem>
                    <PaginationItem active>
                       <PaginationLink href="?page=1">1</PaginationLink>
                   </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="?page=2">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="?page=3">3</PaginationLink>
                   </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="?page=4">4</PaginationLink>
                    </PaginationItem>
                     <PaginationItem>
                        <PaginationLink href="?page=5">5</PaginationLink>
                    </PaginationItem>
                    <PaginationItem disabled>
                        <PaginationLink next href="#"/>
                     </PaginationItem>
             </Pagination>
           </FormGroup>
        </Form>
    )
}

export default BoardList;