import {useState, useEffect} from "react";
import {getData} from "../../services/network_services";
import {user_details_apiURL} from "../../services/api_url";
/*import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBSpinner, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import ActiveStatusIndicator from "./status_indicator";
import isNullOrEmpty from "../../utils/empty_check";
import AddressListComponent from "./address_list";
import { useParams } from 'react-router-dom';*/
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBCardTitle,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBIcon
} from 'mdb-react-ui-kit';

const UserProfile = () => {

    const [userInfo, setUserData] = useState<UserType | null>(null);


    useEffect(() => {
        fetchUserDetails();
    }, []);


    const fetchUserDetails = async () => {
        try {

            const data = await getData(
                user_details_apiURL,
                "fetch-User-Details"
            );

            if (data?.statusCode == "200") {

                setUserData(data.response['data'])

            } else {

                setUserData(null)
            }
        } catch (error) {

            console.error("fetchUserDetails catch: ", error);
        }
    };


    return (<MDBContainer>
            <MDBRow>
                <MDBCol sm={3} className='justify-content-center'>
                    {/* TOP with image */}
                    <MDBRow className='mt-2 mb-2 pt-2 pb-2'>
                        <MDBCol size="auto">
                            <MDBCard style={{width: '12rem'}}>
                                <MDBCardBody className="d-flex flex-column align-items-center">
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt="Your Image"
                                                  className="rounded-circle" style={{width: '4rem', height: '4rem'}}/>
                                    <MDBCardTitle className="mt-2" style={{fontSize: '1rem'}}>Hi! {userInfo?.fname}</MDBCardTitle>
                                    <MDBCardText> Joined from {userInfo?.created_at}</MDBCardText>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                    {/* TABS */}
                    <MDBCard style={{width: '12rem'}} className='text-center mb-2'>
                        {/*  Account Settings */}
                        <MDBContainer className='mt-2'>
                            <MDBRow>
                                <MDBCol size='md'>
                                    <MDBIcon icon='camera-retro' border/>
                                    Account Settings
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <hr/>

                        {/*  Personal Details */}
                        <MDBContainer className='mt-2'>
                            <MDBCol size='md'>
                                Personal Details
                            </MDBCol>
                        </MDBContainer>
                        {/* Manage Address */}
                        <MDBContainer className='mt-2'>
                            <MDBCol size='md'>
                                Manage Addresses
                            </MDBCol>
                        </MDBContainer>
                        {/*  Gift Cards */}
                        <MDBContainer className='mt-2 mb-2'>
                            <MDBCol size='md'>
                                Gift Card
                            </MDBCol>
                        </MDBContainer>
                    </MDBCard>
                </MDBCol>

                <MDBCol sm={9} className='justify-content-center'>
                    Hi
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
};

export default UserProfile;