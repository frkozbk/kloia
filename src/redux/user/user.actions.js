import { CHANGE_ADDRESS } from "./user.types";

export const changeAddress = newAddress => ({
  type: CHANGE_ADDRESS,
  payload: newAddress
});
