import { CHANGE_ADDRESS } from "./user.types";

const initialState = {
  name: "Diego Morata",
  email: "diego.morata@gmail.com",
  birthDate: "25.10.1985",
  address: "3309 Franecki Dam Apt. 701",
  location: "London - United Kingdom",
  description: "Just a crazy guy",
  family: [
    {
      id: 1,
      name: "Alvora Morata",
      email: "alvora.morata@gmail.com",
      birthDate: "22.08.1980"
    }
  ],
  note: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        sagittis sit amet sem eget gravida. Duis tellus est, pharetra ac
        bibendum eu, consequat sed dolor. Duis mollis, augue a dignissim congue,
        mi felis interdum sapien, nec pellentesque eros erat sed diam. Sed
        pharetra lobortis interdum.`
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ADDRESS: {
      const { address, location } = action.payload;
      return { ...state, address, location };
    }

    default:
      return state;
  }
};
