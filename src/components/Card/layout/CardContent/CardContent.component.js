import React from "react";
import { connect } from "react-redux";
import TapButton from "./TapButton/TapButton.component";
import "./CardContent.style.scss";
const CardContent = ({ user }) => {
  const { name, email, birthDate, family } = user;
  return (
    <section className="personalInfo">
      <div className="personalInfo-header">
        <h2 className="personalInfo-header__title">Personal Information</h2>
      </div>
      <TapButton user={{ name, email, birthDate }} name={user.name} />
      <TapButton users={family} name="Family" />
    </section>
  );
};
const mapStateToProps = state => ({
  user: state.user
});
export default connect(mapStateToProps)(CardContent);
