"use client";

import { useState } from "react";

import FooterPage from "@/components/Footer/Footer";
import ToggleButton from "@/components/ToggleButton";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../../styles/pricing.css";
import "@/styles/components.contacts.css";



const PricingPlansMobile = (selectedOption) => {
  const [expanded, setExpanded] = useState(false);

  const handleOpenClosePricingPlan = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div className="flex xl:hidden pricing-plan-card-container">
      <Swiper
        slidesPerView={'auto'}
        centeredSlides={true}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        <SwiperSlide>
          <div className="pricing-plan-card">
            <div className="mb-6 pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Spark Basic</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$59</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$600</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            
            <Accordion 
              expanded={expanded === 'mobile-accordion'} 
              onChange={handleOpenClosePricingPlan('mobile-accordion')} 
              sx={{bgcolor:"transparent", boxShadow:0}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"#FFF"}} />}
                aria-controls="spark-basic-bh-content"
                id="spark-basic-bh-header"
                sx={{ flexDirection: "column" }}
              >
                <Typography sx={{color:"#FFF"}}>
                  See Inclusions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                
                <SparkBasic />
                
              </AccordionDetails>
            </Accordion>
            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $108.12 per year
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pricing-plan-card">
            <div className="mb-6 pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Flare Plus</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$112</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$1,140</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            
            <Accordion 
              expanded={expanded === 'mobile-accordion'} 
              onChange={handleOpenClosePricingPlan('mobile-accordion')} 
              sx={{bgcolor:"transparent", boxShadow:0}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"#FFF"}} />}
                aria-controls="flare-plus-bh-content"
                id="flare-plus-bh-header"
                sx={{ flexDirection: "column" }}
              >
                <Typography sx={{color:"#FFF"}}>
                  See Inclusions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                
                <FlarePlus />
                  
              </AccordionDetails>
            </Accordion>

            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $204.24 per year
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="pricing-plan-card">
            <div className="mb-6 pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Shine Pro</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$219</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$2,208</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            
            <Accordion 
              expanded={expanded === 'mobile-accordion'} 
              onChange={handleOpenClosePricingPlan('mobile-accordion')} 
              sx={{bgcolor:"transparent", boxShadow:0}}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color:"#FFF"}} />}
                aria-controls="shine-pro-bh-content"
                id="shine-pro-bh-header"
                sx={{ flexDirection: "column" }}
              >
                <Typography sx={{color:"#FFF"}}>
                  See Inclusions
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                
                <ShinePro />
                  
              </AccordionDetails>
            </Accordion>

            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $420.00 per year
              </p>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>

      

      
      
      

    </div>
  );
}

const SparkBasic = () => {
  return ( 
    <div className="pricing-plan-checklist mt-10 mb-5">
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">5 Projects</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          5,000 Shine Audits
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          5,000 Keywords Research Usages
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited Traffic Checker
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited Content Editor
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited Leads
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited AI Keywords
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited AI Chat
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
        <p className="pricing-plan-checklist-text">Shine Audit</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">Content Editor</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">
          Leads List & Widget
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">AI Keywords</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">AI Chat</p>
      </div>
    </div>
  );
}

const FlarePlus = () => {
  return (
    <div className="pricing-plan-checklist mt-10 mb-5">
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">10 Projects</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          10,000 Shine Audits
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          10,000 Keywords Research Usages
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
          Unlimited Content Editor
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited Leads
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited AI Keywords
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">
          Unlimited AI Chat
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
        <p className="pricing-plan-checklist-text">Shine Audit</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">Content Editor</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          Leads List & Widget
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">AI Keywords</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#AEAEAE]"></i>
        <p className="pricing-plan-checklist-text">AI Chat</p>
      </div>
    </div>
  );
}

const ShinePro = () => {
  return (
    <div className="pricing-plan-checklist mt-10 mb-5">
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">20 Projects</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          20,000 Shine Audits
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          20,000 Keywords Research Usages
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
          Unlimited Content Editor
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
        <p className="pricing-plan-checklist-text">Shine Audit</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">Content Editor</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">
          Leads List & Widget
        </p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">AI Keywords</p>
      </div>
      <div className="flex gap-2 mb-3">
        <i className="fa-solid fa-circle-check text-[#3DCB80]"></i>
        <p className="pricing-plan-checklist-text">AI Chat</p>
      </div>
    </div>
  );
}


export default function Pricing() {
  const [selectedOption, setSelectedOption] = useState("monthly");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <header className="min-h-[48rem] pt-[16rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-6 global-header-text-1">
            shineAi.tools
          </h2>
          <h3 className="mb-6 global-header-text-2">
            Pricing Plan
          </h3>
          <p className="max-w-[520px] text-center global-header-text-3">
            Get access to all features of these Powerful AI Tools and be ready to skyrocket your online. 
            Choose between a month to month subscription or an annual one time payment.
          </p>
        </div>
      </header>

      <section className="pb-12 px-[5%] xl:px-[18%] global-section-container-under-header">
        <div className="flex justify-center align-center mt-[-12rem] mb-10">
          <ToggleButton
            selectedOption={selectedOption}
            onOptionChange={handleOptionChange}
          />
        </div>

        {PricingPlansMobile(selectedOption)}

        <div className="hidden xl:flex flex-col xl:flex-row justify-center items-center gap-6">
          <div className="pricing-plan-card">
            <div className="pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Spark Basic</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$59</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$600</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            
            <SparkBasic />

            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $108.12 per year
              </p>
            </div>
          </div>

          <div className="pricing-plan-card">
            <div className="pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Flare Plus</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$112</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$1,140</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            
            <FlarePlus />

            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $204.24 per year
              </p>
            </div>
          </div>

          <div className="pricing-plan-card">
            <div className="pricing-plan-title">
              <h2 className="mb-8 pricing-plan-title-1">Shine Pro</h2>
              {selectedOption === "monthly" ? (
                <h1 className="pricing-plan-title-2 mt-5">$219</h1>
              ) : (
                <h1 className="pricing-plan-title-2 mt-5">$2,208</h1>
              )}
              {selectedOption === "monthly" ? (
                <p className="pricing-plan-title-3">per month</p>
              ) : (
                <p className="pricing-plan-title-3">per year</p>
              )}
            </div>
            
            <ShinePro />

            <div className="pricing-plan-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-plan-footer-button">
                Choose Plan
              </a>
              <p className="pricing-plan-footer-text">
                save $420.00 per year
              </p>
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
