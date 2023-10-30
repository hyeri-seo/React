import { useState } from 'react';
import {Button, Fade} from 'reactstrap';
function FadeStrap() {
    const [fadeIn, setFadeIn] = useState(true);
    return(
        <>
            <Button color='success' onClick={()=>setFadeIn(!fadeIn)}>Fade In/Out</Button>
            <Fade in={fadeIn} tag="p" style={{width:"200px"}}>
            다음은 25일 중앙사고수습본부의 설명을 바탕으로 럼피스킨병 백신과 방역 조치에 대한 내용을 문답 형식으로 정리한 것이다.
            </Fade>
            <p>다음 글입니다.....</p>
        </>
    )
}

export default FadeStrap;