import Link from "next/link";
import Image from 'next/image';

function SideBar() {
    return (
        <aside className="flex flex-col w-1/6 h-[100vh] shadow-2xl">
            <ul className="items-center">
                <li className="pl-10">
                    <Link href='/dashboard' legacyBehavior>
                        <Image
                            src={'/images/wikrama-logo.png'}
                            alt={'cam'}
                            width={80}
                            height={80}
                            className='ml-6'>
                        </Image>
                    </Link>
                </li>
                <div className="mt-8"></div>
                <li className="ml-5 mt-3 border-4 target:bg-[#002C62]">
                    <Link href='/dashboard' className="flex">
                        <Image src={'/images/icon_dashboard.png'} width={20} height={20} alt={""} className="mx-4" />
                        Dashboard
                    </Link>
                </li>
                <li className="ml-5 mt-3 border-4 target:bg-[#002C62]">
                    <Link href='/task' className="flex">
                        <Image src={'/images/icon_sticky-note.png'} width={20} height={20} alt={""} className="mx-4" />
                        Task
                    </Link>
                </li>
                <li className="ml-5 mt-3 border-4 target:bg-[#002C62]">
                    <Link href='/program' className="flex">
                        <Image src={'/images/icon_monitor.png'} width={20} height={20} alt={""} className="mx-4" />
                        Program
                    </Link>
                </li>
            </ul>
        </aside>
    );
}
export default SideBar;