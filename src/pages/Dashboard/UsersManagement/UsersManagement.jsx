import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const UsersManagement = () => {
  const axiosSecure = useAxiosSecure();
  const [searchText, setSearchText] = useState("");

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", searchText],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users?searchText=${searchText}`);
      return res.data;
    },
  });

  // Make a Admin

  const handleMakeAdmin = (user) => {
    const roleInfo = { role: "admin" };
    Swal.fire({
      title: "Are you sure?",
      text: `You want to make ${user.displayName} an Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make Admin!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            // refresh the data
            refetch();
            Swal.fire({
              position: "top-middle",
              title: `${user.displayName} is now an Admin!`,
              icon: "success",
              timer: 2000,
            });
          }
        });
    });
  };

  // Remove Admin
  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };
    Swal.fire({
      title: "Are you sure?",
      text: `You want to ${user.displayName} remove from Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove Admin!",
    }).then((result) => {
      if (result.isConfirmed)
        axiosSecure.patch(`/users/${user._id}/role`, roleInfo).then((res) => {
          if (res.data.modifiedCount) {
            // refresh the data
            refetch();
            Swal.fire({
              position: "top-middle",
              title: `${user.displayName} Removed from Admin!`,
              icon: "success",
              timer: 2000,
            });
          }
        });
    });
  };

  return (
    <div>
      <h2 className="text-4xl text-center">Manage Users:{users.length}</h2>
      <div className="text-center mt-4 mb-4">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="search"
            className="grow"
            placeholder="Search Users"
          />
        </label>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black bg-[#c9eb65]">
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>

              <th>Admin Action</th>
              <th>Others Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => handleRemoveAdmin(user)}
                      className="btn bg-red-500 hover:bg-[#c9eb65]"
                    >
                      <FiShieldOff />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-500 hover:bg-[#c9eb65]"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <th>Action</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersManagement;
