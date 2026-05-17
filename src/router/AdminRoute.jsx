import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Forbidden from "../pages/Components/Forbidden";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();

  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return (
      <div className="text-center mt-20 mb-10">
        <span className="loading loading-infinity loading-xl w-24 bg-[#c9eb65]"></span>
      </div>
    );
  }
  if (role !== "admin") {
    return <Forbidden />;
  }
  return children;
};

export default AdminRoute;
