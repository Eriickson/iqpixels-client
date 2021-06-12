import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_SERVER_URL}/api`,
  headers: {
    authorization: `Bearer ${cookies.get("token")}`,
  },
});
