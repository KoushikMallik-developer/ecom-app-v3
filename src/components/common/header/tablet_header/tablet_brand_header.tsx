import {
    MDBBtn,
    MDBContainer,
    MDBInputGroup,
    MDBNavbar,
    MDBNavbarBrand
} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";
import logo from "../../../../assets/brand/logo-no-background.png";

const TabletBrandHeader = () => {
    return (
        // fixed="top"
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid className="mx-5 px-5 justify-content-between align-content-between">
                <MDBNavbarBrand>
                    <Link to="/">
                        <img
                            src={logo}
                            height="30"
                            alt=""
                            loading="lazy"
                        />
                    </Link>
                </MDBNavbarBrand>
                <MDBInputGroup tag="form" className='d-flex w-75 mb-3 pt-2'>
                    <input className='form-control' placeholder="Type query" aria-label="Search" type='Search'/>
                    <MDBBtn outline>Search</MDBBtn>
                </MDBInputGroup>
            </MDBContainer>
        </MDBNavbar>

    )
}
export default TabletBrandHeader
