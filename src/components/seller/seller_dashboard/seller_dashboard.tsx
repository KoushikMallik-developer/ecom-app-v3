import {MDBCol, MDBContainer, MDBRow} from "mdb-react-ui-kit";
import MainContent from "./main_content/main_content.tsx";
import RightMenu from "./right_menu/right_menu.tsx";
// import {useState} from "react";
import {useMediaQuery} from "react-responsive";
import {useLocation} from "react-router-dom";
import UserCard from "./left_menu/seller_card.tsx";
import LeftContent from "./left_menu/left_content.tsx";

const SellerDashboard = () => {

    const isMobile = useMediaQuery({query: '(max-width: 1224px)'});
    const location = useLocation();
    const {pathname} = location;
    // const [centredModal, setCentredModal] = useState(false);

    // const toggleOpen = () => setCentredModal(!centredModal);
    return (
        <>
            <MDBContainer fluid className={isMobile ? "mb-5" : "px-5 mb-5"}>
                <MDBRow className={isMobile ? "my-4" : "px-5 my-4"}>
                    <MDBCol md={2} className="justify-content-center align-items-center text-center my-3">
                        <UserCard/>
                        <LeftContent isMobile={isMobile}/>
                    </MDBCol>
                    <MDBCol md={7} className="px-4 mb-5">
                        <MainContent pathname={pathname}/>

                    </MDBCol>
                    <MDBCol md={3} className="my-3">

                        <RightMenu/>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </>
    )
}
export default SellerDashboard
