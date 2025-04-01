"use client";

import axios from "axios";

const DEFAULT_API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://0.0.0.0:3000/api/v1",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  // xsrfHeaderName: "X-CSRF-Token",
};

const api = axios.create(DEFAULT_API_CONFIG);

// const response = await axios.get("https://jsonplaceholder.typicode.com/users");

export default function Home() {
  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault(); // フォームのデフォルト動作を防ぐ
  //   try {
  //     const response = await api.get("/auth/google_oauth2");
  //     console.log("Response:", response.data);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        main
        {/* {response.data.map((user) => (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        ))} */}
        {/* <form action="http://localhost:3000/auth/google_oauth2" method="post">
          <button type="submit" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign in with Google
          </button>
        </form> */}
        {/* <form onSubmit={handleSubmit}>
          <button type="submit" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign in with Google
          </button>
        </form> */}
      </main>
      ;
    </>
  );
}
