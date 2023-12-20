import {
    MDBBtn,
    MDBRow,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import logo from '../../assets/brand/logo-no-background.png';
import { useState } from 'react';
import { handleRegister } from '../../services/api';



function RegisterModalBody(props: any) {

    const [isClickedForOTP, setisClickedForOTP] = useState(false);
    const handleButtonClick = (e: any) => {
        e.preventDefault();
        setisClickedForOTP(true);
        handleRegister(formData);
    };

    const [formData, setFormData] = useState<UserDataType>({
        fname: '',
        lname: '',
        email: '',
        password1: '',
        password2: ''
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };

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
            <form>

                {/* <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    value={formData.email}
                /> */}
                <MDBInput wrapperClass='mb-4' label='First Name' id='fname' type='text' disabled={isClickedForOTP} onChange={handleInputChange}  defaultValue={formData.fname}/>
                <MDBInput wrapperClass='mb-4' label='Last Name' id='lname' type='text' disabled={isClickedForOTP} onChange={handleInputChange}  defaultValue={formData.lname}/>
                <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' disabled={isClickedForOTP} onChange={handleInputChange}  defaultValue={formData.email}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='password1' type='password' disabled={isClickedForOTP} onChange={handleInputChange}  defaultValue={formData.password1}/>
                <MDBInput wrapperClass='mb-4' label='Retype Password' id='password2' type='password' disabled={isClickedForOTP} onChange={handleInputChange}  defaultValue={formData.password2}/>

                {isClickedForOTP &&
                    <MDBInput wrapperClass='mb-4' label='Enter OTP' id='register_form_otp' type='text' />}

                <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
                    <p className="mb-0 text-dark">Already have an account?</p>
                    {/* <Link to='/register'> */}
                    <MDBBtn outline className='mx-2' onClick={handleButtonClick} color='info' type="submit">
                        {isClickedForOTP ? 'Verify OTP' : 'SIGN IN'}
                    </MDBBtn>
                    {/* </Link> */}
                </div>
            </form>

        </div>

    );
}

export default RegisterModalBody;


// import React, { useState } from 'react';
// import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';;

// interface FormData {
//   name: string;
//   email: string;
//   // Add other fields as needed
// }

// const RegisterModalBody: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     // Initialize other fields here
//   });

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     try {

//         const mydata = {
//             "username":"onimesh",
//             "email": "tomec86720@aseall.com",
//             "fname": "onimesh",
//             "lname": "flutter",
//             "password1": "12345678",
//             "password2": "12345678"
//         }

//       const response = await fetch('/api/v2/create-users', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // Add other headers if needed
//         },
//         body: JSON.stringify(mydata),
//       });

//       if (response.ok) {
//         // Handle success, maybe show a success message
//         console.log('Data sent successfully');
//       } else {
//         // Handle error response from the server
//         console.error('Failed to send data');
//       }
//     } catch (error) {
//       // Handle network errors or other exceptions
//       console.error('Error occurred:', error);
//     }
//   };

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   return (
//     <MDBContainer>
//       <MDBRow>
//         <MDBCol md="6">
//           <form onSubmit={handleSubmit}>
//             <MDBInput
//               label="Your name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             />
//             <MDBInput
//               label="Your email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//             {/* Add other input fields using MDBInput */}
//             <MDBBtn type="submit">Submit</MDBBtn>
//           </form>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// };

// export default RegisterModalBody;
