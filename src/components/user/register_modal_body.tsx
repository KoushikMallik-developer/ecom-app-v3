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
import { register_apiURL, verifyOTP_apiURL } from "../../services/api_url";

function RegisterModalBody(props: any) {
  const [isClickedForOTP, setisClickedForOTP] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ApiResponseType>();
  // const [loading, setLoading] = useState<boolean>(true);
  const [apiLoading, setAPILoading] = useState<boolean>(false);

  const [registerError, setRegisterError] = useState<String>("");
  const [otpError, setOTPError] = useState<String>("");

  const [formData, setFormData] = useState<UserDataType>({
    fname: "",
    lname: "",
    email: "",
    password1: "",
    password2: "",
    otp: "",
  });

  const handleButtonClick = async (e: any) => {
    e.preventDefault();
    await handleRegister(formData);
  };

  useEffect(() => {
    // setLoading(true);
  }, []);

  const handleRegister = async (reqUserData: UserDataType) => {
    try {
      const requestData = JSON.stringify({
        username: reqUserData.lname.toLowerCase(),
        email: reqUserData.email,
        fname: reqUserData.fname,
        lname: reqUserData.lname,
        password1: reqUserData.password1,
        password2: reqUserData.password2,
      });
      setAPILoading(true);
      const data = await postData(
        register_apiURL,
        requestData,
        "handleRegisterClick"
      );
      // console.log("handleRegisterClick: ", data);
      if (data?.statusCode == "201") {
        setRegisterError("");
        setisClickedForOTP(true);
        setResponseData(data);
        setAPILoading(false);
        // setLoading(false)
      } else {
        setAPILoading(false);
        setisClickedForOTP(false);
        // setLoading(false);
        setRegisterError(data?.response["errorMessage"]);
      }
    } catch (error) {
      setAPILoading(false);
      console.error("handleRegisterClick catch: ", error);
    }
  };

  const onOTPClick = async () => {
    await handleOTP();
    debugger;
    closePopup();
  };

  const closePopup = async () => {
    props.toggleShowSignUpModal;
  };

  const handleOTP = async () => {
    try {
      const requestData = JSON.stringify({
        email: formData.email,
        otp: formData.otp,
      });
      setAPILoading(true);
      const data = await postData(verifyOTP_apiURL, requestData, "onOTPClick");
      console.log("onOTPClick data: ", data);
      if (data?.status == true) {
        setAPILoading(false);
        setResponseData(data);

        console.log("localStorage before setItem: ", JSON.stringify(formData));
        localStorage.setItem("user_info", JSON.stringify(formData));
      } else {
        setAPILoading(false);
        setOTPError(data?.response["errorMessage"]);
      }
    } catch (error) {
      setAPILoading(false);
      console.error("handleRegisterClick catch: ", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("handleInputChange: ", event.target);
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
    console.log("handleInputChange complete: ", formData, value);
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
              id="otp"
              type="text"
              onChange={handleInputChange}
              required
            />
          )}

          <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
            {!isClickedForOTP && (
              <p className="mb-0 text-dark">Already have an account?</p>
            )}

            {apiLoading && <>Please wait....</>}

            {!apiLoading && (
              <>
                {isClickedForOTP ? (
                  <MDBBtn
                    outline
                    className="mx-2"
                    color="info"
                    type="submit"
                    onClick={onOTPClick}
                  >
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
              </>
            )}
          </div>
        </MDBValidation>
      </form>
    </div>
  );
}

export default RegisterModalBody;
