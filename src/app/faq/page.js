import FooterPage from "@/components/Footer/Footer";
import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import "../../styles/faq.css";
import "@/styles/components.contacts.css";

const FAQ = () => {
  return (
    <>
      <header className="global-header-section-bg flex min-h-[48rem] flex-col px-[5%] pt-[16rem] md:items-center lg:pt-[15.5rem] xl:px-[18%]">
        <h2 className="global-header-text-1 mb-6 md:text-center">About Us</h2>
        <h1 className="global-header-text-2 mb-6 md:text-center">
          Frequently Asked Questions
        </h1>
        <p className="global-header-text-3 md:text-center">
          Last Updated 29 July, 2023
        </p>
      </header>

      <section className="global-section-container-under-header mb-12 px-[5%] md:mb-0 xl:px-[18%]">
        <div className="global-content-container-under-header mb-14">
          <a href="/">Home</a>
          <span> {`>`} </span>
          <a href="#" className="global-category-current">
            Frequently Asked Questions
          </a>
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="global-header-text-1 mb-6 ">Here are our</h2>
          <h2 className="global-header-text-2 mb-6">
            Frequently Asked Questions
          </h2>

          <p className="global-header-text-3 max-w-[720px]">
            We may have already answered your questions. Check out these tabs to
            find answers. If you ever need assistance, please feel free to out
            to us through the contact form below.
          </p>
        </div>

        {/* First Column */}
        <div className="mt-8 flex flex-col md:mt-14 lg:p-8">
          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>What is Shine Ranker?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="faq-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Shine Ranker is an AI-driven tool designed to boost SEO efforts,
                aiding businessesm, marketers, and website owners in improving
                online presense and rankings. With a comprehensive range of
                features, it caters to various SEO aspects, including keyword
                research, competitor analysis, content enhancement, backlink
                tracking, rank monitoring, and site audits.
                <br />
                <br />
                See full details about Shine Ranker <a href="/about">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>What are the features of shineAi Tools?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="faq-accordion-details">
              <ul className="faq-ul mb-6 ml-7 max-w-[96%]">
                <li className="mb-6">
                  <p className="global-header-text-3 max-w-[96%]">
                    <span className="font-bold text-violet-500">
                      Traffic Checker:{" "}
                    </span>
                    Get insights into your website&apos;s traffic and understand
                    where your visitors are coming from.
                  </p>
                </li>

                <li className="mb-6">
                  <p className="global-header-text-3 max-w-[96%]">
                    <span className="font-bold text-violet-500">
                      SEO Audit:{" "}
                    </span>
                    With just a click, receive a detailed analysis of your
                    website&apos;s SEO health, highlight areas of improvement.
                  </p>
                </li>

                <li className="mb-6">
                  <p className="global-header-text-3 max-w-[96%]">
                    <span className="font-bold text-violet-500">
                      Keyword Research Tools:{" "}
                    </span>
                    Dive into high-traffic, low-compertition keywords that can
                    elevate your website&apos;s search engine ranking.
                  </p>
                </li>
              </ul>

              <p className="global-header-text-3 max-w-[96%]">
                Read more about the features of Shine Ranker tool{" "}
                <a href="/tools">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>How much does shineAi cost?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="faq-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Most affordable plan is $59 per month with access to all
                features and tools within 30 days. Plan is auto-renewed until
                subscription is canceled by the user. User can switch from
                initial paid subscription to another subscription, but will
                forfeit the former&apos;s inclusions. See full details of
                Pricing Plan <a href="/pricing">here</a>.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>What are the benefits of shineAi</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="faq-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Comprehensive SEO Tool, AI Driven Data, User-friendly interface,
                Time saving and Scalable solutions.
                <br />
                <br />
                Shine Ranker&apos;s AI-driven data provides users with accurate
                and up-to-date information, ensuring they make well-informed SEO
                strategy decisions
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>How to create a shine Ai account?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="faq-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Go to the top menu of this page and click{" "}
                <span className="global-text-to-light-green">Sign Up</span> to
                register for a free trial, or simple click{" "}
                <a
                  href="https://app.shineranker.com/signup_free/"
                  rel="noreferrer"
                  target="_blank"
                >
                  this link
                </a>
                .
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>How to use shineAi?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="faq-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                After creating an account. Log in using your registered email
                and password. Familiarize yourself with the dashboard. On the
                left panel, Go to AI Tools, to see all featured tools to create
                your AI content.
              </p>
            </AccordionDetails>
          </Accordion>

          <Accordion className="faq-accordion">
            <AccordionSummary
              expandIcon={
                <div className="expand-icon-container">
                  <div className="expand-icon"></div>
                </div>
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="question"
            >
              <p>Is there a free trial for shineAi?</p>
            </AccordionSummary>
            <hr className="jus ml-[1.75%] max-w-[95%]" />
            <AccordionDetails className="faq-accordion-details">
              <p className="global-header-text-3 max-w-[96%]">
                Yes, Shine Ranker offers a free plan with limited access to its
                features, which is ideal for testing the new tool before
                committing to a paid plan.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>

        <div className="flex flex-col gap-10 pt-14 md:flex-row md:items-center md:justify-evenly">
          <div>
            <h2 className="global-header-text-1">shineAI</h2>
            <h2 className="global-header-text-2 my-2 whitespace-nowrap pt-2">
              Vision-Mission
            </h2>
          </div>

          <p className="global-header-text-3 lg:max-w-[720px]">
            We may ahve already answered your questions. Check out these tabs to
            find answers. If you ever need assistance, please feel to reach out
            to us through the contact form below.
          </p>
        </div>
      </section>

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
};

export default FAQ;
