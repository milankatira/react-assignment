import * as Types from "../constant/Constant";

export const Loading = (state, action) => {
  switch (action.type) {
    case Types.LOADING:
      return {
        loading: true,
      };
  }
};
