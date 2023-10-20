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
          <div className='flex items-center'>
            <Image
              src={'/images/person512.png'}
              width={36}
              height={36}
              className='bg-[#D9D9D9] rounded-full mr-2 px-1 py-1'
              alt={''}>
            </Image>
            <p className='text-sm font-semibold mr-10'>Yayu Rahayu S.Pd.</p>
          </div>
        </li>
        <li className='border-b-2 mt-2'></li>
      </ul>
    </nav>
  );
}

export default NavBar;
