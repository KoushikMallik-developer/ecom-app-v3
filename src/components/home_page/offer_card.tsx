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

export default function OfferCard(props) {
  return (
    <MDBRow className=''>
    {
        props.hotDealsData.data.map(data => (
            <MDBCol>
            <MDBCard className='shadow-5-strong px-3 py-0 mb-3'>
            <MDBCardTitle className='my-2'>{data.label}</MDBCardTitle>
    
            <MDBRow className='my-2'>
                <MDBCol className='px-2'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='rounded-0 bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardText >
                        <small className='text-muted'>{data.details[0].description}</small>
                    </MDBCardText>
                </MDBCol>
    
                <MDBCol className='px-2'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='rounded-0 bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardText >
                        <small className='text-muted'>{data.details[1].description}</small>
                    </MDBCardText>
                </MDBCol>
    
            </MDBRow>
    
            <MDBRow>
    
                <MDBCol className='px-2'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='rounded-0 bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardText >
                        <small className='text-muted'>{data.details[2].description}</small>
                    </MDBCardText>
                </MDBCol>
    
                <MDBCol className='px-2'>
                    <MDBRipple rippleColor='light' rippleTag='div' className='rounded-0 bg-image hover-overlay'>
                        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/111.webp' fluid alt='...' />
                        <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                    </MDBRipple>
                    <MDBCardText >
                        <small className='text-muted'>{data.details[3].description}</small>
                    </MDBCardText>
                </MDBCol>
    
            </MDBRow>
          
          <MDBCardBody>
            <div className='text-center'>
            <Link className='text-danger' to="/">See all offers</Link>
            </div>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
        ))
    }
    </MDBRow>
  );
}