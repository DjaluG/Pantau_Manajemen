'use client'
import { usePathname } from 'next/navigation';

export default function content() {
  const pathname = usePathname();
  const pathnameParts = pathname.split('/');
  const desiredPathnameParts = pathnameParts.slice(1);

    return (
    <p>        
        ini halaman {desiredPathnameParts.join('/')}
    </p>
  )
}
