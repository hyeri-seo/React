import { useState } from "react";
import Swal from 'sweetalert2';
import { Form, FormGroup, Label, Col, Input, Button, Table } from "reactstrap";

function AccountInfo() {
    const formStyle = {width:'600px', margin:'20px auto', border:'1px solid lightgray', padding:'30px', borderRadius:'7px'}
    const tableStyle = {width:'500px',  margin:'20px auto', border:'1px solid lightgray'}
    const [acc, setAcc] = useState({id:'',name:'',money:0,type:'',grade:''});
    const [showTable, setShowTable] = useState(false);
    const changeInput = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }
    const submit = () => {
        const enteredId = acc.id;
        if(enteredId === '10001') {
            setAcc({
                id: '10001',
                name: '홍길동',
                money: 100000,
                type: 'normal',
                grade: ''
            });
            setShowTable(true);
        } else {
                Swal.fire("일치하는 계좌가 없습니다.").then(result=>{
                    console.log(result.value);
                });
            setShowTable(false);
        }
    }
    return(
        <Form style={formStyle}>
            <h4 style={{textAlign:'center'}}>계좌조회</h4><br/>
            <FormGroup row>
                <Label for="id" sm={3}>계좌번호</Label>
                <Col sm={6}>
                    <Input type="text" name="id" id="id" onChange={changeInput}/>
                </Col>
                <Col sm={3}>
                    <Button color="primary" onClick={submit}>계좌조회</Button>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Table style={tableStyle} bordered>
                    <tr>
                        <th scope="row">계좌번호</th>
                        <td>{acc.id}</td>
                    </tr>
                    <tr>
                        <th scope="row">이름</th>
                        <td>{acc.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">잔액</th>
                        <td>{acc.money}</td>
                    </tr>
                    <tr>
                        <th scope="row">계좌종류</th>
                        <td>{acc.type}</td>
                    </tr>
                    <tr>
                        <th scope="row">등급</th>
                        <td>{acc.grade}</td>
                    </tr>
                </Table>
            </FormGroup>
        </Form>
    )
}

export default AccountInfo;