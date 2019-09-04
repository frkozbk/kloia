import React from "react";
import { connect } from "react-redux";
import Card from "./components/Card/Card";
import Note from "./components/Note/Note.component";
import Modal from "./components/Modal/Modal.component";

import "./App.scss";

function App({ modalOpen }) {
  return (
    <div className="container">
      <Card />
      <Note />
      {modalOpen ? <Modal /> : null}
    </div>
  );
}
const mapStateToProps = ({ modalOpen }) => ({
  modalOpen
});
export default connect(mapStateToProps)(App);
