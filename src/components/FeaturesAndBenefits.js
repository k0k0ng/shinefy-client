import Image from "next/image";

import key from "public/images/key.png";
import chat from "public/images/chat.png";
import support from "public/images/support.png";
import updates from "public/images/updates.png";
import vip from "public/images/vip.png";
import checklist from "public/images/checklist.png";

import "../styles/FeaturesAndBenefits.css";

const FeaturesAndBenefits = () => {
  return (
    <>
      {/* Features & Benefits */}
      <div className="flex flex-col justify-center items-center w-full feature-container">
        {/* First Section */}
        <div className="mb-10 feature-title-container">
          <p className="text-center features-title-1 ">Features & Benefits</p>
          <h2 className="mb-4 text-center features-title-2">
            Why Users Prefer Shine Ranker?
          </h2>
          <p className="features-title-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus
            ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec tellus sed
            augue semper porta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          {/* First Row */}
          <div className="flex flex-col justify-start items-start">
            <div className="feature-icon">
              <Image
                src={key}
                alt="Key Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="my-4 feature-content-title">
              Access to All Shine Ranker Features
            </p>
            <p
              className="feature-content-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="about-icon ">
              <Image
                src={chat}
                alt="Video Thumbnail"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="my-4 feature-content-title">
              Private Community Chat in Messenger
            </p>
            <p
              className="feature-content-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="about-icon">
              <Image
                src={support}
                alt="Support Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="my-4 feature-content-title">Email and Chat Support</p>
            <p
              className="feature-content-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          {/* Second Row */}
          <div className="flex flex-col justify-start items-start">
            <div className="about-icon">
              <Image
                src={updates}
                alt="Updates Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="my-4 feature-content-title">
              Exclusive Shine Ranker Updates
            </p>
            <p
              className="feature-content-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="about-icon">
              <Image
                src={vip}
                alt="VIP Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="my-4 feature-content-title">
              VIP Group Perks and Privileges
            </p>
            <p
              className="feature-content-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>

          <div className="flex flex-col justify-start items-start">
            <div className="about-icon">
              <Image
                src={checklist}
                alt="Checklist Icon"
                width={40}
                height={40}
                className="mx-auto max-w-full h-auto"
              />
            </div>
            <p className="my-4 feature-content-title">
              Access to All Courses, Classes and Checklists
            </p>
            <p
              className="feature-content-text"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              cursus ante dapibus diam. Sed nisi. Praesent mauris. Fusce nec
              tellus sed augue semper porta.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesAndBenefits;
