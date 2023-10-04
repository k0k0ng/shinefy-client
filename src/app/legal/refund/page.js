import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import "../LegalPages.css";
import "@/app/faq/FAQ.css";

const Refund = () => {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">Legal</h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Refund and Cancelation
          </h3>
          <p className="global-header-text-3 md:text-center">
            Last Updated 29 July, 2023
          </p>
        </div>
      </header>

      <section className="px-[5%] xl:px-[18%]">
        <div className="mt-[-9rem] flex">
          <div className="flex flex-col justify-center">
            <div className="legal-categories mb-10 inline">
              <a href="/" className="legal-category">
                Home
              </a>
              <span> {`>`} </span>
              <a href="/" className="legal-category">
                Legal
              </a>
              <span> {`>`} </span>
              <a href="#" className="legal-category legal-category-current">
                Refund and Cancelation
              </a>
            </div>
            <div className="mb-16">
              <h2 className="legal-title-text mb-8">Introduction</h2>
              <p className="legal-content-text">
                If you find that{" "}
                <a
                  href="https://shineranker.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  Shinefy
                </a>{" "}
                isn&apos;t the perfect fit for you, don&apos;t worry.
                <br />
                Just follow the steps below and our team will help you.
              </p>
            </div>
            <div className="mb-16">
              <h5 className="legal-title-text-2 mb-20">Cancelation Requests</h5>

              <div className="mb-16">
                <Accordion className="faq-accordion">
                  <AccordionSummary
                    expandIcon={
                      <div className="expand-icon-container">
                        <div className="expand-icon"></div>
                      </div>
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className="question p-6"
                  >
                    <p>
                      Cancel Subscription purchased on Shinefy&apos;s website
                    </p>
                  </AccordionSummary>
                  <hr className="jus ml-[1.75%] max-w-[95%]" />
                  <AccordionDetails className="faq-accordion-details">
                    <p className="global-header-text-3 max-w-[96%]">
                      Log in to your Shinefy accounts and click on Settings,
                      then click on the &quot;cancel subscription&quot; button.
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
                    className="question p-6"
                  >
                    <p>Cancel Subscription purchased on ThriveCart pages</p>
                  </AccordionSummary>
                  <hr className="jus ml-[1.75%] max-w-[95%]" />
                  <AccordionDetails className="faq-accordion-details">
                    <p className="global-header-text-3 max-w-[96%]">
                      Log in to your Shinefy accounts and click on Settings,
                      then click on the &quot;cancel subscription&quot; button.
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
                    className="question p-6"
                  >
                    <p>Cancel via Shinefy support</p>
                  </AccordionSummary>
                  <hr className="jus ml-[1.75%] max-w-[95%]" />
                  <AccordionDetails className="faq-accordion-details">
                    <p className="global-header-text-3 max-w-[96%]">
                      Click on the chatbot on the right hand corner, and follow
                      the steps provided. You may also contact us via
                      support@shinefy.com to send an email regarding the
                      cancelation of your subscription.
                    </p>
                  </AccordionDetails>
                </Accordion>
              </div>

              <p className="legal-content-text-2 max-w-[51rem]">
                Please note that cancelling your subscription may take effect
                immediately or at the end of the pre-paid period. We will
                confirm the cancellation of your subscription within 1 to 3
                business days after receiving your request.
              </p>
            </div>

            <div className="mb-36">
              <h2 className="legal-title-text-2 mb-8">Refund Requests</h2>
              <p className="legal-content-text-2">
                We offer a 7-day money-back guarantee according to the terms
                described herein. If you cancel your subscription within 7
                calendar days of placing your order, we&apos;ll refund your
                prepaid fees upon your written request within 30 calendar days.
                <br />
                <br />
                The refund will be processed through the same method as the
                original payment. It may take 5 to 10 business days for a refund
                to reflect on your bank statement. Please note that any bank
                fees and charges will be borne solely by you.
                <br />
                <br />
                We reserve the right to reject your refund request if it&apos;s
                outside the refund period and terms. Please make sure to manage
                your account subscriptions and purchases responsibly. Also, keep
                in mind that refunds are only available for the current
                subscription payment on your account and don&apos;t apply to
                previous month&apos;s overage charges or additional costs.
              </p>
            </div>

            <div className="mb-12 flex flex-row justify-center">
              <p className="global-bg-to-dark-purple global-header-text-3 max-w-[720px] px-8 py-5 text-center md:px-20 md:py-8">
                Once you cancel and/or request for a refund, all access to
                courses, classes, tools, and/or any bundle linked to your
                Shinefy subscription will be disabled.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
};

export default Refund;
