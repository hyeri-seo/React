function PropsBoolean({BooleanTrueFalse}) {
    return(
        <>
            {BooleanTrueFalse?"2.":"1."}
            {BooleanTrueFalse.toString()}
            <br/>
        </>
    )
}
export default PropsBoolean;
//하나짜리 태그는 반드시 뒤에 슬래쉬