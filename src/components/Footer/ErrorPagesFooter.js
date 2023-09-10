
import "../../styles/Footer.css";

const logo = "/images/global/shineAi-logo-white.png";

const ErrorPagesFooter = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 xl:text-left">
        <div className="flex flex-col items-center justify-center xl:px-24">
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

export default ErrorPagesFooter;
