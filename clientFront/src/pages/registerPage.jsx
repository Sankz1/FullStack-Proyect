import {useForm} from "react-hook-form";

function registerPage() {
    const {register,handleSubmit} = useForm();
    return(
        <div className="bg-zinc-900 max-w-md p-10 rounded-md">
            <form onSubmit={handleSubmit(values => {

            })}>
                <input type="text"{...register("Firstname",{required: true})}
                className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md"
                       placeholder="First name"
                />
                <input type="text" {...register("Lastname",{required: true})}
                       className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md"
                       placeholder="Last name"
                />
                <input type="email" {...register("Email",{required: true})}
                className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md"
                placeholder="Email"
                />
                <input type="text" {...register("Username",{required: true , min: 4})}
                       className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md"
                       placeholder="Username"
                />
                <input type="password"  {...register("Password",{required: true , min: 6})}
                       className="w-full bg-zinc-700 text-amber-50 px-4 py-2 rounded-md"
                       placeholder="Password"
                />
                <button type={"submit"}>
                    Register
                </button>
            </form>


        </div>
    )
}
export default registerPage;

