const initialState = {
  products: [],
  users: [],
};

export const reducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "getproducts": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "getusers": {
      return {
        ...state,
        users: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
