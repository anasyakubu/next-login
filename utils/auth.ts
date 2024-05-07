import { NextApiResponse } from "next";
import { parseCookies } from "nookies";
// import image from "../app/api/users"

export const getUserInfo = async () => {
  try {
    // Get token from cookies
    const cookies = parseCookies();
    const token = cookies.token;
    if (!token) {
      throw new Error("User not authenticated");
    }

    // Fetch user information using the token
    const res = await fetch("/api/users/login", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user information");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    // Clear token from cookies
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Optional: Perform additional cleanup or logout logic on the server-side
    // For example, invalidate the token in the backend
  } catch (error) {
    throw error;
  }
};
