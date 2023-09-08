const key = "/images/features/key.png";
const chat = "/images/features/chat.png";
const support = "/images/features/support.png";
const updates = "/images/features/updates.png";
const vip = "/images/features/vip.png";
const checklist = "/images/features/checklist.png";

import "../styles/FeaturesAndBenefits.css";

const FeaturesAndBenefits = () => {
  return (
    <>
      {/* Features & Benefits */}
      <div className="flex flex-col justify-center items-center w-full feature-container">
        {/* First Section */}
        <div className="w-full flex flex-col text-center justify-center items-center mb-10">
          <h3 className="mb-5 features-title-1 ">Why Us</h3>
          <h2 className="mb-6 features-title-2">
            Why users prefer shineAI?
          </h2>
          <p className="max-w-[650px] features-title-3">
            We offer value-added services to our users that allow them to create more content and earn more as they continue using the app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-6 lg:px-20 xl:px-0 2xl:px-24 py-4">
          {/* First Row */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 grid-cards">
            {/* <div className="feature-icon"> */}
              <img
                src={key}
                alt="Key Icon"
                width="40px"
                height="40px"
                className="mb-10"
              />
            {/* </div> */}
            <p className="mb-10 feature-content-title">
              Access to All Shine Ranker Features
            </p>
            <p
              className="feature-content-text"
            >
              Unlock the full potential of Shine Ranker with access to all its powerful features at your fingertips.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 grid-cards">
            {/* <div className="about-icon "> */}
              <img
                src={chat}
                alt="Video Thumbnail"
                width="40px"
                height="40px"
                className="mb-10"
              />
            {/* </div> */}
            <p className="mb-10 feature-content-title">
              Private Community Chat in Messenger
            </p>
            <p
              className="feature-content-text"
            >
              Enjoy the convenience and exclusivity of private community chat in Messenger, connecting with like-minded individuals in a secure and personalized environment.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 grid-cards">
            {/* <div className="about-icon"> */}
              <img
                src={support}
                alt="Support Icon"
                width="40px"
                height="40px"
                className="mb-10"
              />
            {/* </div> */}
            <p className="mb-10 feature-content-title">Email and Chat Support</p>
            <p
              className="feature-content-text"
            >
              Benefit from our exceptional customer service with Email and Chat support, ensuring swift and effective assistance whenever you need it.
            </p>
          </div>

          {/* Second Row */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 grid-cards">
            {/* <div className="about-icon"> */}
              <img
                src={updates}
                alt="Updates Icon"
                width="40px"
                height="40px"
                className="mb-10"
              />
            {/* </div> */}
            <p className="mb-10 feature-content-title">
              Exclusive Shine Ranker Updates
            </p>
            <p
              className="feature-content-text"
            >
              Stay ahead of the competition with exclusive shineAi updates, empowering you with the latest features and insights for optimal performance.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 grid-cards">
            {/* <div className="about-icon"> */}
              <img
                src={vip}
                alt="VIP Icon"
                width="40px"
                height="40px"
                className="mb-10"
              />
            {/* </div> */}
            <p className="mb-10 feature-content-title">
              VIP Group Perks and Privileges
            </p>
            <p
              className="feature-content-text"
            >
              Join the elite ranks and unlock unparalleled advantages by becoming a member of the shineAi  VIP Group, where exclusive benefits and cutting-edge strategies await.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 grid-cards">
            {/* <div className="about-icon"> */}
              <img
                src={checklist}
                alt="Checklist Icon"
                width="40px"
                height="40px"
                className="mb-10"
              />
            {/* </div> */}
            <p className="mb-10 feature-content-title">
              Access to All Courses, Classes and Checklists
            </p>
            <p
              className="feature-content-text"
            >
              Gain full access to a wealth of knowledge and resources with our comprehensive offering of courses, classes, and checklists, empowering you to achieve your goals with confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesAndBenefits;
