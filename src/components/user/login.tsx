import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalBody,
    MDBContainer,
    MDBBtn,
}
    from 'mdb-react-ui-kit';
import LoginModalBody from './login_modal_body';


function Login(props:any) {
    console.log(props.signInModal);
    return (
        <MDBContainer>
            <MDBModal
                show={props.signInModal}
                tabIndex='-1'
                staticBackdrop={true}
            >
                <MDBModalDialog position='top-right' side>
                    <MDBModalContent>
                        <MDBModalBody>
                            <div className='text-end'>
                        <MDBBtn className='btn-close' color='none' onClick={props.toggleShowSignInModal}></MDBBtn>
                        </div>
                            <LoginModalBody toggleShowSignInModal={props.toggleShowSignInModal}  toggleShowSignUpModal={props.toggleShowSignUpModal}/>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </MDBContainer>
    );
}

export default Login;