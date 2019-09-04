import React from "react";
import Menu from "./Menu/Menu.component";
import { connect } from "react-redux";
import AdressTab from "./AdressTab/AddressTab.component";
import SubscribeTab from "./SubcribeTab/SubscribeTab.component";
import "./CardFooter.style.scss";
const CardFooter = ({ currentTab }) => {
  function renderTabs() {
    switch (currentTab) {
      case "Address":
        return <AdressTab />;
      case "Subscribe":
        return <SubscribeTab />;
      default:
        return null;
    }
  }
  return (
    <>
      <Menu />
      <section className="card-footer">{renderTabs()}</section>
    </>
  );
};
const mapStateToProps = state => ({
  currentTab: state.currentTab
});
export default connect(mapStateToProps)(CardFooter);
