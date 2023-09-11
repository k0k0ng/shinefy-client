
import ErrorPagesFooter from '@/components/Footer/ErrorPagesFooter';

import "../../styles/home.css";

export default function UnderMaintenance() {


  return (
    <div className='h-[100vh] lg:h-[120vh]'>
      <div className='h-[60%] lg:h-[55%] flex flex-row justify-center px-[5%] xl:px-[15%] 2xl:px-[20%] global-bg-to-linear-gradient-purple'>
        <div className='w-full flex flex-col items-center justify-end pb-16'>
          <h1 className='mb-8 global-error-text-2'>We’ll be back soon!</h1>
          <h2 className='mb-8 text-center global-header-text-1'>We are always after your best experience.</h2>
          <p className='text-center global-header-text-3'>
            Our website will be back before you know it.
            <br/>
            Check out our socials to stay updated.
          </p>
        </div>
      </div>
      <div className='flex flex-row items-end h-[40%] lg:h-[50%] global-bg-to-dark-purple'>
        <ErrorPagesFooter />
      </div>
      <div className='h-[60vh] lg:h-[90vh] w-full hidden lg:flex flex-row mt-[10vh] absolute top-0 left-0'>
        <div className='h-full w-[70%] 2xl:w-[65%] flex flex-row items-end'>
          <img
            src="/images/ErrorPage/electrical-cord-icon.png"
            alt="earth globe icon"
            // width="170px"
            className="mb-10"
          />
        </div>
        <div className='h-full w-[30%] 2lx:w-[35%] flex flex-row items-end pb-[8rem]'>
          <img
            src="/svg/ErrorPage/electrical-inlit-icon.svg"
            alt="earth globe icon"
            // width="170px"
            className="md:mb-5 max-w-[110px] xl:max-w-[150px] 2xl:max-w-auto lg:ml-16 2xl:ml-0 "
          />
        </div>
      </div>
    </div>
  )
}
