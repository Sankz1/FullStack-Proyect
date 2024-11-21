import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function registerPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signIn, isAuthenticated, errors: registerErrors } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/task");
  }, [isAuthenticated]);
  const onSubmit = handleSubmit(async (values) => {
    signIn(values);
  });
  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => (
        <div className="bg-red-600 p-2 text-amber-50" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="First name"
        />
        {errors.name && <p className="text-red-500">Name is required</p>}
        <input
          type="text"
          {...register("lastname", { required: true })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Last name"
        />
        {errors.name && <p className="text-red-500">Lastname is required</p>}

        <input
          type="email"
          {...register("contactEmail", { required: true })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Email"
        />
        {errors.name && <p className="text-red-500">Email is required</p>}

        <input
          type="text"
          {...register("username", { required: true, min: 4 })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Username"
        />
        {errors.name && <p className="text-red-500">Username is required</p>}

        <input
          type="password"
          {...register("password", { required: true, min: 6 })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Password"
        />
        {errors.name && <p className="text-red-500">Password is required</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default registerPage;
