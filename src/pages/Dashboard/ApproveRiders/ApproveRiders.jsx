import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaEye, FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { MdOutlinePersonRemove } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedRider, setSelectedRider] = useState(null);
  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  const handleOpenModal = (rider) => {
    setSelectedRider(rider);
    // DaisyUI মডাল ওপেন করার জন্য আইডি ব্যবহার করা হয়
    document.getElementById("rider_details_modal").showModal();
  };

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApprove = (rider) => {
    updateRiderStatus(rider, "approved");
  };
  const handleRejection = (rider) => {
    updateRiderStatus(rider, "rejected");
  };

  // Rider delete

  const hendleDeleteRider = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete Rider!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.delete(`/riders/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            // refresh the data
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Rider has been deleted.",
              icon: "success",
            });
          }
        });
    });
  };

  return (
    <div>
      <h2 className="text-4xl">Rider Approvels: {riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>
                  <p
                    className={`${rider.status === "approved" ? "text-green-800" : "text-red-500"}`}
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.workStatus}</td>
                <td>{rider.district}</td>
                <td>
                  <button
                    onClick={() => handleOpenModal(rider)}
                    className="btn hover:bg-[#c9eb65]"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleApprove(rider)}
                    className="btn hover:bg-[#c9eb65]"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleRejection(rider)}
                    className="btn hover:bg-[#c9eb65]"
                  >
                    <MdOutlinePersonRemove />
                  </button>
                  <button
                    onClick={() => hendleDeleteRider(rider._id)}
                    className="btn hover:bg-[#c9eb65]"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Model Open */}
        <dialog
          id="rider_details_modal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box text-black">
            <h3 className="font-bold text-lg">Rider Information</h3>

            {selectedRider && (
              <div className="py-4 space-y-2">
                <p>
                  <strong>Name:</strong> {selectedRider.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedRider.email}
                </p>
                <p>
                  <strong>Phone:</strong> {selectedRider.phoneNo}
                </p>
                <p>
                  <strong>District:</strong> {selectedRider.district}
                </p>
                <p>
                  <strong>NID:</strong> {selectedRider.nid}
                </p>
                <p>
                  <strong>License:</strong> {selectedRider.license}
                </p>
                <p>
                  <strong>Bike:</strong> {selectedRider.bike}
                </p>
                <div className="mt-4">
                  <img
                    src={selectedRider.photoURL}
                    alt="Rider"
                    className="w-32 h-32 rounded-lg"
                  />
                </div>
              </div>
            )}

            <div className="modal-action">
              <form method="dialog">
                {/* এই বাটনটি মডাল বন্ধ করবে */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ApproveRiders;
