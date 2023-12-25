import { MDBBtn, MDBRow, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import logo from "../../assets/brand/logo-no-background.png";
import { useEffect, useState } from "react";
import { postData } from "../../services/network_services";
import { Alert } from "@mui/material";
import { register_apiURL, verifyOTP_apiURL } from "../../services/api_url";

function RegisterModalBody(props: any) {
  const [isClickedForOTP, setisClickedForOTP] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ApiResponseType>();
  const [apiLoading, setAPILoading] = useState<boolean>(false);
  const [registerError, setRegisterError] = useState<String>("");
  const [otpError, setOTPError] = useState<String>("");
  const [registerFormError, setRegisterFormError] = useState({});

  const [formData, setFormData] = useState<UserDataType>({
    fname: "",
    lname: "",
    email: "",
    password1: "",
    password2: "",
    otp: "",
  });

  const registerValidateForm = (userData: UserDataType) => {
    let errors = {
      fName: "",
      lName: "",
      email: "",
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

    // const gmailRegx = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (userData.email.trim() == "") {
      //|| gmailRegx.test(formData.email)
      console.error("gmailRegx 111 : ", userData.email);
      errors.email = "Valid email is required";
      isValid = false;
    }

    if (
      userData.password1.trim().length < 6 &&
      userData.password2.trim().length < 6
    ) {
      errors.password1 = "Password must be at least 6 characters";
      isValid = false;
    }

    if (userData.password1.trim() != userData.password2.trim()) {
      errors.password2 = "Password mismatch";
      isValid = false;
    }

    console.log("validation errors: ", errors);
    setRegisterFormError(errors);
    return isValid;
  };

  const otpValidation = (userData: UserDataType) => {
    let errors = { otp: "" };
    let isValid = true;

    if (userData.otp.trim() == "") {
      errors.otp = "OTP can't be empty";
      isValid = false;
    }

    console.log("validation errors: ", errors);
    setRegisterFormError(errors);
    return isValid;
  };

  const handleButtonClick = async (e: any) => {
    e.preventDefault();
    /// Validation
    debugger;
    console.log("formData: ", formData);
    const isValidRegisterFrom = registerValidateForm(formData);
    console.log("formData: ", isValidRegisterFrom);

    if (isValidRegisterFrom) {
      await handleRegister(formData);
    }
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
    const isValidOTP = otpValidation(formData);

    console.log("isValidOTP : ", isValidOTP);
    console.log("otpValidation : ", formData);

    if (isValidOTP) {
      await handleOTP();
      debugger;
      props.toggleShowSignUpModal();
    }
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
    console.log("handleInputChange complete: ", formData);
  };

  const errorStyle = {
    color: "red",
    fontSize: "0.9em",
    marginTop: "5px",
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

      {registerFormError.fName && (
        <span style={errorStyle}>{registerFormError.fName}</span>
      )}

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

      {registerFormError.lName && (
        <span style={errorStyle}>{registerFormError.lName}</span>
      )}

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

      {registerFormError.email && (
        <span style={errorStyle}>{registerFormError.email}</span>
      )}

      <MDBInput
        wrapperClass="mb-4"
        label="Email address"
        id="email"
        type="email"
        disabled={isClickedForOTP}
        // onChange={(e) => {
        //   validateEmail(formData.email);
        //   handleInputChange(e);
        // }}
        onChange={handleInputChange}
        defaultValue={formData.email}
        required
      />

      {registerFormError.password && (
        <span style={errorStyle}>{registerFormError.password}</span>
      )}

      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="password1"
        type="text" //password
        disabled={isClickedForOTP}
        onChange={handleInputChange}
        defaultValue={formData.password1}
        required
      />

      {registerFormError.password2 && (
        <span style={errorStyle}>{registerFormError.password2}</span>
      )}
      <MDBInput
        wrapperClass="mb-4"
        label="Confirm Password"
        id="password2"
        type="text" //password
        disabled={isClickedForOTP}
        onChange={handleInputChange}
        defaultValue={formData.password2}
        required
      />

      {isClickedForOTP && (
        <>
          {registerFormError.otp && (
            <span style={errorStyle}>{registerFormError.otp}</span>
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
    </div>
  );
}

export default RegisterModalBody;
