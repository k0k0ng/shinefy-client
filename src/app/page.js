"use client";

import "../styles/home.css";
import lottie from "lottie-web";
import { createRef, useEffect } from 'react';
// import robotRun from "../assets/robot-run.json";

export default function Home() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/robot-run.json"
    })

    return () => anim.destroy();
  }, [])

  return (
    <main>
      <header className="backgroundCustom font-montserrat min-h-screen flex flex-col">
        <div className="flex flex-col-reverse justify-center lg:flex-row gap-0 items-center lg:justify-center headerContainer">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="font-montserrat divContainer">
              <article className="dashboardCard">
                <div className="content-1">
                  <span className="header-text flex flex-col gap-2">
                    <h2 className="text-base sm:text-xl inline-flex items-center rounded min-w-max fuel-text">
                      Fuel your
                    </h2>
                    <h2 className="text-base sm:text-xl inline-flex items-center rounded min-w-max online-text mb-2">
                      Online Growth
                    </h2>
                  </span>
                  <p className="text-base sm:text-lg font-light text-white header-text mb-10 lg:mb-5 headerPar">
                    Amet nulla ullamco laborum ea do enim nostrud laborum laborum. Minim esse consequat sit labore nulla id est proident et Lorem excepteur sint ea ex. Excepteur fugiat voluptate dolore non tempor deserunt nulla.
                  </p>

                  {/* Button  - Lets Get Started */}
                  <div className="flex flex-col gap-3 lg:flex-row lg:gap-0">
                    <div className="flex justify-between">
                      {/* Button-1 content */}
                      <a
                        href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                        className="text-white font-bold rounded button-1"
                      >
                        Let's Get Started
                        <i className="fa-solid fa-chevron-right text-white ml-2 lg:ml-14"></i>
                      </a>
                    </div>

                    <div className="sm:mt-0">
                      {/* Button-2 content */}
                      {/* <a href="https://shineranker.com/" className="text-white font-bold rounded button-2 flex items-center">
                        Pricing Plan
                      </a> */}
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          {/* Middle Column */}
          <div className="robotRun">
            <div className="home-animation-container" ref={animationContainer}/>
          </div>
        </div>

        {/* Bottom Column */}
        {/* <div className="btm-col flex justify-center mt-4 mx-auto items-center">
          <div className="flex items-center">
            <div className="imageContainer">
              <img src={men} alt="Placeholder" className="men" />
            </div>
            <div className="textContainer px-2.5">
              <p className="text-sm sm:text-base">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
              <p className="textContainer-2 text-sm sm:text-base">
                John Flemming, Co-Owner of ExampleReels
              </p>
            </div>
          </div>
        </div> */}
      </header>

    </main>
  )
}
