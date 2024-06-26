"use client";
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { IoIosLogOut } from "react-icons/io";

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function NavBar({ handleToggle, isOpen }) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Mendapatkan path terakhir dan memformatnya
  const lastPathname = pathname
    .split('/')
    .pop()
    .replace(/-/g, ' ')
    .split(' ')
    .map(word => capitalizeFirstLetter(word))
    .join(' ');

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter();
  const handleLogout = () => {
    router.push('/');
  };

  return (
    <nav className={`bg-transparent fixed top-0 w-full pr-[20px] transition-all duration-500 ${
      isOpen ? 'pl-[290px]' : 'pl-[110px]'
    }`}>
      <ul>
        <li className='flex items-center justify-between mt-2'>
          <button className='flex items-left' onClick={handleToggle}>
            <Image src={'/images/camDash.png'} width={25} height={25} alt={'image'} />
            <p className='ml-3 text-lg font-medium text-[#212121]'>
              {lastPathname}
            </p>
          </button>
          <div className='flex items-center relative'>
            <button
              onClick={handleToggleDropdown}
              className='flex gap-[7px] items-center focus:outline-none'
            >
              <Image
                src={'/images/person512.png'}
                width={36}
                height={36}
                className='bg-[#D9D9D9] rounded-full px-1 py-1'
                alt={''}
              />
              <p className='text-sm font-semibold'>Yayu Rahayu, S.Pd.</p>
            </button>

            {isDropdownOpen && (
              <div className='absolute top-10 right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg'>
                <div className='py-1'>
                  <button
                    className='block w-full flex items-center  flex-row gap-2 bg-transparent text-left px-4 py-2 text-sm font-bold hover:bg-gray-100'
                    onClick={handleLogout}
                  >
                    <IoIosLogOut className='text-lg' />

                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </li>
        <li className='border-b-2 mt-2'></li>
      </ul>
    </nav>
  );
}

export default NavBar;
