import {MDBCard, MDBCol, MDBRow} from "mdb-react-ui-kit";

const SellerSummery = () => {
    return (
        <MDBCard background='transparent' className='text-dark mb-3 shadow-5-strong' style={{maxHeight: "100px"}}>
            <MDBRow className="p-2">
                <MDBCol sm={4} size={4} className="text-center justify-content-center align-items-center mt-3">
                    <h6 className="fw-bolder">PAID</h6>
                    <p className="text-primary fw-bolder">
                        Rs. 100537.50
                    </p>
                </MDBCol>
                <MDBCol sm={4} size={4} className="text-center justify-content-center align-items-center mt-3">
                    <h6 className="fw-bolder">EXPENDITURE</h6>
                    <p className="text-primary fw-bolder">
                        Rs. 5537.50
                    </p>
                </MDBCol>
                <MDBCol sm={4} size={4} className="text-center justify-content-center align-items-center mt-3">
                    <h6 className="fw-bolder">BALANCE</h6>
                    <p className="text-primary fw-bolder">
                        Rs. 537.50
                    </p>
                </MDBCol>
            </MDBRow>

        </MDBCard>
    )
}
export default SellerSummery
