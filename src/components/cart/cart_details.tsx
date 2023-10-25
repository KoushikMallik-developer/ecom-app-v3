import { Box, Drawer } from '@mui/material';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardHeader, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBListGroup, MDBListGroupItem, MDBRipple, MDBRow, MDBTooltip, MDBTypography } from 'mdb-react-ui-kit';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = (props) => {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   const fetchCartItems = async () => {
  //     try {
  //       const response = await getCartItems();
  //       setCartItems(response.data);
  //     } catch (error) {
  //       console.error('Error fetching cart items:', error);
  //     }
  //   };

  //   fetchCartItems();
  // }, []);

  // const handleRemoveFromCart = async (itemId) => {
  //   try {
  //     await removeFromCart(itemId);
  //     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  //   } catch (error) {
  //     console.error('Error removing item from cart:', error);
  //   }
  // };


  debugger;
  return (
    <>
      <Drawer
        anchor="right"
        open={props.showCartModal}
        onClose={() => props.toggleCartModal()}
      >
        <Box
          sx={{ width: 450 }}
          role="presentation"
        >
          <MDBContainer>
            <MDBRow className="justify-content-center">
              <div className='gradient-custom-2 pt-2 pb-1 text-light'>
                <MDBRow>
                  <MDBCol sm={8} className='d-flex'>
                  <MDBIcon className='mx-2 my-2' icon='fas fa-cart-plus'></MDBIcon>
                    <h3>
                      Cart </h3>

                  </MDBCol>
                  <MDBCol sm={4}>
                    <CloseIcon className='float-end my-2' type="button" onClick={() => props.toggleCartModal()}></CloseIcon>
                  </MDBCol>
                </MDBRow>
              </div>

              <hr className="py-2" />
              <MDBRow>
                <MDBCol sm={3} className="my-4 mx-0">
                  <MDBRipple rippleTag="div" rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="w-100" />
                  </MDBRipple>
                </MDBCol>

                <MDBCol sm={4} className="mb-4">
                  <p>
                    <strong>Blue denim shirt</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: M</p>

                  <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                    title="Remove item">
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>

                  <MDBTooltip wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
                    title="Move to the wish list">
                    <MDBIcon fas icon="heart" />
                  </MDBTooltip>
                </MDBCol>
                <MDBCol sm={5} className="mb-4">
                  <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <MDBBtn className="px-3 me-2 ms-2 bg-light text-danger shadow-0" color='tertiary' rippleColor='light'>
                      {/* <MDBIcon fas icon="minus" /> */}
                      <RemoveIcon></RemoveIcon>
                    </MDBBtn>

                    <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

                    <MDBBtn className="px-3 ms-2 ms-2 bg-light text-danger shadow-0" color='tertiary' rippleColor='light'>
                      {/* <MDBIcon fas icon="plus" /> */}
                      <AddIcon></AddIcon>
                    </MDBBtn>
                  </div>

                  <p className="text-start text-md-center">
                    <strong>$17.99</strong>
                  </p>
                </MDBCol>
              </MDBRow>
              <hr className="my-4" />
              <MDBRow>
                <MDBCol sm={3} className="my-4 mx-0">
                  <MDBRipple rippleTag="div" rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="w-100" />
                  </MDBRipple>
                </MDBCol>

                <MDBCol sm={4} className="mb-4">
                  <p>
                    <strong>Blue denim shirt</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: M</p>

                  <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                    title="Remove item">
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>

                  <MDBTooltip wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
                    title="Move to the wish list">
                    <MDBIcon fas icon="heart" />
                  </MDBTooltip>
                </MDBCol>
                <MDBCol sm={5} className="mb-4">
                  <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <MDBBtn className="px-3 me-2 ms-2 bg-light text-danger shadow-0" color='tertiary' rippleColor='light'>
                      <RemoveIcon></RemoveIcon>
                    </MDBBtn>

                    <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

                    <MDBBtn className="px-3 ms-2 ms-2 bg-light text-danger shadow-0" color='tertiary' rippleColor='light'>
                      <AddIcon></AddIcon>
                    </MDBBtn>
                  </div>

                  <p className="text-start text-md-center">
                    <strong>$17.99</strong>
                  </p>
                </MDBCol>
              </MDBRow>
              <hr className="my-4" />
              <MDBRow>
                <MDBCol sm={3} className="my-4 mx-0">
                  <MDBRipple rippleTag="div" rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      className="w-100" />
                  </MDBRipple>
                </MDBCol>

                <MDBCol sm={4} className="mb-4">
                  <p>
                    <strong>Blue denim shirt</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: M</p>

                  <MDBTooltip wrapperProps={{ size: "sm" }} wrapperClass="me-1 mb-2"
                    title="Remove item">
                    <MDBIcon fas icon="trash" />
                  </MDBTooltip>

                  <MDBTooltip wrapperProps={{ size: "sm", color: "danger" }} wrapperClass="me-1 mb-2"
                    title="Move to the wish list">
                    <MDBIcon fas icon="heart" />
                  </MDBTooltip>
                </MDBCol>
                <MDBCol sm={5} className="mb-4">
                  <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    <MDBBtn className="px-3 me-2 ms-2 bg-light text-danger shadow-0" color='tertiary' rippleColor='light'>
                      {/* <MDBIcon fas icon="minus" /> */}
                      <RemoveIcon></RemoveIcon>
                    </MDBBtn>

                    <MDBInput defaultValue={1} min={0} type="number" label="Quantity" />

                    <MDBBtn className="px-3 ms-2 ms-2 bg-light text-danger shadow-0" color='tertiary' rippleColor='light'>
                      {/* <MDBIcon fas icon="plus" /> */}
                      <AddIcon></AddIcon>
                    </MDBBtn>
                  </div>

                  <p className="text-start text-md-center">
                    <strong>$17.99</strong>
                  </p>
                </MDBCol>
              </MDBRow>

            </MDBRow>

            <MDBRow>
              <MDBCol>
                <MDBCard className="mb-4">
                  <MDBCardHeader>
                    <MDBTypography tag="h5" className="mb-0">
                      Summary
                    </MDBTypography>
                  </MDBCardHeader>
                  <MDBCardBody>
                    <MDBListGroup flush>
                      <MDBListGroupItem
                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>$53.98</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Discount
                        <span>$53.98</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </MDBListGroupItem>
                      <MDBListGroupItem
                        className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p className="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>$53.98</strong>
                        </span>
                      </MDBListGroupItem>
                    </MDBListGroup>

                    <div className='center-text'>
                      <MDBBtn className='mx-2 bg-danger'>
                        BACK TO SHOPPING
                      </MDBBtn>
                      <MDBBtn className='mx-2 bg-light text-danger border border-danger shadow-5-strong'>
                        PROCEED TO CHECKOUT
                      </MDBBtn>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Box>

      </Drawer>

    </>
  );
}

export default Cart;
