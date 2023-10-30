import {InputGroup, InputGroupAddon, InputGroupText, Input} from 'reactstrap';
function InputGroupStrap() {
    return(
        <>
            <InputGroup>
                <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                <Input placeholder="username"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                        <Input addon type="checkbox" aria-label="Checkbox for following text input"/>
                    </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Check it out"/>
            </InputGroup>
            <br/>
            <InputGroup>
                <Input placeholder="username"/>
                <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
            </InputGroup>
            <br/>
            <InputGroup>
                <InputGroupAddon addonType="prepend">$</InputGroupAddon>
                <Input placeholder="Amount" type="number" step="1"/>
                <InputGroupAddon addonType="append">.00</InputGroupAddon>
            </InputGroup>
        </>
    )
}

export default InputGroupStrap;