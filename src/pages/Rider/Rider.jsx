import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import riderImg from "../../assets/agent-pending.png";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Rider = () => {
  const {
    register,
    control,
    // formState: { errors },
    handleSubmit,
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // const navigate = useNavigate();
  const warehouses = useLoaderData();
  const regionsDuplicate = warehouses.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const districtsByRegion = (region) => {
    const regionDistrict = warehouses.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };

  const riderRegion = useWatch({ control, name: "region" });

  const handleRiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-middle",
          icon: "success",
          title:
            "Your application has been submited, We will reach to you in 2 days",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="mt-8">
      <h2 className="text-4xl  text-[#c9eb65] font-bold">Be A Rider</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Rider Form */}
        <div>
          <form
            onSubmit={handleSubmit(handleRiderApplication)}
            className="mt-12 p-4 text-black"
          >
            {/* Two Column */}
            <div className="">
              {/* Rider Details */}

              <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">Rider Details</h4>
                {/* Sender Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name")}
                  defaultValue={user?.displayName}
                  className="input w-full"
                  placeholder="Name"
                />
                {/* Email */}
                <label className="label mt-4">Email</label>
                <input
                  type="email"
                  {...register("email")}
                  className="input w-full"
                  defaultValue={user?.email}
                  placeholder="Email"
                />
                {/* Region */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Region</legend>
                  <select
                    {...register("region")}
                    defaultValue="Pick a region"
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a region</option>
                    {regions.map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/* District */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">District</legend>
                  <select
                    {...register("district")}
                    defaultValue="Pick a District"
                    className="select w-full"
                  >
                    <option disabled={true}>Pick a District</option>
                    {districtsByRegion(riderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/* Address */}
                <label className="label mt-4">Address</label>
                <input
                  type="text"
                  {...register("address")}
                  className="input w-full"
                  placeholder="Address"
                />
                {/* Phone Number */}
                <label className="label mt-4">Phone No</label>
                <input
                  type="number"
                  {...register("phoneNo")}
                  className="input w-full"
                  placeholder="Sender Phone No"
                />
              </fieldset>

              {/* more Details */}

              <fieldset className="fieldset">
                <h4 className="text-2xl font-semibold">More Details</h4>
                {/* Receiver Name */}
                <label className="label">Driving License</label>
                <input
                  type="text"
                  {...register("license")}
                  className="input w-full"
                  placeholder="Driving License"
                />
                {/* Receiver Email */}
                <label className="label mt-4">NID</label>
                <input
                  type="number"
                  {...register("nid")}
                  className="input w-full"
                  placeholder="NID"
                />

                <label className="label mt-4">BIKE</label>
                <input
                  type="text"
                  {...register("bike")}
                  className="input w-full"
                  placeholder="BIKE"
                />
              </fieldset>
            </div>
            <input
              type="submit"
              value="Apply as a rider"
              className="btn mt-8 bg-[#c9eb65] text-black"
            />
          </form>
        </div>
        {/* Rider Image */}
        <div className="flex items-center justify-center">
          <img src={riderImg} alt="rider-image" className="max-w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Rider;
