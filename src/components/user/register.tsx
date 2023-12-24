import {
  MDBBtn,
  MDBContainer,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalBody
}
from 'mdb-react-ui-kit';
import RegisterModalBody from './register_modal_body';

function Register(props:any) {
    return (
        <MDBContainer>
            <MDBModal
                show={props.signUpModal}
                tabIndex='-1'
                staticBackdrop={true}
            >
                <MDBModalDialog position='top-right' side>
                    <MDBModalContent>
                        <MDBModalBody>
                            <div className='text-end'>
                        <MDBBtn className='btn-close' color='none' onClick={props.toggleShowSignUpModal}></MDBBtn>
                        </div>
                            <RegisterModalBody props={props}/>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </MDBContainer>
    );
}

            


export default Register;
