import React, { useState, useEffect } from "react";
import { User } from "./Users";
import { UserDetail } from "./UserDetail";

export const UserCard = (props: { user: User; key: Number }) => {
  const { user } = props;
  const [showDetail, setShowDetail] = useState(false);

  const activateShowDetail = () => {
    setShowDetail(true);
  };

  const deactivateShowDetail = () => {
    setShowDetail(false);
  };

  const myStyle = {
    border: "5px solid lightblue",
    padding: "10px",
    margin: "10px",
    fontFamily: "Arial",
  };

  return (
    <div style={myStyle}>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>
        Do you want to show details?{" "}
        <button onClick={activateShowDetail}>Yes</button>
        <button onClick={deactivateShowDetail}>No</button>
      </p>
      {showDetail && <UserDetail user={user} />}
    </div>
  );
};
