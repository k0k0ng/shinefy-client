import React from "react";
// import "./home.css";
import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

const EarningsDisclaimer = () => {
  return (
    <>
      <header className="min-h-[48rem] pt-[16rem] lg:pt-[15.5rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col md:items-center">
          <h1 className="mb-6 md:text-center global-header-text-1">
            Legal
          </h1>
          <h3 className="mb-6 md:text-center global-header-text-2">
            Earnings Disclaimer
          </h3>
          <p className="md:text-center global-header-text-3">
            Last Updated 29 July, 2023
          </p>
        </div>
      </header>

      <div className="px-[5%] lg:px-[10%] xl:px-[22%]">
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
                  Earnings Disclaimer
                </a>
              </div>
              <div className="mb-16">
                <h2 className="mb-8 legal-title-text">Earnings Disclaimer</h2>
                <p className="legal-content-text">
                  By accessing and using <a href="https://shineranker.com/"> Shine Ranker</a> (https://www.shineranker.com/) and the information provided therein, you acknowledge 
                  and agree to this Earnings Disclaimer.
                  <br/><br/>
                  Transparency and honesty are fundamental principles at Shine Ranker. As such, we want to disclose that certain products and 
                  links on this site may earn us affiliate commissions for purchases made through them.
                  <br/><br/>
                  While we strive to educate and inspire individuals about utilizing artificial intelligence (AI) content to create websites and 
                  generate income, it is essential to recognize that any earnings and income representations made by Shine Ranker, including its 
                  officers, directors, employees, and affiliates, are aspirational statements regarding potential earnings.
                  <br/><br/>
                  The success stories and testimonials showcased are exceptional outcomes and not typical for the average person. They are not 
                  intended as a guarantee that you or others will achieve similar results.
                  <br/><br/>
                  Earnings and income results depend on various factors, many of which are unique to each individual.
                  <br/><br/>
                  We cannot predict how well you will perform, as we lack knowledge of your background, work ethic, dedication, motivation, desire, 
                  and business skills or practices. Hence, we do not guarantee or imply that you will become wealthy, achieve similar success, or 
                  have any earnings at all.
                  <br/><br/>
                  Engaging in internet businesses and deriving income from them involve inherent risks and may not be suitable for everyone. 
                  Before acting on any information presented in our products, services, or website, exercise caution and seek advice from qualified 
                  professionals. Consult with your accountant, lawyer, or professional advisor to make informed decisions.
                  <br/><br/>
                  You, and you alone, are responsible and accountable for the outcomes of your actions and decisions in life. By using our products, 
                  services, and website, you agree not to hold us liable for any such decisions, actions, or results, at any time, under any 
                  circumstance.
                  <br/><br/>
                  In summary, we make absolutely no guarantees regarding income as a result of applying the information provided, and you fully 
                  acknowledge that you are solely responsible for the results of any action taken on your part based on the given information.
                </p>
              </div>

              <div className="flex flex-row mb-12 md:mb-0 justify-center">
                <p className="max-w-[720px] px-8 md:px-20 py-5 md:py-8 text-center global-bg-to-dark-purple global-header-text-3">
                  Once you cancel and/or request for a refund, all access to courses, classes, tools, and/or any bundle linked to your 
                  Shine Ranker subscription will be disabled.
                </p>
              </div>

          </div>
        </div>
      </div>

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />
      
    </>
  );
};

export default EarningsDisclaimer;
