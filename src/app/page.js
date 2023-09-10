"use client";

import lottie from "lottie-web";
import { createRef, useEffect, useState } from "react";

import FooterPage from "@/components/Footer/Footer";
import ToggleButton from "@/components/ToggleButton";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";
import BackToTopButton from "@/components/BackToTopButton";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// CSS Imports
import "../styles/home.css";
import "../styles/hometextanimation.css";
import "../styles/pricing.css";


const CredibilitySectionGrid = (ismobile) => {
  return (
    // <div className={`grid grid-cols-1 md:grid-cols-2 lg:gap-y-16 gap-y-20 lg:gap-x-12 xl:gap-20 items-center ${ismobile ? "credibility-grid-mobile" : "credibility-grid"}`}>
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-20 lg:gap-x-12 xl:gap-20 items-center`}>
      <div className={`flex flex-col text-center ${!ismobile ? "credibility-grid-cad-accent" : ""}`}>
        <img
          src="/svg/home/ai-face.svg"
          alt="ai face icon"
          height="80px"
          className="self-center mb-8"
        />
        <h1 className="our-tools-right-content-title py-5 mb-4">
          125,879
        </h1>
        <p className="our-tools-right-content-text">
          AI Videos Created
        </p>
      </div>
      <div className="flex flex-col text-center">
        <img
          src="/svg/home/profile.svg"
          alt="default profile avatar icon"
          height="80px"
          className="self-center mb-8"
        />
        <h1 className="our-tools-right-content-title py-5 mb-4">
          13,988
        </h1>
        <p className="our-tools-right-content-text">
          Sign Ups
        </p>
      </div>
      <div className={`flex flex-col text-center ${!ismobile ? "credibility-grid-cad-accent" : ""}`}>
        <img
          src="/svg/home/bot.svg"
          alt="Shine AI robot head icon"
          height="80px"
          className="self-center mb-8"
        />
        <h1 className="our-tools-right-content-title py-5 mb-4">
          12,678
        </h1>
        <p className="our-tools-right-content-text">
          Happy Clients
        </p>
      </div>
      <div className="flex flex-col text-center">
        <img
          src="/svg/home/ellipsis.svg"
          alt="ellipsis icon"
          height="80px"
          className="self-center mb-8"
        />
        <h1 className="our-tools-right-content-title py-5 mb-4">
          272,532
        </h1>
        <p className="our-tools-right-content-text">
          Ideas Created
        </p>
      </div>
    </div>
  )
}


const PricingPlansMobile = (selectedOption) => {
  const [expanded, setExpanded] = useState(false);

  const handleOpenClosePricingPlan = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className="flex xl:hidden flex-col justify-center items-center pricing-plan-cards-container">

      <div className="pricing-plan-card-mobile">
        <div className="mb-6 pricing-plan-title">
          <h2 className="mb-8 pricing-plan-title-1">Spark Basic</h2>
          {selectedOption === "monthly" ? (
            <h1 className="pricing-plan-title-2 mt-5">$59</h1>
          ) : (
            <h1 className="pricing-plan-title-2 mt-5">$600</h1>
          )}
          {selectedOption === "monthly" ? (
            <p className="pricing-plan-title-3">per month</p>
          ) : (
            <p className="pricing-plan-title-3">per year</p>
          )}
        </div>
        
        <Accordion 
          expanded={expanded === 'spark-basic'} 
          onChange={handleOpenClosePricingPlan('spark-basic')} 
          sx={{bgcolor:"transparent", boxShadow:0}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#FFF"}} />}
            aria-controls="spark-basic-bh-content"
            id="spark-basic-bh-header"
            sx={{ flexDirection: "column" }}
          >
            <Typography sx={{color:"#FFF"}}>
              See Inclusions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="pricing-plan-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">5 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  5,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  5,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Leads
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Keyword Research
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Chat</p>
              </div>
            </div>
            
          </AccordionDetails>
        </Accordion>
        <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
          <a href="/pricing" className="pricing-plan-footer-button">
            Choose Plan
          </a>
          <p className="pricing-plan-footer-text">
            save $108.12 per year
          </p>
        </div>
      </div>

      <div className="pricing-plan-card-mobile">
        <div className="mb-6 pricing-plan-title">
          <h2 className="mb-8 pricing-plan-title-1">Flare Plus</h2>
          {selectedOption === "monthly" ? (
            <h1 className="pricing-plan-title-2 mt-5">$112</h1>
          ) : (
            <h1 className="pricing-plan-title-2 mt-5">$1,140</h1>
          )}
          {selectedOption === "monthly" ? (
            <p className="pricing-plan-title-3">per month</p>
          ) : (
            <p className="pricing-plan-title-3">per year</p>
          )}
        </div>
        
        <Accordion 
          expanded={expanded === 'flare-plus'} 
          onChange={handleOpenClosePricingPlan('flare-plus')} 
          sx={{bgcolor:"transparent", boxShadow:0}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#FFF"}} />}
            aria-controls="flare-plus-bh-content"
            id="flare-plus-bh-header"
            sx={{ flexDirection: "column" }}
          >
            <Typography sx={{color:"#FFF"}}>
              See Inclusions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            
            <div className="pricing-plan-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">10 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  10,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  10,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Leads
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Keyword Research
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Chat</p>
              </div>
            </div>
              
          </AccordionDetails>
        </Accordion>

        <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
          <a href="/pricing" className="pricing-plan-footer-button">
            Choose Plan
          </a>
          <p className="pricing-plan-footer-text">
            save $204.24 per year
          </p>
        </div>
      </div>
      
      <div className="pricing-plan-card-mobile">
        <div className="mb-6 pricing-plan-title">
          <h2 className="mb-8 pricing-plan-title-1">Shine Pro</h2>
          {selectedOption === "monthly" ? (
            <h1 className="pricing-plan-title-2 mt-5">$219</h1>
          ) : (
            <h1 className="pricing-plan-title-2 mt-5">$2,208</h1>
          )}
          {selectedOption === "monthly" ? (
            <p className="pricing-plan-title-3">per month</p>
          ) : (
            <p className="pricing-plan-title-3">per year</p>
          )}
        </div>
        
        <Accordion 
          expanded={expanded === 'shine-pro'} 
          onChange={handleOpenClosePricingPlan('shine-pro')} 
          sx={{bgcolor:"transparent", boxShadow:0}}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{color:"#FFF"}} />}
            aria-controls="shine-pro-bh-content"
            id="shine-pro-bh-header"
            sx={{ flexDirection: "column" }}
          >
            <Typography sx={{color:"#FFF"}}>
              See Inclusions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            
              <div className="pricing-plan-checklist mt-10 mb-5">
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">20 Projects</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    20,000 Shine Audits
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    20,000 Keywords Research Usages
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Unlimited Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Unlimited Content Editor
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Unlimited Leads
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Unlimited AI Keywords
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Unlimited AI Chat
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Project Dashboard
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Keyword Research
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Traffic Checker
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">Shine Audit</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">Content Editor</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">
                    Leads List & Widget
                  </p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">AI Keywords</p>
                </div>
                <div className="flex gap-2 mb-3">
                  <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                  <p className="pricing-plan-checklist-text">AI Chat</p>
                </div>
              </div>
              
          </AccordionDetails>
        </Accordion>

        <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
          <a href="/pricing" className="pricing-plan-footer-button">
            Choose Plan
          </a>
          <p className="pricing-plan-footer-text">
            save $420.00 per year
          </p>
        </div>
      </div>

    </div>
  );
}



export default function Home() {
  let animationContainer = createRef();
  const [selectedOption, setSelectedOption] = useState("monthly");

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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const toPricingPage = () => {
    console.log("To pricing page...")
  }

  const handleLogin = () => {
    console.log("Login ...")
  }

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
            
            <p className="max-w-[720px] mt-5 mb-8 lg:mb-14 hero-header-content">
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

            <div className="flex lg:block">
              <a
                href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                className="w-full text-center lg:text-start lg:px-5 py-4 mt-5 home-primary-btn"
              >
                Let&apos;s Get Started
                <i className="fa-solid fa-chevron-right text-white ml-2 lg:ml-14"></i>
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

      {/* Hero Mobile */}
      <section className="hidden hero-section-mobile">
        <div className="px-5 hero-container-mobile">
          <h1 className="mb-10 hero-header">
            Fuel your <br/>
            <span className="hero-header-accent">Online Growth</span>
          </h1>
          <p className="mb-16 hero-content">
            Unleash the power of SEO to skyrocket your website's visibility, drive massive organic traffic, and dominate the search engine rankings.
          </p>
          <div className="flex flex-col lg:flex-row mb-3 gap-4">
            <div className="flex lg:block">
              <a
                href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                className="w-full text-center lg:text-start lg:px-5 py-3 mt-5 home-primary-btn"
              >
                Let&apos;s Get Started
              </a>
            </div>
            <button onClick={toPricingPage} className="px-4 whitespace-nowrap home-outlined-btn">
              Pricing Plan
            </button>
          </div>
        </div>
      </section>

      {/* Founders Message */}
      <section className="hidden p-5">
        <div className="flex flex-row gap-x-5 p-5 items-center mt-[-9rem] founders-message-container">
          <img src="/images/home/dummy-profile-male.png" alt="founders profile picture" className="founders-img" />

          <div className="">
            <p className="mb-2 text-content">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
            <p className="text-content">
              John Flemming, <br/>
              Co-Owner of ExampleReels
            </p>
          </div>
        </div>
      </section>

      {/* How to use Shine Ranker App */}
      <section className="pb-16 px-[5%] xl:px-[18%] how-to-use-shine-ai-section ">
        <div className="flex flex-col items-center gap-5 mt-[-9rem]">
          <h3 className="w-full mb-2 md:text-center home-section-header-small">How To Use shineAi App</h3>
          <h2 className="max-w-[516px] mb-2 md:text-center home-section-header-big">
            Watch this video and Start making money online
          </h2>
          <p className="max-w-[516px] md:text-center home-section-header-content ">
            Watch the free training video and start earning money today even if you are not an expert
          </p>
          <img
            src="/images/global/training-video.png"
            alt="Shine Ai Training Video thumbnail"
            width="480px"
            height="270px"
            className="my-8 home-training-image"
          />
          <button className="w-full md:w-72 mb-5 px-6 home-secondary-btn">
            Generate Your Videos Today
          </button>
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
            <h3 className="w-full mb-5 md:text-center home-section-header-small">Our Powerful Tools</h3>
            <h2 className="mb-5 md:text-center home-section-header-big">Boost Your Online Growth</h2>
            <p className="md:text-center max-w-[516px] home-section-header-content">
              These tools are fool-proof easy-to-use and navigate that even
              first time users can start creating tons of video content and
              earn in a matter of minutes.
            </p>
          </div>

          <div className="flex flex-col flex-col-reverse lg:flex-row justify-center lg:gap-16">
            <div className="flex flex-col">
              <img
                src="/images/home/bouncing-robot-head.png"
                alt="Shine Ai Bouncing Robot Head"
                className="z-10 self-center lg:ml-6 our-tools-left-content-ai-image"
              />
              <div className="flex flex-col items-center md:items-start 2xl:ml-12 pt-44 lg:pt-60 pb-14 md:pb-10 px-5 md:px-10 our-tools-left-content-card">
                <p className="w-full mb-5 text-center md:text-start home-card-header-small">Quality creations for content</p>
                <h1 className="mb-5 text-center md:text-start home-section-header-big">
                  Start propelling your growth today.
                </h1>
                <p className="mb-5 text-center md:text-start home-card-header-content">
                  With our tools, you can witness rapid audience and numerical
                  growth in as little as 7 days.
                </p>
                <input
                  type="text"
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
        

      {/* Our pricing plan */}
      <section>
        <div className="pricing-plan-header-bg">
          <div className="flex flex-col items-center pt-16 lg:pt-48 pb-0 xl:pb-24 pricing-plan-header-container">
            <h3 className="mb-5 home-section-header-small">Our Pricing Plan</h3>
            <h2 className="max-w-[620px] mb-5 text-center home-section-header-big">
              Get access to all features of these Powerful AI Tools and be
              ready to skyrocket your online growth
            </h2>
            <p className="max-w-[410px] mb-5 text-center home-section-header-content">
              Simplify your data collection process with our efficient and
              user-friendly tool.
            </p>
            <div className="flex justify-center align-center mt-10 mb-0 xl:mb-10">
              <ToggleButton
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
              />
            </div>
          </div>
        </div>

        {PricingPlansMobile(selectedOption)}

        <div className="hidden xl:flex flex-col xl:flex-row justify-center items-center gap-10 pricing-plan-cards-container">
          <div className="pricing-plan-card">
            <div className="pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Spark Basic</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$59</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$600</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            <div className="pricing-plan-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">5 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  5,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  5,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Leads
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Keyword Research
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $108.12 per year
              </p>
            </div>
          </div>

          <div className="pricing-plan-card">
            <div className="pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Flare Plus</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$112</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$1,140</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            <div className="pricing-plan-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">10 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  10,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  10,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Leads
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Keyword Research
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-plan-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $204.24 per year
              </p>
            </div>
          </div>

          <div className="pricing-plan-card">
            <div className="pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Shine Pro</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$219</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$2,208</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            <div className="pricing-plan-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">20 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  20,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  20,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Leads
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Keyword Research
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $420.00 per year
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Our Amazing Features */}
      <section>
        <div className="py-24 amazing-features-container">
          <div className="flex flex-col items-center">
            <h3 className="w-full mb-5 md:text-center home-section-header-small">Amazing Features</h3>
            <h2 className="max-w-[516px] mb-5 md:text-center home-section-header-big">
              Great savings when you get Shine Ranker PRO Today!
            </h2>
            <p className="w-full md:max-w-[516px] md:text-center home-section-header-content">
              Get a <span className="global-text-to-light-green">total value of $2147</span> for only <span className="global-text-to-light-green">$219</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-y-12 mt-16">  
            <div className="flex flex-col text-center amazing-features-grid-card">
              <img
                src="/svg/home/key.svg"
                alt="key Icon"
                className="self-center"
              />
              <h4 className="mt-12 card-title">
                Access to all Shine Ranker Features
              </h4>
            </div>

            <div className="flex flex-col text-center amazing-features-grid-card">
              <img
                src="/svg/home/chat.svg"
                alt="Chat Icon"
                className="self-center"
              />
              <h4 className="mt-12 card-title">
                Private Community chat in Messenger
              </h4>
            </div>

            <div className="flex flex-col text-center amazing-features-grid-card">
              <img
                src="/svg/home/support.svg"
                alt="chat support Icon"
                className="self-center"
              />
              <h4 className="mt-12 card-title">
                Email and Chat Support
              </h4>
            </div>

            <div className="flex flex-col text-center amazing-features-grid-card">
              <img
                src="/svg/home/update.svg"
                alt="recycle Icon"
                className="self-center"
              />
              <h4 className="mt-12 card-title">
                Shine Ranker Updates
              </h4>
            </div>

            <div className="flex flex-col text-center amazing-features-grid-card">
              <img
                src="/svg/home/vip.svg"
                alt="crown Icon"
                className="self-center"
              />
              <h4 className="mt-12 card-title">
                VIP Group <br /> Perks & Privileges
              </h4>
            </div>

            <div className="flex flex-col text-center amazing-features-grid-card">
              <img
                src="/svg/home/book.svg"
                alt="open book Icon"
                className="self-center"
              />
              <h4 className="mt-12 card-title">
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
                <h4 className="mb-4 xl:mb-10 home-section-header-content">Credibility</h4>
                <h3 className="max-w-[320px] mb-4 xl:mb-10 home-section-header-big">
                  Our Numbers Walk the Talk
                </h3>
                <p className="max-w-[460px] mb-8 xl:mb-8 home-section-header-content">
                  A number of users have witnessed massive
                  changes in their following, engagements and
                  earnings as they embarked on this new journey
                  using Shine Ranker
                </p>
                <button className="w-10/12 md:w-6/12 lg:w-auto px-6 home-primary-btn">
                  Start Creating Today
                </button>
              </div>

              {/* {CredibilitySectionGrid(true)} */}

            </div>
          </div>

        </div>
      </section>


      {/* *** Subscribe for Freebies *** */}
      <section className="my-28 subscribe-for-freebies-section">
        <div className="flex flex-col items-center">
          <h4 className="mb-5 text-center home-section-header-small">Subscribe for Awesome Freebies</h4>
          <h3 className="max-w-[546px] mb-5 text-center home-section-header-big">
            Get the latest updates on the use of AI Tools in business
          </h3>
          <p className="mb-7 home-section-header-content">
            A Limited-Time Offer
          </p>
          
          <div className="flex flex-col md:flex-row subscribe-for-freebies-form">
            <input
              type="text"
              placeholder="enter your promo code here"
              className="h-14"
            />
            <button className="px-8 home-primary-btn">
              Sign Up
            </button>
          </div>
        </div>
      </section>


      {/* *** Testimonials *** */}
      <section className="my-28 testimonial-section">
        <div className="flex flex-col items-center mb-10">
          <h4 className="mb-5 home-section-header-small">Testimonials</h4>
          <h3 className="max-w-[220px] md:max-w-[520px] text-center mb-5 home-section-header-big">
            Hear it from Our Users
          </h3>
        </div>

        <Swiper
          // slidesPerView={4}
          // spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 5,
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
          className="testimonial-carousel-container"
        >
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads.png" alt="tetimonial male profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads (1).png" alt="tetimonial female profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star outline.svg" alt="outlined star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads (2).png" alt="tetimonial female profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads (3).png" alt="tetimonial male profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads.png" alt="tetimonial male profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads (1).png" alt="tetimonial female profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star outline.svg" alt="outlined star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads (2).png" alt="tetimonial female profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col px-10 pb-12 text-center testimonial-card">
              <img src="/images/home/Testimonial Heads (3).png" alt="tetimonial male profile" height="150" className="testimonial-card-profile-img" />
              <p className="text-white mt-5">Client’s Name</p>
              <p className="text-white mt-1">Position of Company</p>
              <div className="flex flex-row justify-center mt-5">
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
                  <img src="/svg/home/star.svg" alt="star icon" height="24" />
              </div>
              <p className="text-white mt-5">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
            </div>
          </SwiperSlide>
        </Swiper>
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
            <div className="flex justify-center gap-2 md:gap-8">
              <a href="https://www.youtube.com/@Realchasereiner" target="blank" className="self-center">
                <div className="socials-youtube"></div>
              </a>
              <a href="" target="blank" className="self-center">
                <div className="socials-tiktok"></div>
              </a>
              <a href="https://www.facebook.com/shineranker" target="blank" className="self-center">
                <div className="socials-facebook"></div>
              </a>
              <a href="https://www.instagram.com/shineranker/" target="blank" className="self-center">
                <div className="socials-instagram"></div>
              </a>
              <a href="https://discord.gg/RZFNgnYa" target="blank" className="self-center">
                <div className="socials-discord"></div>
              </a>
              <a href="https://twitter.com/ShineRanker" target="blank" className="self-center">
                <div className="socials-x1"></div>
              </a>
          </div>
        </div>
      </section>
      

      {/* *** Join Us section *** */}
      <section className="join-us-section-container">
        <div className="grid lg:grid-cols-2 join-us-content-container">

          <img src="/images/home/shine-ai-robot.png" alt="shine ai robot running" height="250" className="self-center" />
          
          <div className="flex items-center">
            <div className="p-8 pb-12 md:pb-10 join-us-right-container w-full lg:w-96">
              <p className="mb-5 home-card-header-small">Join us today!</p>
              <h3 className="mb-5 home-section-header-big">
                Start Creating <br/>
                binge-worthy <br />
                AI reels
              </h3>
              <p className="mb-3 home-card-header-content">Grow your audience and view count in <br/> as fast as 7 days.</p>
              <form className="">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="w-full mb-3 home-input-left-placeholder"
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  className="w-full mb-3 home-input-left-placeholder"
                />
                <div className="flex flex-col lg:flex-row mb-3 gap-4">
                  <a href="/signup" className="w-full text-center py-3 home-primary-btn">
                    Create an account
                  </a>
                  <button type="button" onClick={handleLogin} className="px-4 whitespace-nowrap home-outlined-btn">
                    Log in
                  </button>
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

      
      {/* <BackToTopButton /> */}

      <FooterPage />
    </>
  );
}
