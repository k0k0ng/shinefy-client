import React from "react";
// import "./home.css";

const EarningsDisclaimer = () => {
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
                    Earnings Disclaimer
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
                <h2 className="legal-title-text my-5 pt-10">
                  Earnings Disclaimer
                </h2>
                <p className="legal-content-text">
                  Please carefully review our earnings disclaimer before using
                  our website, tools, participating in any of our courses, or
                  subscribing to our newsletter.
                </p>
                <p className="legal-content-text">
                  By accessing and using Shine Ranker
                  (https://www.shineranker.com/) and the information provided
                  therein, you acknowledge and agree to this Earnings
                  Disclaimer.
                </p>
                <p className="legal-content-text">
                  Transparency and honesty are fundamental principles at Shine
                  Ranker. As such, we want to disclose that certain products and
                  links on this site may earn us affiliate commissions for
                  purchases made through them.
                </p>
                <p className="legal-content-text">
                  While we strive to educate and inspire individuals about
                  utilizing artificial intelligence (AI) content to create
                  websites and generate income, it is essential to recognize
                  that any earnings and income representations made by Shine
                  Ranker, including its officers, directors, employees, and
                  affiliates, are aspirational statements regarding potential
                  earnings.
                </p>
                <p className="legal-content-text">
                  The success stories and testimonials showcased are exceptional
                  outcomes and not typical for the average person. They are not
                  intended as a guarantee that you or others will achieve
                  similar results.
                </p>
                <p className="legal-content-text">
                  Earnings and income results depend on various factors, many of
                  which are unique to each individual.
                </p>
                <p className="legal-content-text">
                  We cannot predict how well you will perform, as we lack
                  knowledge of your background, work ethic, dedication,
                  motivation, desire, and business skills or practices. Hence,
                  we do not guarantee or imply that you will become wealthy,
                  achieve similar success, or have any earnings at all.
                </p>
                <p className="legal-content-text">
                  Engaging in internet businesses and deriving income from them
                  involve inherent risks and may not be suitable for everyone.
                  Before acting on any information presented in our products,
                  services, or website, exercise caution and seek advice from
                  qualified professionals. Consult with your accountant, lawyer,
                  or professional advisor to make informed decisions.
                </p>
                <p className="legal-content-text">
                  You, and you alone, are responsible and accountable for the
                  outcomes of your actions and decisions in life. By using our
                  products, services, and website, you agree not to hold us
                  liable for any such decisions, actions, or results, at any
                  time, under any circumstance.
                </p>
                <p className="legal-content-text">
                  In summary, we make absolutely no guarantees regarding income
                  as a result of applying the information provided, and you
                  fully acknowledge that you are solely responsible for the
                  results of any action taken on your part based on the given
                  information.
                </p>
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

export default EarningsDisclaimer;
