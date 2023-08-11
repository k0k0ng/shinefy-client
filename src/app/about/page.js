import Image from "next/image";

import thumbnail from "public/images/thumbnail.png";
import playbutton from "public/images/playButton.png";
import key from "public/images/key.png";
import chat from "public/images/chat.png";
import support from "public/images/support.png";
import updates from "public/images/updates.png";
import vip from "public/images/vip.png";
import checklist from "public/images/checklist.png";

import "../../styles/about.css";

export default function about() {
  const youtubeVideoId = "PL3PXYFdlsU&t=2s";

  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg`;

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
        <div className="font-montserrat about-content-container">
          {/* Content */}
          <div className="flex hidden md:block">
            {/* Add your content here */}
            <div className="flex flex-col justify-center">
              <div className="font-montserrat divContainer">
                <div className="about-categories inline">
                  <a href="/" className="about-category">
                    Home
                  </a>
                  <span> {`>`} </span>
                  <a href="#" className="about-category about-category-current">
                    About
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About */}
        <div className="mx-auto justify-center items-center my-20">
          {/* About content */}
          <div className="flex flex-col-reverse md:flex-row justify-center gap-20 items-center divContainer">
            {/* First Column */}
            <div className="md:w-1/2 ml-10 mr-20">
              <div className="my-5 about-text-card">
                <h2 className="about-title-text-1 hidden md:block">About</h2>
                <h2 className=" about-title-text my-2 pt-2 hidden md:block">
                  Shine Ranker
                </h2>
                <p
                  className=" about-content-text"
                  style={{ maxWidth: "300px" }}
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
      <div className="mx-auto justify-center items-center my-10 about-contact-container">
        {/* First Section */}
        <div className="mb-10 about-user-container">
          <p className="text-center about-title-text-1 ">Features & Benefits</p>
          <h2 className="mb-4 text-center about-title-text">
            Why Users Prefer Shine Ranker?
          </h2>
          <p className="about-title-text-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
            ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec tellus sed
            augue semper porta.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 ">
          {/* First Row */}
          <div className="text-center">
            <div className="about-icon">
              <Image
                src={key}
                alt="Key Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="mt-2 about-title-text-2">
              Access to All Shine Ranker Features
            </p>
            <p
              className="about-content-text-2 "
              style={{ maxWidth: "263px", height: "53px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="text-center">
            <div className="about-icon ">
              <Image
                src={chat}
                alt="Video Thumbnail"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="mt-2 about-title-text-2">
              Private Community Chat in Messenger
            </p>
            <p
              className="about-content-text-2 "
              style={{ maxWidth: "263px", height: "53px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="text-center">
            <div className="about-icon">
              <Image
                src={support}
                alt="Support Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="mt-2 about-title-text-2">Email and Chat Support</p>
            <p
              className="about-content-text-2 "
              style={{ maxWidth: "263px", height: "53px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          {/* Second Row */}
          <div className="text-center">
            <div className="about-icon">
              <Image
                src={updates}
                alt="Updates Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="mt-2 about-title-text-2">
              Exclusive Shine Ranker Updates
            </p>
            <p
              className="about-content-text-2 "
              style={{ maxWidth: "263px", height: "53px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="text-center">
            <div className="about-icon">
              <Image
                src={vip}
                alt="VIP Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="mt-2 about-title-text-2">
              VIP Group Perks and Privileges
            </p>
            <p
              className="about-content-text-2 "
              style={{ maxWidth: "263px", height: "53px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="text-center">
            <div className="about-icon">
              <Image
                src={checklist}
                alt="Checklist Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="mt-2 about-title-text-2">
              Access to All Courses, Classes and Checklists
            </p>
            <p
              className="about-content-text-2 "
              style={{ maxWidth: "263px", height: "53px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
