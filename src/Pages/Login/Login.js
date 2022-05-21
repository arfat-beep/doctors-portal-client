import React, { useEffect, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(user || gUser);
  // useState for navigate without showing error
  useEffect(() => {
    // navigate user if user found
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);
  // this is for loadin screen
  if (loading || gLoading) {
    return <Loading />;
  }

  // show error variable declare
  let showError;

  (gError || error) &&
    (showError = (
      <small className="text-red-500">
        {gError?.message || error?.message}
      </small>
    ));
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data?.email, data?.password);
  };
  const handleForget = () => {
    email
      ? sendPasswordResetEmail(email)
      : window.alert("please enter your validate mail");
  };
  const handleBlur = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Please provide your email",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid email",
                  },
                })}
                onBlur={handleBlur}
              />

              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Please provide password",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum length must be 6",
                  },
                })}
              />

              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            <div>{showError}</div>
            <div>
              <input
                className="btn btn-primary w-full text-white"
                value={"Login"}
                type="submit"
              />
            </div>
          </form>
          <p>
            <small>
              Forget password ?
              <Link
                className="text-red-600 cursor-pointer"
                to={""}
                onClick={handleForget}
              >
                click here
              </Link>
            </small>
          </p>
          <p>
            <small>
              New here ?{" "}
              <Link className="text-primary" to={"/signup"}>
                Sign Up
              </Link>
            </small>
          </p>

          <div className="divider">OR</div>
          <button
            className="btn btn-secondary text-white "
            onClick={() => signInWithGoogle()}
          >
            CONTINUE WITH GOOGLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
