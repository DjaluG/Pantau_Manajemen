import SideBar from './layouts/SideBar';
import NavBar from './layouts/NavBar';

function LayoutKs({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='flex max-h-screen'>
      <SideBar />
        <div className='w-5/6'>
        <NavBar />
        <div className='ml-2'>
          <main >{children}</main>
        </div>
      </div>
    </div>
  );
}

export default LayoutKs;