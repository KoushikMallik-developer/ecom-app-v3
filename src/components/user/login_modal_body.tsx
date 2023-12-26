import { MDBBtn, MDBRow, MDBInput, MDBIcon } from "mdb-react-ui-kit";
import logo from "../../assets/brand/logo-no-background.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { login_apiURL } from "../../services/api_url";
import { postData } from "../../services/network_services";
import { Alert } from "@mui/material";

function LoginModalBody(props: any) {
  const [responseData, setResponseData] = useState<ApiResponseType>();
  const [apiLoading, setAPILoading] = useState<boolean>(false);
  const [isLoginClicked, setLoginClick] = useState<boolean>(false);
  const [loginFormError, setLoginFormError] = useState({});
  const [loginError, setLoginError] = useState<String>("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const openRegisterModal = async () => {
    debugger
    props.toggleShowSignInModal();
    props.toggleShowSignUpModal();
  }


  const handleButtonClick = async (e: any) => {
    e.preventDefault();
    /// Validation
    const isValidLoginForm = loginValidation(formData);

    console.log("isValidLoginForm : ", isValidLoginForm);

    if (isValidLoginForm) {
      await handleLogin();
    }
  };

  const loginValidation = (formValue: any) => {
    let errors = {};
    let isValid = true;

    if (formValue.email.trim() == "") {
      errors.email = "Email can't be empty";
      isValid = false;
    }

    if (
      formValue.password.trim() == "" ||
      formValue.password.trim().length < 6
    ) {
      errors.password = "Enter valid password";
      isValid = false;
    }

    console.log("validation errors: ", errors);
    setLoginFormError(errors);
    return isValid;
  };

  const handleLogin = async () => {
    try {
      const requestData = JSON.stringify({
        email: formData.email,
        password: formData.password,
      });
      setAPILoading(true);
      const data = await postData(login_apiURL, requestData, "handle_login");
      // console.log("handleRegisterClick: ", data);
      if (data?.statusCode == "200") {
        setResponseData(data);
        setAPILoading(false);
        setLoginClick(true);
        setLoginError("");

        const token_data = {
            "token": data.response['token']["access"],
            "referesh_token:": data.response['token']['refresh'],
            "isLoggedIn": true,
          };
  
          localStorage.setItem("tokens", JSON.stringify(token_data));
          

        props.toggleShowSignInModal();
      } else {
        setAPILoading(false);
        setLoginClick(false);
        setLoginError(data?.response["errorMessage"]);
      }
    } catch (error) {
      setAPILoading(false);
      console.error("handleR login catch: ", error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <h5 className="mt-2 pb-1 text-dark text-center">Sign in with:</h5>
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

      {loginError != "" && (
        <Alert severity="error" className="mt-4">
          {loginError.split(":")[1]}
        </Alert>
      )}

      <p className="text-dark mt-4">
        <b>Login to your account</b>
      </p>

      {responseData?.statusCode == "201" && (
        <Alert severity="success" className="mt-4">
          Verification Email has been sent successfully to "{formData.email}".
          Please verify your email to access the account.{" "}
        </Alert>
      )}

      {loginFormError.email && (
        <span style={errorStyle}>{loginFormError.email}</span>
      )}

      <MDBInput
        wrapperClass="mb-4 pb-1"
        label="Email address"
        id="email"
        type="email"
        disabled={isLoginClicked}
        onChange={handleInputChange}
        defaultValue={formData.email}
      />

      {loginFormError.password && (
        <span style={errorStyle}>{loginFormError.password}</span>
      )}
      <MDBInput
        wrapperClass="mb-4 pb-1"
        label="Password"
        id="password"
        type="text"
        disabled={isLoginClicked}
        onChange={handleInputChange}
        defaultValue={formData.password}
      />

      {apiLoading && <>Please wait....</>}

      {!apiLoading && (
        <div className="text-center pt-1 mb-2 pb-1">
          <MDBBtn
            className="mb-4 w-100 gradient-custom-2"
            onClick={handleButtonClick}
          >
            Sign in
          </MDBBtn>
          <a className="text-muted" href="#!">
            Forgot password?
          </a>
        </div>
      )}

      <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-2">
        <p className="mb-0 text-dark">Don't have an account?</p>
        {/* <Link to="/register"> */}
          <MDBBtn outline className="mx-2" color="danger" onClick={openRegisterModal}>
            Register
          </MDBBtn>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default LoginModalBody;
