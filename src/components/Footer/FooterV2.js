import "../../styles/Footer.css";

const logo = "/images/global/shineAi-logo-white.png";

const FooterComponent = () => {
  return (
    <footer className="bg-footerpurp">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 xl:text-left">
        
        
      <div className="flex flex-col items-center justify-center xl:px-24">
        
        <div className="mb-8">
          <a href="/" className="flex justify-center xl:justify-start">
            <img
              src={logo}
              alt="Shine Ranker Logo"
              width="270px" // Specify the width of the image
              height="64px" // Specify the height of the image
            />
          </a>
        </div>
        
        <div className="flex justify-center lg:justify-start gap-2 md:gap-5 mb-8">
            <a href="https://www.youtube.com/@Realchasereiner" target="blank" className="self-center">
              <div className="socials-youtube"></div>
            </a>
            <a href="" target="blank" className="self-center">
              <div className="socials-tiktok"></div>
            </a>
            <a href="https://www.facebook.com/shineranker" target="blank" className="self-center">
              <div className="socials-facebook"></div>
            </a>
            <a href="https://www.instagram.com/shineranker/" target="blank" className="self-center">
              <div className="socials-instagram"></div>
            </a>
            <a href="https://discord.gg/RZFNgnYa" target="blank" className="self-center">
              <div className="socials-discord"></div>
            </a>
            <a href="https://twitter.com/ShineRanker" target="blank" className="self-center">
              <div className="socials-x1"></div>
            </a>
        </div>

        <div className="w-full flex flex-col lg:flex-row text-center items-center justify-center lg:justify-between gap-y-6 xl:gap-y-0 mb-8">
          <a
            href="/legal/terms-of-use"
            className="opacity-75 hover:opacity-100 transition"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-gray-200">Terms of Use</span>
          </a>

          <a
            href="/legal/refund"
            className="opacity-75 hover:opacity-100 transition"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-gray-200">Refund & Cancelation</span>
          </a>

          <a
            href="/legal/earnings-disclaimer"
            className="opacity-75 hover:opacity-100 transition"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-gray-200">Earnings Disclaimer</span>
          </a>

          <a
            href="/legal/facebook-disclaimer"
            className="opacity-75 hover:opacity-100 transition"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-gray-200">Facebook Disclaimer</span>
          </a>

          <a
            href="/legal/affiliate-promotions"
            className="opacity-75 hover:opacity-100 transition"
            rel="noreferrer"
            target="_blank"
          >
            <span className="text-gray-200">Affiliate Promotions</span>
          </a>
        </div>

        <hr className="w-full opacity-75 mb-3"/>
        <br />

        <p className="text-white text-sm text-center">
          © 2022 - 2023 Copyright. Shine Ranker Tools.
        </p>

      </div>

      </div>
    </footer>
  );
};

export default FooterComponent;
