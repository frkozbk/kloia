import React from "react";
import { connect } from "react-redux";
import House from "./house.svg";
import "./AddressTab.style.scss";
import { openModal } from "../../../../../redux/modal/modal.actions";
const AdressTab = ({ address, location, openModal }) => {
  return (
    <>
      <img src={House} alt="house" className="card-footer__image" />
      <div className="card-footer__info">
        <p className="adress">{address}</p>
        <p className="adress">{location}</p>
        <button onClick={openModal} className="change">
          Change
        </button>
      </div>
    </>
  );
};
const mapStateToProps = ({ user }) => ({
  address: user.address,
  location: user.location
});
const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdressTab);
