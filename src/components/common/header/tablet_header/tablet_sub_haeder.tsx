import {MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarLink, MDBNavbarItem} from "mdb-react-ui-kit";
import {Facebook, Instagram, Twitter} from "lucide-react";
import {Link} from "react-router-dom";

const TabletSubHeader = () => {
    return (
        <MDBNavbar expand='lg' style={{height:"250px", backgroundColor:"light"}}>
            <MDBContainer fluid className="mx-5 px-5 mb-3">

                <MDBNavbarNav className=''>
                    <MDBNavbarItem>
                        <MDBNavbarLink>
                            About Us
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink>Contact Us</MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                       <Link to="/success_stories">
                            <MDBNavbarLink>Success Stories</MDBNavbarLink>
                       </Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                        <MDBNavbarLink>Help & Support</MDBNavbarLink>
                    </MDBNavbarItem>
                </MDBNavbarNav>
                <MDBNavbarItem className='d-flex justify-content-between '>
                    <MDBNavbarLink>
                        <Instagram/>
                    </MDBNavbarLink>
                    <MDBNavbarLink>
                        <Facebook/>
                    </MDBNavbarLink><MDBNavbarLink>
                    <Twitter/>
                </MDBNavbarLink>
                </MDBNavbarItem>
            </MDBContainer>
        </MDBNavbar>
    )
}
export default TabletSubHeader
