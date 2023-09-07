"use client";

import { useState, useEffect } from "react";

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import MenuIcon from '@mui/icons-material/Menu';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import "../../styles/NavigationBar.css";


const logo = "/images/global/shineAi-logo.png";

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
}));


const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [expandAbout, setExpandAbout] = useState(false);
  const [expandLegal, setExpandLegal] = useState(false);

  
  // Add an event listener to track scrolling and set the sticky state accordingly
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setOpenDrawer(open);
  };

  const handleExpandAbout = (panel) => (event, isExpanded) => {
    setExpandAbout(isExpanded ? panel : false);
  };

  const handleExpandLegal = (panel) => (event, isExpanded) => {
    setExpandLegal(isExpanded ? panel : false);
  };

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <div className={`absolute w-full navContainer ${isSticky ? "changeNavColor" : ""}`} >
        <div className="flex flex-row items-center justify-between mx-[5vw] lg:mx-[10vw] xl:mx-[20vw] py-4">
          <a href="/" className="flex items-center navLogo">
            <img
              src={logo}
              alt="Shine Ranker Logo"
              width="249px" // Specify the width of the image
              height="62px" // Specify the height of the image
              className="mr-2"
            />
          </a>

          {/* Medium - Large screen links */}
          <div
            className="w-full flex items-center justify-end navLinksCont"
            id="navbar-sticky"
          >
            <ul className="flex flex-row justify-end items-center p-2 md:p-0 font-karla navLinks">
              <li className="hidden xl:flex">
                <a
                  href="/about"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition hover:opacity-75"
                >
                  About
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="/tools"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition hover:opacity-75"
                >
                  Tools
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="/pricing"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition hover:opacity-75"
                >
                  Pricing Plan
                </a>
              </li>
              <li className="hidden md:flex">
                <a
                  href="/signup"
                  type="button"
                  className="text-white h-10 bg-purp hover:bg-purple-800 transition font-medium rounded-lg text-sm px-10 flex justify-center items-center font-karla mr-3"
                >
                  Sign Up
                </a>
              </li>
              <li className="hidden md:flex">
                <a
                  href="/login"
                  type="button"
                  className="text-white h-10 border-2 hover:bg-purple-800 transition hover:border-purple-800 font-medium rounded-lg text-sm px-10 flex justify-center items-center md:mr-0 font-karla "
                >
                  Log in
                </a>
              </li>

              <li>
                <Button onClick={toggleDrawer(true)} className="flex xl:hidden">
                  <MenuIcon className="text-white" />
                </Button>
              </li>
            </ul>
          </div>
        
        </div>

        {/* Nav links for mobile */}
        <SwipeableDrawer
          anchor={"right"}
          open={openDrawer}
          variant="persistent"
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          className="flex xl:hidden swipeable-drawer"
        >
          <Box
            role="presentation"
            // onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(false)}
            className="h-full flex flex-col justify-between font-karla pt-5 drawer-container"
          >
            <List>
          
              <ListItem className="min-h-14 py-1">
                <Accordion 
                  expanded={expandAbout === 'about'} 
                  onChange={handleExpandAbout('about')}
                  className="accordion-item"  
                >
                  <CustomAccordionSummary
                    expandIcon={<KeyboardArrowRightIcon className="text-white"/>}
                    aria-controls="about-bh-content"
                    id="about-bh-header"
                  >
                    <p>
                      About
                    </p>
                  </CustomAccordionSummary>
                  <AccordionDetails className="p-0 pl-2">
                    <List className="">
                      <ListItem className="h-14 py-1 px-0">
                        <a href="/about" className="w-full h-full flex items-center text-start pl-4 rounded-md nav-link">
                          shineAi.tools
                        </a>
                      </ListItem>

                      <ListItem className="h-14 py-1 px-0">
                        <a href="/faq" className="w-full h-full flex items-center text-start pl-4 rounded-md nav-link">
                          FAQs
                        </a>
                      </ListItem>

                      <ListItem className="min-h-14 py-1 px-0">
                        <Accordion 
                          expanded={expandLegal === 'legals'} 
                          onChange={handleExpandLegal('legals')}
                          className="accordion-item"  
                        >
                          <CustomAccordionSummary
                            expandIcon={<KeyboardArrowRightIcon className="text-white"/>}
                            aria-controls="legals-bh-content"
                            id="legals-bh-header"
                          >
                            <p>
                              Legals
                            </p>
                          </CustomAccordionSummary>
                          <AccordionDetails className="p-0 pl-2">
                            <List className="">
                              <ListItem className="h-14 py-1 px-0">
                                <a href="/legal/terms-of-use" className="w-full h-full flex items-center text-start px-5 rounded-md nav-link">
                                  Term of Use
                                </a>
                              </ListItem>

                              <ListItem className="h-14 py-1 px-0">
                                <a href="/legal/refund" className="w-full h-full flex items-center text-start px-5 rounded-md nav-link">
                                  Refund and Cancelation
                                </a>
                              </ListItem>

                              <ListItem className="h-14 py-1 px-0">
                                <a href="/legal/earnings-disclaimer" className="w-full h-full flex items-center text-start px-5 rounded-md nav-link">
                                  Earnings Disclaimer
                                </a>
                              </ListItem>

                              <ListItem className="h-14 py-1 px-0">
                                <a href="/legal/affiliate-promotions" className="w-full h-full flex items-center text-start px-5 rounded-md nav-link">
                                  Affiliations Promotions
                                </a>
                              </ListItem>

                              <ListItem className="h-14 py-1 px-0">
                                <a href="/legal/facebook-disclaimer" className="w-full h-full flex items-center text-start px-5 rounded-md nav-link">
                                  Facebook Disclaimer
                                </a>
                              </ListItem>
                            </List>
                          </AccordionDetails>
                        </Accordion>
                      </ListItem>

                    </List>
                  </AccordionDetails>
                </Accordion>
              </ListItem>

              <ListItem className="h-14 py-1">
                <a href="/tools" className="w-full h-full flex items-center text-start pl-4 rounded-md nav-link">
                  Tools
                </a>
              </ListItem>

              <ListItem className="h-14 py-1">
                <a href="/pricing" className="w-full h-full flex items-center text-start pl-4 rounded-md nav-link">
                  Pricing Plan
                </a>
              </ListItem>
            </List>
            
            <List className="flex flex-col px-5 pb-8 gap-y-5">
                <ListItem className="flex md:hidden h-14 p-0 rounded border">
                  <a href="/signup" className="w-full h-full flex items-center pl-5 rounded nav-link">
                    Sign up
                  </a>
                </ListItem>
                <ListItem className="flex md:hidden h-14 p-0 rounded border">
                  <a href="/login" className="w-full h-full flex items-center pl-5 rounded nav-link">
                    Log in
                  </a>
                </ListItem>

                <ListItem onClick={toggleDrawer(false)} className="justify-center mt-2 h-14">
                  <button className="rounded-full p-2 pl-2.5 border border-2">
                    <KeyboardDoubleArrowRightIcon />
                  </button>
                </ListItem>

            </List>
          </Box>
        </SwipeableDrawer>
        
      </div>
    </nav>
  );
};

export default NavigationBar;
