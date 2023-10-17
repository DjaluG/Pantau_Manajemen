import Link from "next/link";
import Image from 'next/image';

function SideBar() {
    return (
        <aside className="flex flex-col w-1/6 h-[100vh] shadow-2xl">
            <ul className="items-center">
                <li className="pl-2">
                    <Link href='/dashboard' legacyBehavior>
                        <Image
                            src={'/images/wikrama-logo.png'}
                            alt={'cam'}
                            width={80}
                            height={80}
                            className='ml-6 text-[]'>
                        </Image>
                    </Link>
                </li>
                <li className="ml-3 mt-2">
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li className="ml-3 mt-2">
                    <Link href='/task'>Task</Link>
                </li>
                <li className="ml-3 mt-2">
                    <Link href='/program'>Program</Link>
                </li>
            </ul>
        </aside>
    );
}
export default SideBar;