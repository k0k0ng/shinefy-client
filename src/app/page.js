"use client";

import lottie from "lottie-web";
import { createRef, useEffect, useState } from "react";
import ToggleButton from "@/components/ToggleButton";

// CSS Imports
import "../styles/home.css";
import "../styles/hometextanimation.css";
import "../styles/pricing.css";

// SVGs
const iconWebscrape = "/svg/tools/tools-webscrape-icon.svg";
const iconVideo = "/svg/tools/tools-video-icon.svg";
const iconText2Image = "/svg/tools/tools-text2image-icon.svg";
const iconImage2Image = "/svg/tools/tools-image2image-icon.svg";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("monthly");
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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

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
        {/* <article className="flex justify-center items-center gap-5">
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
            <h1 className="home-owner-message">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </h1>
            <p className="mt-5 home-owner-name">
              John Flemming, Co-Owner of ExampleReels
            </p>
          </div>
        </article> */}

        {/* ROW 2 - How to use Shine Ranker App */}
        <section className="flex flex-col justify-center items-center gap-5">
          <div>
            <h1 className="home-text-1">How To Use Shine Ranker App</h1>
          </div>
          <div>
            <h1 className="home-text-2">
              Watch this video and Start
              <br />
              making money online
            </h1>
          </div>
          <div>
            <h1 className="home-text-3 max-w-[516px]">
              Watch the free training video and start earning money today even
              if you are not an expert
            </h1>
          </div>
          <div className="my-5">
            <img
              src="/images/global/training-video.png"
              alt="Shine Ranker Training Video"
              width="480px" // Specify the width of the image
              height="270px" // Specify the height of the image
              className="home-training-image"
            />
          </div>
          <div>
            <button className="mb-5 home-training-button">
              <p>Generate Your Videos Today</p>
            </button>
          </div>
          <div className="flex gap-10">
            <div>
              <img
                src="/images/home/secure-home.png"
                alt="Secure SSL Encryption"
                width="111px" // Specify the width of the image
                height="28px" // Specify the height of the image
              />
            </div>
            <div>
              <img
                src="/images/home/trusted-home.png"
                alt="Trusted Seller"
                width="111px" // Specify the width of the image
                height="28px" // Specify the height of the image
              />
            </div>
            <div>
              <img
                src="/images/home/refund-home.png"
                alt="Full Refund Guarantee"
                width="111px" // Specify the width of the image
                height="28px" // Specify the height of the image
              />
            </div>
          </div>
        </section>

        {/* ROW 3 - Our powerful tools */}
        <section className="mt-40">
          {/* TEXT HEADERS */}
          <div className="flex flex-col items-center mb-20">
            <div>
              <h1 className="home-text-1">Our Powerful Tools</h1>
            </div>
            <div>
              <h1 className="home-text-2 my-5">Boost Your Online Growth</h1>
            </div>
            <div>
              <h1 className="home-text-3 max-w-[516px]">
                These tools are fool-proof easy-to-use and navigate that even
                first time users can start creating tons of video content and
                earn in a matter of minutes.
              </h1>
            </div>
          </div>
          {/* CONTENTS */}
          <div className="flex flex-row justify-center gap-20">
            {/* CARD */}
            <div className="flex flex-col home-tools-card">
              <div>
                <img
                  src="/images/home/bouncing-robot-head.png"
                  alt="Shine Ranker Bouncing Robot Head"
                  className=""
                  width="517px" // Specify the width of the image
                  height="446px" // Specify the height of the image
                />
              </div>
              <p className="home-tools-text-1">Quality creations for content</p>
              <h1 className="home-tools-text-2">
                Start propelling your growth today.
              </h1>
              <p className="home-tools-text-3">
                With our tools, you can witness rapid audience and numerical
                growth in as little as 7 days.
              </p>
              <input
                type="text"
                placeholder="Your Email"
                className="home-tools-input"
              />
              <button className="home-tools-button">
                Let&apos;s Get Started
              </button>
              <a href="/pricing" className="home-tools-link">
                Pricing Plan
                <i className="fa-solid fa-chevron-right text-white ml-3 mt-1"></i>
              </a>
            </div>
            {/* TOOLS  GRID */}
            <div className="grid grid-cols-2 gap-10 items-center">
              <div>
                <div>
                  <img
                    src={iconWebscrape}
                    alt="Shine Ranker Web Scraper Tool"
                    width="40px" // Specify the width of the image
                    className=""
                  />
                </div>
                <div>
                  <h1 className="home-tool-grid-title max-w-[110px] py-5">
                    Website Scraper Tool
                  </h1>
                </div>
                <div>
                  <p className="home-tool-grid-text max-w-[255px]">
                    Simplify your data collection process with our efficient and
                    user-friendly tool.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={iconVideo}
                    alt="Shine Ranker Web Scraper Tool"
                    width="40px" // Specify the width of the image
                    className=""
                  />
                </div>
                <div>
                  <h1 className="home-tool-grid-title max-w-[110px] py-5">
                    Video Generation Tool
                  </h1>
                </div>
                <div>
                  <p className="home-tool-grid-text max-w-[255px]">
                    Experience effortless video creation with our powerful video
                    generation automation tool.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={iconText2Image}
                    alt="Shine Ranker Web Scraper Tool"
                    width="40px" // Specify the width of the image
                    className=""
                  />
                </div>
                <div>
                  <h1 className="home-tool-grid-title max-w-[255px] py-5">
                    AI Text to Image Generation Tool
                  </h1>
                </div>
                <div>
                  <p className="home-tool-grid-text max-w-[255px]">
                    Engage your audience with high-quality, impressive videos.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src={iconImage2Image}
                    alt="Shine Ranker Web Scraper Tool"
                    width="40px" // Specify the width of the image
                    className=""
                  />
                </div>
                <div>
                  <h1 className="home-tool-grid-title max-w-[255px] py-5">
                    AI Image to Image Generation Tool
                  </h1>
                </div>
                <div>
                  <p className="home-tool-grid-text max-w-[255px]">
                    Experience effortless image creation with our powerful
                    automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 4 - Our pricing plan */}
        <section className="mt-40">
          {/* TEXT HEADERS */}
          <div className="flex flex-col items-center">
            <div>
              <h1 className="home-text-1">Our Pricing Plan</h1>
            </div>
            <div>
              <h1 className="home-text-2 my-5 max-w-[688px]">
                Get access to all features of these Powerful AI Tools and be
                ready to skyrocket your online growth
              </h1>
            </div>
            <div>
              <h1 className="home-text-3 max-w-[516px]">
                Simplify your data collection process with our efficient and
                user-friendly tool.
              </h1>
            </div>
            <div className="flex justify-center align-center my-10">
              <ToggleButton
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
              />
            </div>
          </div>
          {/* Price Cards */}
          <div className="pricing-price-cards flex flex-col xl:flex-row justify-center items-center gap-10">
            <div className="pricing-price-card">
              <div className="pricing-price-title">
                <h2 className="pricing-price-title-1">Spark Basic</h2>
                {selectedOption === "monthly" ? (
                  <h1 className="pricing-price-title-2 mt-5">$59</h1>
                ) : (
                  <h1 className="pricing-price-title-2 mt-5">$600</h1>
                )}
                {selectedOption === "monthly" ? (
                  <p className="pricing-price-title-3">per month</p>
                ) : (
                  <p className="pricing-price-title-3">per year</p>
                )}
              </div>
              <div className="pricing-price-checklist mt-10 mb-5">
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">5 Projects</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    5,000 Shine Audits
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    5,000 Keywords Research Usages
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Content Editor
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Leads
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited AI Keywords
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited AI Chat
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Project Dashboard
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Keyword Research
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">Shine Audit</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">Content Editor</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">
                    Leads List & Widget
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">AI Keywords</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">AI Chat</p>
                </div>
              </div>
              <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
                <a href="/pricing" className="pricing-price-footer-button">
                  Choose Plan
                </a>
                <p className="pricing-price-footer-text">
                  save $108.12 per year
                </p>
              </div>
            </div>

            <div className="pricing-price-card">
              <div className="pricing-price-title">
                <h2 className="pricing-price-title-1">Flare Plus</h2>
                {selectedOption === "monthly" ? (
                  <h1 className="pricing-price-title-2 mt-5">$112</h1>
                ) : (
                  <h1 className="pricing-price-title-2 mt-5">$1,140</h1>
                )}
                {selectedOption === "monthly" ? (
                  <p className="pricing-price-title-3">per month</p>
                ) : (
                  <p className="pricing-price-title-3">per year</p>
                )}
              </div>
              <div className="pricing-price-checklist mt-10 mb-5">
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">10 Projects</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    10,000 Shine Audits
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    10,000 Keywords Research Usages
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Content Editor
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Leads
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited AI Keywords
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited AI Chat
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Project Dashboard
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Keyword Research
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">Shine Audit</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">Content Editor</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Leads List & Widget
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">AI Keywords</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                  <p className="pricing-price-checklist-text">AI Chat</p>
                </div>
              </div>
              <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
                <a href="/pricing" className="pricing-price-footer-button">
                  Choose Plan
                </a>
                <p className="pricing-price-footer-text">
                  save $204.24 per year
                </p>
              </div>
            </div>

            <div className="pricing-price-card">
              <div className="pricing-price-title">
                <h2 className="pricing-price-title-1">Shine Pro</h2>
                {selectedOption === "monthly" ? (
                  <h1 className="pricing-price-title-2 mt-5">$219</h1>
                ) : (
                  <h1 className="pricing-price-title-2 mt-5">$2,208</h1>
                )}
                {selectedOption === "monthly" ? (
                  <p className="pricing-price-title-3">per month</p>
                ) : (
                  <p className="pricing-price-title-3">per year</p>
                )}
              </div>
              <div className="pricing-price-checklist mt-10 mb-5">
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">20 Projects</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    20,000 Shine Audits
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    20,000 Keywords Research Usages
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Content Editor
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited Leads
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited AI Keywords
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Unlimited AI Chat
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Project Dashboard
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Keyword Research
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">Shine Audit</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">Content Editor</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">
                    Leads List & Widget
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">AI Keywords</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-price-checklist-text">AI Chat</p>
                </div>
              </div>
              <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
                <a href="/pricing" className="pricing-price-footer-button">
                  Choose Plan
                </a>
                <p className="pricing-price-footer-text">
                  save $420.00 per year
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ROW 5 - Our Amazing Features */}
        <section className="mt-40">
          {/* TEXT HEADERS */}
          <div className="flex flex-col items-center">
            <div>
              <h1 className="home-text-1">Amazing Features</h1>
            </div>
            <div>
              <h1 className="home-text-2 my-5 max-w-[688px]">
                Great savings when you get Shine Ranker PRO Today!
              </h1>
            </div>
            <div>
              <h1 className="home-text-3 max-w-[516px]">
                Get a total value of $2147 for only $219
              </h1>
            </div>
          </div>
        </section>

        {/* ROW 6 - Subscribe */}
        <section className="mt-40">
          {/* TEXT HEADERS */}
          <div className="flex flex-col items-center">
            <div>
              <h1 className="home-text-1">Subscribe for Awesome Freebies</h1>
            </div>
            <div>
              <h1 className="home-text-2 my-5 max-w-[688px]">
                Get the latest updates on the use of AI Tools in business
              </h1>
            </div>
            <div>
              <h1 className="home-text-3 max-w-[516px]">
                A Limited-Time Offer
              </h1>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
