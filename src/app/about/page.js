import Image from "next/image";

import thumbnail from "/public/images/thumbnail.png";
import playbutton from "/public/images/playButton.png";

import FeaturesAndBenefits from "@/components/FeaturesAndBenefits";

import "../../styles/about.css";

export default function about() {
  const youtubeVideoId = "PL3PXYFdlsU&t=2s";

  return (
    <div>
      {/* header */}
      <header className="font-montserrat flex flex-col global-header-background-custom">
        <div className="flex flex-col items-center justify-center global-header-container-parent">
          <div className="flex flex-col justify-center">
            <article>
              <div className="legal-header-container">
                <span className="header-text flex flex-col">
                  <h3 className="text-base rounded min-w-max flex items-center justify-center global-header-text-1">
                    About
                  </h3>
                  <h3 className="text-base rounded min-w-max mb-2 global-header-text-2">
                    Shine Ranker
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
        <div className="legal-categories hidden md:inline">
          <a href="/" className="legal-category">
            Home
          </a>
          <span> {`>`} </span>
          <a href="/" className="legal-category legal-category-current">
            Products
          </a>
        </div>
        {/* About */}
        <div className="mx-auto justify-center items-center my-20">
          {/* About content */}
          <div className="flex flex-col-reverse md:flex-row justify-center gap-10 items-center">
            {/* First Column */}
            <div className="">
              <div className="my-5 about-text-card">
                <h2 className="about-title-text-1 hidden md:block">About</h2>
                <h2 className=" about-title-text my-2 pt-2 hidden md:block">
                  Shine Ranker
                </h2>
                <p
                  className=" about-content-text max-w-[90vw] md:max-w-[350px] mt-10 md:mt-0"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
                  tellus sed augue semper porta.
                </p>
              </div>
            </div>

            {/* Second Column */}
            <div className="md:w-1/2 text-center about-thumbnail  relative">
              <div className="faq-text-card-2">
                <div className="text-center">
                  {/* Using an <a> link to open the YouTube video in a new page */}
                  <a
                    href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative">
                      <Image
                        src={thumbnail}
                        alt="Video Thumbnail"
                        width={394}
                        height={474}
                        className="mx-auto max-w-full h-auto"
                      />
                      <Image
                        src={playbutton}
                        alt="Play Button"
                        width={100}
                        height={100}
                        className="mx-auto max-w-full h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 play-button-image"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features & Benefits */}
      <div className="mb-20">
        <FeaturesAndBenefits />
      </div>

    </div>
  );
}
