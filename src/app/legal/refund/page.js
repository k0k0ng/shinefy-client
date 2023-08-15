"use client";

import React, { useState } from "react";
// import "./home.css";

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
            className={`accordion-button ${
              index === activeIndex ? "active" : ""
            }`}
            style={{
              backgroundColor: index === activeIndex ? buttonSelectedColor : "",
            }}
            onClick={() => handleClick(index)}
          >
            <span className="accordion-title">{item.title}</span>
            <span className="accordion-icon">
              {index === activeIndex ? ">" : "—"}
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

const Refund = () => {
  const items = [
    {
      title: "Shine Ranker Website",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
    {
      title: "ThriveCart Page",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
    {
      title: "Contact Support",
      content:
        "Log in to your Shine Ranker accounts and click on Settings, then click on the cancel subscription button.",
    },
  ];

  return (
    <div>
      <header className="font-montserrat flex flex-col global-header-background-custom">
        <div className="flex flex-col items-center justify-center global-header-container-parent">
          <div className="flex flex-col justify-center">
            <article>
              <div className="legal-header-container">
                <span className="header-text flex flex-col">
                  <h3 className="text-base rounded min-w-max flex items-center justify-center global-header-text-1">
                    Legal
                  </h3>
                  <h3 className="text-base rounded min-w-max mb-2 global-header-text-2">
                    Refund and Cancelation
                  </h3>
                </span>
                <p className="text-base font-light mb-5 text-center global-header-text-3">
                  Last Updated 29 July, 2023
                </p>
              </div>
            </article>
          </div>
        </div>
      </header>

      {/* Contents */}
      <div className="font-montserrat global-content-container">
        <div className="flex">
          {/* Add your content here */}
          <div className="flex flex-col justify-center content-1">
            <div className="font-montserrat divContainer">
              <div className="legal-categories inline">
                <a href="/" className="legal-category">
                  Home
                </a>
                <span> {`>`} </span>
                <a href="/" className="legal-category">
                  About
                </a>
                <span> {`>`} </span>
                <a href="/faq" className="legal-category">
                  Frequently Asked Questions
                </a>
                <span> {`>`} </span>
                <a href="#" className="legal-category legal-category-current">
                  Legal
                </a>
              </div>
              <div className="legal-text-card">
                <h2 className="legal-title-text my-5 pt-10">Introduction</h2>
                <p className="legal-content-text">
                  If you find that Shine Ranker isn&apos;t the perfect fit for you,
                  don&apos;t worry. Just follow the steps below and our team will
                  help you.
                </p>
              </div>
              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">
                  Cancelation Request
                </h2>
                <div>
                  <p className="legal-content-text">
                    Cancel subscription through these options:
                  </p>
                  {/* accordion */}
                  <div className="mt-10 mb-10">
                    <Accordion
                      items={items}
                      buttonSelectedColor="#081b31"
                      contentSelectedColor="white"
                    />
                  </div>
                </div>
                <p className="legal-content-text">
                  Please note that cancelling your subscription may take effect
                  immediately or at the end of the pre-paid period. We will
                  confirm the cancellation of your subscription within 1 to 3
                  business days after receiving your request.
                </p>
              </div>

              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">Refund Requests</h2>
                <p className="legal-content-text">
                  We offer a 7-day money-back guarantee according to the terms
                  described herein. If you cancel your subscription within 7
                  calendar days of placing your order, we&apos;ll refund your prepaid
                  fees upon your written request within 30 calendar days.
                </p>
                <p className="legal-content-text">
                  The refund will be processed through the same method as the
                  original payment. It may take 5 to 10 business days for a
                  refund to reflect on your bank statement. Please note that any
                  bank fees and charges will be borne solely by you.
                </p>
                <p className="legal-content-text">
                  We reserve the right to reject your refund request if it&apos;s
                  outside the refund period and terms. Please make sure to
                  manage your account subscriptions and purchases responsibly.
                  Also, keep in mind that refunds are only available for the
                  current subscription payment on your account and don&apos;t apply
                  to previous month&apos;s overage charges or additional costs.
                </p>
              </div>

              <div className="legal-bordered-container">
                <div>
                  <p className="text-center legal-bordered-text">
                    Once you cancel and/or request for a refund, all access to
                    courses, classes, tools, and/or any bundle linked to your
                    Shine Ranker subscription will be disabled.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 mt-10 mb-10 legal-contact-info">
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
          </div>
        </div>
      </div>

      {/* Form */}
      {/* <div className="backgroundCustom-3">
        <div className="mx-auto p-6 rounded-lg contact-form">
          <h2 className=" mb-4 contact-text">Contact Us</h2>
          <p className="mb-4 get-text">Get in Touch with Us</p>
          <p className="mb-4 concern-text">
            Any concerns about our Terms of Use, please reach out to us.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring focus:ring-opacity-50"
                />
                <label className="block absolute top-2 left-2 text-sm ">
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring focus:ring-opacity-50"
                />
                <label className="block absolute top-2 left-2 text-sm">
                  Phone
                </label>
              </div>
            </div>
            <div className="relative">
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring focus:ring-opacity-50"
              />
              <label className="block absolute top-2 left-2 text-sm">
                Email Address
              </label>
            </div>
            <div className="relative">
              <textarea
                className="mt-1 block w-full border border-gray-300 rounded-md p-2 pl-10 focus:ring focus:ring-opacity-50"
                rows="4"
              />
              <label className="block absolute top-2 left-2 text-sm">
                Message
              </label>
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="text-white py-2 px-4 rounded-md submit-btn"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div> */}

      {/* contact */}
      {/* <div className="flex flex-col items-center contact-info">
        <div className="flex flex-col-reverse items-center">
          <div className="flex items-center mr-6">
            <i className=" mr-2"></i>
            <p className="text-gray-500  text-white">+(805) 453-3586</p>
          </div>
          <div className="flex items-center">
            <i className="mr-2"></i>
            <p className="text-white">support@shineranker.com</p>
          </div>
        </div>
      </div> */}

      {/*  */}
      {/* <div className="flex flex-col backgroundCustom-4 items-center md:flex-row md:justify-between">
        <div className="flex items-center">
          <div className="flex">
            <div className="items-left text-white">
              <article>
                <h2 className="limited-text">Limited-Time Offer</h2>
                <h1 className="best-text mt-2">Best Shine Ranker Deal</h1>
                <p className="flex-initial w-45 text-left mt-2 info-text break-after-column">
                  Don’t miss this chance to get the discounted package
                </p>
                <p className="flex-initial w-45 text-left info-text">
                  and start on your journey towards a growing income using AI.
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4 md:ml-4 md:mt-0">
            <button className="text-white rounded-md grab-text">
              Grab this Deal!
            </button>
            <img
              className="mt-4 ellipse hidden md:inline"
              src={ellipse}
              alt="Ellipse"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Refund;
