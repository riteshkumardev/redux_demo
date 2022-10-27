import {
  ADDITEM,
  CANCEL,
  CHANGEPATH,
  DELETEITEM,
  EDITITEM,
  UPDATE,
} from "./type";

export const addItem = (payload) => {
  return {
    type: ADDITEM,
    payload,
  };
};

export const deleteItem = (payload) => {
  return {
    type: DELETEITEM,
    payload,
  };
};
export const editItem = (payload) => {
  return {
    type: EDITITEM,
    payload,
  };
};
export const changePath = (payload) => {
  return {
    type: CHANGEPATH,
    payload,
  };
};
export const cancel = (payload) => {
  return {
    type: CANCEL,
    payload,
  };
};
export const update = (payload) => {
  return {
    type: UPDATE,
    payload,
  };
};
