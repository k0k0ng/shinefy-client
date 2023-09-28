"use client";

import React, { createRef, useEffect } from "react";
import lottie from "lottie-web";

import FooterPage from "@/components/Footer/Footer";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import "../../styles/tools.css";
import "@/styles/components.contacts.css";

export default function Tools() {
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
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">
            shineAi.tools
          </h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Powerful AI Tools
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last Updated 25 July, 2023
          </p>
        </div>
      </header>

      <section className="global-section-container-under-header px-[5%] pb-10 md:pb-20 xl:px-[18%] xl:pb-0">
        <div className="global-content-container-under-header mb-14">
          <a href="/">Home</a>
          <span> {`>`} </span>
          <a href="#" className="global-category-current">
            Tools
          </a>
        </div>

        <div className="mt-16 flex flex-col items-center justify-evenly md:flex-row">
          <div className="w-full max-w-[750px]">
            <h2 className="tools-small-text-1 mb-6">
              Our Shiny Products are promising
            </h2>
            <h1 className="global-header-text-2 mb-6">
              App tools like never before!
            </h1>
            <p className="global-header-text-3 max-w-[720px]">
              Experience the future of content creation with AI-powered tools
              that automate video production, allowing you to generate engaging
              videos and start earning revenue in as little as 7 days. Embrace
              the efficiency and profitability of this revolutionary technology,
              as it empowers you to focus on content strategy while the AI
              handles the rest.
            </p>
          </div>
          <div>
            <div className="w-72 md:w-auto" ref={animationContainer} />
          </div>
        </div>
      </section>

      <section className="global-bg-to-purple flex w-full items-center justify-center px-[5%] xl:px-[18%]">
        <div className="flex w-full flex-col items-center py-20 text-center">
          <h2 className="global-header-text-1 mb-6">Shine Ranker Tools</h2>
          <h1 className="global-header-text-2 mb-6">
            App Tools Like Never Before!
          </h1>
          <p className="global-header-text-3 max-w-[68rem]">
            Introducing the revolutionary one-click app that revolutionizes
            video content creation: With four powerful tools at your disposal,
            extracting data from websites, automating video creation using
            collected data, captivating audiences with keyword-driven videos,
            and crafting personalized storytelling through image and voice
            matching has never been easier. Say goodbye to time-consuming
            editing and hello to instant, engaging video content with just a
            single click.
          </p>
        </div>
      </section>

      <section className="px-[5%] xl:px-[18%]">
        <div className="flex flex-col gap-y-24 py-20">
          <div className="flex w-full flex-col items-center justify-evenly gap-20 lg:flex-row lg:gap-10">
            <div className="">
              <div>
                <img
                  src="/svg/tools/globe.svg"
                  alt="earth globe icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">
                Website Scraper Tool
              </h1>
              <p className="tools-small-text-1 max-w-[38rem]">
                Our Web Scraper Tool extracts data from websites based on
                user-provided keywords. It provides up to 200 results and allows
                you to download data as spreadsheet files.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/images/tools/tools-webscrape.png"
                alt="Shine Ranker Web Scraper Tool"
                className="tools-img-shadow w-[95%] md:w-[500px] lg:w-[338px]"
              />
            </div>
          </div>

          <div className="flex w-full flex-col flex-col-reverse items-center justify-evenly gap-20 lg:flex-row">
            <div className="flex flex-row gap-x-2">
              <div className="flex flex-row justify-center gap-2">
                <img
                  src="/images/tools/portrait-video-thumbnail-1.png"
                  alt="Shine Ranker Video Generator"
                  className="tools-img-shadow w-[48%] rounded md:w-[252px] lg:w-[172px]"
                />
                <img
                  src="/images/tools/portrait-video-thumbnail-2.png"
                  alt="Shine Ranker Video Generator"
                  className="tools-img-shadow w-[48%] rounded md:w-[252px] lg:w-[172px]"
                />
              </div>
            </div>
            <div className="">
              <div>
                <img
                  src="/svg/tools/video-generator.svg"
                  alt="multiple video icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">Video Generation</h1>
              <p className="tools-small-text-1 max-w-[38rem]">
                Our Video Generation Tool automates the process of creating
                videos from data extracted by our web scraper. It seamlessly
                adds captions, audio, and combines them.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-center justify-evenly gap-20 lg:flex-row lg:gap-10">
            <div className="">
              <div>
                <img
                  src="/svg/tools/monitor.svg"
                  alt="monitor icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">AI Text to Image</h1>
              <p className="tools-small-text-1 max-w-[38rem]">
                Our AI Text to Image Tool empowers you to effortlessly create 5
                unique videos. Seamlessly merge them into captivating content,
                maximizing impact and enhancing storytelling.
              </p>
            </div>
            <div className="flex w-[90%] flex-row justify-evenly gap-2 lg:w-auto lg:justify-start">
              <img
                src="/images/tools/text-to-image-1.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-2.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-3.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-4.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
              <img
                src="/images/tools/text-to-image-5.png"
                alt="Shine Ranker Text to Image"
                className="tools-img-shadow w-[20%] rounded md:w-[100px] lg:w-[70px]"
              />
            </div>
          </div>

          <div className="flex w-full flex-col flex-col-reverse items-center justify-evenly gap-20 lg:flex-row lg:gap-10">
            <div className="flex justify-center">
              <img
                src="/images/tools/spider-man.jpg"
                alt="Shine Ranker Web Scraper Tool"
                className="tools-img-shadow w-[90%] rounded md:w-[500px] lg:w-[410px]"
              />
            </div>
            <div className="">
              <div>
                <img
                  src="/svg/tools/ai-face.svg"
                  alt="ai face icon"
                  width="40px"
                  className="mb-6"
                />
              </div>
              <h1 className="global-header-text-2 mb-6">AI Image to Image</h1>
              <p className="tools-small-text-1 max-w-[38rem]">
                Our AI Image to Image Tool automates the process of creating
                videos of you. It seamlessly combines your image, voice and the
                script that your want it to be said in the video.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="global-section-background-2 px-[5%]  pb-28 pt-20 xl:px-[18%]">
        <div className="relative flex flex-col  items-center pb-8">
          <h3 className="global-header-text-1 mb-6">Benefits</h3>
          <h3 className="global-header-text-2 mb-6 text-center">
            All About ShineAI.tools
          </h3>
          <p className="global-header-text-3">
            Our tools help our users scale up
          </p>
        </div>

        <div className="relative grid grid-cols-6 justify-center gap-4 2xl:px-36">
          <div className="tools-grid-card col-span-6 col-start-1 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2">
            <h3 className="tools-header-small-text-2 h-36">
              Comprehensive SEO Tool
            </h3>
            <p className="tools-small-text-1">
              shineAi offers a wide range of features that cater to various
              aspects of the SEO tool, making it a one-stop solution for website
              owners and digital marketers.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2 lg:col-start-3">
            <h3 className="tools-header-small-text-2 h-36">AI-Driven Data</h3>
            <p className="tools-small-text-1">
              shineAi AI-driven data provides users with accurate and up-to-date
              information, ensuring they make well-informed SEO strategy
              decisions.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2 lg:col-start-5">
            <h3 className="tools-header-small-text-2 h-36">
              User-friendly Interface
            </h3>
            <p className="tools-small-text-1">
              The platform’s intuitive design and user-friendly interface make
              navigating and utilizing the available features easy for users of
              all experience levels.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-3 lg:col-span-2 lg:col-start-2">
            <h3 className="tools-header-small-text-2 h-36">Time Saving</h3>
            <p className="tools-small-text-1">
              Users can save time, create content, and streamline their workflow
              with all the essential SEO tools and features integrated into one
              platform.
            </p>
          </div>

          <div className="tools-grid-card col-span-6 flex flex-col rounded px-6 pb-28 pt-12 md:col-span-4 md:col-start-2 lg:col-span-2">
            <h3 className="tools-header-small-text-2 h-36">
              Scalable Solutions
            </h3>
            <p className="tools-small-text-1">
              shineAi is suitable for businesses of all sizes, from small
              startups to large enterprises, making it a scalable solution that
              can grow with the user’s needs.
            </p>
          </div>
        </div>
      </section>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
