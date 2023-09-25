"use client"

import { useState } from "react"
import { styled } from '@mui/material/styles';

import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";

import BlogCard from "./BlogCard";

import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Pagination from '@mui/material/Pagination';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import "@/styles/blogs.css"
import "@/styles/components.contacts.css";



const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#100826",
    color: '#F1F1F1',
    maxWidth: 340,
    fontSize: theme.typography.pxToRem(13),
    padding: '20px 20px 20px 30px',
  },
}));


const StyledPaginationComponent = styled(Pagination)(({ theme }) => ({
  '& ul > li:first-child > button': {
    backgroundColor: 'transparent',
    color: '#8844DA',
   },
   '& ul > li:last-child > button': {
    backgroundColor: 'transparent',
    color: '#8844DA',
   },
  '& ul > li:not(:first-child):not(:last-child) > .Mui-selected': {
    backgroundColor: '#AEAEAE',
    color:'#FFF',
    borderRadius:'0',
   },
  '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)': {
    backgroundColor: '#8844DA',
    color:'#FFF',
    borderRadius:'0',
   },
   '& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected):hover': {
    backgroundColor: 'transparent',
    border:'2px solid #8844DA',
   },
   selected: {
    border:'1px solid red'
   }
}));


export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("AI Video Generator");
  const [page, setPage] = useState(1);

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  }

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const scrollUp = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <header className="min-h-[48rem] pt-[16rem] lg:pt-[15.5rem] px-[5%] xl:px-[18%] global-header-section-bg">
        <div className="flex flex-col md:items-center">
          <h1 className="mb-6 md:text-center global-header-text-1">
            Blog Posts
          </h1>
          <h3 className="mb-6 md:text-center global-header-text-2">
            Feature Articles
          </h3>
          <p className="max-w-[480px] md:text-center global-header-text-3">
            Choose from these list to read more about topics relevant to your content and curiosities.
          </p>
        </div>
      </header>


      <section className="px-[18%] mb-10">
        <div className="flex flex-col items-center mt-[-17rem]">
          <div className="max-w-[800px] flex flex-wrap justify-center gap-3 mb-10">
            <button 
              value="AI Video Generator"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="AI Video Generator" ? "active-radio" : ""}`} 
            >
              AI Video Generator
            </button>
            <button 
              value="TikTok"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="TikTok" ? "active-radio" : ""}`} 
            >
              TikTok
            </button>
            <button 
              value="Youtube Shorts"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="Youtube Shorts" ? "active-radio" : ""}`} 
            >
              Youtube Shorts
            </button>
            <button 
              value="AU Storytelling"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="AU Storytelling" ? "active-radio" : ""}`} 
            >
              AU Storytelling
            </button>
            <button 
              value="AI Creator Tools"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="AI Creator Tools" ? "active-radio" : ""}`} 
            >
              AI Creator Tools
            </button>
            <button 
              value="Facebook"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="Facebook" ? "active-radio" : ""}`} 
            >
              Facebook
            </button>
            <button 
              value="Affiliate"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="Affiliate" ? "active-radio" : ""}`} 
            >
              Affiliate
            </button>
            <button 
              value="Instagram"
              onClick={handleChangeCategory}
              className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 ${selectedCategory=="Instagram" ? "active-radio" : ""}`} 
            >
              Instagram
            </button>
          </div>

          <div className="w-full h-20 flex flex-row justify-between items-center mb-10">
            <div className="flex flex-row gap-2">
              <button className="text-white border border-2 transition duration-300 border-[#8844DA] hover:border-[#462eac] hover:bg-[#462eac] ">
                <KeyboardArrowLeftIcon />
              </button>
              <button className="text-white border border-2 transition duration-300 border-[#8844DA] hover:border-[#462eac] hover:bg-[#462eac] ">
                <KeyboardArrowRightIcon />
              </button>
            </div>

            <div className="flex flex-row gap-4">
              <CustomTooltip
                placement="top-start"
                title={
                  <>
                    <p className="mb-5 global-text-to-light-blue">Our tools work best for video narration and promoting products</p>

                    <ul className="mb-4 ml-2">
                      <li className="global-tooltip-li-1">
                        Short form videos from keywords
                      </li>
                      <li className="global-tooltip-li-1">
                        Videos using your voice as narrator
                      </li>
                      <li className="global-tooltip-li-1">
                        Educational videos using AI images
                      </li>
                      <li className="global-tooltip-li-1">
                        Generate stories and videos using AI
                      </li>
                      <li className="global-tooltip-li-1">
                        Motivational videos for viral content
                      </li>
                      <li className="global-tooltip-li-1">
                        Product and Service reviews
                      </li>
                    </ul>

                    <ul className="ml-2">
                      <li className="global-tooltip-li-2">
                        Music videos
                      </li>
                      <li className="global-tooltip-li-2">
                        Long format videos
                      </li>
                    </ul>

                  </>
                }
              >
                <input type="text" className="w-full h-[40px] mb-2 text-center stunning-images-input" placeholder="type an idea here"/>
              </CustomTooltip>

              <button className="h-[40px]">
                <img
                  src="/svg/Blogs/filter.svg"
                  alt="Filter Icon"
                  className="self-center h-[40px] w-[40px]"
                />
              </button>
            </div>
          </div>

          <div className="w-full min-h-[50rem] mb-10 grid grid-cols-3 gap-y-10 gap-x-14">
            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />
            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />
            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />

            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />
            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />
            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />

            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />
            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />
            <BlogCard handleChangeCategory={handleChangeCategory} selectedCategory={selectedCategory} />
          </div>

          <div className="w-full h-20 flex flex-row justify-between items-center mb-10">
            <div className="flex flex-row gap-2">
              <button onClick={scrollUp} className="text-white px-2 py-1 grid-back-to-top-btn">
                <ArrowUpwardIcon style={{marginRight:"25px", color:"#8844DA"}} />
                <span className="grid-back-to-top-text">Back to Top</span>
              </button>
            </div>

            <StyledPaginationComponent count={3} page={page} onChange={handleChangePage} variant="outlined" shape="rounded" />
          </div>

        </div>
      </section>

      <ContactInfo />
    
      <FooterPage />
    
    </>
  )
}
