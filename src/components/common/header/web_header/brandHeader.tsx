import {Link, useLocation} from "react-router-dom";
import {
    MDBContainer,
    MDBIcon,
    MDBInputGroup,
    MDBDropdownItem,
    MDBDropdownToggle,
    MDBDropdownMenu, MDBNavbarBrand, MDBBtn, MDBInput, MDBCol,
} from "mdb-react-ui-kit";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "../../../../assets/brand/logo-no-background.png";
import Login from "../../../user/login.tsx";
import Register from "../../../user/register.tsx";
import Cart from "../../../cart/cart_details.tsx";
import React, {useState, useEffect} from "react";
import {useMediaQuery} from "react-responsive";
import {Facebook, Instagram, Search, Twitter} from "lucide-react";
import {red} from "@mui/material/colors";

const BrandHeader: React.FC = () => {
    const [signInModal, setSignInModal] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);

    const isTabletOrMobile = useMediaQuery({query: '(max-width: 1224px)'})


    const toggleShowSignInModal = () => setSignInModal(!signInModal);
    const toggleShowSignUpModal = () => {
        setSignUpModal(!signUpModal);
    };
    const location = useLocation();
    const {pathname} = location;
    useEffect(() => {
        let token: any = localStorage.getItem("tokens");
        token = JSON.parse(token);
        if (token != null) {
            setIsLoggedIn(true);
        }
    });
    const toggleCartModal = () => setShowCartModal(!showCartModal);
    let logout_btn_nav_item = (
        <>
            <MDBDropdownItem link childTag="button" onClick={toggleShowSignInModal}>
                Sign In
            </MDBDropdownItem>
            <MDBDropdownItem link childTag="button" onClick={toggleShowSignUpModal}>
                New Customer? Register
            </MDBDropdownItem>
        </>
    );

    const clearLocalData = () => {
        try {
            localStorage.clear();
            setIsLoggedIn(false);
        } catch (error) {
            console.error();
        }
    };

    if (isLoggedIn) {
        logout_btn_nav_item = (
            <MDBDropdownItem link childTag="button" onClick={clearLocalData}>
                Logout
            </MDBDropdownItem>
        );
    }

    return (
        <>
            <MDBNavbar fixed="top" expand='lg' className="bg-light">
                <MDBContainer fluid className="mx-5 px-5">
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


                    <MDBNavbarNav className='d-flex justify-content-between mb-2 mb-lg-0 mx-5'>
                        <MDBCol sm={6}>
                            <MDBNavbarItem className="mt-1">
                                <MDBInputGroup tag="form">
                                    <MDBInput className="brand-header-text-color" placeholder="Type query" type='Search'/>
                                    <MDBBtn> <Search color="white"/></MDBBtn>
                                </MDBInputGroup>
                            </MDBNavbarItem>
                        </MDBCol>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <h6 className="brand-header-text-color pt-1">About Us</h6>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <h6 className="brand-header-text-color pt-1">Contact Us</h6>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <h6 className="brand-header-text-color pt-1">
                                    Success Stories
                                </h6>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <h6 className="brand-header-text-color pt-1">
                                    Help & Support
                                </h6>
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem className='me-3 me-lg-0 d-flex'>
                            <MDBNavbarLink>
                                <Instagram/>
                            </MDBNavbarLink>
                            <MDBNavbarLink>
                                <Facebook/>
                            </MDBNavbarLink><MDBNavbarLink>
                            <Twitter/>
                        </MDBNavbarLink>
                        </MDBNavbarItem>

                    </MDBNavbarNav>
                </MDBContainer>
            </MDBNavbar>

            <MDBContainer>
                <Login
                    toggleShowSignInModal={toggleShowSignInModal}
                    signInModal={signInModal}
                    setSignInModal={setSignInModal}
                    toggleShowSignUpModal={toggleShowSignUpModal}
                />
            </MDBContainer>

            <MDBContainer>
                <Register
                    toggleShowSignUpModal={toggleShowSignUpModal}
                    signUpModal={signUpModal}
                    setSignUpModal={setSignUpModal}
                    toggleShowSignInModal={toggleShowSignInModal}
                />
            </MDBContainer>
            <Cart
                toggleCartModal={toggleCartModal}
                showCartModal={showCartModal}
                setShowCartModal={setShowCartModal}
            ></Cart>
        </>
    );
};

export default BrandHeader;
