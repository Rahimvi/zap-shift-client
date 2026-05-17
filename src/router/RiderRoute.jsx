import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import Forbidden from "../pages/Components/Forbidden";

const RiderRoute = ({ children }) => {
  const { loading, user } = useAuth();

  const { role, roleLoading } = useRole();

  if (loading || !user || roleLoading) {
    return (
      <div className="text-center mt-20 mb-10">
        <span className="loading loading-infinity loading-xl w-24 bg-[#c9eb65]"></span>
      </div>
    );
  }
  if (role !== "rider") {
    return <Forbidden />;
  }
  return children;
};
export default RiderRoute;
