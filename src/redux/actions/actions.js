import { ACTION_TYPES } from "../actionTypes/actionTypes";

export const increment_type = () => {
  return { type: ACTION_TYPES.increment };
};
export const decrement_type = () => {
  return { type: ACTION_TYPES.decrement };
};
export const reset_type = () => {
  return { type: ACTION_TYPES.reset };
};
