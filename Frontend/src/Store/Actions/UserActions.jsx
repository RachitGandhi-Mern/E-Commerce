import axios from "../../Api/AxiosConfig";
import { loaduser } from "../Reducers/UserSlice";

export const asyncgetusers =  ()=> async (dispatch , getState) => {
  try {
    console.log("Current State >>>>", getState());
    const res = await axios.get("/Users");
    // console.log(res.data);
    dispatch(loaduser(res.data))
  } catch (error) {
    console.log(error);
  }
};