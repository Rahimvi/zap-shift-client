import React from "react";
import useRole from "../../../hooks/useRole";
import AdminDashboardHome from "./AdminDashboardHome";
import RiderDashboardHome from "./RiderDashboardHome";
import UserDashboardHome from "./UserDashboardHome";

const DashboardHome = () => {
  const { role, roleLoading } = useRole();

  if (roleLoading) {
    return (
      <div className="text-center mt-20 mb-10">
        <span className="loading loading-infinity loading-xl w-24 bg-[#c9eb65]"></span>
      </div>
    );
  }
  if (role === "admin") {
    return <AdminDashboardHome />;
  } else if (role === "rider") {
    return <RiderDashboardHome />;
  } else {
    return <UserDashboardHome />;
  }
};

export default DashboardHome;
