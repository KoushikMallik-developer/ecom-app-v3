import {
  MDBBtn,
  MDBRow,
  MDBInput,
  MDBIcon,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import logo from "../../assets/brand/logo-no-background.png";
import { useEffect, useState } from "react";
import { postData } from "../../services/network_services";
import { Alert } from "@mui/material";
// import { handleRegister } from '../../services/api';

function RegisterModalBody() {
  const [isClickedForOTP, setisClickedForOTP] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ApiResponseType>();
  //   const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [formData, setFormData] = useState<UserDataType>({
    fname: "",
    lname: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    handleRegisterClick(formData);
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  const handleRegisterClick = async (reqUserData: UserDataType) => {
    try {
      debugger;
      const requestData = JSON.stringify({
        username: reqUserData.lname.toLowerCase(),
        email: reqUserData.email,
        fname: reqUserData.fname,
        lname: reqUserData.lname,
        password1: reqUserData.password1,
        password2: reqUserData.password2,
      });
      const data = await postData(
        "https://auth-stg.onrender.com/api/v2/create-users",
        requestData
      );
      if (data?.status == "1") {
        setisClickedForOTP(true);
        setResponseData(data);
        setLoading(false);
      } else {
        setisClickedForOTP(false);
        // const errorText = "Somethiong went wrong!";
        // setError(errorText);
        setLoading(false);
      }
    } catch (error) {
      //   setError(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div className="d-flex flex-column mx-5 mt-0">
      <div className="text-center text-dark">
        <img src={logo} style={{ width: "185px" }} alt="logo" />
        <h5 className="mt-4 pb-1 ">
          Get access to your Orders, Wishlist and Recommendations
        </h5>
      </div>
      <h5 className="mt-2 pb-1 text-dark text-center">Sign up with:</h5>
      <MDBRow className="justify-content-center">
        <MDBBtn
          className="m-1"
          size="lg"
          floating
          style={{ backgroundColor: "#dd4b39" }}
          href="#"
        >
          <MDBIcon fab icon="google" />
        </MDBBtn>
        <MDBBtn
          className="m-1"
          size="lg"
          floating
          style={{ backgroundColor: "#3b5998" }}
          href="#"
        >
          <MDBIcon fab icon="facebook-f" />
        </MDBBtn>
        <MDBBtn
          className="m-1"
          size="lg"
          floating
          style={{ backgroundColor: "#ac2bac" }}
          href="#"
        >
          <MDBIcon fab icon="instagram" />
        </MDBBtn>
      </MDBRow>

      {loading ? (
        <></>
      ) : responseData?.status == "1" ? (
        <Alert severity="success" className="mt-4">
          Verification Email has been sent successfully to "{formData.email}".
          Please verify your email to access the account.{" "}
        </Alert>
      ) : (
        <Alert severity="error" className="mt-4">
          Error !
        </Alert>
      )}

      {/* {error != "" && error != null && (
        <Alert severity="error" className="mt-4">
          {error}!
        </Alert>
      )} */}

      <p className="text-dark mt-4">
        <b>Register with us</b>
      </p>
      <form>
        <MDBValidation noValidate>
          <MDBValidationItem feedback="Please enter first name." invalid>
            <MDBInput
              wrapperClass="mb-4"
              label="First Name"
              id="fname"
              type="text"
              disabled={isClickedForOTP}
              onChange={handleInputChange}
              defaultValue={formData.fname}
              required
            />
          </MDBValidationItem>
          <MDBValidationItem feedback="Please enter last name." invalid>
            <MDBInput
              wrapperClass="mb-4"
              label="Last Name"
              id="lname"
              type="text"
              disabled={isClickedForOTP}
              onChange={handleInputChange}
              defaultValue={formData.lname}
              required
            />
          </MDBValidationItem>
          <></>
          <MDBValidationItem feedback="Please choose an email." invalid>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="email"
              type="email"
              disabled={isClickedForOTP}
              onChange={(e) => {
                validateEmail(formData.email);
                handleInputChange(e);
              }}
              defaultValue={formData.email}
              required
            />
          </MDBValidationItem>
          <MDBValidationItem feedback="Please choose a password." invalid>
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password1"
              type="password"
              disabled={isClickedForOTP}
              onChange={handleInputChange}
              defaultValue={formData.password1}
              required
            />
          </MDBValidationItem>
          <MDBValidationItem
            feedback="Please choose a confirnm password."
            invalid
          >
            <MDBInput
              wrapperClass="mb-4"
              label="Confirm Password"
              id="password2"
              type="password"
              disabled={isClickedForOTP}
              onChange={handleInputChange}
              defaultValue={formData.password2}
              required
            />
          </MDBValidationItem>

          {isClickedForOTP && (
            <MDBInput
              wrapperClass="mb-4"
              label="Enter OTP"
              id="register_form_otp"
              type="text"
            />
          )}

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
            {!isClickedForOTP && (
              <p className="mb-0 text-dark">Already have an account?</p>
            )}

            {isClickedForOTP ? (
              <MDBBtn outline className="mx-2" color="info" type="submit">
                Verify OTP
              </MDBBtn>
            ) : (
              <MDBBtn
                outline
                className="mx-2"
                onClick={handleButtonClick}
                color="info"
                type="submit"
              >
                SIGN IN
              </MDBBtn>
            )}
          </div>
        </MDBValidation>
      </form>
    </div>
  );
}

export default RegisterModalBody;
