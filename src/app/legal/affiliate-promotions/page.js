import React from "react";
// import "./home.css";

import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

const AffiliatePromotions = () => {
  return (
    <div>
      <header className="font-montserrat flex flex-col global-header-background-custom">
        <div className="flex flex-col items-center justify-center global-header-container-parent">
          <div className="flex flex-col justify-center">
            <article>
              <div className="legal-header-container">
                <span className="header-text flex flex-col">
                  <h3 className="text-base rounded min-w-max flex items-center justify-center global-header-text-1">
                    Legal
                  </h3>
                  <h3 className="text-base rounded min-w-max mb-2 global-header-text-2">
                    Affiliate Promotions
                  </h3>
                </span>
                <p className="text-base font-light mb-5 text-center global-header-text-3">
                  Last Updated 29 July, 2023
                </p>
              </div>
            </article>
          </div>
        </div>
      </header>

      {/* Contents */}
      <div className="font-montserrat global-content-container">
        <div className="flex">
          {/* Add your content here */}
          <div className="flex flex-col justify-center">
            <div className="font-montserrat divContainer">
              <div className="legal-categories inline">
                <a href="/" className="legal-category">
                  Home
                </a>
                <span> {`>`} </span>
                <a href="/" className="legal-category">
                  About
                </a>
                <span> {`>`} </span>
                <a href="/faq" className="legal-category">
                  Frequently Asked Questions
                </a>
                <span> {`>`} </span>
                <a href="#" className="legal-category legal-category-current">
                  Legal
                </a>
              </div>
              <div className="legal-text-card">
                <h2 className="legal-title-text my-5 pt-10">
                  Affiliate Promotions Terms & Conditions
                </h2>
                <p className="legal-content-text">
                  Read carefully before joining this program. You agree that you
                  are NOT allowed to do the following things if approved for the
                  affiliate program. By doing any of the following, you will be
                  terminated from the program and agree that any commissions
                  will be forfeited without recourse:
                </p>
              </div>

              <div className="legal-numbered-texts">
                <div>
                  <p className="legal-content-text">
                    1. You are NOT permitted to conduct e-mail promotions in a
                    3rd party system - all e-mail contacts MUST be your OWN opt
                    in e-mail list.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    2. You cannot buy solo ads, use safe lists, use spam or
                    anything similar.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    3. You must NOT run &quot;negative&quot; PPC or iframe domain
                    campaigns such as &quot;Product name / author name scam&quot; or any
                    other method to attract controversial click thru rates that
                    an ordinary person would deem to portray a negative view of
                    the product. This creates a very bad image for our company
                    and the individuals featured in the products and you will be
                    terminated from the program instantly.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    4. You should avoid using the raw affiliate link if you can.
                    All affiliates are encouraged to utilize redirect links in
                    e-mails and website campaigns and not the direct affiliate
                    link you will receive. This increases conversions for both
                    of us. (But ultimately the choice is up to you)
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    5. You cannot earn commission on your own purchase. Any
                    &apos;self&apos; purchase commission may be nullified or held back.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    6. iframes, review sites and cloaked domains are permitted
                    as long as they do not contain offensive or negative domain
                    URLs.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    7. Affiliate payments will be set as automatic payments
                    after 30 days of your referral&apos;s successful purchase.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    8. Please describe briefly how you will be promoting and any
                    links to your own websites.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    9. We run a legitimate business, which means that we always
                    correctly illustrate and represent our products and their
                    features and benefits to the customer. Please make sure you
                    do the same. Anyone found using misleading claims,
                    inaccurate information or false testimonials (or anything
                    that does not comply with FTC guidelines) will have their
                    affiliate account revoked immediately.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    10. Vendor reserves the right to TERMINATE any affiliate if
                    found to be breaking any rules and using grey-hat/black-hat
                    marketing practices to drive sales or for any other reason.
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    11. Affiliates CANNOT create social media pages with the
                    product name, official logo or brand name to avoid confusion
                    and prevent abuse. Anyone found using &quot;brand name&quot; &quot;website
                    name&quot; or &quot;product images&quot; on their Facebook fan page or
                    other social platform to promote the product without
                    permission will be banned immediately!
                  </p>
                </div>
                <div>
                  <p className="legal-content-text">
                    12. You may not give cash rebates as it may increase refund
                    rates. Cash rebates of any kind are not permitted.
                  </p>
                </div>

                <div className="legal-bordered-container">
                  <div>
                    <p className="text-center legal-bordered-text">
                      The terms may change at anytime without notice. Please
                      check back here regularly.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />
      
    </div>
  );
};

export default AffiliatePromotions;
