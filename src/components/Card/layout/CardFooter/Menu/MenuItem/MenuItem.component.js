import React from "react";
import { connect } from "react-redux";
import { changeTab } from "../../../../../../redux/cardTab/cardTab.actions";
import "./MenuItem.style.scss";
const MenuItem = ({ name, changeTodo, currentTab }) => {
  return (
    <button
      onClick={() => changeTodo(name)}
      className="tabs-item"
      style={{ color: `${name === currentTab ? "#00C45A" : "#C0C3C8"}` }}
    >
      {name}
    </button>
  );
};
const mapStateToProps = state => ({
  currentTab: state.currentTab
});
const mapDispatchToProps = dispatch => ({
  changeTodo: tabName => dispatch(changeTab(tabName))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem);
