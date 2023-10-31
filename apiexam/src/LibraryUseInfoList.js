import { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';

const LibraryUseInfoList = () => {
    const [libraryList, setLibraryList] = useState([]);
    useEffect(() => {
        axios.get('http://openapi.seoul.go.kr:8088/48497a7251726b7436386e61526755/json/SeoulLibraryTimeInfo/1/5/')
        .then(res => {
            console.log(res.data.SeoulLibraryTimeInfo.row);
            setLibraryList(res.data.SeoulLibraryTimeInfo.row);
        })
    },[])
    //useEffect: 화면이 뜨자마자 호출되는 함수
    return (
        <div>
            <Table bordered style={{margin:'10px'}}>
                <thead>
                    <tr><th>도서관명</th><th>구명</th><th>주소</th><th>정기 휴관일</th><th>전화번호</th></tr>
                </thead>
                <tbody>
                    {libraryList.map(libraryList=>
                        <tr key={libraryList.LBRRY_SEQ_NO}>
                            <td>{libraryList.LBRRY_NAME}</td>
                            <td>{libraryList.CODE_VALUE	}</td>
                            <td>{libraryList.ADRES}</td>
                            <td>{libraryList.FDRM_CLOSE_DATE}</td>
                            <td>{libraryList.TEL_NO}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    );
};

export default LibraryUseInfoList;