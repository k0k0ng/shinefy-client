import "../../styles/Footer.css";

const logo = "/svg/global/footer-logo-svg.svg";

const FooterPage = () => {
  return (
    <footer className="bg-[#4D2FBB]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8 xl:text-left">
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

            {/* ALL FOOTER LINKS */}
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

          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
