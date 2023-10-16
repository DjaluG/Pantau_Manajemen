import Image from 'next/image';
import LoginButton from './components/login/LoginButton';
import PasswordInput from './components/login/PasswordInput';

export default function Home() {
  return (
    <body style={{ backgroundColor: '#002C62' }}>
    <div className='flex'>
      <div className='mt-9 pt-6 pl-10 ml-12 w-1/2'>
        <div className='flex'>
        <Image
          src={'/images/cam-new.png'}
          alt={'cam'}
          width={80}
          height={80}
          className='ml-6'>
          </Image>
          <div className='border-b-[3px] h-[100%] border-[#FFEB38]'>
            <h3 className='pantau text-5xl mt-2 pb-2 font-black text-white shadow-2xl'>Pantau</h3>
          </div>
        </div>
        <Image
          src={'/images/login.png'}
          alt={'login'}
          width={500}
          height={500}
          className=''/>
      </div>
      <div className='flex w-1/2 mt-[9.5rem]'>
        <div className='bg-white w-[450px] h-[430px] ml-12 rounded-[2rem]'>
          <h2 className='text-center text-3xl font-bold text-[#001E42] mt-9'>Sign In</h2>
          <h4 className='text-center text-lg font-bold text-[#001E42] mt-5'>Hey, enter your details to get sign in</h4>
          <div className='px-10'>
          <p className='text-xl font-bold text-[#001E42] mt-8 ml-2 mb-1'>Email</p>
          <div className='flex justify-center'>
          <input
              type="text"
              name="email"
              placeholder='Enter your email here'
              className='mt-1 px-3 py-2 pr-6 w-full bg-white border-[1px] border-[#005555] placeholder-slate-400 focus:outline-none placeholder:font-bold block rounded-md sm:text-sm outline-none'
            />
          </div>
          <p className='text-xl font-bold text-[#001E42] ml-2 mt-3 mb-1'>Password</p>
          <div className='flex items-center justify-center relative w-full'>
            <PasswordInput/>
          </div>  
          </div>
          <LoginButton/>
        </div>
      </div>
    </div>
    </body>
  )
}
