import { GET_RANDOM_USER, USERS_ERROR } from "../types";
import axios from "axios";

export const getRandomUser = () => async dispatch => {
  try {
    const res = await axios.get('https://thronesapi.com/api/v1/Characters');
    const res1 = res.data[Math.floor(Math.random()*res.data.length)];
    dispatch({
      type: GET_RANDOM_USER,
      payload: res1
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e)
    });
  }
};
