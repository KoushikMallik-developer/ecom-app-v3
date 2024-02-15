import {MDBCard, MDBCardBody, MDBRow} from "mdb-react-ui-kit";
import UserAvatar from "./user_avatar.tsx";

const UserCard = () => {
    return (
        <MDBCard className="bg-transparent shadow-5-strong">
            <MDBCardBody className="text-center">
                <MDBRow className="d-flex text-center justify-content-center align-items-center">
                    <UserAvatar name="Animesh Banerjee"/>
                </MDBRow>
                <p className="text-muted my-1 fw-bolder">Welcome, Animesh</p>
                <p className="text-muted mb-2">Main Street, San Francisco, CA</p>

            </MDBCardBody>
        </MDBCard>
    )
}
export default UserCard
