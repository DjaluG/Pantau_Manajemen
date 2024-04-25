"use client";

import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3001/api/v1/auth/login', {
        username,
        password,
      });
  
      // Lakukan sesuatu dengan respons, seperti menyimpan token atau mengarahkan ke halaman lain
      console.log('Login successful', response.data);
  
      // Contoh penggunaan router untuk mengarahkan ke halaman lain setelah login
      router.push('/guru/dashboard'); // Ganti dengan halaman yang sesuai
    } catch (error) {
      console.error('Login failed', error);
      // Handle kesalahan login, misalnya menampilkan pesan kesalahan
    }
  };
  
  

  const handleChange = (e:any) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex max-xs:flex-col md:flex-col lg:flex-row h-screen bg-[#002C62] fixed w-full ">
        <div className=" flex lg:flex-col lg:h-full ml-[4.8%] max-xs:mt-[4%] md:mt-[4%] md:mb-[1%] xl:mt-[3.6%] lg:w-1/2">
          <div className="flex top-0">
            <Image
              src={"/images/cam-new.png"}
              alt={"cam"}
              width={80}
              height={80}
              className="ml-6 w-[30%] lg:w-[11%]"
            ></Image>
            <div className="border-b-[3px] lg:w-[130px] xl:w-[170px] border-[#FFEB38]">
              <h3 className="max-xs:text-4xl md:text-4xl lg:text-4xl xl:text-5xl mt-[0.8%] pb-[0.8] font-black text-white shadow-2xl">
                Pantau
              </h3>
            </div>
          </div>
          <div className="lg:flex lg:h-full max-xs:hidden md:hidden">
            <Image
              src={"/images/login.png"}
              alt={"login"}
              width={500}
              height={500}
              className="xl:w-[90%] xl:h-[80%] lg:w-[87%] lg:h-[78%]"
            />
          </div>
        </div>
        <div className="flex lg:w-1/2 justify-center max-xs:w-screen w-full items-center h-full">
          <div className="flex flex-col lg:w-[73%] xl:w-[65%] bg-white max-z:px-[15px] max-z:py-[30px] max-xs:px-[25px] max-xs:py-[30px] md:px-[50px] md:py-[30px] lg:px-[3%] lg:py-[5%] xl:py-[7%] max-xs:rounded-[20px] md:rounded-[3%] xl:rounded-[8%]">
            <h2 className="text-center max-z:text-2xl max-xs:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold text-[#001E42]">
              Welcome!
            </h2>
            <h4 className="text-center max-z:text-xs max-xs:text-base md:text-lg lg:text-base xl:text-lg font-bold text-[#5d646d] lg:mt-2 xl:mt-3">
              Sign in to your account
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="lg:px-6 xl:px-8">
                <p className="text-lg max-z:text-base lg:text-base xl:text-lg font-bold text-[#001E42] mt-5 lg:mt-4 xl:mt-8 ml-2 mb-1">
                  Username
                </p>
                <div className="flex justify-center">
                  <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username here"
                    className="mt-[2px] lg:mt-1 py-[8px] lg:py-2 px-2 max-z:w-[250px] max-xs:w-[320px] md:w-[450px] lg:w-[100%] bg-white border-[1px] border-[#005555] placeholder-slate-400 focus:outline-none placeholder:font-bold block rounded-md max-z:text-xs max-xs:text-sm md:text-sm lg:text-xs xl:text-sm outline-none"
                  />
                </div>
                <p className="text-lg max-z:text-base lg:text-base xl:text-lg font-bold text-[#001E42] ml-2 max-xs:mt-[10px] md:mt-5 lg:mt-2 xl:mt-3 mb-1">
                  Password
                </p>
                <div className="flex justify-center relative w-[100%]">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="mt-[2px] lg:mt-[2.5px] xl:mt-1 px-2 lg:px-3 py-[7.5px] lg:py-[6px] xl:py-2 pr-6 w-full bg-white outline-none border-b-[1px] border-t-[1px] border-l-[1px] border-[#005555] placeholder-slate-400 placeholder:font-bold focus:outline-none block rounded-l-md max-z:text-xs max-xs:text-sm md:text-sm lg:text-xs xl:text-sm"
                  />
                  <button
                    className="mt-[2px] lg:mt-[2.5px] xl:mt-1 px-[5px] py-[7.5px] lg:py-[6px] xl:py-2 pr-2 transform right-0 cursor-pointer text-lg lg:text-xl text-[#9CA4A4] border-r-[1px] flex justify-center items-center rounded-r-md border-t-[1px] border-b-[1px] border-[#005555] outline-none"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-6 lg:mt-9 xl:mt-12 w-full">
                <button
                  type="submit"
                  className="btn text-[#10316B] bg-[#FFEB38] max-z:mb-[8%] max-xs:mb-[8%] md:mb-1 mt-3 w-[90%] lg:h-[35px] xl:h-[40px] font-bold text-lg lg:text-base xl:text-lg xl:py-1 hover:bg-[#e0ca05] hover:text-[white]"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
