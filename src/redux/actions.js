import { types } from "./types";

export function getUsersAction(users) {
  return {
    type: types.USERS,
    payload: users,
  };
}

export function getSingleUserAction(user) {
  return {
    type: types.SINGLE_USER,
    payload: user,
  };
}

export function fetchUserAction() {
  return async function (dispatch) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    dispatch(getUsersAction(data));
  };
}

export function fetchUserOneInfo(id) {
  return async function (dispatch) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await response.json();
    dispatch(getSingleUserAction(data))
  };
}