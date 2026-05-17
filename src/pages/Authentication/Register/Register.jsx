import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SocilaLogin from "../SocilaLogin/SocilaLogin";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
    const profileImg = data.photo[0];
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        // Store the image in form data
        const formData = new FormData();
        formData.append("image", profileImg);

        // send the photo to the store and get the ui
        const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
        axios.post(image_API_URL, formData).then((res) => {
          // Create a user in the database
          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          axiosSecure.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("user create in the database");
            }
          });
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.url,
          };
          updateUserProfile(userProfile)
            .then(() => {
              console.log("update profile done");
              navigate(location.state || "/");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Create An Account!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* Name field */}
            <label className="label">Name</label>
            <input
              type="name"
              {...register("name", { required: true })}
              className="input"
              placeholder="Your Name"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Name is Required</p>
            )}
            {/* Photo field */}
            <label className="label">Photo</label>
            <input
              type="file"
              {...register("photo", { required: true })}
              className="file-input"
              placeholder="Your Photo"
            />
            {errors.photo?.type === "required" && (
              <p className="text-red-600">Photo is Required</p>
            )}
            {/* Email Field */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-600">Email is Required</p>
            )}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is Required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Password must be 6 characters or longer
              </p>
            )}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-[#c9eb65] text-black mt-4">Login</button>
          </fieldset>
          <p>
            <small>
              Already have an account
              <Link state={location.state} to="/login" className="btn btn-link">
                Login
              </Link>
            </small>
          </p>
        </form>
        <SocilaLogin />
      </div>
    </div>
  );
};

export default Register;
