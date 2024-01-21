import {MDBBtn, MDBCol, MDBInput, MDBRow, MDBContainer} from "mdb-react-ui-kit";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";
import {postData} from "../../../services/network_services";
import Validator from "../../../utils/validations";
import {seller_register, seller_verifyOTP} from "../../../services/seller_api_urls";
import {Alert} from "@mui/material";


export default function SellerRegister() {

    const navigate = useNavigate();

    const handleAuthChange = () => {
        navigate('/seller-login');
    };


    const [isClickedForOTP, setisClickedForOTP] = useState<boolean>(false);
    const [responseData, setResponseData] = useState<ApiResponseType>();
    const [apiLoading, setAPILoading] = useState<boolean>(false);
    const [registerError, setRegisterError] = useState<String>("");
    const [otpError, setOTPError] = useState<String>("");
    const [registerFormError, setRegisterFormError] = useState({});

    const [formData, setFormData] = useState<SellerDataType>({
        fname: "",
        lname: "",
        email: "",
        gstin: "",
        password1: "",
        password2: "",
        otp: "",
    });


    /// form validation
    const sellerRegisterValidateForm = (userData: SellerDataType) => {
        let errors = {
            fName: "",
            lName: "",
            email: "",
            gstin: "",
            password1: "",
            password2: "",
            otp: "",
        };
        let isValid = true;

        if (userData.fname.trim() == "") {
            errors.fName = "First name required";
            isValid = false;
        }

        if (userData.lname.trim() == "") {
            errors.lName = "Last name required";
            isValid = false;
        }


        if (userData.email.trim() === "") {
            console.error("Email is empty: ", userData.email);
            errors.email = "Valid email is required";
            isValid = false;
        } else if (!Validator.validateEmail(userData.email)) {
            console.error("Invalid Email: ", userData.email);
            errors.email = "Invalid email format";
            isValid = false;
        }

        if (
            userData.password1.trim().length < 6 ||
            userData.password2.trim().length < 6
        ) {
            errors.password1 = "Password must be at least 6 characters";
            errors.password2 = "Password must be at least 6 characters";
            isValid = false;
        }

        if (userData.password1.trim() != userData.password2.trim()) {
            errors.password1 = "Password mismatch";
            errors.password2 = "Password mismatch";
            isValid = false;
        }
        if (userData.gstin.trim() == "") {
            errors.gstin = "Valid GST is required";
            isValid = false;
        }

        setRegisterFormError(errors);
        return isValid;
    };

    const sellerOtpValidation = (userData: UserDataType) => {
        let errors = {otp: ""};
        let isValid = true;

        if (userData.otp.trim() == "") {
            errors.otp = "OTP can't be empty";
            isValid = false;
        }

        if (userData.otp.trim().length < 6) {
            errors.otp = "OTP is 6 digit";
            isValid = false;
        }

        setRegisterFormError(errors);
        return isValid;
    };


    const handleSellerRegisterClick = async (e: any) => {
        e.preventDefault();
        /// Validation
        const isValidRegisterFrom = sellerRegisterValidateForm(formData);

        if (isValidRegisterFrom) {
            await handleSellerRegister(formData);
        }
    };


    const handleSellerOTP = async () => {
        try {
            const requestData = JSON.stringify({
                email: formData.email,
                otp: formData.otp,
            });
            setAPILoading(true);
            const data = await postData(seller_verifyOTP, requestData, "onOTPClick");
            if (data?.status == true) {
                setAPILoading(false);
                setResponseData(data);
                setisClickedForOTP(false);
                const token_data = {
                    token: data.response["token"]["access"],
                    "referesh_token:": data.response["token"]["refresh"],
                };

                localStorage.setItem("seller_tokens", JSON.stringify(token_data));
                handleAuthChange()
            } else {
                setAPILoading(false);
                setOTPError(data?.response["errorMessage"]);
            }
        } catch (error) {
            setAPILoading(false);
            console.error("handle Seller OTP catch: ", error);
        }
    };


    const handleSellerRegister = async (reqUserData: SellerDataType) => {
        try {
            const requestData = JSON.stringify({
                username: reqUserData.lname.toLowerCase(),
                email: reqUserData.email,
                fname: reqUserData.fname,
                lname: reqUserData.lname,
                gstin: reqUserData.gstin,
                password1: reqUserData.password1,
                password2: reqUserData.password2,
            });
            setAPILoading(true);
            const data = await postData(
                seller_register,
                requestData,
                "handle seller Register Click"
            );

            if (data?.statusCode == "201") {
                setRegisterError("");
                setisClickedForOTP(true);
                setResponseData(data);
                setAPILoading(false);
            } else {
                setAPILoading(false);
                setisClickedForOTP(false);

                setRegisterError(data?.response["errorMessage"]);
            }
        } catch (error) {
            setAPILoading(false);
            console.error("handle seller Register Click catch: ", error);
        }
    };


    const onSellerOTPClick = async () => {
        const isValidOTP = sellerOtpValidation(formData);
        if (isValidOTP) {
            await handleSellerOTP();
        }
    };


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = event.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    };


    return <>
        <MDBContainer fluid>
            <MDBRow>

                <MDBCol sm={6} className="align-items-center justify-content-center d-flex">
                    <div className="d-flex flex-column">

                        <div className="text-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                                 style={{width: '185px'}} alt="logo"/>
                            <h4 className="mt-1 mb-3">We are The Shoppixa Team</h4>
                        </div>

                        <hr/>

                        {responseData?.statusCode == "201" &&
                            registerError == "" &&
                            otpError == "" && (
                                <Alert severity="success" className="mt-4">
                                    Verification Email has been sent successfully to "{formData.email}".
                                    Please verify your email to access the account.{" "}
                                </Alert>
                            )}

                        {registerError != "" && (
                            <Alert severity="error" className="mt-4">
                                {registerError.split(":")[1]}
                            </Alert>
                        )}

                        {otpError != "" && (
                            <Alert severity="error" className="mt-4">
                                {otpError.split(":")[1]}
                            </Alert>
                        )}

                        <p className="text-center">Please create to your new account</p>

                        <MDBRow className='mb-4'>
                            <MDBCol>
                                {registerFormError.fName && (
                                    <span className="error">{registerFormError.fName}</span>
                                )}
                                <MDBInput label='First Name' id='fname' type='text' onChange={handleInputChange}
                                />
                            </MDBCol>
                            <MDBCol>
                                {registerFormError.lName && (
                                    <span className="error">{registerFormError.lName}</span>
                                )}
                                <MDBInput label='Last Name' id='lname' type='text' onChange={handleInputChange}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='mb-4'>
                            <MDBCol>
                                {registerFormError.email && (
                                    <span className="error">{registerFormError.email}</span>
                                )}
                                <MDBInput label='Email' id='email' type='email' onChange={handleInputChange}
                                />
                            </MDBCol>
                            <MDBCol>
                                {registerFormError.gstin && (
                                    <span className="error">{registerFormError.email}</span>
                                )}
                                <MDBInput label='GST-IN' id='gstin' type='gstin' onChange={handleInputChange}
                                />
                            </MDBCol>
                        </MDBRow>

                        <MDBRow className='mb-4'>
                            <MDBCol>
                                {registerFormError.password1 && (
                                    <span className="error">{registerFormError.password1}</span>
                                )}
                                <MDBInput label='Password' id='password1' type='password' onChange={handleInputChange}
                                />
                            </MDBCol>
                            <MDBCol>
                                {registerFormError.password2 && (
                                    <span className="error">{registerFormError.password2}</span>
                                )}
                                <MDBInput label='Confirm Password' id='password2' type='password'
                                          onChange={handleInputChange}
                                />
                            </MDBCol>
                        </MDBRow>

                        {isClickedForOTP && (
                            <>
                                {registerFormError.otp && (
                                    <span className="error">{registerFormError.otp}</span>
                                )}
                            </>
                        )}
                        {isClickedForOTP && (
                            <MDBInput
                                wrapperClass="mb-4"
                                label="Enter OTP"
                                id="otp"
                                type="text"
                                onChange={handleInputChange}
                            />
                        )}

                        {
                            isClickedForOTP ? <></> :
                                <div className="text-center pt-1 mb-5 pb-1">

                                    {(apiLoading) ?
                                        <MDBBtn className="mb-4 w-100 gradient-custom-2" disabled>
                                    <span className="spinner-grow spinner-grow-sm" role="status"
                                          aria-hidden="true"></span>
                                            <span className="visually-hidden">Loading...</span>
                                        </MDBBtn>
                                        :
                                        <MDBBtn className="mb-4 w-100 gradient-custom-2"
                                                onClick={handleSellerRegisterClick}>
                                            Sign Up</MDBBtn>
                                    }
                                </div>}


                        {!isClickedForOTP &&
                            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
                                <p className="mb-0">Already have an account?</p>
                                <MDBBtn outline className='mx-2' color='danger' onClick={handleAuthChange}>
                                    Login
                                </MDBBtn>
                            </div>}

                        {(!apiLoading && isClickedForOTP) && <MDBBtn
                            outline
                            className="mb-5"
                            color="info"
                            type="submit"
                            onClick={onSellerOTPClick}
                        >
                            Verify OTP
                        </MDBBtn>}
                    </div>
                </MDBCol>

                <MDBCol sm={6} className="gradient-custom-2 vh-100">
                    <div className="d-flex flex-column justify-content-center  vh-100 mb-4 my-3">
                        <div className="text-white px-3 py-4 p-md-5 mx-md-4  justify-content-center">
                            <h4 className="mb-4">We are more than just a company</h4>
                            <b>“Always deliver more than expected.”</b>
                            <p className="small mb-0"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    </>
}