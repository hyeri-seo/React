import { useState } from "react";
import Swal from 'sweetalert2';
import { Form, FormGroup, Label, Col, Input, Button } from "reactstrap";

function Deposit() {
    const formStyle = {width:'600px', margin:'20px auto', border:'1px solid lightgray', padding:'30px', borderRadius:'7px'}
    const [acc, setAcc] = useState({id:'',name:'',money:0,type:'',grade:''});
    const changeInput = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }
    const deposit = () => {
        Swal.fire({
            title:'정말 입금하시겠습니까?',
            icon:'question',
            showCancelButton:true, /* cancel버튼은 기본이 false라 설정 필요함 */
            confirmButtonColor:'#4B088A',
            cancelButtonColor:'#01DF01',
            confirmButtonText:'예',
            cancelButtonText:'아니오',
            cancelButtonText:'아니오'
        }).then((res) => {
            if(res.value) {
                Swal.fire('Deposit','입금 완료','success');
            }
        })
    }
    return (
        <Form style={formStyle}>
            <h4 style={{textAlign:'center'}}>입 금</h4><br/>
            <FormGroup row>
                <Label for="id" sm={3}>계좌번호</Label>
                <Col sm={9}>
                    <Input type="text" name="id" id="id" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="id" sm={3}>입금액</Label>
                <Col sm={9}>
                    <Input type="text" name="deposit" id="deposit" onChange={changeInput}/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Col sm={12}>
                <Button color="primary" style={{width:"100%"}} onClick={deposit}>입금</Button>
                </Col>
            </FormGroup>
        </Form>
    )
}

export default Deposit;