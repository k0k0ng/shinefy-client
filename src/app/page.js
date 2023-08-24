"use client";

import lottie from "lottie-web";
import { createRef, useEffect } from "react";

import "../styles/home.css";
import "../styles/hometextanimation.css";

export default function Home() {
  let animationContainer = createRef();

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/robot-run.json",
    });

    return () => anim.destroy();
  }, [animationContainer]);

  return (
    <div>
      <header className="backgroundCustom font-montserrat min-h-screen flex flex-col">
        <div className="flex flex-col-reverse justify-center lg:flex-row gap-0 items-center lg:justify-center headerContainer">
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            <div className="font-montserrat divContainer">
              <article className="dashboardCard">
                <div className="content-1">
                  <span className="header-text flex flex-col gap-2">
                    <h4 className="home-header-minitext">Powerful AI Tools</h4>
                    <h2 className="text-base sm:text-xl inline-flex items-center rounded min-w-max fuel-text">
                      <div className="content">
                        <div className="content__container">
                          <p className="content__container__text">Your</p>

                          <ul className="content__container__list">
                            <li className="content__container__list__item">
                              <span className="home-header-spintext">
                                Online Growth
                              </span>
                            </li>
                            <li className="content__container__list__item">
                              <span className="home-header-spintext">
                                Passive Income
                              </span>
                            </li>
                            <li className="content__container__list__item">
                              <span className="home-header-spintext">
                                Viral Content
                              </span>
                            </li>
                            <li className="content__container__list__item">
                              <span className="home-header-spintext">
                                Youtube Shorts
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </h2>
                    <h2 className="text-base sm:text-xl inline-flex items-center rounded min-w-max fuel-text">
                      Powered by AI Videos
                    </h2>
                  </span>
                  <p className="text-base sm:text-lg font-light text-white header-text mt-5 mb-10 lg:mb-5 headerPar">
                    Shine Ranker is a collection of powerful AI tools that
                    generate AI videos for passive income in just one click.
                    Powered by
                    <object
                      data="/svg/home/openai-logo.svg"
                      type="image/svg+xml"
                      height="40"
                      className="home-openai"
                    >
                      <img
                        src="/svg/home/openai-logo.svg"
                        alt="OpenAI Logo"
                        height="40"
                      />
                    </object>
                  </p>

                  {/* Button  - Lets Get Started */}
                  <div className="flex flex-col gap-3 lg:flex-row lg:gap-0">
                    <div className="flex justify-between">
                      {/* Button-1 content */}
                      <a
                        href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                        className="text-white font-bold rounded button-1 w-full"
                      >
                        Let&apos;s Get Started
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
            <div
              className="home-animation-container"
              ref={animationContainer}
            />
          </div>
        </div>
      </header>

      <main className="global-content-container">
        {/* ROW 1 - Owner Message */}
        <article className="flex justify-center items-center gap-5">
          <div>
            <img
              src="/images/home/men.png"
              alt="Owner Message"
              width="190px"
              height="190px"
              className=""
            />
          </div>
          <div>
            <h1 className="home-owner-message">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</h1>
            <p className="mt-5 home-owner-name">John Flemming, Co-Owner of ExampleReels</p>
          </div>
        </article>

        {/* ROW 2 - How to use Shine Ranker App */}
        <section></section>

        {/* ROW 3 - Our powerful tools */}
        <section></section>

        {/* ROW 4 - Our pricing plan */}
        <section></section>

        {/* ROW 5 - Our pricing plan */}
        <section></section>

        {/* ROW 6 - Limited Time Offer */}
        <section></section>
      </main>
    </div>
  );
}
