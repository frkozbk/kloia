import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import useOutsideClick from "../../hooks/useOutsideClick";
import { closeModal } from "../../redux/modal/modal.actions";

import "./Modal.style.scss";
import { validateText } from "../../util/validate";
import { changeAddress } from "../../redux/user/user.actions";
const Modal = ({ userAddress, userLocation, closeModal, changeAddress }) => {
  const [address, setAddress] = useState(userAddress);
  const [location, setLocation] = useState(userLocation);
  const [valid, setValid] = useState(true);
  const containerEl = useRef(null);
  useOutsideClick(containerEl, handleCloseModal);
  function handleCloseModal() {
    closeModal();
  }
  function handleSubmit() {
    if (validateText(address) && validateText(location)) {
      changeAddress({ address, location });
      closeModal();
      return;
    }
    setValid(false);
  }
  return (
    <div className="modal">
      <div className="modal-container" ref={containerEl}>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          className={`${valid ? "" : "inValid"}`}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className={`${valid ? "" : "inValid"}`}
        />
        <button onClick={handleSubmit}>Save Changes</button>
      </div>
    </div>
  );
};
const mapStateToProps = ({ user }) => ({
  userAddress: user.address,
  userLocation: user.location
});
const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  changeAddress: newAddress => dispatch(changeAddress(newAddress))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
