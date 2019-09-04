import React from "react";
import MenuItem from "./MenuItem/MenuItem.component";
import "./Menu.style.scss";
const Menu = () => {
  return (
    <section className="tabs">
      <MenuItem name="Address" />
      <MenuItem name="Subscribe" />
    </section>
  );
};

export default Menu;
