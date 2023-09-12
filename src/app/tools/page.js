"use client";

import React, { createRef, useEffect } from "react";
import Image from "next/image";
import lottie from "lottie-web";

import FooterPage from "@/components/Footer/Footer";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

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
      <header className="min-h-[48rem] pt-[16rem] lg:pt-[15.5rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col md:items-center">
          <h1 className="mb-6 md:text-center global-header-text-1">
            shineAi.tools
          </h1>
          <h3 className="mb-6 md:text-center global-header-text-2">
            Powerful AI Tools
          </h3>
          <p className="md:text-center global-header-text-3">
            Last Updated 25 July, 2023
          </p>
        </div>
      </header>

      <section className="pb-10 md:pb-20 xl:pb-0 px-[5%] xl:px-[18%] global-section-container-under-header">
        <div className="mb-14 global-content-container-under-header">
          <a href="/">
            Home
          </a>
          <span> {`>`} </span>
          <a href="#" className="global-category-current">
            Tools
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-evenly mt-16">
          <div className="max-w-[750px] w-full">
            <h2 className="mb-6 tools-small-text-1">
              Our Shiny Products are promising
            </h2>
            <h1 className="mb-6 global-header-text-2">
              App tools like never before!
            </h1>
            <p className="max-w-[720px] global-header-text-3">
              Experience the future of content creation with AI-powered
              tools that automate video production, allowing you to
              generate engaging videos and start earning revenue in as
              little as 7 days. Embrace the efficiency and profitability
              of this revolutionary technology, as it empowers you to
              focus on content strategy while the AI handles the rest.
            </p>
          </div>
          <div>
            <div
              className="w-72 md:w-auto"
              ref={animationContainer}
            />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center items-center px-[5%] xl:px-[18%] global-bg-to-purple">
        <div className="w-full flex flex-col py-20 text-center items-center">
          <h2 className="mb-6 global-header-text-1">Shine Ranker Tools</h2>
          <h1 className="mb-6 global-header-text-2">
            App Tools Like Never Before!
          </h1>
          <p className="max-w-[68rem] global-header-text-3">
            Introducing the revolutionary one-click app that
            revolutionizes video content creation: With four powerful
            tools at your disposal, extracting data from websites,
            automating video creation using collected data, captivating
            audiences with keyword-driven videos, and crafting
            personalized storytelling through image and voice matching
            has never been easier. Say goodbye to time-consuming editing
            and hello to instant, engaging video content with just a
            single click.
          </p>
        </div>
      </section>

      <section className="px-[5%] xl:px-[18%]">
        <div className="flex flex-col gap-y-24 py-20">
          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-20 lg:gap-10">
            <div className="">
              <div>
                <Image
                  src="/svg/tools/globe.svg"
                  alt="earth globe icon"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <h1 className="mb-6 global-header-text-2">
                Website Scraper Tool
              </h1>
              <p className="max-w-[38rem] tools-small-text-1">
                Our Web Scraper Tool extracts data from websites based on user-provided keywords. It provides up to 200 results and allows you to download data as spreadsheet files.  
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/tools/tools-webscrape.png"
                alt="Shine Ranker Web Scraper Tool"
                width={338}
                height={302}
                className="tools-img-shadow w-[95%] md:w-[500px] lg:w-[338px]"
              />
            </div>
          </div>

          <div className="w-full flex flex-col flex-col-reverse lg:flex-row justify-evenly items-center gap-20">
            <div className="flex flex-row gap-x-2">
              <div className="flex flex-row justify-center gap-2">
                <Image
                  src="/images/tools/portrait-video-thumbnail-1.png"
                  alt="Shine Ranker Video Generator"
                  width={172}
                  height={306}
                  className="w-[48%] md:w-[252px] lg:w-[172px] rounded tools-img-shadow"
                />
                <Image
                  src="/images/tools/portrait-video-thumbnail-2.png"
                  alt="Shine Ranker Video Generator"
                  width={172}
                  height={306}
                  className="w-[48%] md:w-[252px] lg:w-[172px] rounded tools-img-shadow"
                />
              </div>
            </div>
            <div className="">
              <div>
                <Image
                  src="/svg/tools/video-generator.svg"
                  alt="multiple video icon"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <h1 className="mb-6 global-header-text-2">
                Video Generation
              </h1>
              <p className="max-w-[38rem] tools-small-text-1">
                Our Video Generation Tool automates the process of creating videos from data extracted by our web scraper. It seamlessly adds captions, audio, and combines them. 
              </p>
            </div>
          </div>

          <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-20 lg:gap-10">
            <div className="">
              <div>
                <Image
                  src="/svg/tools/monitor.svg"
                  alt="monitor icon"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <h1 className="mb-6 global-header-text-2">
                AI Text to Image
              </h1>
              <p className="max-w-[38rem] tools-small-text-1">
                Our AI Text to Image Tool empowers you to effortlessly create 5 unique videos. Seamlessly merge them into captivating content, maximizing impact and enhancing storytelling.  
              </p>
            </div>
            <div className="w-[90%] lg:w-auto flex flex-row justify-evenly lg:justify-start gap-2">
              <Image
                src="/images/tools/text-to-image-1.png"
                alt="Shine Ranker Text to Image"
                width={70}
                height={70}
                className="w-[20%] md:w-[100px] lg:w-[70px] rounded tools-img-shadow"
              />
              <Image
                src="/images/tools/text-to-image-2.png"
                alt="Shine Ranker Text to Image"
                width={70}
                height={70}
                className="w-[20%] md:w-[100px] lg:w-[70px] rounded tools-img-shadow"
              />
              <Image
                src="/images/tools/text-to-image-3.png"
                alt="Shine Ranker Text to Image"
                width={70}
                height={70}
                className="w-[20%] md:w-[100px] lg:w-[70px] rounded tools-img-shadow"
              />
              <Image
                src="/images/tools/text-to-image-4.png"
                alt="Shine Ranker Text to Image"
                width={70}
                height={70}
                className="w-[20%] md:w-[100px] lg:w-[70px] rounded tools-img-shadow"
              />
              <Image
                src="/images/tools/text-to-image-5.png"
                alt="Shine Ranker Text to Image"
                width={70}
                height={70}
                className="w-[20%] md:w-[100px] lg:w-[70px] rounded tools-img-shadow"
              />
            </div>
          </div>

          <div className="w-full flex flex-col flex-col-reverse lg:flex-row justify-evenly items-center gap-20 lg:gap-10">
            <div className="flex justify-center">
              <Image
                src="/images/tools/spider-man.jpg"
                alt="Shine Ranker Web Scraper Tool"
                width={410}
                height={210}
                className="w-[90%] md:w-[500px] lg:w-[410px] rounded tools-img-shadow"
              />
            </div>
            <div className="">
              <div>
                <Image
                  src="/svg/tools/ai-face.svg"
                  alt="ai face icon"
                  width={40}
                  height={40}
                  className="mb-6"
                />
              </div>
              <h1 className="mb-6 global-header-text-2">
                AI Image to Image
              </h1>
              <p className="max-w-[38rem] tools-small-text-1">
                Our AI Image to Image Tool automates the process of creating videos of you. It seamlessly combines your image, voice and the script that your want it to be said in the video. 
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="pt-20 pb-28  px-[5%] xl:px-[18%] global-section-background-2">
        <div className="flex flex-col relative  items-center pb-8">
          <h3 className="mb-6 global-header-text-1">Benefits</h3>
          <h3 className="mb-6 text-center global-header-text-2">All About ShineAI.tools</h3>
          <p className="global-header-text-3">
            Our tools help our users scale up
          </p>
        </div>

        <div className="grid grid-cols-6 relative gap-4 justify-center 2xl:px-36">
          <div className="col-start-1 col-span-6 md:col-span-3 lg:col-span-2 flex flex-col pt-12 pb-28 px-6 tools-grid-card rounded">
            <h3 className="h-36 tools-header-small-text-2">Comprehensive SEO Tool</h3>
            <p className="tools-small-text-1">
              shineAi offers a wide range of features that cater to various aspects of the SEO tool, 
              making it a one-stop solution for website owners and digital marketers.
            </p>
          </div>

          <div className="lg:col-start-3 col-span-6 md:col-span-3 lg:col-span-2 flex flex-col pt-12 pb-28 px-6 tools-grid-card rounded">
            <h3 className="h-36 tools-header-small-text-2">AI-Driven Data</h3>
            <p className="tools-small-text-1">
              shineAi AI-driven data provides users with accurate and up-to-date information, 
              ensuring they make well-informed SEO strategy decisions.
            </p>
          </div>

          <div className="lg:col-start-5 col-span-6 md:col-span-3 lg:col-span-2 flex flex-col pt-12 pb-28 px-6 tools-grid-card rounded">
            <h3 className="h-36 tools-header-small-text-2">User-friendly Interface</h3>
            <p className="tools-small-text-1">
              The platform’s intuitive design and user-friendly interface make navigating 
              and utilizing the available features easy for users of all experience levels.
            </p>
          </div>

          <div className="lg:col-start-2 col-span-6 md:col-span-3 lg:col-span-2 flex flex-col pt-12 pb-28 px-6 tools-grid-card rounded">
            <h3 className="h-36 tools-header-small-text-2">Time Saving</h3>
            <p className="tools-small-text-1">
              Users can save time, create content, and streamline their workflow with all 
              the essential SEO tools and features integrated into one platform.
            </p>
          </div>

          <div className="md:col-start-2 col-span-6 md:col-span-4 lg:col-span-2 flex flex-col pt-12 pb-28 px-6 tools-grid-card rounded">
            <h3 className="h-36 tools-header-small-text-2">Scalable Solutions</h3>
            <p className="tools-small-text-1">
              shineAi  is suitable for businesses of all sizes, from small startups to large 
              enterprises, making it a scalable solution that can grow with the user’s needs.
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
