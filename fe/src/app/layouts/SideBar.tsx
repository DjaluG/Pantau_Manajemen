'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SideBar() {
	const router = usePathname();

    // const handleNavigation = (path: string) => {
	// 	router.push(path);
	// 	console.log("asu",router.push(path))
    // };

    return (
        <>
            <aside className="sidebar bg-white h-screen justify-start">
                <section className="sidebar-title flex justify-center items-center p-4">
                    <Image
                        src={'/images/wikrama-logo.png'}
                        alt={'cam'}
                        width={80}
                        height={80}
                    />
                </section>
                <section className="sidebar-content h-fit min-h-[20rem] overflow-visible">
                    <nav className="menu rounded-md">
                        <section className="menu-section px-4">
                            <ul className="menu-items">
								<Link href="/dashboard" className={`menu-item ${router === '/dashboard' ? 'menu-active' : 'bg-transp hover:bg-transparent'} `}>
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  									<path d="M1 10H7C7.55 10 8 9.55 8 9V1C8 0.45 7.55 0 7 0H1C0.45 0 0 0.45 0 1V9C0 9.55 0.45 10 1 10ZM1 18H7C7.55 18 8 17.55 8 17V13C8 12.45 7.55 12 7 12H1C0.45 12 0 12.45 0 13V17C0 17.55 0.45 18 1 18ZM11 18H17C17.55 18 18 17.55 18 17V9C18 8.45 17.55 8 17 8H11C10.45 8 10 8.45 10 9V17C10 17.55 10.45 18 11 18ZM10 1V5C10 5.55 10.45 6 11 6H17C17.55 6 18 5.55 18 5V1C18 0.45 17.55 0 17 0H11C10.45 0 10 0.45 10 1Z" fill="#002C62"/>
								</svg>
                                    <span>Dashboard</span>
                                </Link>

								<Link href="/task" className={`menu-item ${router === '/task' ? 'menu-active' : 'bg-transparent hover:bg-transparent'} `}>
								<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
									<path d="M19.7917 5.20833V14.5833H14.5833V19.7917H5.20833V5.20833H19.7917ZM19.7917 3.125H5.20833C4.0625 3.125 3.125 4.0625 3.125 5.20833V19.7917C3.125 20.9375 4.0625 21.875 5.20833 21.875H15.625L21.875 15.625V5.20833C21.875 4.0625 20.9375 3.125 19.7917 3.125ZM12.5 14.5833H7.29167V12.5H12.5V14.5833ZM17.7083 10.4167H7.29167V8.33333H17.7083V10.4167Z" fill="#002C62"/>
								</svg>
										<span>My Task</span>
                                </Link>

                                <Link href="/program" className={`menu-item  ${router === '/program' ?'menu-active':'bg-transparent hover:bg-transparent'} `}>
									<svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
									<path d="M20.7 0H2.3C1.035 0 0 1.035 0 2.3V14.95C0 16.215 1.035 17.25 2.3 17.25H5.75L4.6 18.4V20.7H18.4V18.4L17.25 17.25H20.7C21.965 17.25 23 16.215 23 14.95V2.3C23 1.035 21.965 0 20.7 0ZM20.7 14.95H2.3V2.3H20.7V14.95Z" fill="#002C62"/>
								</svg>
										<span>My Program</span>
                                </Link>
                            </ul>
                        </section>
                    </nav>
                </section>
            </aside>
        </>
    );
}

export default SideBar;
