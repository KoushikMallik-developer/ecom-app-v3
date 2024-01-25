import {MDBBtn, MDBCol, MDBContainer} from "mdb-react-ui-kit";
import sale from '../../../assets/homepage/black-friday.png'
import sale2 from '../../../assets/homepage/sale2.png'
import Btn from "./btn.tsx";


export default function TopHeading() {
    return (
        <>
            <MDBContainer fluid className="d-flex text-center align-items-center bg-dark">
                <MDBCol sm={4} className="text-center py-3">
                    <img
                        src={sale}
                        className='img-fluid'
                        style={{height: '50px'}}
                        alt=''
                    />
                    {/*</MDBRow>*/}
                </MDBCol>
                <MDBCol sm={4} className="py-3">
                    <img
                        src={sale2}
                        className='img-fluid'
                        alt=''
                    />
                </MDBCol>
                <MDBCol sm={3} className="py-3">
                    <Btn/>
                </MDBCol>
                <MDBCol sm={1}>
                    <MDBBtn className="btn-close btn-close-white" color="none" aria-label="Close"/>
                </MDBCol>
            </MDBContainer>
        </>
    );
}