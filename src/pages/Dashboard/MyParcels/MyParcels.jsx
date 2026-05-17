import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
    });
  };

  const handlePayment = async (parcel) => {
    // 1. Data guchhiye neya
    const paymentInfo = {
      cost: parcel.cost,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      parcelName: parcel.parcelName,
      trackingId: parcel.trackingId,
    };

    try {
      // 2. Server e request pathano
      const res = await axiosSecure.post(
        "/payment-checkout-session",
        paymentInfo,
      );

      // 3. Jodi URL pawa jay, tobe redirect koro
      if (res.data?.url) {
        window.location.replace(res.data.url);
      } else {
        console.error("URL not found in response");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Payment Request Failed:", error);
      alert("Server error! Please check your connection.");
    }
  };

  return (
    <div>
      <h2>All of my parcels {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Paymaent</th>
              <th>Tracking Id</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost} $</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-500 font-bold">Paid</span>
                  ) : (
                    <button
                      onClick={() => handlePayment(parcel)}
                      className="btn btn-sm text-black bg-[#c9eb65]"
                    >
                      Pay
                    </button>
                  )}
                </td>
                <td>
                  <Link to={`/parcel-track/${parcel.trackingId}`}>
                    {parcel.trackingId}
                  </Link>
                </td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <button className="btn btn-square hover:bg-[#c9eb65]">
                    <TbListDetails />
                  </button>
                  <button className="btn btn-square mx-2 hover:bg-[#c9eb65]">
                    <FiEdit />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-[#c9eb65]"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
