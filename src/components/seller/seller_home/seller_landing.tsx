import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import logo from "../../../assets/brand/logo-color.png";
import { Link } from "react-router-dom";


const SellerLanding = () => {

    const data = [1, 2, 3, 4, 5, 6];


    return (<MDBContainer>
        <MDBRow className="align-items-center justify-content-center d-flex vh-90">
            <MDBCol className="text-center my-4" sm={6}>
                <h1 className="my-2">Elevate your sales, join now!</h1>
                <h6 className="my-2">Unlock Your Business Potential with Shoppixa! </h6>
                <Link to="/seller-register">
                    <MDBBtn className="my-3 gradient-custom-2 w-50">Start Selling</MDBBtn>
                </Link>
            </MDBCol>

            <MDBCol sm={6}>
                <img src={logo} style={{ width: "100%" }} alt="logo" />
            </MDBCol>
        </MDBRow>

        <MDBRow>
            <b><h2 className="text-center">Success Stories of Shoppixa Sellers</h2></b>
            {data.map((item, index) => (
                <MDBCol sm={3} className="">
                    <MDBCard>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/city/041.webp' alt='...' position='top' />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a wider card with supporting text below as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </MDBCardText>
                            <MDBCardText>
                                <small className='text-muted'>Last updated 3 mins ago</small>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            ))}
        </MDBRow>


    </MDBContainer>);
}

export default SellerLanding;