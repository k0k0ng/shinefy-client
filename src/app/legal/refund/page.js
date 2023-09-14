"use client";

import React, { useState } from "react";

import FooterPage from "@/components/Footer/Footer";
import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import "../../../styles/faq.css";


const Refund = () => {

  return (
    <>
      <header className="min-h-[48rem] pt-[16rem] lg:pt-[15.5rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col md:items-center">
          <h1 className="mb-6 md:text-center global-header-text-1">
            Legal
          </h1>
          <h3 className="mb-6 md:text-center global-header-text-2">
            Refund and Cancelation
          </h3>
          <p className="md:text-center global-header-text-3">
            Last Updated 29 July, 2023
          </p>
        </div>
      </header>

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
                  Refund and Cancelation
                </a>
              </div>
              <div className="mb-16">
                <h2 className="mb-8 legal-title-text">Introduction</h2>
                <p className="legal-content-text">
                  If you find that <a href="https://shineranker.com/" rel="noreferrer" target="_blank">Shine Ranker</a> isn&apos;t the perfect fit for you, don&apos;t worry. 
                  <br />
                  Just follow the steps below and our team will help you.
                </p>
              </div>
              <div className="mb-28">
                <h5 className="mb-20 legal-title-text-2">Cancelation Requests</h5>

                <div className="mb-20">
                  <Accordion className="faq-accordion">
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
                      <p>Cancel Subscription purchased on Shine Ranker&apos;s website</p>
                    </AccordionSummary>
                      <hr className="ml-[1.75%] jus max-w-[95%]"/>
                    <AccordionDetails className="faq-accordion-details">
                      
                      <p className="max-w-[96%] global-header-text-3">
                        Log in to your Shine Ranker accounts and click on Settings, then click on the 	&quot;cancel subscription&quot; button.
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
                      className="p-6 question"
                    >
                      <p>Cancel Subscription purchased on ThriveCart pages</p>
                    </AccordionSummary>
                      <hr className="ml-[1.75%] jus max-w-[95%]"/>
                    <AccordionDetails className="faq-accordion-details">
                      <p className="max-w-[96%] global-header-text-3">
                        Log in to your Shine Ranker accounts and click on Settings, then click on the 	&quot;cancel subscription&quot; button.
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
                      className="p-6 question"
                    >
                      <p>Cancel via Shine Ranker support</p>
                    </AccordionSummary>
                      <hr className="ml-[1.75%] jus max-w-[95%]"/>
                    <AccordionDetails className="faq-accordion-details">
                      <p className="max-w-[96%] global-header-text-3">
                        Log in to your Shine Ranker accounts and click on Settings, then click on the 	&quot;cancel subscription&quot; button.
                      </p>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <p className="legal-content-text-2">
                  Please note that cancelling your subscription may take effect immediately or at the end of the pre-paid period. 
                  We will confirm the cancellation of your subscription within 1 to 3 business days after receiving your request.
                </p>
              </div>

              <div className="mb-20">
                <h2 className="mb-8 legal-title-text-2">Refund Requests</h2>
                <p className="legal-content-text-2">
                  We offer a 7-day money-back guarantee according to the terms described herein. If you cancel your subscription within 7 calendar 
                  days of placing your order, we&apos;ll refund your prepaid fees upon your written request within 30 calendar days. 
                  <br/><br/>
                  The refund will be processed through the same method as the original payment. It may take 5 to 10 business days for a refund to 
                  reflect on your bank statement. Please note that any bank fees and charges will be borne solely by you.
                  <br/><br/>
                  We reserve the right to reject your refund request if it&apos;s outside the refund period and terms. Please make sure to manage your 
                  account subscriptions and purchases responsibly. Also, keep in mind that refunds are only available for the current subscription 
                  payment on your account and don&apos;t apply to previous month&apos;s overage charges or additional costs.
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
      
      <FooterPage />
    </>
  );
};

export default Refund;
