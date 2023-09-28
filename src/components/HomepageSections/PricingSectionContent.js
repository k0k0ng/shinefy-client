"use client";

import { useState } from "react";

export default function PricingSectionContent() {
  const [selectedPricingPlan, setSelectedPricingPlan] =
    useState("monthly-pricing");

  const handlePricingPlanChange = (option) => {
    setSelectedPricingPlan(option);
  };

  return (
    <>
      <div className="">
        <h4 className="mb-8 max-w-[230px] text-2xl font-bold text-[#7BDCDE]">
          The Ultimate Content Creator Package
        </h4>
        <div className="">
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">5 Projects</p>
          </div>

          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Unlimited Projects</p>
          </div>

          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">
              Unlimited Shine Audits
            </p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">
              Unlimited Keyword Research Usage
            </p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">
              Unlimited Traffic Checker
            </p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">
              Unlimited Traffic Checker
            </p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Unlimited Leads</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Unlimited AI Keywords</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Unlimited AI Chat</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">
              Unlimited Video Clipping
            </p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">AI Video Creation</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Project Dashboard</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Keyword Research</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Traffic Checker</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Shine Audit</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Content Editor</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">Leads List & Widget</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">AI Keywords</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">AI Chat</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">AI Video Tools</p>
          </div>
          <div className="mb-3 flex gap-2">
            <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
            <p className="pricing-plan-checklist-text">AI Video Clipper</p>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full md:mt-0 md:w-auto">
        <div
          onClick={() => handlePricingPlanChange("monthly-pricing")}
          className={`relative mb-14 flex flex-col items-end justify-end gap-x-8 rounded-md px-6 py-4 md:flex-row xl:gap-x-14 ${
            selectedPricingPlan == "monthly-pricing"
              ? "active-pricing-plan-cards-container"
              : "unactive-pricing-plan-cards-container"
          }`}
        >
          <div className="flex w-full flex-col py-3 pl-3 md:w-[60%] lg:w-[65%]">
            <p className="pricing-plan-card-text-3 mb-1">Shinefy Starter</p>
            <p className="pricing-plan-card-text-2 mb-4">Take it Slow</p>
            <p className="pricing-plan-card-text-1 mb-4">$99</p>
            <p className="pricing-plan-card-text-3 mb-6">Billed Monthly</p>
            <p className="pricing-plan-card-text-3 max-w-[200px]">
              Everything you need to get started scaling your content
            </p>
          </div>

          <i className="fa-solid fa-circle-check absolute right-6 top-4 text-[#F1F1F1]"></i>

          <div className="w-full md:w-[40%] lg:w-[35%]">
            <a
              href="https://chasereiner.thrivecart.com/shine-ranker-deal"
              rel="noreferrer"
              target="_blank"
              className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
            >
              Choose Plan
            </a>
          </div>
        </div>

        <div
          onClick={() => handlePricingPlanChange("annual-pricing")}
          className={`relative mb-4 flex flex-col items-end justify-end gap-x-8 rounded-md px-6 py-4 md:flex-row xl:gap-x-14 ${
            selectedPricingPlan == "annual-pricing"
              ? "active-pricing-plan-cards-container"
              : "unactive-pricing-plan-cards-container"
          }`}
        >
          <div className="flex w-full flex-col py-3 pl-3 md:w-[60%] lg:w-[65%]">
            <p className="pricing-plan-card-text-3 mb-1 md:whitespace-nowrap">
              Create Content Uninterrupted
            </p>
            <p className="pricing-plan-card-text-2 mb-4">Go Big!</p>
            <p className="pricing-plan-card-text-1 mb-4">$499</p>
            <p className="pricing-plan-card-text-3 mb-6">
              Billed annually, 43% Savings!
            </p>
            <p className="pricing-plan-card-text-3 max-w-[220px]">
              Experience Shinefy without limits and empower your channel
              consistently all with a sweet discount!
            </p>
          </div>

          <i className="fa-solid fa-circle-check absolute right-6 top-4 text-[#F1F1F1]"></i>

          <div className="w-full md:w-[40%] lg:w-[35%]">
            <a
              href="https://chasereiner.thrivecart.com/seo-pro-automated-pack/"
              rel="noreferrer"
              target="_blank"
              className="pricing-plan-card-btn flex w-full items-center justify-center whitespace-nowrap px-5 py-4"
            >
              Choose Plan
            </a>
          </div>
        </div>

        {/* *** Hidden because of layout change - JOHN 28/09/23 *** */}
        {/* <div className="flex flex-col text-center items-center mt-0 px-4 py-8 md:mt-10 md:p-0 rounded-md pricing-plan-third-card-container">
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
        </div> */}
      </div>
    </>
  );
}
