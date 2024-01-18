import { MDBBtn, MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { postData } from "../../../services/network_services";
import Validator from "../../../utils/validations";
import { seller_login } from "../../../services/seller_api_urls";
import { Alert } from "@mui/material";

export default function SellerLogin() {

    const navigate = useNavigate();

    const handleAuthChange = () => {
        navigate('/seller-register');
    };



    const [responseData, setResponseData] = useState<ApiResponseType>();
    const [apiLoading, setAPILoading] = useState<boolean>(false);
    const [isLoginClicked, setLoginClick] = useState<boolean>(false);
    const [loginFormError, setLoginFormError] = useState({});
    const [loginError, setLoginError] = useState<String>("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });


    const handleButtonClick = async (e: any) => {
        e.preventDefault();

        const isValidLoginForm = loginValidation(formData);
        if (isValidLoginForm) {
            //await handleLogin();
        }
    };

    const loginValidation = (formValue: any) => {
        let errors = {};
        let isValid = true;

        if (formData.email.trim() === "") {
            errors.email = "Valid email is required";
            isValid = false;
        } else if (!Validator.validateEmail(formData.email)) {
            errors.email = "Invalid email format";
            isValid = false;
        }

        if (
            formValue.password.trim() == "" ||
            formValue.password.trim().length < 6
        ) {
            errors.password = "Enter valid password";
            isValid = false;
        }
        setLoginFormError(errors);
        return isValid;
    };



    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };


    return <>
        <MDBContainer fluid>
            <MDBRow >
                <MDBCol sm={6} className="align-items-center justify-content-center d-flex">
                    <div className="">

                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                style={{ width: '185px' }} alt="logo" />
                            <h4 className="mt-1 mb-3">We are The Shoppixa Team</h4>
                        </div>

                        <hr />


                        {loginError != "" && (
                            <Alert severity="error" className="mt-4">
                                {loginError.split(":")[1]}
                            </Alert>
                        )}



                        {responseData?.statusCode == "201" && (
                            <Alert severity="success" className="mt-4">
                                Verification Email has been sent successfully to "{formData.email}".
                                Please verify your email to access the account.{" "}
                            </Alert>
                        )}



                        <p className="text-center">Please login to your account</p>


                        {loginFormError.email && (
                            <span className="error">{loginFormError.email}</span>
                        )}
                        <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' onChange={handleInputChange} />
                        {loginFormError.password && (
                            <span className="error">{loginFormError.password}</span>
                        )}
                        <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' onChange={handleInputChange} />


                        <div className="text-center pt-1 mb-5 pb-1">
                            <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={(e) => (apiLoading ? {} : handleButtonClick(e))}
                            >          {apiLoading ? "Please wait" : "Sign in"}</MDBBtn>
                            <a className="text-muted" href="#!">Forgot password?</a>
                        </div>


                        <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                            <p className="mb-0">Don't have an account?</p>
                            <MDBBtn outline className='mx-2' color='danger' onClick={handleAuthChange}>
                                Register
                            </MDBBtn>
                        </div>


                    </div>
                </MDBCol>

                <MDBCol sm={6} className="gradient-custom-2 vh-100">
                    <div className="d-flex flex-column justify-content-center  vh-100 mb-4 my-3">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4  justify-content-center">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <b>“Always deliver more than expected.”</b>
                            <p className="small mb-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
}