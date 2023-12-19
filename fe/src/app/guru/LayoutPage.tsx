'use client'
import SideBar from './layouts/SideBar';
import NavBar from './layouts/NavBar';
import { useState } from 'react';

function LayoutPage({ children }: React.PropsWithChildren<{}>) {
  
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='max-h-screen h-full max-w-[1440px] w-full'>
      <div className='flex'>
        <SideBar isOpen={isOpen}/>
      <div className='flex flex-col h-full w-full'>
        <NavBar isOpen={isOpen} handleToggle={handleToggle}/>
          <main className={`max-md:px-[20px] pt-[100px] h-full transition-all duration-500 ${
            isOpen?'md:pl-[290px]':'md:pl-[110px]'
        }`}>{children}</main>
      </div>
      </div>
    </div>
  );
}

export default LayoutPage;