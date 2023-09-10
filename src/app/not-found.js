'use client';

import {useEffect, createRef} from 'react';
import { useRouter } from 'next/navigation';
import lottie from "lottie-web";

import Error from 'next/error'

import ErrorPagesFooter from '@/components/Footer/ErrorPagesFooter';

import Custom403 from '@/components/ErrorPages/Custom403';
import Custom500 from '@/components/ErrorPages/Custom500';
import UnderMaintenance from '@/components/ErrorPages/UnderMaintenance';

import "../styles/home.css";

export async function getServerSideProps() {
  // Simulate a 500 internal server error
  throw new Error("Simulated 500 Error");

  // Alternatively, you can return an error response object like this:
  // return {
  //   props: {},
  //   notFound: true, // This will simulate a 404 error
  // };
}

export default function NotFound() {
  const router = useRouter();
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/two-palm-tree-animation.json",
    });

    return () => anim.destroy();
  }, [animationContainer]);

  // Only used for checking Custom Error page component
  if (false) {
    return (
      <UnderMaintenance />
      // <Error statusCode={500} />
    )
  }

  return (
    <div className='h-[100vh] lg:h-[120vh]'>
      <div className='h-[60%] lg:h-[55%] flex flex-row justify-center px-[5%] xl:px-[15%] 2xl:px-[20%] global-bg-to-linear-gradient-purple'>
        <div className='w-full flex flex-col items-center justify-end mb-[-25px] 2xl:mr-[-5rem]'>
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
        <div className='w-full hidden lg:flex flex-col items-center justify-end mb-[-12%]'>
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
