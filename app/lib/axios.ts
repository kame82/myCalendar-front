import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json", // 明示的に記載
  },
});

// リクエストインターセプターで Authorization ヘッダーを動的に設定
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
  }
  return config;
});
