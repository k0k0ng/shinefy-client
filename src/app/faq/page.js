"use client";
import React, { useState } from "react";

import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import "../../styles/faq.css";
import "@/styles/components.contacts.css";

// function Accordion({ items, buttonSelectedColor, contentSelectedColor }) {
//   const [activeIndex, setActiveIndex] = useState(-1);
//   const handleClick = (index) => {
//     setActiveIndex(index === activeIndex ? -1 : index);
//   };

//   return (
//     <div className="accordion">
//       {items.map((item, index) => (
//         <div key={item.title} className="accordion-item">
//           <button
//             className={`accordion-button-2 ${
//               index === activeIndex ? "active" : ""
//             }`}
//             style={{
//               backgroundColor: index === activeIndex ? buttonSelectedColor : "",
//             }}
//             onClick={() => handleClick(index)}
//           >
//             <span className="accordion-title">{item.title}</span>
//             <span className="accordion-icon">
//               {index === activeIndex ? (
//                 <i className="fa-solid fa-minus"></i>
//               ) : (
//                 <i className="fa-solid fa-plus"></i>
//               )}
//             </span>
//           </button>
//           {index === activeIndex && (
//             <p
//               className="accordion-content"
//               style={{ color: contentSelectedColor }}
//             >
//               {item.content}
//             </p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }



