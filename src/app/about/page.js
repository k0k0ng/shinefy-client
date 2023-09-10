
import FooterPage from "@/components/Footer/Footer";

import FeaturesAndBenefits from "@/components/FeaturesAndBenefits";
import ContactForm from "@/components/Contacts/ContactForm";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/CTA/LimitedTimeOffer";

import "@/styles/components.contacts.css";

export default function about() {
  const youtubeVideoId = "PL3PXYFdlsU&t=2s";

  return (
    <>
      {/* header */}
      <header className="min-h-[48rem] pt-[16rem] lg:pt-[15.5rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col md:items-center">
          <h1 className="mb-6 md:text-center global-header-text-1">
            About Us
          </h1>
          <h3 className="mb-6 md:text-center global-header-text-2">
            Shine Ranker is now shineAI.tools
          </h3>
          <p className="md:text-center global-header-text-3">
            Last Updated 29 July, 2023
          </p>
        </div>
      </header>

      <section className="pb-12 px-[5%] xl:px-[18%] global-section-container-under-header">
        <div className="flex flex-col flex-col-reverse lg:flex-row items-center justify-center gap-y-10 lg:gap-16 py-8 mt-[-8rem]">
          <div className="w-full lg:w-auto px-0 md:px-5 lg:px-0">
            <div className="my-5 about-text-card">
              <h2 className="mb-5 hidden md:block global-header-text-1">About Us</h2>
              <h2 className="max-w-[380px] mb-6 hidden md:block global-header-text-2">
                Shine Ranker is now shineAI.tools
              </h2>
              <p
                className="max-w-[90vw] lg:max-w-[520px] global-header-text-3"
              >
                In the fast-paced world of digital marketing, search 
                engine optimization (SEO) remains one of the most 
                crucial aspects of online business success. To rise 
                above the compe tition and secure a dominant presence 
                on the web, businesses and website owners need 
                reliable SEO tools to optimize their content and strategy. 
                One such tool that has gained popularity in recent times 
                is the Shine Ranker SEO tool. 
              </p>
            </div>
          </div>

          <div className="border">
            <a
              href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/global/training-video-thumbnail.png"
                alt="Shine Ai Training Video thumbnail"
                width="540px"
                className="mx-auto max-w-full"
              />

              {/* <img
                src="/images/about/playbutton.png"
                alt="Play Button"
                width={100}
                height={100}
                className="mx-auto max-w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4 play-button-image"
              /> */}
            </a>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <FeaturesAndBenefits />

      <ContactForm />

      <ContactInfo />

      <LimitedTimeOffer />
      
      <FooterPage />
    </>
  );
}
