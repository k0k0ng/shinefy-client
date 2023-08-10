import React from "react";
// import "./home.css";

const FacebookDisclaimer = () => {
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
                    Facebook Disclaimer
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
                  This site is not part of the Facebook website or Facebook Inc.
                  Additionally, this site is NOT endorsed by Facebook in any
                  way. FACEBOOK is a trademark of FACEBOOK, Inc.
                </p>
                <p className="legal-content-text">
                  Complete details for Facebook’s legal terms are are available
                  at: https://www.facebook.com/legal/terms
                </p>
                <p className="legal-content-text">
                  All Facebook policies are available at:
                  https://www.facebook.com/policies/
                </p>
              </div>
              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">Advertising</h2>
                <p className="legal-content-text">
                  Facebook provides a platform to deliver advertising but the
                  opinions and or views expressed from Research Based Solutions
                  (“Shine Ranker, LLC”) are not representative of Facebook, Inc.
                </p>
                <p className="legal-content-text">
                  Shine Ranker, LLC provides third-party management of Facebook
                  advertising on behalf of Shine Ranker, LLC customers. The
                  pinions and or views expressed from such campaigns are not
                  representative of Facebook, Inc.
                </p>
              </div>

              <div className="legal-text-card">
                <h2 className="legal-title-text my-4 pt-8">Fan Page</h2>
                <p className="legal-content-text">
                  The opinions and or views expressed on Shine Ranker, LLC
                  social media platforms, including, but not limited to, our
                  blogs and Facebook pages, represent the thoughts of individual
                  bloggers and online communities, and not those necessarily of
                  Shine Ranker, LLC or any of its corporate partners, affiliates
                  or any of their officers, employees, staff or members of its
                  respective board of directors.
                </p>
                <p className="legal-content-text">
                  The opinions and views expressed on these pages do not in any
                  way reflect the views of the site they are posted on, other
                  sites affiliated with the site, the staff involved with
                  maintaining the site or any members of the site.The opinions
                  or views expressed on Shine Ranker, LLC social media platforms
                  are not representative of Facebook, Inc.
                </p>
                <p className="legal-content-text">
                  While Shineranker, LLC makes reasonable efforts to monitor
                  and/or moderate content posted on its social media platforms,
                  we do not moderate all comments and cannot always respond in a
                  timely manner to online requests for information.
                </p>
                <p className="legal-content-text">
                  Shineranker, LLC reserves the sole right to review, edit
                  and/or delete any comments it deems are inappropriate.
                  Comments including but not limited to the following may be
                  deleted or edited by the moderators:
                </p>
              </div>
              <div className="legal-numbered-texts">
                <div>
                  <p className="legal-content-text">
                    1. Abusive or hurtful comments about a blogger or another
                    participant;
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    2. Off-topic and redundant comments (this includes promotion
                    or solicitation of events, groups, pages, Websites,
                    organizations, products and programs not related to or
                    affiliated with the Shineranker, LLC);
                  </p>
                  <p className="legal-content-text">
                    Comments that use foul language or "hate speech" (for
                    example, including but not limited to racial, ethnic or
                    gender bashing language);
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    3. Personal attacks or defamatory statements or comments
                    (i.e., making negative personal or untrue comments about a
                    participant), instead of just criticizing his/her posting,
                    opinion or comments; and Comments that violate the privacy
                    of any individual;
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    4. Information posted on any of Shineranker, LLC's websites
                    or on its Facebook page is not intended to be medical advice
                    and should not be considered medical advice, nor is it
                    intended to replace consultation with a qualified physician
                    or other health care provider.
                  </p>
                </div>
              </div>

              <div className="legal-text-card">
                <p className="legal-content-text">
                  The opinions and or views expressed on Shine Ranker, LLC
                  social media platforms, including, but not limited to, our
                  blogs and Facebook pages, represent the thoughts of individual
                  bloggers and online communities, and not those necessarily of
                  Shine Ranker, LLC or any of its corporate partners, affiliates
                  or any of their officers, employees, staff or members of its
                  respective board of directors.
                </p>
                <p className="legal-content-text">
                  The opinions and or views expressed on Shine Ranker, LLC
                  social media platforms, including, but not limited to, our
                  blogs and Facebook pages, represent the thoughts of individual
                  bloggers and online communities, and not those necessarily of
                  Shine Ranker, LLC or any of its corporate partners, affiliates
                  or any of their officers, employees, staff or members of its
                  respective board of directors.
                </p>
              </div>

              <div className="legal-bordered-container">
                <div>
                  <p className="text-center legal-bordered-text">
                    This site is not a part of the Facebook website or Facebook
                    Inc. Additionally, this site is NOT endorsed by Facebook in
                    ANY WAY. FACEBOOK is a trademark of Facebook Inc.
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

export default FacebookDisclaimer;
