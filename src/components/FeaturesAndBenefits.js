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
      <div className="global-section-background-2 px-[5%] py-14 xl:px-[18%]">
        <div className="relative mb-10 flex w-full flex-col items-center justify-center text-center">
          <h3 className="global-header-text-1 mb-6">
            Why do users count on us?
          </h3>
          <h2 className="global-header-text-2 mb-6">What sets us apart</h2>
          <p className="global-header-text-3 max-w-[710px]">
            We're committed to give value-added services to our users that helps
            them earn more and create better content alongside the app
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-y-8 py-4 md:grid-cols-2 md:gap-6 lg:px-32 xl:grid-cols-3 xl:px-4 2xl:px-48">
          {/* First Row */}
          <div className="feature-grid-cards flex flex-col items-center px-4 pb-10 pt-6 text-center md:items-start md:text-start">
            <img
              src={key}
              alt="Key Icon"
              width="40px"
              height="40px"
              className="feature-grid-icon mb-10"
            />
            <p className="feature-grid-title mb-10">
              Access to all Shinefy Features
            </p>
            <p className="feature-grid-text">
              Unlock the full potential of <strong>Shinefy</strong> with access
              to all its powerful features at your fingertips.
            </p>
          </div>

          <div className="feature-grid-cards flex flex-col items-center px-4 pb-10 pt-6 text-center md:items-start md:text-start">
            <img
              src={chat}
              alt="Video Thumbnail"
              width="40px"
              height="40px"
              className="feature-grid-icon mb-10"
            />
            <p className="feature-grid-title mb-10">
              Private Community Chat in Messenger
            </p>
            <p className="feature-grid-text">
              Enjoy the convenience and exclusivity of private community chat in
              Messenger, connecting with like-minded individuals in a secure and
              personalized environment.
            </p>
          </div>

          <div className="feature-grid-cards flex flex-col items-center px-4 pb-10 pt-6 text-center md:items-start md:text-start">
            <img
              src={support}
              alt="Support Icon"
              width="40px"
              height="40px"
              className="feature-grid-icon mb-10"
            />
            <p className="feature-grid-title mb-10">Email and Chat Support</p>
            <p className="feature-grid-text">
              Benefit from our exceptional customer service with Email and Chat
              support, ensuring swift and effective assistance whenever you need
              it.
            </p>
          </div>

          {/* Second Row */}
          <div className="feature-grid-cards flex flex-col items-center px-4 pb-10 pt-6 text-center md:items-start md:text-start">
            <img
              src={updates}
              alt="Updates Icon"
              width="40px"
              height="40px"
              className="feature-grid-icon mb-10"
            />
            <p className="feature-grid-title mb-10">
              Exclusive <br />
              Shinefy Updates
            </p>
            <p className="feature-grid-text">
              Stay ahead of the competition with exclusive shineAi updates,
              empowering you with the latest features and insights for optimal
              performance.
            </p>
          </div>

          <div className="feature-grid-cards flex flex-col items-center px-4 pb-10 pt-6 text-center md:items-start md:text-start">
            <img
              src={vip}
              alt="VIP Icon"
              width="40px"
              height="40px"
              className="feature-grid-icon mb-10"
            />
            <p className="feature-grid-title mb-10">
              VIP Group Perks and Privileges
            </p>
            <p className="feature-grid-text">
              Join the elite ranks and unlock unparalleled advantages by
              becoming a member of the shineAi VIP Group, where exclusive
              benefits and cutting-edge strategies await.
            </p>
          </div>

          <div className="feature-grid-cards flex flex-col items-center px-4 pb-10 pt-6 text-center md:items-start md:text-start">
            <img
              src={checklist}
              alt="Checklist Icon"
              width="40px"
              height="40px"
              className="feature-grid-icon mb-10"
            />
            <p className="feature-grid-title mb-10">
              Access to All Courses, Classes and Checklists
            </p>
            <p className="feature-grid-text">
              Gain full access to a wealth of knowledge and resources with our
              comprehensive offering of courses, classes, and checklists,
              empowering you to achieve your goals with confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesAndBenefits;
