"use client";

import { createRef, useEffect, useState } from "react";
import lottie from "lottie-web";

import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

import PricingSection from "@/components/HomepageSections/PricingSection";
import TextfieldTooltip from "@/components/TextfieldTooltip";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';


// CSS Imports
import "../styles/home.css";
import "../styles/hometextanimation.css";
import "../styles/pricing.css";
import SocialLinksButtons from "@/components/SocialLinksButtons";


const CredibilitySectionGrid = (ismobile) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 lg:gap-x-12 xl:gap-20 items-center`}>
      <div className={`flex flex-col text-center ${!ismobile ? "credibility-grid-card-accent" : ""}`}>
        <img
          src="/svg/home/ai-face.svg"
          alt="ai face icon"
          width="66px"
          height="68px"
          className="self-center mb-8"
        />
        <p className="our-tools-right-content-title py-5 mb-4">
          125,879
        </p>
        <p className="our-tools-right-content-text">
          AI Videos Created
        </p>
      </div>
      <div className="flex flex-col text-center">
        <img
          src="/svg/home/profile.svg"
          alt="default profile avatar icon"
          width="63px"
          height="63px"
          className="self-center mb-8"
        />
        <p className="our-tools-right-content-title py-5 mb-4">
          13,988
        </p>
        <p className="our-tools-right-content-text">
          Sign Ups
        </p>
      </div>
      <div className={`flex flex-col text-center ${!ismobile ? "credibility-grid-card-accent" : ""}`}>
        <img
          src="/svg/home/bot.svg"
          alt="Shine AI robot head icon"
          width="80px"
          height="57px"
          className="self-center mb-8"
        />
        <p className="our-tools-right-content-title py-5 mb-4">
          12,678
        </p>
        <p className="our-tools-right-content-text">
          Happy Clients
        </p>
      </div>
      <div className="flex flex-col text-center">
        <img
          src="/svg/home/ellipsis.svg"
          alt="ellipsis icon"
          width="61px"
          height="61px"
          className="self-center mb-8"
        />
        <p className="our-tools-right-content-title py-5 mb-4">
          272,532
        </p>
        <p className="our-tools-right-content-text">
          Ideas Created
        </p>
      </div>
    </div>
  )
}


export default function Home() {
  let animationContainer = createRef();
  let ourToolsAnimationContainer = createRef();
  let footerAnimationContainer = createRef();

  const [selectedCreamOfCropCategory, setSelectedCreamOfCropCategory] = useState("Motivational");

  useEffect(() => {
    const heroAnimation = lottie.loadAnimation({
      container: animationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/hero-banner-shine-ai-flying.json",
    });

    const ourToolsAnimation = lottie.loadAnimation({
      container: ourToolsAnimationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/shine-ai-robot-head.json",
    });

    const footerAnimation = lottie.loadAnimation({
      container: footerAnimationContainer.current,
      rerender: "svg",
      loop: true,
      autoplay: true,
      path: "/assets/shine-ai-robot-with-dialog.json",
    });

    return () => {
      heroAnimation.destroy();
      ourToolsAnimation.destroy();
      footerAnimation.destroy();
    };
  }, [animationContainer]);

  
  const handleChangeCreamOfCropCategory = (event) => {
    setSelectedCreamOfCropCategory(event.target.value);
  };


  return (
    <>
      {/* Hero */}
      <section className="h-[100vh] lg:min-h-[800px] xl:min-h-[850px] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="h-full flex flex-row items-center lg:justify-center pb-32">
          <header className="hero-header-container">
            <h2 className="mb-2 md:mb-5 hero-mini-header-text">Powerful AI Tools</h2>
            <h1 className="hero-header-text">
              <div className="content">
                <div className="content__container">
                  <p className="content__container__text">Your</p>
                  <ul className="content__container__list">
                    <li className="content__container__list__item">
                      <span className="whitespace-nowrap hero-header-gradient-text">
                        Online Growth
                      </span>
                    </li>
                    <li className="content__container__list__item">
                      <span className="whitespace-nowrap hero-header-gradient-text">
                        Passive Income
                      </span>
                    </li>
                    <li className="content__container__list__item">
                      <span className="whitespace-nowrap hero-header-gradient-text">
                        Viral Content
                      </span>
                    </li>
                    <li className="content__container__list__item">
                      <span className="whitespace-nowrap hero-header-gradient-text">
                        Youtube Shorts
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </h1>
            <h1 className="hero-header-text">
              Powered by AI Videos
            </h1>
            
            <p className="max-w-[680px] mt-5 mb-8 lg:mb-14 hero-header-content">
              Shine Ranker is a collection of powerful AI tools that
              generate AI videos for passive income in just one click.
              Powered by
              <object
                data="/svg/home/openai-logo.svg"
                type="image/svg+xml"
                height="40"
                className="hero-header-openAI-logo"
              >
                <img
                  src="/svg/home/openai-logo.svg"
                  alt="OpenAI Logo"
                  height="40"
                />
              </object>
            </p>

            <div className="flex flex-col md:flex-row">
              {/* <input
                type="text"
                name="promo_code"
                placeholder="type an idea here"
                className="h-14 w-full md:w-[65%] 2xl:w-[55%] text-center mb-2 md:mb-0 md:mr-[-2rem] pl-4 pr-[3rem] global-input-1"                
              /> */}
              <TextfieldTooltip inputClassName="h-14 w-full md:w-[65%] 2xl:w-[55%] text-center mb-2 md:mb-0 md:mr-[-2rem] pl-4 pr-[3rem] global-input-1" />
              <a
                href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                rel="noreferrer"
                target="_blank"
                className="flex items-center justify-center px-8 home-primary-btn"
              >
                Generate Your Videos
              </a>
            </div>
          </header>

          <div className="hidden lg:block mt-44 lg:mt-0 hero-animation-container">
            <div
              className="home-animation-container"
              ref={animationContainer}
            />
          </div>
        </div>
      </section>


      {/* How to use Shine Ranker App */}
      <section className="pb-16 px-[5%] xl:px-[18%] how-to-use-shine-ai-section ">
        <div className="flex flex-col items-center gap-5 mt-[-9rem]">
          <h3 className="w-full mb-2 md:text-center global-header-text-1">How To Use shineAi App</h3>
          <h2 className="max-w-[516px] mb-2 md:text-center global-header-text-2">
            Watch this video and Start making money online
          </h2>
          <p className="max-w-[516px] md:text-center global-header-text-3">
            Watch the free training video and start earning money today even if you are not an expert
          </p>
          <a
            href={`https://www.youtube.com/watch?v=PL3PXYFdlsU&t=2s`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/global/training-video.png"
              alt="Shine Ai Training Video thumbnail"
              width="480px"
              height="270px"
              className="my-8 home-training-image"
            />
          </a>
          
          <a
              href="https://chasereiner.thrivecart.com/shine-ranker-deal"
              rel="noreferrer"
              target="_blank"
              className="w-full md:w-auto flex items-center justify-center mb-5 py-4 px-5 home-secondary-btn"
            >
              Generate Your Videos Today
          </a>
          <div className="flex gap-x-4 sm:gap-x-10">
            <img
              src="/images/home/secure-home.png"
              alt="Secure SSL Encryption badge"
              className="how-to-use-shine-ai-badge"
            />
            <img
              src="/images/home/trusted-home.png"
              alt="Trusted Seller badge"
              className="how-to-use-shine-ai-badge"
            />
            <img
              src="/images/home/refund-home.png"
              alt="Full Refund Guarantee badge"
              className="how-to-use-shine-ai-badge"
            />
          </div>
        </div>
      </section>


      {/* Our Tools */}
      <section className="">
        <div className="pt-10 xl:pt-20 pb-0 md:pb-10 lg:pb-0 our-tools-container">
          <div className="flex flex-col items-center px-5 md:px-0 mb-14 xl:mb-20">
            <h3 className="w-full mb-5 md:text-center global-header-text-1">Our Powerful Tools</h3>
            <h2 className="mb-5 md:text-center global-header-text-2">Boost Your Online Growth</h2>
            <p className="md:text-center max-w-[516px] global-header-text-3">
              These tools are fool-proof easy-to-use and navigate that even
              first time users can start creating tons of video content and
              earn in a matter of minutes.
            </p>
          </div>

          <div className="flex flex-col flex-col-reverse lg:flex-row justify-center lg:gap-16">
            <div className="flex flex-col">
              <div
                className="2xl:mr-[-3rem]"
                ref={ourToolsAnimationContainer}
              />
              <div className="flex flex-col items-center md:items-start 2xl:ml-12 pt-44 lg:pt-60 pb-14 md:pb-10 px-5 md:px-10 our-tools-left-content-card">
                <p className="w-full mb-5 text-center md:text-start home-card-header-small">Quality creations for content</p>
                <h1 className="mb-5 text-center md:text-start global-header-text-2">
                  Start propelling your growth today.
                </h1>
                <p className="mb-5 text-center md:text-start home-card-header-content">
                  With our tools, you can witness rapid audience and numerical
                  growth in as little as 7 days.
                </p>
                <input
                  type="text"
                  name="user_email"
                  placeholder="Your Email"
                  className="mb-4 home-input-center-placeholder"
                />
                <button className="w-full mb-4 home-primary-btn">
                  Let&apos;s Get Started
                </button>
                <a href="/pricing" className="home-link">
                  Pricing Plan
                  <i className="fa-solid fa-chevron-right text-white ml-3 mt-1"></i>
                </a>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-20 lg:gap-y-10 md:gap-x-12 px-5 md:px-0 lg:pt-24 pb-24 lg:pb-8 items-center">
              <div className="flex flex-col p-8 md:p-0 our-tools-grid-item">
                  <img
                    src="/svg/tools/globe.svg"
                    alt="earth globe icon"
                    width="40px"
                    className="md:mb-5"
                  />
                  <h4 className="py-5 max-w-[180px] md:max-w-[120px] our-tools-right-content-title">
                    Website Scraper Tool
                  </h4>
                  <p className="our-tools-right-content-text">
                    Simplify your data collection process with our efficient and
                    user-friendly tool.
                  </p>
              </div>
              <div className="flex flex-col p-8 md:p-0 our-tools-grid-item">
                  <img
                    src="/svg/tools/video-generator.svg"
                    alt="multiple video icon"
                    width="40px"
                    className="md:mb-5"
                  />
                  <h4 className="py-5 max-w-[200px] md:max-w-[120px] our-tools-right-content-title">
                    Video Generation Tool
                  </h4>
                  <p className="our-tools-right-content-text">
                    Experience effortless video creation with our powerful video
                    generation automation tool.
                  </p>
              </div>
              <div className="flex flex-col p-8 md:p-0 our-tools-grid-item">
                  <img
                    src="/svg/tools/monitor.svg"
                    alt="monitor icon"
                    width="40px"
                    className="md:mb-5"
                  />
                  <h4 className="py-5 our-tools-right-content-title">
                    AI Text to Image Generation <br/>
                    Tool
                  </h4>
                  <p className="our-tools-right-content-text">
                    Engage your audience with high-quality, impressive videos.
                  </p>
              </div>
              <div className="flex flex-col p-8 md:p-0 our-tools-grid-item">
                  <img
                    src="/svg/tools/ai-face.svg"
                    alt="ai face icon"
                    width="40px"
                    className="md:mb-5"
                  />
                  <h4 className="py-5 our-tools-right-content-title">
                    AI Image to Image Generation <br/>
                    Tool
                  </h4>
                  <p className="our-tools-right-content-text">
                    Experience effortless image creation with our powerful
                    automation.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>
        
      
      {/* Pricing Plan V2 */}
      <PricingSection />


      {/* Cream of the Crop */}
      <section className="py-20 px-[10%] 2xl:px-[20%]">
        <h4 className="mb-6 text-center global-header-text-1">The Cream of the Crop</h4>
        <h3 className="mb-6 text-center global-header-text-2">Captivating Videos & Pictography</h3>
        <p className="mb-12 text-center global-header-text-3">Our tools create seamless videos and timings that binds your content and make it viral on any platform.</p>
        
        <div className="max-w-[700px] flex flex-row flex-wrap justify-center gap-3 mx-auto mb-12">
          <button 
            value="Motivational"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Motivational" ? "active-radio" : ""}`} 
          >
              Motivational
          </button>
          <button 
            value="TikTok"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="TikTok" ? "active-radio" : ""}`} 
          >
              TikTok
          </button>
          <button 
            value="YouTube Shorts"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="YouTube Shorts" ? "active-radio" : ""}`} 
          >
              YouTube Shorts
          </button>
          <button 
            value="Storytelling"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Storytelling" ? "active-radio" : ""}`} 
          >
              Storytelling
          </button>
          <button 
            value="Trivia"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Trivia" ? "active-radio" : ""}`} 
          >
              Trivia
          </button>
          <button 
            value="Viral Videos"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Viral Videos" ? "active-radio" : ""}`} 
          >
              Viral Videos
          </button>
          <button 
            value="Affiliate"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Affiliate" ? "active-radio" : ""}`} 
          >
              Affiliate
          </button>
          <button 
            value="Instastories"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Instastories" ? "active-radio" : ""}`} 
          >
              Instastories
          </button>
          <button 
            value="Promotional"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Promotional" ? "active-radio" : ""}`} 
          >
              Promotional
          </button>
          <button 
            value="Informational"
            onClick={handleChangeCreamOfCropCategory}        
            className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Informational" ? "active-radio" : ""}`} 
          >
              Informational
          </button>
        </div>

        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 4,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 2,
            },
            1700: {
              slidesPerView: 6,
              spaceBetween: 2,
            },
          }}
          className=""
        >
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Top5hacksADHD.png"
                alt="Top5hacksADHD Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Motivational
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Marie Curie.png"
                alt="Marie Curie Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Information
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/ShineRanker.png"
                alt="ShineRanker Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Promotional
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Samuel.png"
                alt="Samuel Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Storytelling
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Why Indonesians dont speak dutch.png"
                alt="Why Indonesians dont speak dutch Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Trivia
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/uranium.png"
                alt="uranium Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Recent Viral
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Top5hacksADHD.png"
                alt="Top5hacksADHD Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Motivational
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Marie Curie.png"
                alt="Marie Curie Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Information
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/ShineRanker.png"
                alt="ShineRanker Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Promotional
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Samuel.png"
                alt="Samuel Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Storytelling
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/Why Indonesians dont speak dutch.png"
                alt="Why Indonesians dont speak dutch Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Trivia
              </button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center ">
              <img
                src="/images/home/CreamOfCrop/uranium.png"
                alt="uranium Video thumbnail"
                className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
              />
              <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
                Recent Viral
              </button>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* <div className="flex flex-row flex-wrap justify-center gap-2">
          <div className="flex flex-col items-center">
            <img
              src="/images/home/CreamOfCrop/Top5hacksADHD.png"
              alt="Shine Ai Training Video thumbnail"
              className="min-h-[300px] min-w-[170px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
              Motivational
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/home/CreamOfCrop/Marie Curie.png"
              alt="Shine Ai Training Video thumbnail"
              className="min-h-[300px] min-w-[170px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
              Information
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/home/CreamOfCrop/ShineRanker.png"
              alt="Shine Ai Training Video thumbnail"
              className="min-h-[300px] min-w-[170px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
              Promotional
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/home/CreamOfCrop/Samuel.png"
              alt="Shine Ai Training Video thumbnail"
              className="min-h-[300px] min-w-[170px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
              Storytelling
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/home/CreamOfCrop/Why Indonesians dont speak dutch.png"
              alt="Shine Ai Training Video thumbnail"
              className="min-h-[300px] min-w-[170px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
              Trivia
            </button>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/home/CreamOfCrop/uranium.png"
              alt="Shine Ai Training Video thumbnail"
              className="min-h-[300px] min-w-[170px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white global-outlined-btn-1">
              Recent Viral
            </button>
          </div>
        </div> */}

      </section>



      {/* Stunning Image Outputs */}
      <section className="flex flex-col lg:flex-row py-20 px-[10%] xl:px-[20%] gap-x-20 xl:gap-x-28">
        <div className="w-full lg:w-[50%] flex flex-col py-2 mb-12 lg:mb-0 items-center">
          <h3 className="mb-6 text-center global-header-text-2">Stunning Image Outputs</h3>
          <p className="max-w-[400px] text-center mb-10 lg:mb-20 global-header-text-3">Our image prompt results are astounding and seamless. No need further editing.</p>
          <div className="grid grid-cols-3 gap-3">
            <img
              src="/images/global/SampleImages/penguins.png"
              alt="penguins image"
              width="138px"
              className="max-h-[110px] md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px] stunning-images-grid-img border"
            />
            <img
              src="/images/global/SampleImages/deer-2.png"
              alt="deer image"
              width="138px"
              className="max-h-[110px] md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px] stunning-images-grid-img border"
            />
            <img
              src="/images/global/SampleImages/cat.jpg"
              alt="cat image"
              width="138px"
              className="max-h-[110px] md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px] stunning-images-grid-img border"
            />
            <img
              src="/images/global/SampleImages/eagle.jpg"
              alt="eagle image"
              width="138px"
              className="max-h-[110px] md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px] stunning-images-grid-img border"
            />
            <img
              src="/images/global/SampleImages/piglet.png"
              alt="piglet image"
              width="138px"
              className="max-h-[110px] md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px] stunning-images-grid-img border"
            />
            <img
              src="/images/global/SampleImages/panda.png"
              alt="panda image"
              width="138px"
              className="max-h-[110px] md:max-h-[150px] lg:max-h-[100px] 2xl:max-h-[150px] stunning-images-grid-img border"
            />
          </div>
        </div>
        <div className="w-full lg:max-w-[50%] 2xl:max-w-[37%] flex flex-col items-center justify-center py-12 px-8 rounded-md global-bg-to-dark-purple">
          <h3 className="mb-10 text-center font-bold text-[24px] global-text-to-light-blue">Try it yourself!</h3>
          <p className="mb-14 text-center global-header-text-3">Type your desired images for your upcoming videos.</p>

          <TextfieldTooltip inputClassName="w-full h-[50px] mb-2 text-center stunning-images-input" />
          
          <a 
            href="https://chasereiner.thrivecart.com/shine-ranker-deal"
            rel="noreferrer"
            target="_blank" 
            className="w-full h-[50px] flex justify-center items-center global-primary-btn"
          >
            Generate Your Videos
          </a>
        </div>
      </section>



      {/* Our Amazing Features */}
      <section className="px-[5%] md:px-[10%] 2xl:px-[20%]">
        <div className="pt-36 pb-24">
          <div className="flex flex-col items-center">
            <h3 className="w-full mb-5 md:text-center global-header-text-1">Amazing Features</h3>
            <h2 className="max-w-[516px] mb-5 md:text-center global-header-text-2">
              Some of the Best Perks only here at Shine Ranker
            </h2>
            <p className="w-full md:max-w-[516px] md:text-center global-header-text-3">
              To get your content creation and channel growing, we have created these pillars for you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-16">  
            <div className="flex flex-col items-center text-center amazing-features-grid-card">
              <img
                src="/svg/home/key.svg"
                alt="key Icon"
                className="self-center"
              />
              <h4 className="max-w-[220px] mt-12 card-title">
                Access to all Shine Features
              </h4>
            </div>

            <div className="flex flex-col items-center text-center amazing-features-grid-card">
              <img
                src="/svg/home/chat.svg"
                alt="Chat Icon"
                className="self-center"
              />
              <h4 className="max-w-[350px] mt-12 card-title">
                Private Community chat in Messenger
              </h4>
            </div>

            <div className="flex flex-col items-center text-center amazing-features-grid-card">
              <img
                src="/svg/home/support.svg"
                alt="chat support Icon"
                className="self-center"
              />
              <h4 className="max-w-[220px] mt-12 card-title">
                Email and Chat Support
              </h4>
            </div>

            <div className="flex flex-col items-center text-center amazing-features-grid-card">
              <img
                src="/svg/home/update.svg"
                alt="recycle Icon"
                className="self-center"
              />
              <h4 className="max-w-[220px] mt-12 card-title">
                Exclusive Shinefy Updates
              </h4>
            </div>

            <div className="flex flex-col items-center text-center amazing-features-grid-card">
              <img
                src="/svg/home/vip.svg"
                alt="crown Icon"
                className="self-center"
              />
              <h4 className="mt-12 card-title">
                VIP Group <br/> Perks & Privileges
              </h4>
            </div>

            <div className="flex flex-col items-center text-center amazing-features-grid-card">
              <img
                src="/svg/home/book.svg"
                alt="open book Icon"
                className="self-center"
              />
              <h4 className="max-w-[220px] mt-12 card-title">
                Email and Chat Support
              </h4>
            </div>

          </div>
        </div>
      </section>


      {/* *** Limited Time Offer section *** */}
      <section className="limited-time-offer-container">
        <LimitedTimeOffer />
      </section>


      {/* *** Credibility *** */}
      <section>
        <div className="flex flex-col lg:flex-row flex-col-reverse gap-y-12 mt-0 lg:my-14 gap-x-4 lg:gap-x-10 xl:gap-x-16 justify-end">
          
          {CredibilitySectionGrid(false)}

          <div className="lg:py-10 credibility-right-container">
            <div className="credibility-right-content-container">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-start credibility-right-content-header">
                <h4 className="mb-4 xl:mb-10 global-header-text-3">Credibility</h4>
                <h3 className="max-w-[320px] mb-4 xl:mb-10 global-header-text-2">
                  Our Numbers Walk the Talk
                </h3>
                <p className="max-w-[460px] mb-8 xl:mb-8 global-header-text-3">
                  A number of users have witnessed massive
                  changes in their following, engagements and
                  earnings as they embarked on this new journey
                  using Shine Ranker
                </p>
                <a
                  href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                  rel="noreferrer"
                  target="_blank"
                  className="w-10/12 md:w-6/12 lg:w-auto flex items-center px-6 home-primary-btn"
                >
                  Start Creating Today
                </a>
              </div>

              {/* {CredibilitySectionGrid(true)} */}

            </div>
          </div>

        </div>
      </section>


      {/* *** Subscribe for Freebies *** */}
      <section className="relative awesome-freebies-custom-bg">
        <div className="relative h-full flex flex-col items-center mx-[5%] md:mx-[10%] 2xl:mx-[20%] pt-96 pb-80 justify-center z-20">
          <h4 className="mb-8 text-center global-header-text-1">Subscribe for Awesome Freebies</h4>
          <h3 className="max-w-[546px] mb-8 text-center global-header-text-2">
            Get the latest updates on the use of AI Tools in business
          </h3>
          <p className="mb-7 global-header-text-3">
            A Limited-Time Offer
          </p>
          
          <div className="flex flex-col md:flex-row subscribe-for-freebies-form">
            <input
              type="text"
              name="promo_code"
              placeholder="enter your promo code here"
              className="min-h-[50px] md:min-w-[320px]"
            />
            <a
              href="https://app.shineranker.com/signup_free/"
              type="button"
              rel="noreferrer"
              target="_blank"
              className="flex justify-center py-4 px-5 home-primary-btn"
            >
              Sign Up
            </a>
          </div>
        </div>

        <div className="absolute h-full w-full xl:w-[90%] 2xl:w-[70%] top-0 xl:mx-[5%] 2xl:mx-[15%] overflow-hidden z-10">
            <img
              src="/images/home/Planets/Purple Saturn.png"
              alt="Shine Ai Training Video thumbnail"
              // width="334px"
              // height="218px"
              className="absolute top-[8rem] lg:top-[11rem] left-[-12rem] lg:left-[4rem]"
            />

            <img
              src="/images/home/Planets/Purple Drwaf Planet.png"
              alt="Shine Ai Training Video thumbnail"
              // width="18px"
              // height="18px"
              className="absolute top-[3rem] lg:top-[5rem] right-[6rem] lg:right-[21.5rem]"
            />

            <img
              src="/images/home/Planets/Pink Moon.png"
              alt="Shine Ai Training Video thumbnail"
              // width="334px"
              // height="218px"
              className="absolute top-[3rem] right-[-8rem] lg:right-[7rem]"
            />

            <img
              src="/images/home/Planets/Chrome Moon.png"
              alt="Shine Ai Training Video thumbnail"
              // width="334px"
              // height="218px"
              className="absolute top-[26rem] right-[2rem] lg:right-[7rem]"
            />

            <img
              src="/images/home/Planets/Purple Moon.png"
              alt="Shine Ai Training Video thumbnail"
              // width="334px"
              // height="218px"
              className="absolute bottom-[6rem] left-[49.5%]"
            />
        </div>
      </section>


      {/* *** Testimonials *** */}
      <section className="my-28 px-[10%] xl:px-[19%] testimonial-section">
        <div className="flex flex-col items-center mb-10">
          <h4 className="mb-5 global-header-text-1">Testimonials</h4>
          <h3 className="max-w-[220px] md:max-w-[520px] text-center mb-5 global-header-text-2">
            Hear it from Our Users
          </h3>
        </div>

        <div className="relative">
          <Swiper
            // slidesPerView={4}
            // spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1700: {
                slidesPerView: 4,
                spaceBetween: 8,
              },
            }}
            modules={[Autoplay]}
            className="testimonial-carousel-container z-30"
          >
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 1.png" alt="tetimonial 1 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">VincentK</p>
                <p className="text-white mt-1">Content Creator</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  	&quot;One of the biggest barriers was content creation. This tool is amazing brother. I’m genuinely thrilled to help market it.&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 2.png" alt="tetimonial 2 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">Alchemist</p>
                <p className="text-white mt-1">Reels Creator</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  &quot;JUST CHECKED MY FACEBOOK ANALYTICS THE PAST 28 DAYS AND GOT 16K VIEWS!!!&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 3.png" alt="tetimonial 3 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">Chance Reynolds</p>
                <p className="text-white mt-1">Reels Creator</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  &quot;It’s a totally faceless way to make amazing videos. I’m using them to sell affiliate physical products on TikTok, and they’re working!&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 4.png" alt="tetimonial 4 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">Easy Internet Mktng</p>
                <p className="text-white mt-1">Reels Creator</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  &quot;I MADE TWO SALES ON THE FIRST OF THIS MONTH AND ANOTHER ONE THIS MORNING.&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 5.png" alt="tetimonial 5 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">ComedyMarketer</p>
                <p className="text-white mt-1">Youtube Shorts Creator</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  &quot;I HAD THE TRIAL OF SHINE RANKER YESTERDAY AND LOVE IT, I&apos;M BLOWN AWAY BY THE QUALITY.&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 6.png" alt="tetimonial 6 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">Tommy Seilheimer</p>
                <p className="text-white mt-1">Content Creator & Manager</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  &quot;I USED IT FOR A CLIENT TODAY AND I CLOSE AT $100K A YEAR!&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 7.png" alt="tetimonial 7 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">Lisa Phillips</p>
                <p className="text-white mt-1">TikTok Video Creator</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  &quot;I POSTED MY FIRST FEW VIDEOS MADE WITH SHINE RANKER. ONE OF THEM GOT 843 VIEWS!!&quot;
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[80%] md:w-[60%] lg:w-auto flex flex-col px-10 pb-12 text-center testimonial-card">
                <img src="/images/home/TestimonialHeads/Testimonial Head 8.png" alt="tetimonial 8 profile" height="150" className="testimonial-card-profile-img" />
                <p className="text-white mt-5">Anthony Kell</p>
                <p className="text-white mt-1">Content Creator & Manager</p>
                <div className="flex flex-row justify-center mt-5">
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                    <img src="/svg/home/star.svg" alt="star icon" height="24" />
                </div>
                <p className="text-white mt-5">
                  &quot;Gosh, it used to take me a couple of hours to create something like this. I’m totally stoked now.&quot;
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="w-full h-full top-0 left-0 absolute flex justify-between">
            <div className="w-[10%] z-40 testimonial-side-shadow-left"></div>
            <div className="w-[10%] z-40 testimonial-side-shadow-right"></div>
          </div>
        </div>


      </section>
      

      {/* *** Social links section *** */}
      <section className="px-[5%] xl:px-[18%] limited-time-offer-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-12 lg:py-24 space-x-0 lg:space-x-28 xl:space-x-6">
            <div className="text-center lg:text-start mb-12 lg:mb-0 px-4 md:px-0">
                <h2 className="mb-5 global-header-text-1">Follow us on our socials</h2>
                <h1 className="mb-5 md:mb-4 global-header-text-2">Let’s Get Connected!</h1>
                <p className="global-header-text-3">
                  Strong bonds make a team
                </p>
            </div>
            <div className="flex justify-center gap-2 md:gap-6 xl:gap-8">
              <SocialLinksButtons />
          </div>
        </div>
      </section>
      

      {/* *** Join Us section *** */}
      <section className="join-us-section-container">
        <div className="flex flex-row justify-center join-us-content-container">
          <div
            className="max-w-[550px] hidden lg:block self-center mr-[-6rem] z-10"
            ref={footerAnimationContainer}
          />

          <div className="flex items-center z-20">
            <div className="p-8 pb-12 md:pb-10 join-us-right-container w-full lg:w-96">
              <p className="mb-5 home-card-header-small">Join us today!</p>
              <h3 className="mb-5 global-header-text-2">
                Start Creating <br/>
                binge-worthy <br />
                AI reels
              </h3>
              <p className="mb-3 home-card-header-content">Grow your audience and view count in <br/> as fast as 7 days.</p>
              <form className="">
                <input
                  type="text"
                  name="user_email"
                  placeholder="Your Email"
                  className="w-full mb-3 home-input-left-placeholder"
                />
                <input
                  type="password"
                  name="user_password"
                  placeholder="Your Password"
                  className="w-full mb-3 home-input-left-placeholder"
                />
                <div className="flex flex-col lg:flex-row mb-3 gap-4">
                  <a 
                    href="https://app.shineranker.com/signup_free/"
                    rel="noreferrer"
                    target="_blank" 
                    className="w-full text-center py-3 home-primary-btn"
                  >
                    Create an account
                  </a>
                  {/* <button type="button" onClick={handleLogin} className="px-4 whitespace-nowrap home-outlined-btn">
                    Log in
                  </button> */}
                  <a 
                    href="https://app.shineranker.com/"
                    rel="noreferrer"
                    target="_blank"
                    className="px-4 flex items-center whitespace-nowrap home-outlined-btn"
                  >
                    Log in
                  </a>
                </div>
                <a href="/pricing" className="hidden md:inline home-link">
                  Pricing Plan
                  <i className="fa-solid fa-chevron-right text-white ml-3 mt-1"></i>
                </a>
              </form>
            </div>
          </div>

        </div>
      </section>

      <FooterPage />
    </>
  );
}
