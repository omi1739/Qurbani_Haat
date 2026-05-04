'use client';

import Link from "next/link";
import { useForm } from "react-hook-form";


const SignUpPage = () => {


const {register, handleSubmit, formState: {errors}} = useForm()

    const handleSignUp = (data) =>{
        console.log(data,"data");
        const {email,name,photo,password} = data;
        
    }


  return (
    <div className="container mx-auto mt-10 mb-10 min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl  bg-white ">
        <h1 className="font-bold text-3xl text-center mb-5">Register a new Account</h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)} >
          <fieldset className="fieldset">

            <legend className="fieldset-legend">Name</legend>
            <input type="text" {...register("name", {required:'name is required'})} className="input" placeholder="Enter your name" />
          {errors.name && <p className="text-red-400 font-medium">{errors.name.message}</p>}
          </fieldset>

          <fieldset className="fieldset">

            <legend className="fieldset-legend">Photo URL</legend>
            <input type="text" {...register("photo", {required:'photo URL is required'})} className="input" placeholder="Enter your photo URL   " />
          {errors.photo && <p className="text-red-400 font-medium">{errors.photo.message}</p>}
          </fieldset>

          <fieldset className="fieldset">

            <legend className="fieldset-legend">Email</legend>
            <input type="email" {...register("email", {required:'email is required'})} className="input" placeholder="Enter your email" />
          {errors.email && <p className="text-red-400 font-medium">{errors.email.message}</p>}
          </fieldset>

          <fieldset className="fieldset">

            <legend className="fieldset-legend">Password</legend>
            <input type="password" {...register("password" ,{required:'password is required'})} className="input" placeholder="Enter your password" />
          {errors.password && <p className="text-red-400 font-medium">{errors.password.message}</p>}
          </fieldset>

            <button className="btn btn-neutral w-full">Sign-Up</button>

        </form>

        <p className="text-center mt-4">Already have an account? <Link href={'/signIn'} className="text-red-400">Sign In</Link> </p>

      </div>
    </div>
  );
};

export default SignUpPage;
