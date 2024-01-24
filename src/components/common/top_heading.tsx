import {MDBCol, MDBContainer} from "mdb-react-ui-kit";
import sale from '../../assets/homepage/black-friday.png'
import sale2 from '../../assets/homepage/sale2.png'
// import sale3 from '../../assets/homepage/sale3.png'
import Btn from "./btn.tsx";


export default function TopHeading() {
    return (
        <>
            <MDBContainer className="d-flex align-items-start" style={{backgroundColor: '#191C1F'}}>
                <MDBCol sm={4} className="text-center py-3">
                    {/*<MDBRow*/}
                    {/*    className="h-25 d-inline-block"*/}
                    {/*    style={{width: 120, backgroundColor: "rgba(0, 0, 255, 0.1)"}}*/}
                    {/*>*/}
                    <img
                        src={sale}
                        className='img-fluid'
                        style={{width: '100px', height: '50px'}}
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
                <MDBCol sm={4} className="py-3">
                    {/*<img
                        src={sale3}
                        className='img-fluid'
                        alt=''
                    />*/}
                    <Btn/>
                </MDBCol>
            </MDBContainer>
        </>
    );
}

//      <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">.bg-dark.bg-gradient</div>
