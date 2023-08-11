import Image from "next/image";

// Images
import toolRobot from "../../../public/images/tools/tools-robot.png";
import toolImage2Image from "../../../public/images/tools/tools-image2image.png";
import toolText2Image from "../../../public/images/tools/tools-text2image.png";
import toolWebscrape from "../../../public/images/tools/tools-webscrape.png";
import toolVideo1 from "../../../public/images/tools/tools-video1.png";
import toolVideo2 from "../../../public/images/tools/tools-video2.png";

// SVGs
import iconWebscrape from "../../../public/svg/tools/tools-webscrape-icon.svg";
import iconVideo from "../../../public/svg/tools/tools-video-icon.svg";
import iconText2Image from "../../../public/svg/tools/tools-text2image-icon.svg";
import iconImage2Image from "../../../public/svg/tools/tools-image2image-icon.svg";

import "../../styles/tools.css";

export default function tools() {
  return (
    <div>
      <header className="font-montserrat flex flex-col global-header-background-custom">
        <div className="flex flex-col items-center justify-center global-header-container-parent">
          <div className="flex flex-col justify-center">
            <article>
              <div className="legal-header-container">
                <span className="header-text flex flex-col">
                  <h3 className="text-base rounded min-w-max flex items-center justify-center global-header-text-1">
                    Products
                  </h3>
                  <h3 className="text-base rounded min-w-max mb-2 global-header-text-2">
                    Shine Ranker Tools
                  </h3>
                </span>
              </div>
            </article>
          </div>
        </div>
      </header>

      {/* Contents */}
      <div className="font-montserrat global-content-container">
        <div className="flex">
          {/* Add your content here */}
          <div className="flex flex-col justify-center w-full">
            <div className="font-montserrat divContainer">
              <div className="legal-categories inline">
                <a href="/" className="legal-category">
                  Home
                </a>
                <span> {`>`} </span>
                <a href="/" className="legal-category legal-category-current">
                  Products
                </a>
              </div>

              {/* Row 1 Content */}
              <div className="tools-card-1 flex flex-col-reverse lg:flex-row justify-center items-center mt-10 w-full">
                <div className="w-full lg:w-[500px]">
                  <h2 className="tools-text-1">
                    Our Shiny Products are promising
                  </h2>
                  <h1 className="tools-text-2 pt-3 pb-3">
                    App Tools Like Never Before!
                  </h1>
                  <p className="tools-text-3">
                    Experience the future of content creation with AI-powered
                    tools that automate video production, allowing you to
                    generate engaging videos and start earning revenue in as
                    little as 7 days. Embrace the efficiency and profitability
                    of this revolutionary technology, as it empowers you to
                    focus on content strategy while the AI handles the rest.
                  </p>
                </div>
                <div>
                  <Image
                    src={toolRobot}
                    alt="Shine Ranker Robot"
                    width={394} // Specify the width of the image
                    height={474} // Specify the height of the image
                  />
                </div>
              </div>

              {/* Row 2 Content */}
              <div className="tools-card-1 flex justify-center items-center mt-20 w-full">
                <div className="w-full lg:w-[80%] text-center">
                  <h2 className="tools-text-1">Shine Ranker Tools</h2>
                  <h1 className="tools-text-2 pt-3 pb-3">
                    App Tools Like Never Before!
                  </h1>
                  <p className="tools-text-3">
                    Introducing the revolutionary one-click app that
                    revolutionizes video content creation: With four powerful
                    tools at your disposal, extracting data from websites,
                    automating video creation using collected data, captivating
                    audiences with keyword-driven videos, and crafting
                    personalized storytelling through image and voice matching
                    has never been easier. Say goodbye to time-consuming editing
                    and hello to instant, engaging video content with just a
                    single click.
                  </p>
                </div>
              </div>

              {/* Row 3 Content */}
              <div className="mt-40">

                <div className="tools-card-1 flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-20 lg:gap-10 mb-40">
                  <div className="w-full lg:w-[500px]">
                    <div>
                      <Image
                        src={iconWebscrape}
                        alt="Shine Ranker Web Scraper Tool"
                        width={55} // Specify the width of the image
                      />
                    </div>
                    <h1 className="tools-text-2 pt-3 pb-3">
                      Website Scraper Tool
                    </h1>
                    <p className="tools-text-3">
                      Experience the future of content creation with AI-powered
                      tools that automate video production, allowing you to
                      generate engaging videos and start earning revenue in as
                      little as 7 days. Embrace the efficiency and profitability
                      of this revolutionary technology, as it empowers you to
                      focus on content strategy while the AI handles the rest.
                    </p>
                  </div>
                  <div>
                    <Image
                      src={toolWebscrape}
                      alt="Shine Ranker Web Scraper Tool"
                      width={338} // Specify the width of the image
                    />
                  </div>
                </div>

                <div className="tools-card-1 flex flex-col-reverse lg:flex-row-reverse justify-center items-center w-full gap-20 lg:gap-10 mb-40">
                  <div className="w-full lg:w-[500px]">
                    <div>
                      <Image
                        src={iconVideo}
                        alt="Shine Ranker Web Scraper Tool"
                        width={55} // Specify the width of the image
                      />
                    </div>
                    <h1 className="tools-text-2 pt-3 pb-3">
                      Video Generation Tool
                    </h1>
                    <p className="tools-text-3">
                      Experience the future of content creation with AI-powered
                      tools that automate video production, allowing you to
                      generate engaging videos and start earning revenue in as
                      little as 7 days. Embrace the efficiency and profitability
                      of this revolutionary technology, as it empowers you to
                      focus on content strategy while the AI handles the rest.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <Image
                      src={toolVideo1}
                      alt="Shine Ranker Video Generator"
                      width={200} // Specify the width of the image
                    />
                    <Image
                      src={toolVideo2}
                      alt="Shine Ranker Video Generator"
                      width={200} // Specify the width of the image
                    />
                  </div>
                </div>

                <div className="tools-card-1 flex flex-col-reverse lg:flex-row justify-center items-center w-full gap-20 lg:gap-10 mb-40">
                  <div className="w-full lg:w-[500px]">
                    <div>
                      <Image
                        src={iconText2Image}
                        alt="Shine Ranker Web Scraper Tool"
                        width={55} // Specify the width of the image
                      />
                    </div>
                    <h1 className="tools-text-2 pt-3 pb-3">
                      AI Text to Image Tool
                    </h1>
                    <p className="tools-text-3">
                      Experience the future of content creation with AI-powered
                      tools that automate video production, allowing you to
                      generate engaging videos and start earning revenue in as
                      little as 7 days. Embrace the efficiency and profitability
                      of this revolutionary technology, as it empowers you to
                      focus on content strategy while the AI handles the rest.
                    </p>
                  </div>
                  <div>
                    <Image
                      src={toolText2Image}
                      alt="Shine Ranker Text to Image"
                      width={291} // Specify the width of the image
                    />
                  </div>
                </div>

                <div className="tools-card-1 flex flex-col-reverse lg:flex-row-reverse justify-center items-center w-full gap-20 lg:gap-10 mb-40">
                  <div className="w-full lg:w-[500px]">
                    <div>
                      <Image
                        src={iconImage2Image}
                        alt="Shine Ranker Web Scraper Tool"
                        width={55} // Specify the width of the image
                      />
                    </div>
                    <h1 className="tools-text-2 pt-3 pb-3">
                      AI Image to Image Tool
                    </h1>
                    <p className="tools-text-3">
                      Experience the future of content creation with AI-powered
                      tools that automate video production, allowing you to
                      generate engaging videos and start earning revenue in as
                      little as 7 days. Embrace the efficiency and profitability
                      of this revolutionary technology, as it empowers you to
                      focus on content strategy while the AI handles the rest.
                    </p>
                  </div>
                  <div>
                    <Image
                      src={toolImage2Image}
                      alt="Shine Ranker Image to Image"
                      width={200} // Specify the width of the image
                    />
                  </div>
                </div>


              </div>

              {/* Row 4 */}




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
