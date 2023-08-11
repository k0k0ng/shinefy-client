"use client";
import React, { useState } from "react";
import "../../styles/faq.css";

function Accordion({ items, buttonSelectedColor, contentSelectedColor }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={item.title} className="accordion-item">
          <button
            className={`accordion-button-2 ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              backgroundColor: index === activeIndex ? buttonSelectedColor : "",
            }}
            onClick={() => handleClick(index)}
          >
            <span className="accordion-title">{item.title}</span>
            <span className="accordion-icon">
              {index === activeIndex ? (
                <i className="fa-solid fa-minus"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </span>
          </button>
          {index === activeIndex && (
            <p
              className="accordion-content"
              style={{ color: contentSelectedColor }}
            >
              {item.content}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

const FAQ = () => {
  const items = [
    {
      title: "How to use the Web Scraper Tool?",
      content:
        "Our Web Scraper Tool extracts data from websites based on user-provided keywords. It provides up to 200 results and allows you to download data as spreadsheet files.",
    },
    {
      title: "How to use the Video Generation Tool?",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
    {
      title: "How to use the AI Text to Image Tool?",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
    {
      title: "How to use the AI Image to Image Tool?",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
    {
      title: "How to Create a Shine Ranker Account?",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
    {
      title: "Question Number 6",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
    {
      title: "Question Number 7",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
  ];

  return (
    <div>
      <header className="font-montserrat flex flex-col global-header-background-custom">
        {/* Header content */}
        <div className="flex flex-col items-center justify-center faq-header-container-parent">
          <div className="flex flex-col-reverse justify-center">
            <article>
              <div className="faq-header-container">
                <span className="header-text flex flex-col">
                  <h3 className="text-base sm:text-lg rounded min-w-max flex items-center justify-center faq-header-text-1">
                    About
                  </h3>
                  <h3 className="text-base sm:text-lg rounded min-w-max mb-2 faq-header-text-2">
                    FAQ
                  </h3>
                </span>
                <p className="text-base sm:text-lg font-light mb-5 text-center faq-header-text-3">
                  Last Updated 29 July, 2023
                </p>
              </div>
            </article>
          </div>
        </div>
      </header>

      {/* Contents */}
      <div className="font-montserrat faq-content-container">
        {/* Content */}
        <div className="flex hidden md:block">
          {/* Add your content here */}
          <div className="flex flex-col justify-center">
            <div className="font-montserrat divContainer">
              <div className="faq-categories inline">
                <a href="/" className="faq-category">
                  Home
                </a>
                <span> {`>`} </span>
                <a href="/" className="faq-category">
                  About
                </a>

                <span> {`>`} </span>
                <a href="#" className="faq-category faq-category-current">
                  Frequently Asked Questions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="mx-auto faq-req-content justify-center items-center my-20">
        {/* FAQ content */}
        <div className="flex flex-row-reverse faq-content-container  gap-20 justify-center items-center divContainer">
          {/* First Column */}
          <div className="flex ml-20">
            <div className="faq-accord-content my-5">
              <div className="faq-accord-content" style={{ maxWidth: "602px" }}>
                <Accordion
                  items={items}
                  buttonSelectedColor="#081b31"
                  contentSelectedColor="white"
                />
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex">
            <div className="faq-text-card-2">
              <div className="faq-text-card">
                <h2 className="faq-title-text-1 ">FAQ</h2>
                <h2 className="faq-title-text my-2 pt-2">Frequently</h2>
                <h2 className="faq-title-text my-2 ">Asked</h2>
                <h2 className="faq-title-text my-2 ">Questions</h2>

                <p className="faq-content-text " style={{ maxWidth: "300px" }}>
                  We may have already answered your questions. Check out these
                  tabs to find answers. If you ever need assistance, please feel
                  free to out to us through the contact form below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* A little */}
      <div className="mx-auto justify-center items-center my-5 faq-contact-container">
        {/* A little content */}
        <div className="flex flex-row-reverse faq-content-container  justify-center gap-40 justify-center items-center  divContainer">
          {/* First Column */}
          <div className="ml-30">
            <div className="pb-8">
              <div className="mt-20">
                <div className="faq-text-card-2">
                  <p className="faq-title-text-1" style={{ maxWidth: "500px" }}>
                    We’re on a mission to build a better future where technology
                    creates good jobs for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second Column */}

          <div className="w-1/2 faq-text-card">
            <h2 className="faq-title-text-1 more-text ">
              A little bit more about
            </h2>
            <h2 className="faq-title-text shine-text my-2 pt-2">
              Shine Ranker
            </h2>
          </div>
        </div>
      </div>

      {/* Our rules */}
      <div className="mx-auto justify-center items-center my-20">
        {/* Our rules content */}
        <div className="flex flex-row-reverse faq-content-container   justify-center gap-20 justify-center items-center m-5 divContainer">
          {/* First Column */}
          <div>
            <div className="container ">
              <div className="faq-text-card-2 my-2">
                <p className="faq-content-text">Terms of Use</p>
                <p className="faq-content-text">Refund and Cancellation</p>
                <p className="faq-content-text">Earnings Disclaimer</p>
                <p className="faq-content-text">Facebook Disclaimer</p>
                <p className="faq-content-text">
                  Affiliations Promotions Terms and Conditions
                </p>
                <p className="faq-content-text">Copyright</p>
                <p className="faq-content-text">Brand Guidelines</p>
                <p className="faq-content-text">Community Guidelines</p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="pr-5">
            <div className="mr-12 my-5">
              <div className=" faq-text-card faq-legal-text ">
                <h2 className="faq-title-text-1 ">Legal</h2>
                <h2 className="faq-title-text my-2 pt-2">Our Rules</h2>
                <h2 className="faq-title-text  pb-4 ">& Policies</h2>
                <p className="faq-content-text " style={{ maxWidth: "300px" }}>
                  Our policies explain what you can and cannot do while you’re
                  there, so everyone plays by the same rules.
                </p>
                <p className="faq-content-text " style={{ maxWidth: "300px" }}>
                  Read on to find out how each of our products and policies
                  work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="faq-contact-container">
        {/* Contact info */}
        <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 mt-10 mb-10 faq-contact-info">
          <div className="flex justify-center">
            <i className="fa-solid fa-phone text-[#8844DA] mr-2"></i>
            <p>+(805) 453-3586</p>
          </div>
          <div className="flex justify-center">
            <i className="fa-regular fa-envelope text-[#8844DA] mr-2"></i>
            <p>support@shineranker.com</p>
          </div>
        </div>
      </div>

      {/* Form */}
      {/* <div className="backgroundCustom-3">
        {/* Form content */}
      {/* </div> */}

      {/* contact */}
      {/* <div className="flex flex-col items-center contact-info">
        {/* Contact info content */}
      {/* </div> */}

      {/*  */}
      {/* <div className="flex flex-col backgroundCustom-4 items-center md:flex-row md:justify-between">
        {/* More content */}
      {/* </div> */}
    </div>
  );
};

export default FAQ;
