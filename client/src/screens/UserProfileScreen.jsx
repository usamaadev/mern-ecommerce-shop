import React from "react";
import { useDispatch, useSelector } from "react-redux";

function UserProfileScreen() {
  const { userInfo } = useSelector((state) => state.userLogin);
  return (
    <div>
      <strong>Email:</strong> &nbsp;
      {userInfo.email}
    </div>
  );
}

export default UserProfileScreen;
