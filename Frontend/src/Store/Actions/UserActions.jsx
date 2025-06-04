import axios from "../../Api/AxiosConfig";
import { loadData } from "../Reducers/UserSlice";

export const asyncgetusers = async () => {
  try {
    const res = await axios.get("/Users");
    console.log(res.data);
    loadData(res.data)
  } catch (error) {
    console.log(error);
  }
};