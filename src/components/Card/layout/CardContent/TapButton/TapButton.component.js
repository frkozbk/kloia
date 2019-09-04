import React, { useState } from "react";
import UserPhoto from "../image/Oval.jpg";
import PlusIcon from "../image/plus.svg";
import Minus from "../image/minus.svg";
import "./TapButton.style.scss";
const TapButton = props => {
  const { name, user, users } = props;
  const [tapOpen, setTapOpen] = useState(false);
  function handleClick() {
    setTapOpen(prevstate => !prevstate);
  }
  function renderOpenableContent() {
    if (user) {
      return (
        <div className="userinfo">
          <img src={UserPhoto} alt="user" className="userinfos-img" />
          <div className="userinfo-container">
            <p className="text">{user.birthDate}</p>
            <p className="text">{user.email}</p>
          </div>
        </div>
      );
    } else if (users) {
      return users.map(user => {
        return (
          <div className="userinfo" key={user.id}>
            <img src={UserPhoto} alt="user" className="userinfos-img" />
            <div className="userinfo-container">
              <p className="text">{user.birthDate}</p>
              <p className="text">{user.email}</p>
            </div>
          </div>
        );
      });
    } else {
      return null;
    }
  }
  return (
    <>
      <button onClick={handleClick} className="personalInfo-item">
        {tapOpen ? (
          <img src={Minus} alt="minus" />
        ) : (
          <img src={PlusIcon} alt="plus" />
        )}

        {name}
      </button>
      {tapOpen ? renderOpenableContent() : null}
    </>
  );
};

export default TapButton;
