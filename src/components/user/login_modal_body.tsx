import {
    MDBBtn,
    MDBRow,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import logo from '../../assets/brand/logo-no-background.png';
import { Link } from 'react-router-dom';


function LoginModalBody(props) {
    return (
        <div className="d-flex flex-column mx-5 mt-0">

            <div className="text-center text-dark">
                <img src={logo}
                    style={{ width: '185px' }} alt="logo" />
                <h5 className="mt-4 pb-1 ">Get access to your Orders, Wishlist and Recommendations</h5>
            </div>
            <h5 className="mt-2 pb-1 text-dark text-center">Sign in with:</h5>
            <MDBRow className='justify-content-center'>
                <MDBBtn className='m-1' size='lg' floating style={{ backgroundColor: '#dd4b39' }} href='#'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>
                <MDBBtn className='m-1' size='lg' floating style={{ backgroundColor: '#3b5998' }} href='#'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>
                <MDBBtn className='m-1' size='lg' floating style={{ backgroundColor: '#ac2bac' }} href='#'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>
            </MDBRow>
            <p className='text-dark mt-4'><b>Login to your account</b></p>


            <MDBInput wrapperClass='mb-4 pb-1' label='Email address' id='form1' type='email' />
            <MDBInput wrapperClass='mb-4 pb-1' label='Password' id='form2' type='password' />


            <div className="text-center pt-1 mb-2 pb-1">
                <MDBBtn className="mb-4 w-100 gradient-custom-2">Sign in</MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
            </div>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
                <p className="mb-0 text-dark">Don't have an account?</p>
                <Link to='/register'><MDBBtn outline className='mx-2' color='danger'>
                    Register
                </MDBBtn>
                </Link>
            </div>

        </div>

    );
}

export default LoginModalBody;