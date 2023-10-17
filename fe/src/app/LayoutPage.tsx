import SideBar from './SideBar';
import NavBar from './NavBar';

function LayoutPage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='flex bg-[#F9F9F9]'>
       <SideBar />
        <div className='w-5/6'>
        <NavBar />
        <div className='ml-2'>
          <main className='absolute'>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;