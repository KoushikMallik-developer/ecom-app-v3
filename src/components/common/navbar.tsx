
import { Link } from 'react-router-dom';
import { MDBCol, MDBContainer, MDBIcon, MDBDropdown, MDBDropdownItem, MDBDropdownToggle, MDBDropdownMenu, } from "mdb-react-ui-kit";
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse,
} from 'mdb-react-ui-kit';
import logo from '../../assets/brand/logo-no-background.png';
import Login from '../user/login';
import Register from '../user/register';
import Cart from '../cart/cart_details';
import { useState } from 'react';

const Navbar: React.FC = () => {

  const [signInModal, setSignInModal] = useState(false);

  const toggleShowSignInModal = () => setSignInModal(!signInModal);

  const [signUpModal, setSignUpModal] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleShowSignUpModal = () => { setSignUpModal(!signUpModal); }

  const [showCartModal, setShowCartModal] = useState(false);

  const toggleCartModal = () => setShowCartModal(!showCartModal);

  const [showNavColor, setShowNavColor] = useState(false);

  let logout_btn_nav_item = <><MDBDropdownItem link childTag='button' onClick={toggleShowSignInModal}>Sign In</MDBDropdownItem><MDBDropdownItem link childTag='button' onClick={toggleShowSignUpModal}>New Customer? Register</MDBDropdownItem></>;
  if (isLoggedIn) {
    logout_btn_nav_item = <MDBDropdownItem link childTag='button'>Logout</MDBDropdownItem>;
  }

  return (
    <>
      <MDBNavbar expand='lg' className='fs-5 gradient-bg text-light' light>
        <MDBContainer fluid>
          <MDBCol sm={2}>
            <Link to="/">
              <img
                src={logo}
                height='30'
                alt=''
                loading='lazy'
                className='py-0'
              />
            </Link>
          </MDBCol>

          <MDBCol sm={6}>
            <form className="d-flex mt-1 mb-1 w-100">
              <MDBIcon icon="search" className="mx-2 mt-2" />
              <input className="form-control" type="text" placeholder="Search for Products, Brands and More" aria-label="Search" />
            </form>
          </MDBCol>


          <MDBCol sm={4}>
            <MDBNavbarToggler
              type='button'
              data-target='#navbarColor02'
              aria-controls='navbarColor02'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowNavColor(!showNavColor)}
            >
              <MDBIcon icon='bars' fas />
            </MDBNavbarToggler>
            <MDBCollapse show={showNavColor} navbar style={{ float: 'right' }}>
              <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                <MDBNavbarItem className='active'>
                  <MDBNavbarLink aria-current='page' className='text-light' onClick={toggleShowSignUpModal} >

                    <MDBIcon className='mx-2' icon='"fas fa-handshake'></MDBIcon>
                    <b>Become A Seller</b>
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBDropdown>
                    <MDBDropdownToggle tag='a' className='nav-link text-light' role='button'>
                      <MDBIcon className='mx-2' icon='fas fa-user'></MDBIcon>
                      <b>Account</b>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <Link to="/profile"><MDBDropdownItem link childTag='button'>My Profile</MDBDropdownItem></Link>
                      <MDBDropdownItem link childTag='button' >Wishlist</MDBDropdownItem>
                      <MDBDropdownItem link childTag='button'>Orders</MDBDropdownItem>
                      <MDBDropdownItem link childTag='button'>Gift Cards</MDBDropdownItem>
                      <MDBDropdownItem link childTag='button'>Rewards</MDBDropdownItem>
                      {logout_btn_nav_item}
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavbarItem>
                <MDBNavbarItem >
                  <MDBNavbarLink onClick={() => toggleCartModal()} className='text-light' tag={Link}>
                    <MDBIcon className='mx-2' icon='fas fa-cart-plus'></MDBIcon>
                    <b>Cart</b>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBCol>

        </MDBContainer>
      </MDBNavbar>

      <MDBContainer>
        <Login toggleShowSignInModal={toggleShowSignInModal} signInModal={signInModal} setSignInModal={setSignInModal} />
      </MDBContainer>
      <MDBContainer>
        <Register toggleShowSignUpModal={toggleShowSignUpModal} signUpModal={signUpModal} setSignUpModal={setSignUpModal} />
      </MDBContainer>
      <Cart toggleCartModal={toggleCartModal} showCartModal={showCartModal} setShowCartModal={setShowCartModal}></Cart>
    </>
  );
}

export default Navbar;
