import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const SendParcel = () => {
  const {
    register,
    control,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();
  const warehouses = useLoaderData();
  const regionsDuplicate = warehouses.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtsByRegion = (region) => {
    const regionDistrict = warehouses.filter((c) => c.region === region);
    const districts = regionDistrict.map((d) => d.district);
    return districts;
  };
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Agree With The Cost",
      text: `You will be charged ${cost} taka !`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "I Agree!",
    }).then((result) => {
      if (result.isConfirmed)
        // save the parcel info to the data base
        axiosSecure.post("/parcels", data).then((res) => {
          if (res.data.insertedId) {
            navigate("/dashboard/my-parcels");
            Swal.fire({
              position: "top-middle",
              icon: "success",
              title: "Parcel has created please pay",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
    });
  };

  return (
    <div className="mt-10">
      <h2 className="text-4xl font-bold ml-3">Send Parcel</h2>
      <form
        onSubmit={handleSubmit(handleSendParcel)}
        className="mt-12 p-4 text-black"
      >
        {/* Document paecel type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>

        {/* parcel info : name, weight */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (kg)</label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Sender Details */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* Sender Name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              defaultValue={user?.displayName}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* Sender Email */}
            <label className="label mt-4">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              defaultValue={user?.email}
              placeholder="Sender Email"
            />
            {/* Sender Region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Region</legend>
              <select
                {...register("senderRegion")}
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
            {/* Sender District */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* Sender Address */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            {/* Sender Phone Number */}
            <label className="label mt-4">Sender Phone No</label>
            <input
              type="number"
              {...register("senderPhoneNo")}
              className="input w-full"
              placeholder="Sender Phone No"
            />

            {/* Pickup Instruction */}
            <label className="label mt-4">Pickup Instruction</label>
            <input
              type="text"
              {...register("pickupInstruction")}
              className="textarea w-full"
              placeholder="Pickup Instruction"
            />
          </fieldset>

          {/* Receiver Details */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Receiver Details</h4>
            {/* Receiver Name */}
            <label className="label">Receiver Name</label>
            <input
              type="text"
              {...register("receiverName")}
              className="input w-full"
              placeholder="Receiver Name"
            />
            {/* Receiver Email */}
            <label className="label mt-4">Receiver Email</label>
            <input
              type="email"
              {...register("receiverEmail")}
              className="input w-full"
              placeholder="Receiver Email"
            />

            {/* Receiver Region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver Region</legend>
              <select
                {...register("receiverRegion")}
                defaultValue="Pick a Region"
                className="select w-full"
              >
                <option disabled={true}>Pick a Region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* Receiver District */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Receiver District</legend>
              <select
                {...register("receiverDistrict")}
                defaultValue="Pick a District"
                className="select w-full"
              >
                <option disabled={true}>Pick a District</option>
                {districtsByRegion(receiverRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Receiver Address */}
            <label className="label mt-4">Receiver Address</label>
            <input
              type="text"
              {...register("receiverAddress")}
              className="input w-full"
              placeholder="Receiver Address"
            />
            {/* Receiver Phone Number */}
            <label className="label mt-4">Receiver Phone No</label>
            <input
              type="number"
              {...register("receiverPhoneNo")}
              className="input w-full"
              placeholder="Receiver Phone No"
            />

            {/* Delivery Instruction */}
            <label className="label mt-4">Delivery Instruction</label>
            <input
              type="text"
              {...register("deliveryInstruction")}
              className="textarea w-full"
              placeholder="Delivery Instruction"
            />
          </fieldset>
        </div>
        <input
          type="submit"
          value="Send Parcel"
          className="btn mt-8 bg-[#c9eb65] text-black"
        />
      </form>
    </div>
  );
};

export default SendParcel;
