import { useState, useEffect } from "react";
import { getData } from "../../services/network_services";
import { user_details_apiURL } from "../../services/api_url";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBSpinner, MDBIcon, MDBBtn } from "mdb-react-ui-kit";
import ActiveStatusIndicator from "./status_indicator";
import isNullOrEmpty from "../../utils/empty_check";
import AddressListComponent from "./address_list";

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
      debugger
      if (data?.statusCode == "200") {

        setUserData(data.response['data'])

      } else {

        setUserData(null)
      }
    } catch (error) {

      console.error("fetchUserDetails catch: ", error);
    }
  };

  return (
    <div>
      {userInfo ? <>
        <MDBCard style={{ maxWidth: '400px'}}>

          <MDBBtn className="position-absolute top-0 end-0 m-2" color="primary">
            <MDBIcon style={{ paddingRight: '2px' }} icon="pen" /> Edit
          </MDBBtn>

          <MDBCardImage
            src={isNullOrEmpty(userInfo.image) ? "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" : userInfo.image}
            alt={`Profile of ${userInfo.username.toUpperCase()}`}
            position='top' fluid
            style={{ width: '100%', height: 'auto' }} />
          <MDBCardBody>
            <MDBCardTitle>Welcome Mr/Ms/Mrs. {userInfo.username.toUpperCase()}</MDBCardTitle>
            <MDBCardText>
              <strong>Email:</strong> {userInfo.email}
              <br />
              <strong>Name:</strong> {userInfo.fname} {userInfo.lname}
              <br />
              <strong>Date of Birth:</strong> {isNullOrEmpty(userInfo.dob) ? 'N/A' : userInfo.dob}
              <br />
              <strong>Phone:</strong> {isNullOrEmpty(userInfo.phone) ? 'N/A' : userInfo.phone}
              <br />
              <strong>Account Type:</strong> {userInfo.account_type}
              <br />
              <strong>Active:</strong> <ActiveStatusIndicator isActive={userInfo.is_active} />

            </MDBCardText>
            {/* <AddressListComponent addresses={userInfo.delivery_address_list.address_list} /> */}
            {userInfo.delivery_address_list.address_list.map((address: UserAddress) => (
            <div key={address.id}>
              <p>{address.address_line1}, {address.address_line2}</p>
              <p>{address.city}, {address.state} {address.pin}</p>
              {/* Add more address details as needed */}
            </div>
          ))}
          </MDBCardBody>
        </MDBCard>

      </>
        : <div className='text-center'>
          <MDBIcon icon="spinner" pulse size="3x" fixed />
          <span className="sr-only">Loading...</span>
        </div>
      }


    </div>
  );
};

export default UserProfile;