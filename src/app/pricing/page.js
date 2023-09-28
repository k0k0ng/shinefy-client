import FooterPage from "@/components/Footer/Footer";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";
import PricingSectionContent from "@/components/HomepageSections/PricingSectionContent";

import "../../styles/pricing.css";
import "@/styles/components.contacts.css";

export default function Pricing() {
  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] xl:px-[18%]">
        <div className="flex flex-col items-center justify-center">
          <h2 className="global-header-text-1 mb-6">Shinefy</h2>
          <h1 className="global-header-text-2 mb-6">Pricing Plan</h1>
          <p className="global-header-text-3 max-w-[520px] text-center">
            Get access to all features of these Powerful AI Tools and be ready
            to skyrocket your online. Choose between a month to month
            subscription or an annual one time payment.
          </p>
        </div>
      </header>

      <section className="global-section-container-under-header px-[5%] pb-12 xl:px-[20%]">
        <div className="mt-[-10rem] flex flex-col items-center justify-center gap-x-10 pb-[50px] md:flex-row lg:gap-x-20">
          <PricingSectionContent />
        </div>
      </section>

      <div className="global-section-background-3 flex flex-col items-center px-[5%] py-28 text-center xl:px-[18%]">
        <p className="global-header-text-1 mb-8">Have a Promo Code?</p>
        <h3 className="global-header-text-2 mb-8 max-w-[590px]">
          Enter Your Promo Code to Receive Your Amazing discount
        </h3>
        <form className="global-promo-code-form flex flex-col md:flex-row">
          <input
            type="text"
            placeholder="enter your promo code here"
            className="h-12"
          />
          <button className="global-primary-btn px-5">Claim</button>
        </form>
      </div>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
