import { Link } from 'react-router-dom';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRipple,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export default function CategoriesCard(props) {
  return (
    <MDBRow className=''>
    {
        props.categoriesOffers.data.map(data => (
            <MDBCol sm={2}>
            <MDBCard className='shadow-5-strong px-3 pb-0 mb-3 text-center pt-2'>
            <MDBRow className='my-2'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='rounded-0 bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardTitle className='my-2 fs-6'>{data.label}</MDBCardTitle>
                    <MDBCardText >
                        <small className='text-muted'>{data.details[0].description}</small>
                    </MDBCardText>
            </MDBRow>
          <MDBCardBody className='my-0 py-3'>
            <div className='text-center'>
            <Link className='text-danger' to="/">Shop Now</Link>
            </div>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        ))
    }
    </MDBRow>
  );
}