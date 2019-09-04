import { combineReducers } from "redux";
import User from "./user/user.reducer";
import currentTab from "./cardTab/cardTab.reducer";
import modalOpen from "./modal/modal.reducer";
export default combineReducers({
  user: User,
  currentTab,
  modalOpen
});
