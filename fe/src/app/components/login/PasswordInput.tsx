'use client'
import React, { useState } from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';

export default function PasswordIcon() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
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
    </>
  );
}
