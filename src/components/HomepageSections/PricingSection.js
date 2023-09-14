
import { useState } from 'react'

import "../../styles/Homepage/PricingSection.css";

export default function PricingSection() {
  const [selectedPricingPlan, setSelectedPricingPlan] = useState("monthly-pricing");

  const handlePricingPlanChange = (option) => {
    setSelectedPricingPlan(option);
  };

  return (
    <section className="pb-20 md:pb-0">
        <div className="px-[5%] md:px-[10%] lg:px-[20%] pricing-plan-header-bg">
          <div className="flex flex-col items-center pt-16 lg:pt-48 pb-14">
            <h3 className="mb-6 home-section-header-small">Our Pricing Plan</h3>
            <h2 className="max-w-[920px] mb-6 text-center home-section-header-big">
              Get access to all features of these Powerful AI Tools and be
              ready to skyrocket your online growth
            </h2>
            <p className="max-w-[410px] mb-5 text-center home-section-header-content">
              Simplify your data collection process with our efficient and
              user-friendly tool.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mx-[5%] lg:mx-[10%] xl:mx-[20%] py-[50px] gap-x-10 lg:gap-x-20">
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
                <p className="mb-4 pricing-plan-card-text-1">$97</p>
                <p className="pricing-plan-card-text-3">Billed Monthly</p>
              </div>

              <i className="absolute top-4 right-6 fa-solid fa-circle-check text-[#F1F1F1]"></i>

              <div className="w-full md:w-[40%] lg:w-[35%]">
                <a
                  href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                  rel="noreferrer"
                  target="_blank"
                  className="w-full flex items-center justify-center whitespace-nowrap px-6 pricing-plan-card-btn"
                >
                  Choose Plan
                </a>
              </div>
            </div>

            <div 
              onClick={() => handlePricingPlanChange("annual-pricing")} 
              className={`relative flex flex-col md:flex-row justify-end items-end mb-14 py-4 px-6 gap-x-8 xl:gap-x-14 rounded-md ${selectedPricingPlan == "annual-pricing" ? "active-pricing-plan-cards-container" : "unactive-pricing-plan-cards-container"}`}
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
                  href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                  rel="noreferrer"
                  target="_blank"
                  className="w-full flex items-center justify-center whitespace-nowrap px-6 pricing-plan-card-btn"
                >
                  Choose Plan
                </a>
              </div>
            </div>
            <div className="flex flex-col text-center items-center">
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
                  className="w-10/12 md:w-6/12 lg:w-auto flex justify-center items-center px-5 home-primary-btn"
                >
                  Book a Discovery Call
                </a>
            </div>
          </div>
          

        </div>
      </section>
  )
}
