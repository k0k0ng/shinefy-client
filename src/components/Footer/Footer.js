import Image from 'next/image';
import logo from "../../assets/logo.svg";

const FooterPage = () => {
  return (
    <footer className="bg-footerpurp">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 text-center lg:text-left">
        <div className="flex justify-center">
          <div>
            <a href="/" className="flex items-center justify-center">
              <Image
                src={logo}
                alt="Shine Ranker Logo"
                width={51} // Specify the width of the image
                height={52} // Specify the height of the image
                className="h-[51px] w-[52px] mr-2"
              />
              <span className="text-white self-center font-semibold font-Inter text-[22px] tracking-[1.76px]">
                SHINE RANKER
              </span>
            </a>

            <p className="m-[10px] text-[18px] font-semibold text-white text-center">
              Earn Money With Shine Ranker Tools!
            </p>

            {/* <div className="text-center">
              <p className="font-medium font-karla text-white mb-4">Support</p>

              <ul className="space-y-4 text-sm font-karla">
                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Discord Community
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Facebook Community
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div> */}
            <ul className="mt-4 flex flex-col text-center md:flex-row flex-wrap gap-6 justify-center">
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

            <ul className="mt-8 flex gap-6 justify-center">
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

          {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4 mt-[16px] text-center lg:text-left"> */}
          {/* <div>
              <p className="font-medium font-karla text-white">Product</p>

              <ul className="mt-6 space-y-4 text-sm font-karla">
                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Website Scraper Tool
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Video Generation Tool
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    AI Text To Image Tool
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    AI Image to Image Tool
                  </a>
                </li>
              </ul>
            </div> */}

          {/* <div>
              <p className="font-medium font-karla text-white">Legal</p>

              <ul className="mt-6 space-y-4 text-sm font-karla">
                <li>
                  <a
                    href="https://shineranker.com/terms"
                    className="text-white transition hover:opacity-75"
                  >
                    Terms of Use
                  </a>
                </li>

                <li>
                  <a
                    href="https://shineranker.com/refund-and-cancelation"
                    className="text-white transition hover:opacity-75"
                  >
                    Refund & Cancellation
                  </a>
                </li>

                <li>
                  <a
                    href="https://shineranker.com/earnings-disclaimer"
                    className="text-white transition hover:opacity-75"
                  >
                    Earning Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="https://shineranker.com/facebook-disclaimer"
                    className="text-white transition hover:opacity-75"
                  >
                    Facebook Disclaimer
                  </a>
                </li>
                <li>
                  <a
                    href="https://shineranker.com/affiliate-promotion-terms-and-conditions"
                    className="text-white transition hover:opacity-75"
                  >
                    Affiliate Promotions
                  </a>
                </li>
              </ul>
            </div> */}

          {/* <div>
              <p className="font-medium font-karla text-white">About</p>

              <ul className="mt-6 space-y-4 text-sm font-karla">
                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Shine Ranker
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div> */}

          {/* <div>
              <p className="font-medium font-karla text-white">Support</p>

              <ul className="mt-6 space-y-4 text-sm font-karla">
                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Discord Community
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Facebook Community
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    className="text-white transition hover:opacity-75"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
