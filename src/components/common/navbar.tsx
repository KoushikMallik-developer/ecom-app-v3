import {Link, useLocation} from "react-router-dom";
import {
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownToggle,
    MDBDropdownMenu,
} from "mdb-react-ui-kit";
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
} from "mdb-react-ui-kit";
import logo from "../../assets/brand/logo-no-background.png";
import Login from "../user/login";
import Register from "../user/register";
import Cart from "../cart/cart_details";
import {useState, useEffect} from "react";
import {KeySquare, Store} from "lucide-react";

const Navbar: React.FC = () => {
    const [signInModal, setSignInModal] = useState(false);
    const [showNavColor, setShowNavColor] = useState(false);
    const [signUpModal, setSignUpModal] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showCartModal, setShowCartModal] = useState(false);
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
            <MDBNavbar expand="lg" className="fs-5 bg-primary bg-opacity-25 text-dark" light>
                <MDBContainer fluid>
                    <MDBCol sm={2}>
                        <Link to="/">
                            <img
                                src={logo}
                                height="30"
                                alt=""
                                loading="lazy"
                                className="py-0"
                            />
                        </Link>
                    </MDBCol>
                    <MDBCol sm={10}>
                        <MDBNavbarToggler
                            type="button"
                            data-target="#navbarColor02"
                            aria-controls="navbarColor02"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={() => setShowNavColor(!showNavColor)}
                        >
                            <MDBIcon icon="bars" fas/>
                        </MDBNavbarToggler>
                        <MDBCollapse show={showNavColor} navbar style={{float: "right"}}>
                            <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                                {pathname.includes('seller') ? <>
                                        <MDBNavbarItem className="">
                                            <Link to="/seller-login">
                                                <MDBNavbarLink
                                                    aria-current="page"
                                                    className=""

                                                >
                                                    {!isLoggedIn && (
                                                        <>
                                                            <KeySquare className="mx-2 my-0"/>
                                                            <b>Seller Login</b>
                                                        </>
                                                    )}
                                                </MDBNavbarLink>
                                            </Link>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem className="">
                                            <Link to="/seller-register">
                                                <MDBNavbarLink
                                                    aria-current="page"
                                                    className=""

                                                >
                                                    {!isLoggedIn && (
                                                        <>
                                                            <Store className="mx-2 my-0"/>
                                                            <b>Start Selling</b>
                                                        </>
                                                    )}
                                                </MDBNavbarLink>
                                            </Link>
                                        </MDBNavbarItem>
                                    </>
                                    : <>
                                        <MDBNavbarItem>
                                            <MDBNavbarLink className="">
                                                <MDBIcon icon="search" className=""/>
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem className="">
                                            <Link to="/seller-home">
                                                <MDBNavbarLink
                                                    aria-current="page"
                                                    className=""

                                                >
                                                    {!isLoggedIn && (
                                                        <>
                                                            <MDBIcon
                                                                className="mx-2"
                                                                icon='"fas fa-handshake'
                                                            ></MDBIcon>
                                                            <b>Become A Seller</b>
                                                        </>
                                                    )}
                                                </MDBNavbarLink>
                                            </Link>
                                        </MDBNavbarItem>
                                        <MDBNavbarItem>
                                            <MDBDropdown>
                                                <MDBDropdownToggle
                                                    tag="a"
                                                    className="nav-link"
                                                    role="button"
                                                >
                                                    <MDBIcon className="mx-2" icon="fas fa-user"></MDBIcon>
                                                    <b>Account</b>
                                                </MDBDropdownToggle>
                                                <MDBDropdownMenu>

                                                    {isLoggedIn ?
                                                        <Link to="/profile">
                                                            <MDBDropdownItem link childTag="button">
                                                                My Profile
                                                            </MDBDropdownItem>
                                                        </Link> :
                                                        <MDBDropdownItem link childTag="button"
                                                                         onClick={toggleShowSignInModal}>
                                                            My Profile
                                                        </MDBDropdownItem>
                                                    }

                                                    {isLoggedIn ? <MDBDropdownItem link childTag="button">
                                                        Wishlist
                                                    </MDBDropdownItem> : <MDBDropdownItem link childTag="button"
                                                                                          onClick={toggleShowSignInModal}>
                                                        Wishlist
                                                    </MDBDropdownItem>}


                                                    {isLoggedIn ? <MDBDropdownItem link childTag="button">
                                                        Orders
                                                    </MDBDropdownItem> : <MDBDropdownItem link childTag="button"
                                                                                          onClick={toggleShowSignInModal}>
                                                        Orders
                                                    </MDBDropdownItem>}


                                                    {isLoggedIn ? <MDBDropdownItem link childTag="button">
                                                        Gift Cards
                                                    </MDBDropdownItem> : <MDBDropdownItem link childTag="button"
                                                                                          onClick={toggleShowSignInModal}>
                                                        Gift Cards
                                                    </MDBDropdownItem>}


                                                    {isLoggedIn ? <MDBDropdownItem link childTag="button">
                                                        Rewards
                                                    </MDBDropdownItem> : <MDBDropdownItem link childTag="button"
                                                                                          onClick={toggleShowSignInModal}>
                                                        Rewards
                                                    </MDBDropdownItem>}


                                                    {logout_btn_nav_item}
                                                </MDBDropdownMenu>
                                            </MDBDropdown>
                                        </MDBNavbarItem>


                                        <MDBNavbarItem>
                                            <MDBNavbarLink
                                                onClick={() => toggleCartModal()}
                                                className=""
                                                tag={Link}
                                            >
                                                <MDBIcon className="mx-2" icon="fas fa-cart-plus"></MDBIcon>
                                                <b>Cart</b>
                                            </MDBNavbarLink>
                                        </MDBNavbarItem>
                                    </>}
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBCol>
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

export default Navbar;
