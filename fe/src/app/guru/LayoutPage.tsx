import SideBar from './layouts/SideBar';
import NavBar from './layouts/NavBar';

function LayoutPage({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className='max-h-screen'>
      <SideBar />
        <div className='lg:ml-72'>
        <NavBar />
        <div className='ml-2'>
          <main className='absolute w-[77%] max-xl:mt-[5%] xl:mt-[3%]'>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default LayoutPage;