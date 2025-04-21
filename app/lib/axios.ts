import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json", //axiosではdefaultなため不要だが、明示するため記載
    Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});
