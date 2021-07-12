import { GET_USERS, GET_INFO, USERS_ERROR } from "../types";
import axios from "axios";

export const getUsers = (e) => async dispatch => {
  try {
    const res = await axios.get('https://thronesapi.com/api/v1/Characters');

    dispatch({
      type: GET_USERS,
      payload: res.data,
      isClicked: e
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};

