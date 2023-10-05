import Image from 'next/image';

export default function Home() {
  return (
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
            <h3 className='pantau text-5xl mt-2 pb-2 font-black text-white'>Pantau</h3>
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
          <h4 className='text-center text-xl font-bold text-[#001E42] mt-3'>Hey, enter your details to get sign in</h4>
          <p className='text-2xl font-bold text-[#001E42] mt-8 ml-6 mb-1'>Email</p>
          <div className='flex justify-center'>
            <input
              type="text"
              name="Email"
              placeholder='Enter your email here'
              className='mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[80%] rounded-md sm:text-sm focus:ring-1'
            />
          </div>
          <p className='text-2xl font-bold text-[#001E42] ml-6 mt-3 mb-1'>Password</p>
          <div className='flex items-center justify-center relative'>
            <input
              type="password"
              name="Password"
              placeholder='Enter your password here'
              className='mt-1 px-3 py-2 pr-6 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[80%] rounded-md sm:text-sm focus:ring-1'
            />
            <Image
              src={'/images/eye.svg'}
              alt={'eye'}
              width={25}
              height={25}
              className='absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer'
            />
          </div>
          <div className='flex justify-center mt-7'>
            <div className='bg-[#FFEB38] w-[80%] rounded-lg'>
              <button type='submit' className='btn text-[#10316B] w-full font-bold text-lg py-1'>Sign In</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
