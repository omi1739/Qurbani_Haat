'use client';

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import google from "@/assets/google.jpg"
import github from "@/assets/github.png"
import { authClient } from "@/lib/auth-client";
import Toast from "@/components/Toast";

const SignInPage = () => {
  const [toast, setToast] = useState(null);

  const handleGoogleSignin = async()=>{
     const data = await authClient.signIn.social({
    provider: "google",
  });
  }
  const handleGitHubSignin = async()=>{
     const data = await authClient.signIn.social({
    provider: "github",
  });
  }


const {register, handleSubmit, formState: {errors}} = useForm()

    const handleSignIn = (data) =>{
        console.log(data,"data");
        setToast({
          message: "✓ Login successful!",
          type: "success",
        });
    }


  return (
    <div className="container mx-auto mt-10 mb-10 min-h-[80vh] flex justify-center items-center bg-slate-100">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={3000}
          onClose={() => setToast(null)}
        />
      )}
      <div className="p-4 rounded-xl  bg-white ">
        <h1 className="font-bold text-3xl text-center mb-5">Login Your Account</h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)} >
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

            <button className="btn btn-neutral w-full">Login</button>

        </form>

        <p className="text-center mt-4">Don't have an account? <Link href={'/signUp'} className="text-red-400">Signup</Link> </p>

      <div className="">
        <button className="btn w-full mt-3" onClick={handleGoogleSignin}>
       <Image src={google} alt="google icon" width={30} height={30} ></Image>  Login With Google
       </button>
      </div>
      <div className="">
        <button className="btn w-full mt-3" onClick={handleGitHubSignin}>
       <Image src={github} alt="google icon" width={30} height={30} ></Image>  Login With Github
       </button>
      </div>

      </div>
    </div>
  );
};

export default SignInPage;
