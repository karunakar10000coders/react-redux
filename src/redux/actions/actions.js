export const getProducts = () => {
  return async (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
      type: "getproducts",
      payload: data,
    });
  };
};

export const getUsers = () => {
  return async (dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();
    dispatch({
      type: "getusers",
      payload: data,
    });
  };
};
