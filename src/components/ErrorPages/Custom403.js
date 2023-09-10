'use client';

import {useEffect, createRef} from 'react';
import lottie from "lottie-web";

import ErrorPagesFooter from '@/components/Footer/ErrorPagesFooter';

import "../../styles/home.css";

export default function Custom403() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/hero-banner-shine-ai-flying.json",
    });

    return () => anim.destroy();
  }, [animationContainer]);

  return (
    <div className='h-[100vh] lg:h-[120vh]'>
      <div className='h-[60%] lg:h-[55%] flex flex-row justify-center px-[5%] xl:px-[15%] 2xl:px-[20%] global-bg-to-linear-gradient-purple'>
        <div className='w-full flex flex-col items-center mb-8 2xl:mr-[-5rem] justify-end'>
          <h1 className='global-error-text-1'>403</h1>
          <h2 className='mb-8 text-center global-header-text-1'>Sorry, you’re not supposed to see this.</h2>
          <p className='text-center global-header-text-3'>Your subscription does not include this feature.</p>
        </div>
        <div className='w-full hidden lg:flex flex-col items-center justify-end mb-[-20%]'>
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
