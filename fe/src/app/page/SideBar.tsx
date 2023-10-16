import Link from "next/link";
import Image from 'next/image';

function SideBar() {
    return (
        <aside className="flex flex-col w-1/4 h-[100vh] shadow-2xl">
            <ul>
                <li>
                    <Link href='/dashboard'>
                        <Image
                            src={'/images/wikrama-logo.png'}
                            alt={'cam'}
                            width={80}
                            height={80}
                            className='ml-6 text-[]'>
                        </Image>
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link href='/task'>Task</Link>
                </li>
                <li>
                    <Link href='/program'>Program</Link>
                </li>
            </ul>
        </aside>
    )
}
export default SideBar;