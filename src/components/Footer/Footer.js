import "../../styles/Footer.css";

const logo = "/images/global/shineAi-logo.png";

const FooterPage = () => {
  return (
    <footer className="bg-footerpurp">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 lg:text-left">
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row items-center xl:items-start gap-10">
            <div className="">
              <a href="/" className="flex justify-center lg:justify-start">
                <img
                  src={logo}
                  alt="Shine Ranker Logo"
                  width="249px" // Specify the width of the image
                  height="62px" // Specify the height of the image
                />
              </a>

              <div className="">
                <p className="footer-tagline mt-4 flex justify-center lg:justify-start">
                  Earn money with
                </p>

                <p className="footer-tagline mt-2 flex justify-center lg:justify-start">
                  Shine Ranker Tools
                </p>
              </div>

              <ul className="mt-8 flex justify-center lg:justify-start gap-6">
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
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 md:gap-10 xl:gap-8">
              {/* col 1 footer - Products*/}
              <ul className="flex flex-col flex-wrap gap-6 text-center lg:text-left w-full">
                <li>
                  <h1 className="footer-heading-title">Products</h1>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="text-gray-200">Website Scraper Tool</span>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="text-gray-200">Video Generator Tool</span>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="text-gray-200">AI Text to Image Tool</span>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="text-gray-200">AI Image to Image Tool</span>
                  </a>
                </li>
              </ul>

              <ul className=" flex flex-col flex-wrap gap-6 text-center lg:text-left w-full">
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

              <ul className="flex flex-col flex-wrap gap-6 text-center lg:text-left w-full">
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

              <ul className="flex flex-col flex-wrap gap-6 text-center lg:text-left w-full">
                <li>
                  <h1 className="footer-heading-title">Support</h1>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span className="text-gray-200">Discord Community</span>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
