'use client';

import {useEffect, createRef} from 'react';
import { useRouter } from 'next/navigation';
import lottie from "lottie-web";

import ErrorPagesFooter from '@/components/Footer/ErrorPagesFooter';

import "../styles/home.css";

export default function NotFound() {
  const router = useRouter();
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
      <div className='h-[60%] lg:h-[55%] flex flex-row justify-center px-[5%] xl:px-[15%] 2xl:px-[25%] global-bg-to-linear-gradient-purple'>
        <div className='w-full flex flex-col items-center justify-end mb-[-25px]'>
          <h1 className='global-error-text-1'>404</h1>
          <h2 className='mb-6 global-header-text-1'>Oh No! Page not found.</h2>
          <p className='text-center global-header-text-3'>The page must've gone to vacation.</p>
          <button
            onClick={() => router.back()}
            className="text-center px-12 py-4 mt-5 home-primary-btn"
          >
            Go Back
          </button>
        </div>
        <div className='w-full hidden lg:flex flex-col items-center justify-end mb-[-18%]'>
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
