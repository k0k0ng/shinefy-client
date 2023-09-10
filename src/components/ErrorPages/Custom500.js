'use client';

import {useEffect, createRef} from 'react';
import lottie from "lottie-web";

import ErrorPagesFooter from '@/components/Footer/ErrorPagesFooter';

import "../../styles/home.css";

export default function Custom500() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/robot-crying.json",
    });

    return () => anim.destroy();
  }, [animationContainer]);

  return (
    <div className='h-[100vh] lg:h-[120vh]'>
      <div className='h-[60%] lg:h-[55%] flex flex-row justify-center px-[5%] xl:px-[15%] 2xl:px-[20%] global-bg-to-linear-gradient-purple'>
        <div className='w-full flex flex-col items-center mb-8 2xl:mr-[-5rem] justify-end'>
          <h1 className='global-error-text-1'>500</h1>
          <h2 className='mb-8 text-center global-header-text-1'>Sorry, it’s not you. It’s us.</h2>
          <p className='text-center global-header-text-3'>
            We’re are currently experiencing internal server problem. 
            <br />
            Please come back later.
          </p>
        </div>
        <div className='w-full hidden lg:flex flex-col items-center justify-end mb-[-21%]'>
          <div
              className="w-full"
              ref={animationContainer}
            />
        </div>
      </div>
      <div className='flex flex-row items-end h-[40%] lg:h-[50%] global-bg-to-dark-purple'>
        <ErrorPagesFooter />
      </div>
    </div>
  )
}
