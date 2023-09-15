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

const logo = "/images/global/ShineFy Logo.png";

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: '#F1F1F1',
    padding: '20px'
  },
}));

const CustomButton = styled(Button)(({ theme }) => ({
  '$hover': {
  },
  textTransform: 'none',
  fontFamily: 'Karla',
  fontSize: '16px',
  fontWeight: '400',
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
        <div className="flex flex-row items-center justify-between mx-[5vw] lg:mx-[5%] xl:mx-[15%] 2xl:mx-[20%] py-4">
          <a href="/" className="flex items-center navLogo">
            <img
              src={logo}
              alt="Shine Ranker Logo"
              width="270px"
              height="63px"
              className="mr-2"
            />
          </a>

          {/* Medium - Large screen links */}
          <div
            className="w-full flex items-center justify-end navLinksCont"
            id="navbar-sticky"
          >
            <ul className="flex flex-row justify-end items-center p-2 md:p-0 font-karla">
              <li className="hidden xl:flex">

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
                  <MenuItem onClick={handleCloseDesktopAbout} className="desktop-about-sub-menu-items" >
                    <a
                      href="/about"
                      className="sub-menu-link"
                    >
                      ShineAi
                    </a>
                  </MenuItem>
                  <MenuItem onClick={handleCloseDesktopAbout} className="desktop-about-sub-menu-items" >
                    <a
                      href="/faq"
                      className="sub-menu-link"
                    >
                      FAQs
                    </a>
                  </MenuItem>
                  <MenuItem className="desktop-about-sub-menu-items">
                    <Accordion 
                      expanded={expandLegal === 'legals'} 
                      onChange={handleExpandLegal('legals')}
                      className="top-nav-accordion-link"  
                    >
                      <CustomAccordionSummary
                        expandIcon={<KeyboardArrowRightIcon />}
                        aria-controls="legals-bh-content"
                        id="legals-bh-header"
                        className="sub-menu-link"
                      >
                        <p className="top-nav-accordion">
                          Legals
                        </p>
                      </CustomAccordionSummary>
                      <AccordionDetails className="top-nav-accordion-details">
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
              <li className="hidden xl:flex">
                <a
                  href="/tools"
                  className="block py-2 pl-3 pr-4 text-white font-normal rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
                >
                  Tools
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="/pricing"
                  className="block py-2 pl-3 pr-4 text-white font-normal rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
                >
                  Pricing Plan
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="/blogs"
                  className="block py-2 pl-3 pr-4 text-white font-normal rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
                >
                  Blogs
                </a>
              </li>
              <li className="hidden xl:flex">
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white font-normal rounded md:p-0 mr-[44px] transition opacity-75 hover:opacity-100"
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
                  className="flex justify-center items-center font-karla text-white text-base font-normal bg-[#8844DA] hover:bg-[#4D2FBB] transition rounded mr-3 py-4 px-5"
                >
                  Sign up
                </a>
              </li>
              <li className="hidden md:flex">
                <a
                  href="https://app.shineranker.com/"
                  type="button"
                  rel="noreferrer"
                  target="_blank"
                  className="flex justify-center items-center font-karla text-white text-base font-normal border rounded py-4 px-5 "
                >
                  Log in
                </a>
              </li>

              <li className="flex xl:hidden">
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
                  className="top-nav-accordion-link"  
                >
                  <CustomAccordionSummary
                    expandIcon={<KeyboardArrowRightIcon />}
                    aria-controls="about-bh-content"
                    id="about-bh-header"
                    className="sub-menu-link"
                  >
                    <p className="top-nav-accordion">
                      About
                    </p>
                  </CustomAccordionSummary>
                  <AccordionDetails className="top-nav-accordion-details">
                    <List className="">
                      <ListItem className="mobile-accordion-link-container">
                        <a href="/about" className="mobile-accordion-link">
                          shineAi.tools
                        </a>
                      </ListItem>

                      <ListItem className="mobile-accordion-link-container">
                        <a href="/faq" className="mobile-accordion-link">
                          FAQs
                        </a>
                      </ListItem>

                      <ListItem className="mobile-accordion-link-container">
                        <Accordion 
                          expanded={expandLegal === 'legals'} 
                          onChange={handleExpandLegal('legals')}
                          className="top-nav-accordion-link"  
                        >
                          <CustomAccordionSummary
                            expandIcon={<KeyboardArrowRightIcon className="text-white"/>}
                            aria-controls="legals-bh-content"
                            id="legals-bh-header"
                            className="mobile-legals-accordion-link"
                          >
                            <p className="top-nav-accordion">
                              Legals
                            </p>
                          </CustomAccordionSummary>
                          <AccordionDetails className="top-nav-accordion-details">
                            <List className="">
                              <ListItem className="mobile-accordion-link-container">
                                <a href="/legal/terms-of-use" className="mobile-accordion-link">
                                  Term of Use
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a href="/legal/refund" className="mobile-accordion-link">
                                  Refund and Cancelation
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a href="/legal/earnings-disclaimer" className="mobile-accordion-link">
                                  Earnings Disclaimer
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a href="/legal/affiliate-promotions" className="mobile-accordion-link">
                                  Affiliations Promotions
                                </a>
                              </ListItem>

                              <ListItem className="mobile-accordion-link-container">
                                <a href="/legal/facebook-disclaimer" className="mobile-accordion-link">
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

              <ListItem className="mobile-sub-menu-link">
                <a href="/tools" className="mobile-accordion-link">
                  Tools
                </a>
              </ListItem>

              <ListItem className="mobile-sub-menu-link">
                <a href="/pricing" className="mobile-accordion-link">
                  Pricing Plan
                </a>
              </ListItem>

              <ListItem className="mobile-sub-menu-link">
                <a
                  href="/blogs"
                  className="mobile-accordion-link"
                >
                  Blogs
                </a>
              </ListItem>

              <ListItem className="mobile-sub-menu-link">
                <a
                  href="/"
                  className="mobile-accordion-link"
                >
                  Book a Call
                </a>
              </ListItem>
            </List>
            
            <div className="flex flex-col px-5 pb-8 gap-y-5">
                <div className="flex md:hidden h-14 p-0 rounded border">
                  <a 
                    href="https://app.shineranker.com/signup_free/"
                    rel="noreferrer"
                    target="_blank"
                    className="mobile-accordion-link"
                  >
                    Sign up
                  </a>
                </div>
                <div className="flex md:hidden h-14 p-0 rounded border">
                  <a 
                    href="https://app.shineranker.com/"
                    rel="noreferrer"
                    target="_blank" 
                    className="mobile-accordion-link"
                  >
                    Log in
                  </a>
                </div>

                <div onClick={toggleDrawer(false)} className="flex flex-row items-center justify-center mt-2 h-14">
                  <button className="rounded-full p-2 pl-2.5 border border-2">
                    <KeyboardDoubleArrowRightIcon />
                  </button>
                </div>
            </div>
          </Box>
        </SwipeableDrawer>
        
      </div>
    </nav>
  );
};

export default NavigationBar;
