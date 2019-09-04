import React from "react";
import { connect } from "react-redux";
import "./CardHeader.style.scss";
const CardHeader = ({ description }) => {
  return (
    <>
      <h1 className="card-header">Personal Card</h1>
      <p className="card-label">{description}</p>
    </>
  );
};
const mapStateToProps = ({ user }) => ({
  description: user.description
});
export default connect(mapStateToProps)(CardHeader);
