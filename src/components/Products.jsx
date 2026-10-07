import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getUsers } from "../redux/actions/actions";

const Products = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  const users = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((value, index) => (
          <div key={index}>
            <h1>{value.title}</h1>
            <p>{value.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Products;
