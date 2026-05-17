import { Outlet } from "react-router";
import AuthImage from "../assets/authImage.png";
import ProFastLogo from "../pages/shared/ProfastLogo/ProfastLogo.jsx";
const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <ProFastLogo></ProFastLogo>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <img src={AuthImage} className="max-w-sm rounded-lg shadow-2xl" />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
