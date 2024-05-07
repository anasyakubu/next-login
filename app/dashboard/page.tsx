"use client";
import { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { getUserInfo, logoutUser } from "../../utils/auth";

const DashboardPage: NextPage = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserInfo();
        setUserInfo(data);
      } catch (error) {
        console.error("Error fetching user information:", error);
        router.push("/login");
      }
    };

    fetchData();

    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logoutUser();
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      {userInfo && (
        <div>
          {/* <p>Welcome, {userInfo.username}!</p>
          <p>Email: {userInfo.email}</p> */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
