import { CHANGE_TAB } from "./cardTab.types.js";
export const changeTab = tabName => ({
  type: CHANGE_TAB,
  payload: tabName
});
