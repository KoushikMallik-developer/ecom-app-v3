import {
    MDBCol,
    MDBContainer,
    MDBNavbar,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBRow
} from "mdb-react-ui-kit";
import {BadgePercent, Heart, ShoppingBag, SlidersHorizontal, Users} from "lucide-react";

const TabletCategoryHeader = () => {
    return (

        <MDBNavbar style={{height: "60px", backgroundColor: '#262626'}}>
            <MDBContainer fluid className="mx-5 px-5 ">
                <MDBNavbarNav>

                    <MDBRow className="d-flex justify-content-center align-items-center">
                        <MDBCol md="4" className="d-flex">
                            <MDBNavbarItem>
                                <MDBNavbarLink className="d-flex text-white">
                                    <SlidersHorizontal strokeWidth={3}/> <h4 className="mx-2 fw-bolder">Categories</h4>
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBCol>

                        <MDBCol md="8" className="d-flex justify-content-end align-items-center text-center">
                            <MDBNavbarItem>
                                <MDBNavbarLink className="d-flex text-white">
                                    <BadgePercent size={20}/> <h6 className="mx-2">Offers</h6>
                                    <Heart size={20}/> <h6 className="mx-2">Wishlist</h6>
                                    <ShoppingBag size={20}/> <h6 className="mx-2">Cart</h6>
                                    <Users size={20}/> <h6 className="mx-2">Sign In</h6>
                                </MDBNavbarLink>

                            </MDBNavbarItem>
                        </MDBCol>

                    </MDBRow>
                </MDBNavbarNav>
            </MDBContainer>
        </MDBNavbar>
    )
}
export default TabletCategoryHeader
