'use client'
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

function NavBar() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Membagi pathname menjadi array berdasarkan karakter /
  const pathnameParts = pathname.split('/');

  // Mengambil elemen kedua (indeks 1) dan seterusnya
  const desiredPathnameParts = pathnameParts.slice(2);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const router = useRouter()
  const handleLogout = () => {
    // Logika logout di sini
    router.push('/')
  };

  return (
    <nav className='h-24 right-0 flex flex-col relative'>
      <ul>
        <li className='flex items-center justify-between mt-2'>
          <div className='ml-5 flex items-center'>
            <Image src={'/images/camDash.png'} width={25} height={25} alt={'image'}></Image>
            <p className='ml-3 text-lg font-medium text-[#212121]'>
            {desiredPathnameParts.join('/')}
            </p>
          </div>
          <div className='flex items-center relative'>
            <button
              onClick={handleToggleDropdown}
              className='flex items-center focus:outline-none'
            >
              <Image
                src={'/images/person512.png'}
                width={36}
                height={36}
                className='bg-[#D9D9D9] rounded-full mr-2 px-1 py-1'
                alt={''}
              />
              <p className='text-sm font-semibold mr-10'>Iin Mulyani</p>
            </button>

            {isDropdownOpen && (
              <div className='absolute top-10 right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg'>
                <div className='py-1'>
                  <button
                    className='block w-full bg-transparent text-left px-4 py-2 text-sm text-[red] font-bold hover:bg-gray-100'
                    onClick={handleLogout}
                  >
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

function setIsDropdownOpen(arg0: boolean) {
  throw new Error('Function not implemented.');
}
