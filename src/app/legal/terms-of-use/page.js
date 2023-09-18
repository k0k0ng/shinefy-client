import React from "react";

import FooterPage from "@/components/Footer/Footer";
import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

import "../../../styles/globals.css";

const TermsOfUse = () => {
  return (
    <>
      <header className="min-h-[48rem] pt-[16rem] lg:pt-[15.5rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col md:items-center">
          <h1 className="mb-6 md:text-center global-header-text-1">
            Legal
          </h1>
          <h3 className="mb-6 md:text-center global-header-text-2">
            Terms of Use
          </h3>
          <p className="md:text-center global-header-text-3">
            Last Updated 29 July, 2023
          </p>
        </div>
      </header>

      {/* Contents */}
      <div className="px-[5%] xl:px-[18%]">
        <div className="flex mt-[-9rem]">
          <div className="flex flex-col justify-center">

              <div className="mb-10 legal-categories inline">
                <a href="/" className="legal-category">
                  Home
                </a>
                <span> {`>`} </span>
                <a href="/" className="legal-category">
                  Legal
                </a>
                <span> {`>`} </span>
                <a href="#" className="legal-category legal-category-current">
                  Terms of Use Legal
                </a>
              </div>
              <div className="mb-12">
                <h2 className="mb-8 legal-title-text">Introduction</h2>
                <p className="legal-content-text">
                  Welcome to Shine Ranker, LLC, located at 
                  <a href="https://shineranker.com/" rel="noreferrer" target="_blank"> https://shineranker.com/</a>. The following terms and conditions
                  govern your use of our website. By accessing this website, it
                  is assumed that you fully accept and agree to abide by all the
                  terms and conditions stated on this page. If you do not agree
                  with any of these terms and conditions, please refrain from
                  using Shine Ranker’s website.
                </p>
              </div>
              <div className="mb-12">
                <h5 className="mb-8 legal-title-text-2">Indemnification</h5>
                <p className="legal-content-text-2">
                  You agree to indemnify Shine Ranker, LLC to the fullest extent
                  possible from any and all liabilities, costs, demands, causes
                  of action, damages, and expenses (including reasonable
                  attorney&apos;s fees) resulting from your breach of any provisions
                  in these Terms.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="mb-8 legal-title-text-2">Severability</h2>
                <p className="legal-content-text-2">
                  If any provision of these Terms is deemed invalid under
                  applicable law, such provision shall be deleted without
                  affecting the remaining provisions herein.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="mb-8 legal-title-text-2">
                  Variation of Terms
                </h2>
                <p className="legal-content-text-2">
                  Shine Ranker, LLC reserves the right to revise these Terms at
                  any time as it deems fit. It is your responsibility to review
                  these Terms regularly to ensure you understand all conditions
                  governing the use of this website.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="mb-8 legal-title-text-2">
                  Governing Law and Jurisdiction
                </h2>
                <p className="legal-content-text-2">
                  These Terms will be governed by and interpreted in accordance
                  with the laws of the location where the company operates. You
                  submit to the non-exclusive jurisdiction of the state and
                  federal courts located in that area for the resolution of any
                  disputes.
                </p>
              </div>

          </div>
        </div>
      </div>
      
      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />

    </>
  );
};

export default TermsOfUse;
