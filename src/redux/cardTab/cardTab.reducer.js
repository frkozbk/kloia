import { CHANGE_TAB } from "./cardTab.types";
const initialState = "Address";
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB: {
      return (state = action.payload);
    }
    default:
      return state;
  }
};