const FAQ = () => {
  // const items = [
  //   {
  //     title: "How to use the Web Scraper Tool?",
  //     content:
  //       "Our Web Scraper Tool extracts data from websites based on user-provided keywords. It provides up to 200 results and allows you to download data as spreadsheet files.",
  //   },
  //   {
  //     title: "How to use the Video Generation Tool?",
  //     content:
  //       "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
  //   },
  //   {
  //     title: "How to use the AI Text to Image Tool?",
  //     content:
  //       "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
  //   },
  //   {
  //     title: "How to use the AI Image to Image Tool?",
  //     content:
  //       "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
  //   },
  //   {
  //     title: "How to Create a Shine Ranker Account?",
  //     content:
  //       "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
  //   },
  //   {
  //     title: "Question Number 6",
  //     content:
  //       "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
  //   },
  //   {
  //     title: "Question Number 7",
  //     content:
  //       "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
  //   },
  // ];

  return (
    <div>
      <header className="min-h-[48rem] flex flex-col md:items-center pt-[16rem] lg:pt-[15.5rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <h2 className="mb-6 md:text-center global-header-text-1">
          About Us
        </h2>
        <h1 className="mb-6 md:text-center global-header-text-2">
          Frequently Asked Questions
        </h1>
        <p className="md:text-center global-header-text-3">
          Last Updated 29 July, 2023
        </p>
      </header>

      <section className="mb-12 md:mb-0 px-[5%] xl:px-[18%] global-section-container-under-header">
        <div className="mb-14 global-content-container-under-header">
          <a href="/">
            Home
          </a>
          <span> {`>`} </span>
          <a href="#" className="global-category-current">
            Frequently Asked Questions
          </a>
        </div>

        <div className="flex flex-col text-center items-center">
          <h2 className="mb-6 global-header-text-1 ">Here are our</h2>
          <h2 className="mb-6 global-header-text-2">Frequently Asked Questions</h2>

          <p className="max-w-[720px] global-header-text-3">
            We may have already answered your questions. Check out these
            tabs to find answers. If you ever need assistance, please feel
            free to out to us through the contact form below.
          </p>
        </div>

        {/* First Column */}
        <div className="flex flex-col lg:p-8 mt-8 md:mt-14">
          <Accordion className="mb-3 faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="p-6 question"
            >
              <p>What is Shine Ranker?</p>
            </AccordionSummary>
              <hr className="ml-[1.75%] jus max-w-[95%]"/>
            <AccordionDetails className="pt-6 pb-10">
              
              <p className="max-w-[96%] global-header-text-3">
                Shine Ranker is an AI-driven tool designed to boost SEO efforts, aiding businessesm, marketers, and website owners in improving online
                presense and rankings. With a comprehensive range of features, it caters to various SEO aspects, including keyword research, competitor 
                analysis, content enhancement, backlink tracking, rank monitoring, and site audits.
                <br/>
                <br/>
                See full details about Shine Ranker <a href="/about">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>


          <Accordion className="mb-3 faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="p-6 question"
            >
              <p>What are the features of shineAi Tools?</p>
            </AccordionSummary>
              <hr className="ml-[1.75%] jus max-w-[95%]"/>
            <AccordionDetails className="pt-6 pb-10">
              <ul className="max-w-[96%] ml-7 mb-6 faq-ul">
                <li className="mb-6">
                  <p className="max-w-[96%] global-header-text-3">
                    <span className="text-violet-500 font-bold">Traffic Checker: </span>
                    Get insights into your website's traffic and understand where your visitors are coming from.
                  </p>
                </li>

                <li className="mb-6">
                  <p className="max-w-[96%] global-header-text-3">
                    <span className="text-violet-500 font-bold">SEO Audit: </span>
                    With just a click, receive a detailed analysis of your website's SEO health, highlight areas of improvement.
                  </p>
                </li>

                <li className="mb-6">
                  <p className="max-w-[96%] global-header-text-3">
                    <span className="text-violet-500 font-bold">Keyword Research Tools: </span>
                    Dive into high-traffic, low-compertition keywords that can elevate your website's search engine ranking.
                  </p>
                </li>
              </ul>

              <p className="max-w-[96%] global-header-text-3">
                Read more about the features of Shine Ranker tool <a href="/about">here</a>.
              </p>
              
            </AccordionDetails>
          </Accordion>

          <Accordion className="mb-3 faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="p-6 question"
            >
              <p>How much does shineAi cost?</p>
            </AccordionSummary>
              <hr className="ml-[1.75%] jus max-w-[95%]"/>
            <AccordionDetails className="pt-6 pb-10">
              <p className="max-w-[96%] global-header-text-3">
                Most affordable plan is $59 per month with access to all features and tools within 30 days. Plan is auto-renewed 
                until subscription is canceled by the user. User can switch from initial paid subscription to another subscription, but 
                will forfeit the former's inclusions. See full details of Pricing Plan <a href="/pricing">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>
          
          <Accordion className="mb-3 faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="p-6 question"
            >
              <p>What are the benefits of shineAi</p>
            </AccordionSummary>
              <hr className="ml-[1.75%] jus max-w-[95%]"/>
            <AccordionDetails className="pt-6 pb-10">
              <p className="max-w-[96%] global-header-text-3">
                Comprehensive SEO Tool, AI Driven Data, User-friendly interface, Time saving and Scalable solutions.
                <br/>
                <br/>
                Shine Ranker's AI-driven data provides users with accurate and up-to-date information, ensuring they make well-informed SEO strategy decisions
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mb-3 faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="p-6 question"
            >
              <p>How to create a shine Ai account?</p>
            </AccordionSummary>
              <hr className="ml-[1.75%] jus max-w-[95%]"/>
            <AccordionDetails className="pt-6 pb-10">
              <p className="max-w-[96%] global-header-text-3">
                Go to the top menu of this page and click <span className="global-text-to-light-green">Sign Up</span> to register for a free trial, or simple click <a href="/signup">this link</a>.
              </p>
            </AccordionDetails>
          </Accordion>
          

          <Accordion className="mb-3 faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="p-6 question"
            >
              <p>How to use shineAi?</p>
            </AccordionSummary>
              <hr className="ml-[1.75%] jus max-w-[95%]"/>
            <AccordionDetails className="pt-6 pb-10">
              <p className="max-w-[96%] global-header-text-3">
                After creating an account. Log in using your registered email and password. Familiarize yourself with the dashboard. On the left 
                panel, Go to AI Tools, to see all featured tools to create your AI content.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="mb-3 faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="p-6 question"
            >
              <p>Is there a free trial for shineAi?</p>
            </AccordionSummary>
              <hr className="ml-[1.75%] jus max-w-[95%]"/>
            <AccordionDetails className="pt-6 pb-10">
              <p className="max-w-[96%] global-header-text-3">
                Yes, Shine Ranker offers a free plan with limited access to its features, which is ideal for testing the new tool 
                before committing to a paid plan.
              </p>
            </AccordionDetails>
          </Accordion>


        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-evenly pt-14 gap-10">
          <div>
            <h2 className="global-header-text-1">
              shineAI
            </h2>
            <h2 className="global-header-text-2 my-2 pt-2 whitespace-nowrap">
              Vision-Mission
            </h2>
          </div>
          
          <p className="lg:max-w-[720px] global-header-text-3">
            We may ahve already answered your questions. Check out these tabs to find answers. If you ever need assistance, please feel to reach out to us through the contact form below.
          </p>
        </div>
      </section>

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />
    </div>
  );
};

export default FAQ;
