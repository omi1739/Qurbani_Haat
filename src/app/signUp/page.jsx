'use client';

import Link from "next/link";
import { useForm } from "react-hook-form";
import google from "@/assets/google.jpg";
import github from "@/assets/github.png";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {


const {register, handleSubmit, formState: {errors}} = useForm()


 const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGitHubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };


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

            <p className="text-center font-bold text-purple-700">Or</p>

            <div className="">
                      <button className="btn w-full mt-3" onClick={handleGoogleSignin}>
                        <Image
                          src={google}
                          alt="google icon"
                          width={30}
                          height={30}
                        ></Image>{" "}
                        Login With Google
                      </button>
                    </div>
                    <div className="">
                      <button className="btn w-full mt-3" onClick={handleGitHubSignin}>
                        <Image
                          src={github}
                          alt="google icon"
                          width={30}
                          height={30}
                        ></Image>{" "}
                        Login With Github
                      </button>
                    </div>

        </form>

        <p className="text-center mt-4">Already have an account? <Link href={'/signIn'} className="text-red-400">Sign In</Link> </p>

      </div>
    </div>
  );
};

export default SignUpPage;
