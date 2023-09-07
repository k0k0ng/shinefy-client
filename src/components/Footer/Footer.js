import "../../styles/Footer.css";

const logo = "/svg/global/footer-logo-svg.svg";

const FooterPage = () => {
  return (
    <footer className="bg-[#4D2FBB]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 xl:text-left">
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-10 px-8 md:px-20">
          <div className="mb-6">
            <a href="/" className="flex justify-center xl:justify-start">
              <img
                src={logo}
                alt="Shine Ranker Logo"
                width="249px" // Specify the width of the image
                height="62px" // Specify the height of the image
              />
            </a>

            <div className="">
              <p className="footer-tagline mt-4 flex justify-center xl:justify-start">
                Earn money with
              </p>

              <p className="footer-tagline mt-2 flex justify-center xl:justify-start">
                Shine Ranker Tools
              </p>
            </div>

            <ul className="mt-8 flex justify-center xl:justify-start gap-6">
              <li>
                <a
                  href="https://www.facebook.com/shineranker"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <i className="fa-brands fa-facebook fa-2xl text-white"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/shineranker/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <i className="fa-brands fa-instagram fa-2xl text-white"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://discord.gg/BnfsXW2Jma"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Discord</span>
                  <i className="fa-brands fa-discord fa-2xl text-white"></i>
                </a>
              </li>

              <li>
                <a
                  href="https://www.youtube.com/@shinerankerofficial"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Youtube</span>
                  <i className="fa-brands fa-youtube fa-2xl text-white"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* ALL FOOTER LINKS */}
          <div className="w-full xl:w-4/5 flex flex-col md:flex-row justify-evenly gap-16 md:gap-10 xl:gap-8">

            <ul className="flex flex-col flex-wrap gap-6 text-center xl:text-left">
              <li>
                <h1 className="footer-heading-title">Legal</h1>
              </li>

              <li>
                <a
                  href="/legal/terms-of-use"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Terms of Use</span>
                </a>
              </li>

              <li>
                <a
                  href="/legal/refund"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Refund & Cancelation</span>
                </a>
              </li>

              <li>
                <a
                  href="/legal/earnings-disclaimer"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Earnings Disclaimer</span>
                </a>
              </li>

              <li>
                <a
                  href="/legal/facebook-disclaimer"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Facebook Disclaimer</span>
                </a>
              </li>

              <li>
                <a
                  href="/legal/affiliate-promotions"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Affiliate Promotions</span>
                </a>
              </li>
            </ul>

            <ul className="flex flex-col flex-wrap gap-6 text-center xl:text-left">
              <li>
                <h1 className="footer-heading-title">About</h1>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Shine Ranker</span>
                </a>
              </li>

              <li>
                <a
                  href="/tools"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Tools</span>
                </a>
              </li>

              <li>
                <a
                  href="/pricing"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Pricing</span>
                </a>
              </li>

              <li>
                <a
                  href="/faq"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">FAQ</span>
                </a>
              </li>
            </ul>

            <ul className="flex flex-col flex-wrap gap-6 text-center xl:text-left">
              <li>
                <h1 className="footer-heading-title">Support</h1>
              </li>

              <li>
                <a
                  href="https://discord.gg/BnfsXW2Jma"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Discord Community</span>
                </a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/shineranker"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Facebook Community</span>
                </a>
              </li>

              <li>
                <a
                  href="/"
                  className="text-white-700 transition hover:opacity-75"
                  rel="noreferrer"
                  target="_blank"
                >
                  <span className="text-gray-200">Contact Us</span>
                </a>
              </li>
            </ul>
{/* =======
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-10">
            <div className="">
              <a href="/" className="flex justify-center pl-2">
                <img
                  src={logo}
                  alt="Shine Ranker Logo"
                  width="249px" // Specify the width of the image
                  height="62px" // Specify the height of the image
                />
              </a>

              <ul className="mt-8 flex justify-center gap-4">
                <li>
                  <a
                    href="https://www.youtube.com/@Realchasereiner"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white-700 transition hover:opacity-75"
                  >
                    <img
                      src="/svg/global/youtube-svg.svg"
                      alt="Shine Ranker Youtube"
                      height="50px"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@shineranker"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white-700 transition hover:opacity-75"
                  >
                    <img
                      src="/svg/global/tiktok-svg.svg"
                      alt="Shine Ranker Tiktok"
                      height="50px"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/shineranker"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white-700 transition hover:opacity-75"
                  >
                    <img
                      src="/svg/global/facebook-svg.svg"
                      alt="Shine Ranker Facebook"
                      height="50px"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.instagram.com/realchasereiner/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white-700 transition hover:opacity-75"
                  >
                    <img
                      src="/svg/global/instagram-svg.svg"
                      alt="Shine Ranker Instagram"
                      height="50px"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://discord.gg/BnfsXW2Jma"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white-700 transition hover:opacity-75"
                  >
                    <img
                      src="/svg/global/discord-svg.svg"
                      alt="Shine Ranker Discord"
                      height="50px"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/SEO_Chase"
                    rel="noreferrer"
                    target="_blank"
                    className="text-white-700 transition hover:opacity-75"
                  >
                    <img
                      src="/svg/global/x-svg.svg"
                      alt="Shine Ranker Twitter"
                      height="50px"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <ul className="flex justify-center items-center flex-col lg:flex-row gap-8">
              <li>
                <a
                  href="/legal/terms-of-use"
                  rel="noreferrer"
                  target="_blank"
                  className="text-center transition hover:opacity-75"
                >
                  <p className="footer-legal-link">Terms of Use</p>
                </a>
              </li>
              <li>
                <a
                  href="/legal/refund"
                  rel="noreferrer"
                  target="_blank"
                  className="text-center transition hover:opacity-75"
                >
                  <p className="footer-legal-link">Refund and Cancelation</p>
                </a>
              </li>
              <li>
                <a
                  href="/legal/earnings-disclaimer"
                  rel="noreferrer"
                  target="_blank"
                  className="text-center transition hover:opacity-75"
                >
                  <p className="footer-legal-link">Earnings Disclaimer</p>
                </a>
              </li>
              <li>
                <a
                  href="/legal/affiliate-promotions"
                  rel="noreferrer"
                  target="_blank"
                  className="text-center transition hover:opacity-75"
                >
                  <p className="footer-legal-link">Affiliate Promotions</p>
                </a>
              </li>
              <li>
                <a
                  href="/legal/facebook-disclaimer"
                  rel="noreferrer"
                  target="_blank"
                  className="text-center transition hover:opacity-75"
                >
                  <p className="footer-legal-link">Facebook Disclaimer</p>
                </a>
              </li>
            </ul>

            <div className="footer-divider"></div>

            <div>
              <p className="footer-copyright">&copy; 2022 - 2023 Copyright. Shine Ranker Tools.</p>
            </div>

>>>>>>> 8f588e3b49cbcbc7978f72a9c36becf87be79bbe */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
