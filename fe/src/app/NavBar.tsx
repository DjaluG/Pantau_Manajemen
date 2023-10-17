'use client'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

function NavBar() {
  const pathname = usePathname();

  // Membagi pathname menjadi array berdasarkan karakter /
  const pathnameParts = pathname.split('/');

  // Mengambil elemen kedua (indeks 1) dan seterusnya
  const desiredPathnameParts = pathnameParts.slice(1);

  return (
    <nav className='h-24 right-0 flex flex-col'>
      <ul>
        <li className='flex items-center justify-between mt-2'>
          <div className='ml-5 flex items-center'>
            <Image src={'/images/camDash.png'} width={64} height={64} alt={'image'}></Image>
            <p className='ml-3 text-xl font-bold text-[#212121]'>
            {desiredPathnameParts.join('/')}
            </p>
          </div>
          <Image
            src={'/images/person512.png'}
            width={40}
            height={40}
            className='bg-[#D9D9D9] rounded-full mr-10'
            alt={''}>
          </Image>
        </li>
        <li className='border-b-2 mt-2'></li>
      </ul>
    </nav>
  );
}

export default NavBar;
