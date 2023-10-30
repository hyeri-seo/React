import { useState } from 'react';
import {Card, CardTitle, Form, Label, Input, FormGroup, FormText, Button, Col} from 'reactstrap';

function MakeAccount() {
    const [isNormalAccount, setIsNormalAccount] = useState(false);
    const handleAccountTypeChange = (e) => { //일반계좌가 선택되었을 때 select 요소를 비활성화
        setIsNormalAccount(e.target.id === 'normalAcc');
    }
    return(
        <Card style={{width:"600px", margin:"20px auto"}}>
            <CardTitle style={{marginTop:'30px', marginBottom:'30px'}}><h3>계좌개설</h3></CardTitle>
            <FormGroup row>
                <Label for="accountId" sm={2} style={{marginLeft:'20px'}}>계좌번호</Label>
                <Col sm={9}>
                    <Input type='text' name='accountId' id='accountId'/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="userName" sm={2} style={{marginLeft:'20px'}}>이름</Label>
                <Col sm={9}>
                    <Input type='text' name='userName' id='userName'/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="deposit" sm={2} style={{marginLeft:'20px'}}>입금액</Label>
                <Col sm={9}>
                    <Input type='text' name='deposit' id='deposit'/>
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="deposit" sm={2} style={{marginLeft:'20px'}}>계좌종류</Label>
                <Col>
                    <Input type='radio' name='radio' id='normalAcc'
                    onChange={handleAccountTypeChange}/>{' '}일반계좌
                </Col>
                <Col>
                    <Input type='radio' name='radio' id='specialAcc'
                    onChange={handleAccountTypeChange}/>{' '}특수계좌
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="deposit" sm={2} style={{marginLeft:'20px'}}>등급</Label>
                <Col sm={9}>
                <Input type="select" name="select" id="gradeSelect" disabled={isNormalAccount}>
                    <option value="" hidden>선택하세요</option>
                    <option value="VIP">VIP</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Normal">Normal</option>
                </Input>
                </Col>
            </FormGroup>
                <Button color='primary' style={{margin:'0 30px 40px 30px'}}>계좌개설</Button>
        </Card>
        
    )
}

export default MakeAccount;
