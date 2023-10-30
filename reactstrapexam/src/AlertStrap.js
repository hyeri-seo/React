import {Alert,UncontrolledAlert} from 'reactstrap';
function AlertStrap() {
    return(
        <>
            <Alert color='light'>
            Simple Alert [color : light]
            </Alert>
            <UncontrolledAlert color='success'>
            UncontrolledAlert [color : success]
            </UncontrolledAlert>
        </>
    );
}

export default AlertStrap;