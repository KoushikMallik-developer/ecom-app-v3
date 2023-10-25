import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ProductCard(props) {
  // debugger;
    return (
      <>
      <MDBCard className="text-black shadow-5-strong mb-3">
        <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
        <MDBCardImage
          src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/3.webp"
          position="top"
          alt="Apple Computer"
        />
        <MDBCardBody>
          <div className="text-center">
            <MDBCardTitle>Apple pro display XDR</MDBCardTitle>
            {/* <p className="text-muted mb-4">Apple pro display XDR</p> */}
          </div>
          <div className="d-flex flex-row justify-content-center mt-1 mb-2 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <span className='mx-2'>310 Reviews</span>
                  </div>
          <div>
            <div className="d-flex justify-content-center">
              <span><b>Price: </b> $5,999</span>
              {/* <span>$5,999</span> */}
            </div>
          </div>
          <div className="d-flex flex-row mt-3">
                <MDBBtn
                  color="light"
                  rippleColor="dark"
                  className="flex-fill border border-danger ms-1 shadow-5-strong text-danger"
                >
                <AddShoppingCartIcon className='px-1'/>
                  Add to cart
                </MDBBtn>
                <MDBBtn color="danger" className="flex-fill ms-2">
                  Buy now
                </MDBBtn>
              </div>
        </MDBCardBody>
      </MDBCard>
      </>
    );
}