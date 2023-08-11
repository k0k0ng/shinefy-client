import "../../styles/pricing.css";

export default function pricing() {
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
              </div>
            </article>
          </div>
        </div>
      </header>

      {/* Contents */}
      <div className="font-montserrat global-content-container">


        {/* Row 1 Contents - Price Cards */}
        <div className="pricing-price-cards flex flex-col xl:flex-row justify-center items-center gap-10">
          <div className="pricing-price-card">
            <div className="pricing-price-title">
                <h2 className="pricing-price-title-1">Spark Basic</h2>
                <h1 className="pricing-price-title-2 mt-5">$59</h1>
                <p className="pricing-price-title-3">per month</p>
            </div>
            <div className="pricing-price-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5,000 Shine Audits</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5,000 Keywords Research Usages</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Leads</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited AI Chat</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Project Dashboard</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Keyword Research</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Leads List & Widget</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-price-footer-button">Choose Plan</a>
              <p className="pricing-price-footer-text">save $108.12 per year</p>
            </div>
          </div>

          <div className="pricing-price-card">
            <div className="pricing-price-title">
                <h2 className="pricing-price-title-1">Flare Plus</h2>
                <h1 className="pricing-price-title-2 mt-5">$112</h1>
                <p className="pricing-price-title-3">per month</p>
            </div>
            <div className="pricing-price-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5,000 Shine Audits</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5,000 Keywords Research Usages</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Leads</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited AI Chat</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Project Dashboard</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Keyword Research</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Leads List & Widget</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-price-footer-button">Choose Plan</a>
              <p className="pricing-price-footer-text">save $108.12 per year</p>
            </div>
          </div>

          <div className="pricing-price-card">
            <div className="pricing-price-title">
                <h2 className="pricing-price-title-1">Shine Pro</h2>
                <h1 className="pricing-price-title-2 mt-5">$219</h1>
                <p className="pricing-price-title-3">per month</p>
            </div>
            <div className="pricing-price-checklist mt-10 mb-5">
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5 Projects</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5,000 Shine Audits</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">5,000 Keywords Research Usages</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited Leads</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Unlimited AI Chat</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Project Dashboard</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Keyword Research</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Traffic Checker</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Shine Audit</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Content Editor</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">Leads List & Widget</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Keywords</p>
              </div>
              <div className="flex gap-2 mb-3">
                <i class="fa-solid fa-circle-check text-[#3DCB80]"></i>
                <p className="pricing-price-checklist-text">AI Chat</p>
              </div>
            </div>
            <div className="pricing-price-footer flex flex-col justify-center items-center gap-5 w-full mt-10">
              <a href="/pricing" className="pricing-price-footer-button">Choose Plan</a>
              <p className="pricing-price-footer-text">save $108.12 per year</p>
            </div>
          </div>
        </div>



        
      </div>
    </div>
  )
}
