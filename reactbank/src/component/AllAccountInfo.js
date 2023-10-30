import { useState } from "react";
import { Form, FormGroup, Label, Col, Input, Button, Table } from "reactstrap";

function AllAccountInfo() {
    const formStyle = {width:'600px', margin:'20px auto', border:'1px solid lightgray', padding:'30px', borderRadius:'7px'}
    const tableStyle = {width:'500px',  margin:'20px auto', border:'1px solid lightgray'}
    const [acc, setAcc] = useState({id:'',name:'',money:0,type:'',grade:''});
    const changeInput = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }
    // const submit = (e) => {
    //     if()
    // }
    return(
        <Form style={formStyle}>
            <h4 style={{textAlign:'center'}}>전체계좌조회</h4><br/>
            <FormGroup row>
                <Table style={tableStyle} bordered>
                    <thead>
                        <th>계좌번호</th>
                        <th>이름</th>
                        <th>잔액</th>
                        <th>종류</th>
                        <th>등급</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1001</td>
                            <td>홍길동</td>
                            <td>100000</td>
                            <td>normal</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1002</td>
                            <td>김길동</td>
                            <td>200000</td>
                            <td>special</td>
                            <td>VIP</td>
                        </tr>
                        <tr>
                            <td>1003</td>
                            <td>고길동</td>
                            <td>300000</td>
                            <td>special</td>
                            <td>Gold</td>
                        </tr>
                        <tr>
                            <td>1004</td>
                            <td>하길동</td>
                            <td>400000</td>
                            <td>normal</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1005</td>
                            <td>장길동</td>
                            <td>500000</td>
                            <td>special</td>
                            <td>Silver</td>
                        </tr>
                    </tbody>
                </Table>
            </FormGroup>
        </Form>
    )
}

export default AllAccountInfo;