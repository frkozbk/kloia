import React from "react";
import { connect } from "react-redux";
import "./Note.style.scss";
const Note = ({ note }) => {
  return (
    <div className="note">
      <h1 className="note-title">Notes</h1>
      <p className="note-content">{note}</p>
    </div>
  );
};
const mapStateToProps = state => ({
  note: state.user.note
});
export default connect(mapStateToProps)(Note);
