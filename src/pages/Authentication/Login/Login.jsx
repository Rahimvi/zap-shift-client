import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocilaLogin from "../SocilaLogin/SocilaLogin";
function Login() {
  const { signIn, handleForgotPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onForgotClick = () => {
    const email = getValues("email"); // emailRef-er bodole eti use koro

    if (!email) {
      toast.error("Please enter your email first");
      return;
    }

    handleForgotPassword(email)
      .then(() => toast.success("Reset link sent!"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <Toaster />
      <div className="card-body">
        <h1 className="text-5xl font-bold">Please Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              {...register("email")}
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              {...register("password", { required: true, minLength: 6 })}
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                Password Must be 6 characters or longer
              </p>
            )}
            <div>
              <a onClick={onForgotClick} className="link link-hover">
                Forgot password?
              </a>
            </div>
            <button className="btn bg-[#c9eb65] text-black mt-4">Login</button>
          </fieldset>
          <p>
            <small>
              New to this website
              <Link
                state={location.state}
                to="/register"
                className="btn btn-link"
              >
                Register
              </Link>
            </small>
          </p>
        </form>
        <SocilaLogin />
      </div>
    </div>
  );
}

export default Login;
