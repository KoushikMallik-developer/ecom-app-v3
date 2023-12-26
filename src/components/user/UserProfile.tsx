import { useState, useEffect } from "react";

const UserProfile = () => {

  const [userInfo, setUserInfo] = useState<UserDataType>({
    fname: "",
    lname: "",
    email: "",
    password1: "",
    password2: "",
    otp: "",
  });

  useEffect(() => {
    // const items = JSON.parse(localStorage.getItem('user_info'));
    // if (items) {
      // setUserInfo(items);
    // }
  }, []);


  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userInfo.fname}{userInfo.lname}</p>
      <p>Email: {userInfo.email}</p>
      {/* Additional user profile details */}
    </div>
  );
};

export default UserProfile;
