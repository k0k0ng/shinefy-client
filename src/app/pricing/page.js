
import FooterPage from "@/components/Footer/Footer";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";
import PricingSectionContent from "@/components/HomepageSections/PricingSectionContent";

import "../../styles/pricing.css";
import "@/styles/components.contacts.css";

export default function Pricing() {

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
          <PricingSectionContent />
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
