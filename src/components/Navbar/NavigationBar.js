import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import "./NavigationBar.css";

const NavigationBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

    // Add an event listener to track scrolling and set the sticky state accordingly
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    // Main Navigation
    <nav className={isSticky ? "sticky" : ""}>
      <div className={`absolute w-full navContainer ${isSticky ? "changeNavColor": ''}`}>
        <div className="flex flex-wrap items-center justify-between mx-[5vw] lg:mx-[20vw] py-4">
          <a href="/" className="flex items-center navLogo">
            <img
              src={logo}
              className="h-[51px] w-[52px] mr-2"
              alt="Shine Ranker Logo"
            />
            <span className="text-white self-center font-Inter text-[22px] tracking-[1.76px] whitespace-nowrap">
              SHINE RANKER
            </span>
          </a>

          {/* Sign Up and Log In Buttons */}
          <div className="flex md:order-2 hamburger">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center w-11 h-10 justify-center text-sm text-gray-100 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              onClick={() => {
                setShowMobileNav(!showMobileNav);
              }}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* About, Tools and Pricing Plan */}
          <div
            className="flex items-center justify-end hidden w-full md:flex md:w-auto md:order-1 navLinksCont"
            id="navbar-sticky"
          >
            <ul className="flex flex-col justify-end p-4 md:p-0 font-karla mt-4 md:flex-row  md:mt-0 navLinks">
              {/* <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px]"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px]"
                >
                  Pricing Plan
                </a>
              </li> */}
              <li>
                <a
                  href="https://app.shineranker.com/signup_free/"
                  type="button"
                  className="text-white h-10 bg-purp hover:bg-purple-800 font-medium rounded-lg text-sm px-10 flex justify-center items-center font-karla mr-3"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="https://app.shineranker.com/login/"
                  type="button"
                  className="text-white h-10 border-2 hover:bg-purple-800 hover:border-purple-800 font-medium rounded-lg text-sm px-10 flex justify-center items-center md:mr-0 font-karla "
                >
                  Log in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile nav */}
        {showMobileNav && (
          <aside className="flex justify-end mobileLinksContainer">
            <ul className=" md:p-0 font-karla md:flex-row md:mt-0 mobileNavLinks">
              {/* <li>
                <a
                  href="/"
                  className="text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla"
                >
                  Tools
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla"
                >
                  Pricing Plan
                </a>
              </li> */}
              <li>
                <a
                  href="https://app.shineranker.com/signup_free/"
                  type="button"
                  className="text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla"
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a
                  href="https://app.shineranker.com/login/"
                  type="button"
                  className="text-white h-16 hover:bg-purple-800 text-sm px-10 flex justify-end items-center font-karla"
                >
                  Log in
                </a>
              </li>
            </ul>
          </aside>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
