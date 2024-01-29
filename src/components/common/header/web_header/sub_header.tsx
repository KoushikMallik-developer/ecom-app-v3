import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText
} from 'mdb-react-ui-kit';
import {SlidersHorizontal} from "lucide-react";

import MenImage from "../../../../assets/homepage/men_osmetic.png"

export default function SubHeader() {

    return (
        <MDBNavbar style={{height: "90px",backgroundColor: '#262626'}}>
            <MDBContainer fluid className="mx-5 px-5 ">
                <MDBNavbarNav>

                    <MDBRow className="d-flex justify-content-center align-items-center">
                        <MDBCol md="4" className="d-flex justify-content-between">
                            <MDBNavbarItem>
                                <MDBNavbarLink className="d-flex mt-1 text-white">
                                    <SlidersHorizontal strokeWidth={3}/> <h4 className="mx-2 fw-bolder">Categories</h4>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <div className="vertical-line"></div>

                        </MDBCol>

                        <MDBCol md="4" className="d-flex justify-content-between">
                            <MDBNavbarItem>
                                <MDBNavbarLink>
                                    <MDBCard
                                        style={{maxHeight: "60px", backgroundColor: "transparent"}}
                                        className="text-light">
                                        <MDBRow className="py-0">
                                            <MDBCol md='2' className="py-0">
                                                <MDBCardImage
                                                    className="py-0"
                                                    src={MenImage}
                                                    height="50"
                                                    alt='...' />
                                            </MDBCol>
                                            <MDBCol md='10'>
                                                <MDBCardBody className="py-0 ">
                                                    <MDBCardTitle>Weekly Men's Toiletries Coupons</MDBCardTitle>
                                                    <MDBCardText>
                                                        We extend exclusive discounts.
                                                    </MDBCardText>
                                                </MDBCardBody>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCard>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <div className="vertical-line"></div>

                        </MDBCol>


                        <MDBCol md="4">
                            <MDBNavbarItem>
                                <MDBNavbarLink>
                                    <h6 className="brand-sub-header-text-color pt-1"> YOHO</h6>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBCol>

                    </MDBRow>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    );
}