import React from "react";
import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div className="text-center">
      <h2>Payment Cancelled Please try again</h2>
      <Link to="/dashboard/my-parcels">
        <button className="btn bg-[#c9eb65] text-black">Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
