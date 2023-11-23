'use client'

import Image from "next/image";
import React, { useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter()
    const handleClick = () => {
        router.push('/guru/dashboard')
  }
  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex h-screen" style={{ backgroundColor: "#002C62" }}>
        <div className="mt-9 ml-12 w-1/2">
          <div className="flex">
            <Image
              src={"/images/cam-new.png"}
              alt={"cam"}
              width={80}
              height={80}
              className="ml-6 h-[100%]"
            ></Image>
            <div className="border-b-[3px] border-[#FFEB38]">
              <h3 className="pantau text-5xl mt-2 pb-2 font-black text-white shadow-2xl">
                Pantau
              </h3>
            </div>
          </div>
          <Image
            src={"/images/login.png"}
            alt={"login"}
            width={500}
            height={500}
            className=""
          />
        </div>
        <div className="flex w-1/2 mt-[9.5rem]">
          <div className="bg-white w-[450px] h-[430px] ml-12 rounded-[2rem]">
            <h2 className="text-center text-3xl font-bold text-[#001E42] mt-9">
              Sign In
            </h2>
            <h4 className="text-center text-lg font-bold text-[#001E42] mt-5">
              Hey, enter your details to get sign in
            </h4>
            <div className="px-10">
              <p className="text-xl font-bold text-[#001E42] mt-8 ml-2 mb-1">
                Email
              </p>
              <div className="flex justify-center">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email here"
                  className="mt-1 px-3 py-2 pr-6 w-full bg-white border-[1px] border-[#005555] placeholder-slate-400 focus:outline-none placeholder:font-bold block rounded-md sm:text-sm outline-none"
                />
              </div>
              <p className="text-xl font-bold text-[#001E42] ml-2 mt-3 mb-1">
                Password
              </p>
              <div className="flex items-center justify-center relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                name="Password"
                placeholder='Password'
                className='mt-1 px-3 py-2 pr-6 w-full bg-white outline-none border-b-[1px] border-t-[1px] border-l-[1px] border-[#005555] placeholder-slate-400 placeholder:font-bold focus:outline-none block rounded-l-md sm:text-sm'
              />
              <button
                className="transform right-0 cursor-pointer text-xl text-[#9CA4A4] border-r-[1px] px-[5px] flex justify-center items-center rounded-r-md border-t-[1px] border-b-[1px] py-[8px] translate-y-[2px] border-[#005555]"
                onClick={togglePasswordVisibility}
              >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
              </div>
            </div>
            <div className='flex justify-center mt-7'>
              <div className='w-[80%] rounded-lg'>
                <button type='submit' onClick={handleClick} className='btn text-[#10316B] bg-[#FFEB38] w-full font-bold text-lg py-1 hover:bg-[#e0ca05] hover:text-[white]'>Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
