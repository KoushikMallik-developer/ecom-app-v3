
import {
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBRipple,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function RecentlyViewedItems(props) {
  return (
    <MDBRow className=''>
    {
        props.categoriesOffers.data.map(data => (
            <MDBCol>
            <MDBCard className='shadow-5-strong px-3 pb-0 pt-2 mb-3 text-center'>
            <MDBRow className='my-2'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='rounded-0 bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardTitle className='my-2 fs-6'>{data.label}</MDBCardTitle>
                    <div className="d-flex flex-row justify-content-center mt-1 mb-4 text-danger">
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <MDBIcon fas icon="star" />
                    <span className='mx-2'>310 Reviews</span>
                  </div>
            </MDBRow>
        </MDBCard>
        </MDBCol>
        ))
    }
    </MDBRow>
  );
}