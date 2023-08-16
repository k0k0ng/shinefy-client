"use client";
import { useState } from "react";
import FeaturesAndBenefits from "@/components/FeaturesAndBenefits";
import ToggleButton from "@/components/ToggleButton";

import "../../styles/pricing.css";

export default function pricing() {
  const [selectedOption, setSelectedOption] = useState("monthly");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <header className="font-montserrat flex flex-col pricing-header-background-custom">
        <div className="flex flex-col items-center justify-center pricing-header-container-parent">
          <div className="flex flex-col justify-center">
            <article>
              <div className="legal-header-container">
                <span className="header-text flex flex-col">
                  <h3 className="text-base rounded min-w-max flex items-center justify-center global-header-text-1">
                    Purchase a Subscription
                  </h3>
                  <h3 className="text-base rounded min-w-max mb-2 global-header-text-2">
                    Pricing Plan
                  </h3>
                </span>
                <p className="text-base font-light mb-5 text-center global-header-text-3">
                  Choose the Plan that Suits Your Content Drive
                </p>
                <div className="flex justify-center align-center">
                  <ToggleButton
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </header>

      {/* Contents */}
      <div className="font-montserrat global-content-container pricing-content-container">
        {/* Row 1 Contents - Price Cards */}
        <div className="pricing-price-cards flex flex-col xl:flex-row justify-center items-center gap-10">
          <div className="pricing-price-card">
            <div className="pricing-price-title">
              <h2 className="pricing-price-title-1">Spark Basic</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-price-title-2 mt-5">$59</h1>
              ) : (
                <h1 className="pricing-price-title-2 mt-5">$600</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-price-title-3">per month</p>
              ) : (
                <p className="pricing-price-title-3">per year</p>
              )}
            </div>
            <div className="pricing-price-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  5,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  5,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">Unlimited Leads</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Keyword Research</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-price-footer-button">
                Choose Plan
              </a>
              <p className="pricing-price-footer-text">save $108.12 per year</p>
            </div>
          </div>

          <div className="pricing-price-card">
            <div className="pricing-price-title">
              <h2 className="pricing-price-title-1">Flare Plus</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-price-title-2 mt-5">$112</h1>
              ) : (
                <h1 className="pricing-price-title-2 mt-5">$1,140</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-price-title-3">per month</p>
              ) : (
                <p className="pricing-price-title-3">per year</p>
              )}
            </div>
            <div className="pricing-price-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">10 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  10,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  10,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Leads</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Keyword Research</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
                <p className="pricing-price-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-price-footer-button">
                Choose Plan
              </a>
              <p className="pricing-price-footer-text">save $204.24 per year</p>
            </div>
          </div>

          <div className="pricing-price-card">
            <div className="pricing-price-title">
              <h2 className="pricing-price-title-1">Shine Pro</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-price-title-2 mt-5">$219</h1>
              ) : (
                <h1 className="pricing-price-title-2 mt-5">$2,208</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-price-title-3">per month</p>
              ) : (
                <p className="pricing-price-title-3">per year</p>
              )}
            </div>
            <div className="pricing-price-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">20 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  20,000 Shine Audits
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  20,000 Keywords Research Usages
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited Traffic Checker
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited Content Editor
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Leads</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited AI Keywords
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Unlimited AI Chat
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Project Dashboard
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Keyword Research</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">
                  Leads List & Widget
                </p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-price-footer-button">
                Choose Plan
              </a>
              <p className="pricing-price-footer-text">save $420.00 per year</p>
            </div>
          </div>
        </div>

        {/* Row 2 Contents - No Commitment Policy */}
        <div className="text-center my-20 price-policy-container">
          <div>
            <p className="pricing-policy-text-1">
              At <span className="text-[#54E3E6]">Shine Ranker</span>, we follow
              a “No Commitment” policy.
            </p>
          </div>
          <div>
            <p className="pricing-policy-text-1">
              You may cancel your subscription any time.
            </p>
          </div>
          <div>
            <p className="pricing-policy-text-2 mt-5">
              Terms and Rules may apply. Read full fine print on Cancelations{" "}
              <a href="/legal/refund" className="text-[#54E3E6]">
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Row 3 Contents - Features and Benefits */}
      <div className="pricing-features-container">
        <FeaturesAndBenefits />
      </div>
    </div>
  );
}
