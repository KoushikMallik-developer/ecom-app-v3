import {MDBBtn, MDBIcon, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';

const Btn = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol style={{width: '100%'}}>
                    <MDBBtn color="warning" className="text-dark">
                        Shop Now
                        <MDBIcon icon="arrow-right" className="ml-1 text-dark px-1"/>
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Btn;
