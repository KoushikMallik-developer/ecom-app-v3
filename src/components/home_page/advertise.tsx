import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

function Advertise() {
  return (
    <MDBContainer fluid className="my-5">
        <h4 className="text-center mt-4 mb-5">
        <strong>Latest Trend</strong>
      </h4>

      <MDBRow>
        <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp"
              position="top"
              alt="iPhone"
            />
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4">iPhone X</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">Starting at $399</h6>
              </div>
              <div className="text-center">
                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Quick Look</h5>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mt-4 mb-0">5.8″</span>
                  <span>Super Retina HD display1</span>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">
                    <MDBIcon fas icon="camera-retro" />
                  </span>
                  <ul className="list-unstyled mb-0">
                    <li aria-hidden="true">—</li>
                    <li>Wide</li>
                    <li>Telephoto</li>
                    <li aria-hidden="true">—</li>
                  </ul>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">2x</span>
                  <span>Optical zoom range</span>
                </div>

                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Capacity</h5>
                </div>
              </div>

              <div className="d-flex flex-row">
                <MDBBtn
                  color="primary"
                  rippleColor="dark"
                  className="flex-fill ms-1"
                >
                  Learn more
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img2.webp"
              position="top"
              alt="iPhone"
            />
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4">iPhone 11</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">Starting at $499</h6>
              </div>
              <div className="text-center">
                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Quick Look</h5>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mt-4 mb-0">6.1″</span>
                  <span>Liquid Retina HD display1</span>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">
                    <MDBIcon fas icon="camera-retro" />
                  </span>
                  <ul className="list-unstyled mb-0">
                    <li aria-hidden="true">Ultra Wide</li>
                    <li>Wide</li>
                    <li aria-hidden="true">—</li>
                    <li aria-hidden="true">—</li>
                  </ul>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">2x</span>
                  <span>Optical zoom range</span>
                </div>

                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Capacity</h5>
                </div>
              </div>

              <div className="d-flex flex-row">
                <MDBBtn
                  color="primary"
                  rippleColor="dark"
                  className="flex-fill ms-1"
                >
                  Learn more
                </MDBBtn>

              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-4 mb-lg-0">
          <MDBCard className="text-black">
            <MDBCardImage
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img3.webp"
              position="top"
              alt="iPhone"
            />
            <MDBCardBody>
              <div className="text-center mt-1">
                <MDBCardTitle className="h4">iPhone 11 Pro</MDBCardTitle>
                <h6 className="text-primary mb-1 pb-3">Starting at $599</h6>
              </div>
              <div className="text-center">
                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Quick Look</h5>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mt-4 mb-0">5.8″</span>
                  <span>Super Retina HD display1</span>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">
                    <MDBIcon fas icon="camera-retro" />
                  </span>
                  <ul className="list-unstyled mb-0">
                    <li aria-hidden="true">Ultra Wide</li>
                    <li>Wide</li>
                    <li>Telephoto</li>
                    <li aria-hidden="true">—</li>
                  </ul>
                </div>

                <div className="d-flex flex-column mb-4">
                  <span className="h1 mb-0">4x</span>
                  <span>Optical zoom range</span>
                </div>

                <div
                  className="p-3 mx-n3 mb-4"
                  style={{ backgroundColor: "#eff1f2" }}
                >
                  <h5 className="mb-0">Capacity</h5>
                </div>
              </div>

              <div className="d-flex flex-row">
                <MDBBtn
                  color="primary"
                  rippleColor="dark"
                  className="flex-fill ms-1"
                >
                  Learn more
                </MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Advertise;