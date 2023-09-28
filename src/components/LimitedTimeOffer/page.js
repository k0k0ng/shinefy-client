import "@/styles/components.cta.css";

const LimitedTimeOffer = () => {
  return (
    <section className="flex flex-col items-center">
        <div className="flex flex-col lg:flex-row justify-between items-center py-36 md:py-28 lg:py-20 space-x-0 lg:space-x-28 xl:space-x-44">
            <div className="text-center lg:text-start mb-12 lg:mb-0 px-4 md:px-0">
                <h2 className="mb-5 global-header-text-1">Limited-Time Offer</h2>
                <h1 className="mb-5 md:mb-2.5 px-10 md:px-0  global-header-text-2">Best Shinefy tools</h1>
                <p className="mb-2.5 global-header-text-3">
                    Don’t miss this chance to get the discounted package
                    <br className="hidden md:block" />
                    and start on your journey towards a growing income using AI.
                </p>
            </div>
            <a
                href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                rel="noreferrer"
                target="_blank"
                className="flex items-center justify-center px-14 limited-time-offer-btn">
                Grab this Deal!
            </a>
        </div>
    </section>
  )
}

export default LimitedTimeOffer;
