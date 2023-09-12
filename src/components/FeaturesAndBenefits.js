
import Image from "next/image";

import "../styles/FeaturesAndBenefits.css";

const FeaturesAndBenefits = () => {
  return (
    <>
      {/* Features & Benefits */}
      <div className="py-14 px-[5%] xl:px-[18%] global-section-background-2">
        <div className="w-full flex flex-col relative text-center justify-center items-center mb-10">
          <h3 className="mb-6 global-header-text-1">Why Us</h3>
          <h2 className="mb-6 global-header-text-2">
            Why users prefer shineAI?
          </h2>
          <p className="max-w-[650px] global-header-text-3">
            We offer value-added services to our users that allow them to create more content and earn more as they continue using the app
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 relative gap-y-8 md:gap-6 lg:px-32 xl:px-4 2xl:px-48 py-4">
          {/* First Row */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 feature-grid-cards">
            <Image
              src="/images/features/key.png"
              alt="Key Icon"
              width={40}
              height={40}
              className="mb-10 feature-grid-icon"
            />
            <p className="mb-10 feature-grid-title">
              Access to All Shine Ranker Features
            </p>
            <p
              className="feature-grid-text"
            >
              Unlock the full potential of Shine Ranker with access to all its powerful features at your fingertips.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 feature-grid-cards">
            <Image
              src="/images/features/chat.png"
              alt="chat Icon"
              width={40}
              height={40}
              className="mb-10 feature-grid-icon"
            />
            <p className="mb-10 feature-grid-title">
              Private Community Chat in Messenger
            </p>
            <p
              className="feature-grid-text"
            >
              Enjoy the convenience and exclusivity of private community chat in Messenger, connecting with like-minded individuals in a secure and personalized environment.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 feature-grid-cards">
            <Image
              src="/images/features/support.png"
              alt="support Icon"
              width={40}
              height={40}
              className="mb-10 feature-grid-icon"
            />
            <p className="mb-10 feature-grid-title">Email and Chat Support</p>
            <p
              className="feature-grid-text"
            >
              Benefit from our exceptional customer service with Email and Chat support, ensuring swift and effective assistance whenever you need it.
            </p>
          </div>

          {/* Second Row */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 feature-grid-cards">
            <Image
              src="/images/features/updates.png"
              alt="update Icon"
              width={40}
              height={40}
              className="mb-10 feature-grid-icon"
            />
            <p className="mb-10 feature-grid-title">
              Exclusive Shine Ranker Updates
            </p>
            <p
              className="feature-grid-text"
            >
              Stay ahead of the competition with exclusive shineAi updates, empowering you with the latest features and insights for optimal performance.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 feature-grid-cards">
            <Image
              src="/images/features/vip.png"
              alt="VIP Icon"
              width={40}
              height={40}
              className="mb-10 feature-grid-icon"
            />
            <p className="mb-10 feature-grid-title">
              VIP Group Perks and Privileges
            </p>
            <p
              className="feature-grid-text"
            >
              Join the elite ranks and unlock unparalleled advantages by becoming a member of the shineAi  VIP Group, where exclusive benefits and cutting-edge strategies await.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start p-6 pb-10 feature-grid-cards">
            <Image
              src="/images/features/checklist.png"
              alt="Checklist Icon"
              width={40}
              height={40}
              className="mb-10 feature-grid-icon"
            />
            <p className="mb-10 feature-grid-title">
              Access to All Courses, Classes and Checklists
            </p>
            <p
              className="feature-grid-text"
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
