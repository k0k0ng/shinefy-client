import React from "react";
import "../../../styles/TermsOfUse.css";

const TermsOfUse = () => {
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
                    Term of Use
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
                  Welcome to Shine Ranker, LLC, located at
                  https://shineranker.com/. The following terms and conditions
                  govern your use of our website. By accessing this website, it
                  is assumed that you fully accept and agree to abide by all the
                  terms and conditions stated on this page. If you do not agree
                  with any of these terms and conditions, please refrain from
                  using Shine Ranker’s website.
                </p>
              </div>
              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">Indemnification</h2>
                <p className="legal-content-text">
                  You agree to indemnify Shine Ranker, LLC to the fullest extent
                  possible from any and all liabilities, costs, demands, causes
                  of action, damages, and expenses (including reasonable
                  attorney's fees) resulting from your breach of any provisions
                  in these Terms.
                </p>
              </div>

              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">Severability</h2>
                <p className="legal-content-text">
                  If any provision of these Terms is deemed invalid under
                  applicable law, such provision shall be deleted without
                  affecting the remaining provisions herein.
                </p>
              </div>

              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">
                  Variation of Terms
                </h2>
                <p className="legal-content-text">
                  Shine Ranker, LLC reserves the right to revise these Terms at
                  any time as it deems fit. It is your responsibility to review
                  these Terms regularly to ensure you understand all conditions
                  governing the use of this website.
                </p>
              </div>

              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">
                  Governing Law and Jurisdiction
                </h2>
                <p className="legal-content-text">
                  These Terms will be governed by and interpreted in accordance
                  with the laws of the location where the company operates. You
                  submit to the non-exclusive jurisdiction of the state and
                  federal courts located in that area for the resolution of any
                  disputes.
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

export default TermsOfUse;
