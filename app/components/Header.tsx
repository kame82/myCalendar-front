"use client";
import React, { useEffect } from "react";
import { useAuth } from "../providers/auth";
import { useRouter } from "next/navigation";
import { axiosInstance } from "../lib/axios";

export const Header = () => {
  const { setToken, currentUser, token, logout, setCurrentUser } = useAuth();
  const navigate = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      setToken(token);
      localStorage.setItem("auth", token);
    }
  }, [setToken, navigate]);

  const handleGoogleAuth = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.createElement("form");
    form.method = "GET";
    form.action = `${process.env.NEXT_PUBLIC_API_URL}/auth/google_oauth2`;
    document.body.appendChild(form);
    form.submit();
  };

  const handleClickLogout = () => {
    logout();
    console.log("logout");
    navigate.push("/");
  };

  const resReadCalendar = async () => {
    try {
      const res = await axiosInstance.get("/google_calendars");
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900" onClick={resReadCalendar}>
            カレンダー情報取得
          </a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Button
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>

        {currentUser ? (
          <div>
            <p>{currentUser.name}</p>
            <button onClick={handleClickLogout}>ログアウト</button>
          </div>
        ) : (
          <button onClick={handleGoogleAuth} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign in with Google
          </button>
        )}
      </div>
    </header>
  );
};
