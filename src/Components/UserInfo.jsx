import React from "react";
import AccountBoxTwoToneIcon from "@mui/icons-material/AccountBoxTwoTone";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

const UserInfo = ({data}) => {

    const [user] = useAuthState(auth);
    // console.log(user)

  return (
    <div className="user_profile">
      <div className="user">
        <div className="picture">
          <AccountBoxTwoToneIcon />
        </div>
        <div className="info">
          <div className="email">{user.email}</div>
          <div className="joined_at">{user.metadata.creationTime}</div>
        </div>
      </div>
      <div className="total_tests">
    <span>Total Test taken - {data.length}</span>
      </div>
    </div>
  );
};

export default UserInfo;
