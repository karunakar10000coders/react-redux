import { ACTION_TYPES } from "../actionTypes/actionTypes";

const initialState = {
  count: 0,
};

export const reducer = (state = initialState, action) => {
  //   console.log(sta / te.count);
  switch (action.type) {
    case ACTION_TYPES.increment: {
      return {
        count: state.count + 1,
      };
    }
    case ACTION_TYPES.decrement: {
      return {
        count: state.count - 1,
      };
    }
    case ACTION_TYPES.reset: {
      return {
        count: 0,
      };
    }
    default: {
      return state;
    }
  }
};
