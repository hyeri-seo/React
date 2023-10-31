import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const ElecChargeStatList = () => {
    const [chargeList, setChargeList] = useState([]);
    useEffect(() => {
        axios.get(`http://openapi.seoul.go.kr:8088/48497a7251726b7436386e61526755/json/evChargingStation/1/5/`)
        .then(res => {
            console.log(res.data.evChargingStation.row);
            setChargeList(res.data.evChargingStation.row);
        })
    },[])
    //useEffect: 화면이 뜨자마자 호출되는 함수
    return (
        <div>
            <Table bordered style={{margin:'10px'}}>
                <thead>
                    <tr><th>충전소</th><th>주소</th><th>충전기 타입</th><th>이용 가능 시간</th><th>충전 용량</th></tr>
                </thead>
                <tbody>
                    {chargeList.map(charge=>
                        <tr key={charge.CHARGING_STATION + charge.CHARGE_ID}>
                            <td>{charge.CHARGING_STATION}</td>
                            <td>{charge.ADDR}</td>
                            <td>{charge.CHARGE_TYPE}</td>
                            <td>{charge.UTZTN_PSBLTY_TM}</td>
                            <td>{charge.CHARGING_CAPACITY}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default ElecChargeStatList;