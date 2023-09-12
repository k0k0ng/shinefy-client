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

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

const CustomButton = styled(Button)(({ theme }) => ({
  '$hover': {
  },
  textTransform: 'none',
  fontFamily: 'Karla',
  fontSize: '16px',
  padding: '0.25rem 2rem 0.25rem 0.5rem',
  marginRight: '1rem',
  color: '#F1F1F1',
}));

const NavigationBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [expandAbout, setExpandAbout] = useState(false);
  const [expandLegal, setExpandLegal] = useState(false);

  const [openAboutSubMenu, setOpenAboutSubMenu] = useState(null);


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

  const openDesktopAboutSubMenu = Boolean(openAboutSubMenu);

  const handleOpenDesktopAbout = (event) => {
    setOpenAboutSubMenu(event.currentTarget);
  };
  const handleCloseDesktopAbout = () => {
    setOpenAboutSubMenu(null);
  };


  const handleExpandAbout = (panel) => (event, isExpanded) => {
    setExpandAbout(isExpanded ? panel : false);
  };

  const handleExpandLegal = (panel) => (event, isExpanded) => {
    setExpandLegal(isExpanded ? panel : false);
  };

  return (
    <nav className={isSticky ? "sticky" : ""}>
      <div className={`absolute w-full 2xl:w-[99vw] navContainer ${isSticky ? "changeNavColor" : ""}`} >
        <div className="flex flex-row items-center justify-between mx-[5vw] lg:mx-[10vw] xl:mx-[20vw] py-4">
          <a href="/" className="flex items-center navLogo">
            <img
              src={logo}
              alt="Shine Ranker Logo"
              width="249px"
              height="62px"
              className="mr-2"
            />
          </a>

          {/* Medium - Large screen links */}
          <div
            className="w-full flex items-center justify-end navLinksCont"
            id="navbar-sticky"
          >
            <ul className="flex flex-row justify-end items-center p-2 md:p-0 font-karla">
              <li className="hidden 2xl:flex">

                <CustomButton
                  id="basic-button"
                  aria-controls={openDesktopAboutSubMenu ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={openDesktopAboutSubMenu ? 'true' : undefined}
                  onClick={handleOpenDesktopAbout}
                  style={{ 
                    backgroundColor: 'transparent',
                  }}
                  className="opacity-75 hover:opacity-100"
                >
                  About
                </CustomButton>
                <Menu
                  id="basic-menu"
                  anchorEl={openAboutSubMenu}
                  open={openDesktopAboutSubMenu}
                  onClose={handleCloseDesktopAbout}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                  className="desktop-about-sub-menu"
                >
                  <MenuItem onClick={handleCloseDesktopAbout} >
                    <a
                      href="/about"
                      className="desktop-about-sub-menu-links"
                    >
                      ShineAi
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleCloseDesktopAbout} >
                    <a
                      href="/faq"
                      className="desktop-about-sub-menu-links"
                    >
                      FAQs
                    </a>
                  </MenuItem>
                  <MenuItem className="desktop-legals-sub-menu">
                    <Accordion 
                      expanded={expandLegal === 'legals'} 
                      onChange={handleExpandLegal('legals')}
                      className="desktop-legals-sub-menu-accordion"  
                    >
                      <CustomAccordionSummary
                        expandIcon={<KeyboardArrowRightIcon className="text-white"/>}
                        aria-controls="legals-bh-content"
                        id="legals-bh-header"
                        className="desktop-legals-sub-menu-accordion-summary"
                      >
                        <p className="desktop-legals-sub-menu-accordion-summary-text">
                          Legals
                        </p>
                      </CustomAccordionSummary>
                      <AccordionDetails className="p-0 pl-2 desktop-legals-sub-menu-accordion-summary">
                        <List className="">
                          <ListItem className="h-14 py-1 px-0">
                            <a href="/legal/terms-of-use" className="desktop-legals-sub-menu-accordion-link">
                              Term of Use
                            </a>
                          </ListItem>

                          <ListItem className="h-14 py-1 px-0">
                            <a href="/legal/refund" className="desktop-legals-sub-menu-accordion-link">
                              Refund and Cancelation
                            </a>
                          </ListItem>

                          <ListItem className="h-14 py-1 px-0">
                            <a href="/legal/earnings-disclaimer" className="desktop-legals-sub-menu-accordion-link">
                              Earnings Disclaimer
                            </a>
                          </ListItem>

                          <ListItem className="h-14 py-1 px-0">
                            <a href="/legal/affiliate-promotions" className="desktop-legals-sub-menu-accordion-link">
                              Affiliations Promotions
                            </a>
                          </ListItem>

                          <ListItem className="h-14 py-1 px-0">
                            <a href="/legal/facebook-disclaimer" className="desktop-legals-sub-menu-accordion-link">
                              Facebook Disclaimer
                            </a>
                          </ListItem>
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  </MenuItem>
                </Menu>
              </li>
              <li className="hidden 2xl:flex">
                <a
                  href="/tools"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
                >
                  Tools
                </a>
              </li>
              <li className="hidden 2xl:flex">
                <a
                  href="/pricing"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
                >
                  Pricing Plan
                </a>
              </li>
              <li className="hidden 2xl:flex">
                <a
                  href="/blogs"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
                >
                  Blogs
                </a>
              </li>
              <li className="hidden 2xl:flex">
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
                >
                  Book A Call
                </a>
              </li>
              <li className="hidden md:flex">
                <a
                  href="https://app.shineranker.com/signup_free/"
                  type="button"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white h-10 bg-purp hover:bg-purple-800 transition font-medium rounded-lg text-sm px-10 flex justify-center items-center font-karla mr-3"
                >
                  Sign Up
                </a>
              </li>
              <li className="hidden md:flex">
                <a
                  href="https://app.shineranker.com/"
                  type="button"
                  rel="noreferrer"
                  target="_blank"
                  className="text-white h-10 border-2 hover:bg-purple-800 transition hover:border-purple-800 font-medium rounded-lg text-sm px-10 flex justify-center items-center md:mr-0 font-karla "
                >
                  Log in
                </a>
              </li>

              <li className="flex 2xl:hidden">
                <Button onClick={toggleDrawer(true)}>
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
          className="flex 2xl:hidden swipeable-drawer"
        >
          <Box
            role="presentation"
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

              <ListItem className="h-14 py-1">
                <a
                  href="/blogs"
                  className="w-full h-full flex items-center text-start pl-4 rounded-md nav-link"
                >
                  Blogs
                </a>
              </ListItem>
            </List>
            
            <List className="flex flex-col px-5 pb-8 gap-y-5">
                <ListItem className="flex md:hidden h-14 p-0 rounded border">
                  <a 
                    href="https://app.shineranker.com/signup_free/"
                    rel="noreferrer"
                    target="_blank"
                    className="w-full h-full flex items-center pl-5 rounded nav-link"
                  >
                    Sign up
                  </a>
                </ListItem>
                <ListItem className="flex md:hidden h-14 p-0 rounded border">
                  <a 
                    href="https://app.shineranker.com/"
                    rel="noreferrer"
                    target="_blank" 
                    className="w-full h-full flex items-center pl-5 rounded nav-link"
                  >
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
