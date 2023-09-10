
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
      <div className='h-[60vh] lg:h-[90vh] w-full flex flex-row mt-[10vh] border absolute top-0 left-0'>
        <div className='h-full w-[65%] border'></div>
        <div className='h-full w-[35%] flex flex-row items-end pb-[8rem] border'>
          <img
            src="/svg/ErrorPage/electrical-inlit-icon.svg"
            alt="earth globe icon"
            width="170px"
            className="md:mb-5"
          />
        </div>
      </div>
    </div>
  )
}
