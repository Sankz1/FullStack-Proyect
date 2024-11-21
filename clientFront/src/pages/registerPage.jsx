import { useForm } from "react-hook-form";
import { useAuthContext } from "../context/AuthContext.jsx";

function registerPage() {
  const { register, handleSubmit } = useForm();
  const { signIn, User } = useAuthContext();
  console.log(User);
  const onSubmit = handleSubmit(async (values) => {
    signIn(values);
  });
  return (
    <div className="bg-zinc-900 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="First name"
        />
        <input
          type="text"
          {...register("lastname", { required: true })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Last name"
        />
        <input
          type="email"
          {...register("contactEmail", { required: true })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Email"
        />
        <input
          type="text"
          {...register("username", { required: true, min: 4 })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Username"
        />
        <input
          type="password"
          {...register("password", { required: true, min: 6 })}
          className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md my-2.5"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default registerPage;
