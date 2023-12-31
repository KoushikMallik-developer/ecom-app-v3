import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import errorImage from "../../assets/page_not_found/404.png";

const NotFoundPage = () => {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="justify-content-center align-items-center min-vh-100">
        <MDBCol md="6" className="text-center">
          <MDBCardImage
            src={errorImage}
            alt="Error 404"
            className="img-fluid mb-3"
            style={{ maxWidth: "300px" }}
          />
          <MDBBtn
            href="/"
            color="primary"
            className="d-flex align-items-center justify-content-center"
          >
            <MDBIcon icon="home" className="me-2" />
            Dashboard
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NotFoundPage;
