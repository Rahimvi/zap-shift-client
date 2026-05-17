import { ArrowLeft, Home, ShieldAlert } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-12">
      <div className="text-center">
        {/* Animated Icon Section */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-red-100 rounded-full blur-xl scale-150 opacity-50 animate-pulse"></div>
            <div className="relative bg-white p-6 rounded-full shadow-lg border border-red-50">
              <ShieldAlert size={80} className="text-red-500" />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-9xl font-black text-gray-200 mb-4 tracking-widest relative">
          403
          <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-gray-800 tracking-normal mt-8">
            Access Denied
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          You don't have permission!
        </h2>

        <p className="text-gray-500 max-w-md mx-auto mb-10 leading-relaxed">
          Oops! It looks like you've reached a restricted area. The page you are
          trying to access is forbidden for your current role.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all shadow-sm w-full sm:w-auto justify-center"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all shadow-md hover:shadow-lg w-full sm:w-auto justify-center"
          >
            <Home size={18} />
            Back to Home
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-400">
            If you believe this is an error, please contact your administrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
