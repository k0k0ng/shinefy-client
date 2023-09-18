"use client";

import { useState } from "react";

import FooterPage from "@/components/Footer/Footer";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

import "../../styles/pricing.css";
import "../../styles/Homepage/PricingSection.css";
import "@/styles/components.contacts.css";

export default function Pricing() {
  const [selectedPricingPlan, setSelectedPricingPlan] = useState("monthly-pricing");

  const handlePricingPlanChange = (option) => {
    setSelectedPricingPlan(option);
  };

  return (
    <>
      <header className="min-h-[48rem] pt-[16rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-6 global-header-text-1">
            Shinefy
          </h2>
          <h1 className="mb-6 global-header-text-2">
            Pricing Plan
          </h1>
          <p className="max-w-[520px] text-center global-header-text-3">
            Get access to all features of these Powerful AI Tools and be ready to skyrocket your online. 
            Choose between a month to month subscription or an annual one time payment.
          </p>
        </div>
      </header>

      <section className="pb-12 px-[5%] xl:px-[20%] global-section-container-under-header">
        
        <div className="flex flex-col md:flex-row justify-center items-center pb-[50px] gap-x-10 lg:gap-x-20 mt-[-10rem]">
          <div className="">
            <h4 className="max-w-[230px] mb-8 text-[#7BDCDE] text-2xl font-bold">
              The Ultimate Content Creator Package
            </h4>
            <div className="">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">5 Projects</p>
              </div>

              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Projects
                </p>
              </div>
              
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Keyword Research Usage
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Leads
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Unlimited Video Clipping
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  AI Video Creation
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Keyword Research
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Shine Audit
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  AI Video Tools
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-plan-checklist-text">
                  AI Video Clipper
                </p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-auto mt-10 md:mt-0">
            <div 
              onClick={() => handlePricingPlanChange("monthly-pricing")} 
              className={`relative flex flex-col md:flex-row justify-end items-end mb-4 py-4 px-6 gap-x-8 xl:gap-x-14 rounded-md ${selectedPricingPlan == "monthly-pricing" ? "active-pricing-plan-cards-container" : "unactive-pricing-plan-cards-container"}`}
            >
              <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col py-3 pl-3">
                <p className="mb-1 pricing-plan-card-text-3">Shinefy Starter</p>
                <p className="mb-4 pricing-plan-card-text-2">Take it Slow</p>
                <p className="mb-4 pricing-plan-card-text-1">$99</p>
                <p className="pricing-plan-card-text-3">Billed Monthly</p>
              </div>

              <i className="absolute top-4 right-6 fa-solid fa-circle-check text-[#F1F1F1]"></i>

              <div className="w-full md:w-[40%] lg:w-[35%]">
                <a
                  href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                  rel="noreferrer"
                  target="_blank"
                  className="w-full flex items-center justify-center whitespace-nowrap py-4 px-5 pricing-plan-card-btn"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            <div 
              onClick={() => handlePricingPlanChange("annual-pricing")} 
              className={`relative flex flex-col md:flex-row justify-end items-end mb-4 py-4 px-6 gap-x-8 xl:gap-x-14 rounded-md ${selectedPricingPlan == "annual-pricing" ? "active-pricing-plan-cards-container" : "unactive-pricing-plan-cards-container"}`}
            >
              <div className="w-full md:w-[60%] lg:w-[65%] flex flex-col py-3 pl-3">
                <p className="mb-1 md:whitespace-nowrap pricing-plan-card-text-3">Create Content Uninterrupted</p>
                <p className="mb-4 pricing-plan-card-text-2">Go Big!</p>
                <p className="mb-4 pricing-plan-card-text-1">$497</p>
                <p className="pricing-plan-card-text-3">Billed annually, 43% Savings!</p>
              </div>
              
              <i className="absolute top-4 right-6 fa-solid fa-circle-check text-[#F1F1F1]"></i>
              
              <div className="w-full md:w-[40%] lg:w-[35%]">
                <a
                  href="https://chasereiner.thrivecart.com/seo-pro-automated-pack/"
                  rel="noreferrer"
                  target="_blank"
                  className="w-full flex items-center justify-center whitespace-nowrap py-4 px-5 pricing-plan-card-btn"
                >
                  Choose Plan
                </a>
              </div>
            </div>
            <div className="flex flex-col text-center items-center mt-0 px-4 py-8 md:mt-10 md:p-0 rounded-md pricing-plan-third-card-container">
              <p className="max-w-[240px] mb-6 pricing-plan-card-text-3">
                Still not sure which subscription fits your content creation and goals?
              </p>
              <h4 className="max-w-[230px] mb-10 text-[#7BDCDE] text-2xl font-bold">
                Let’s have a chat.
              </h4>

              <a
                  href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                  rel="noreferrer"
                  target="_blank"
                  className="w-10/12 md:w-6/12 lg:w-auto flex justify-center items-center py-4 px-5 global-primary-btn"
                >
                  Book a Discovery Call
                </a>
            </div>
          </div>
        </div>


      </section>

      <div className="flex flex-col items-center text-center py-28 px-[5%] xl:px-[18%] global-section-background-3">
        <p className="mb-8 global-header-text-1">
          Have a Promo Code?
        </p>
        <h3 className="max-w-[590px] mb-8 global-header-text-2">
          Enter Your Promo Code to Receive Your Amazing discount
        </h3>
        <form className="flex flex-col md:flex-row global-promo-code-form">
          <input
            type="text"
            placeholder="enter your promo code here"
            className="h-12"
          />
          <button className="px-5 global-primary-btn">
            Claim
          </button>
        </form>
      </div>

      <ContactInfo />

      <LimitedTimeOffer />
      
      <FooterPage />
    </>
  );
}
