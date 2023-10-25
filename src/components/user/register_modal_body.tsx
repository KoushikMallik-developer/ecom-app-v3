import {
    MDBBtn,
    MDBRow,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import logo from '../../assets/brand/logo-no-background.png';
import { Link } from 'react-router-dom';


function RegisterModalBody(props) {
    return (
        <div className="d-flex flex-column mx-5 mt-0">

            <div className="text-center text-dark">
                <img src={logo}
                    style={{ width: '185px' }} alt="logo" />
                <h5 className="mt-4 pb-1 ">Get access to your Orders, Wishlist and Recommendations</h5>
            </div>
            <h5 className="mt-2 pb-1 text-dark text-center">Sign up with:</h5>
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
            <p className='text-dark mt-4'><b>Register with us</b></p>


            <MDBInput wrapperClass='mb-4' label='First Name' id='register_form_fname' type='text'/>
            <MDBInput wrapperClass='mb-4' label='Last Name' id='register_form_lname' type='text'/>
            <MDBInput wrapperClass='mb-4' label='Email address' id='register_form_email' type='email'/>
            <MDBInput wrapperClass='mb-4' label='Password' id='register_form_password_1' type='password'/>
            <MDBInput wrapperClass='mb-4' label='Retype Password' id='register_form_password_2' type='password'/>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
                <p className="mb-0 text-dark">Already have an account?</p>
                <Link to='/register'><MDBBtn outline className='mx-2' color='danger'>
                    SIGN IN
                </MDBBtn>
                </Link>
            </div>

        </div>

    );
}

export default RegisterModalBody;