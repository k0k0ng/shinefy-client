"use client";

import { useState } from "react";
import { styled } from "@mui/material/styles";

import ContactInfo from "@/components/Contacts/ContactInfo";
import FooterPage from "@/components/Footer/Footer";

import BlogPostsFilter from "./BlogPostsFilter";
import BlogCard from "./BlogCard";

import Pagination from "@mui/material/Pagination";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import "@/styles/blogs.css";
import "@/styles/components.contacts.css";

const StyledPaginationComponent = styled(Pagination)(({ theme }) => ({
  "& ul > li:first-child > button": {
    backgroundColor: "transparent",
    color: "#8844DA",
  },
  "& ul > li:last-child > button": {
    backgroundColor: "transparent",
    color: "#8844DA",
  },
  "& ul > li:not(:first-child):not(:last-child) > .Mui-selected": {
    backgroundColor: "#AEAEAE",
    color: "#FFF",
    borderRadius: "0",
  },
  "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected)": {
    backgroundColor: "#8844DA",
    color: "#FFF",
    borderRadius: "0",
  },
  "& ul > li:not(:first-child):not(:last-child) > button:not(.Mui-selected):hover":
    {
      backgroundColor: "transparent",
      border: "2px solid #8844DA",
    },
  selected: {
    border: "1px solid red",
  },
}));

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] =
    useState("AI Video Generator");
  const [page, setPage] = useState(1);

  const handleChangeCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="global-header-section-bg min-h-[48rem] px-[5%] pt-[16rem] lg:pt-[15.5rem] xl:px-[18%]">
        <div className="flex flex-col md:items-center">
          <h1 className="global-header-text-1 mb-6 md:text-center">
            Blog Posts
          </h1>
          <h3 className="global-header-text-2 mb-6 md:text-center">
            Feature Articles
          </h3>
          <p className="global-header-text-3 max-w-[620px] md:text-center">
            Choose from these list to read more about topics relevant to your
            content and curiosities.
          </p>
        </div>
      </header>

      <section className="mb-10 px-[5%] lg:px-[10%] 2xl:px-[18%]">
        <div className="mt-[-17rem] flex flex-col items-center">
          <div className="mb-10 flex max-w-[800px] flex-wrap justify-center gap-3">
            <button
              value="AI Video Generator"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "AI Video Generator" ? "active-radio" : ""
              }`}
            >
              AI Video Generator
            </button>
            <button
              value="TikTok"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "TikTok" ? "active-radio" : ""
              }`}
            >
              TikTok
            </button>
            <button
              value="Youtube Shorts"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "Youtube Shorts" ? "active-radio" : ""
              }`}
            >
              Youtube Shorts
            </button>
            <button
              value="AU Storytelling"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "AU Storytelling" ? "active-radio" : ""
              }`}
            >
              AU Storytelling
            </button>
            <button
              value="AI Creator Tools"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "AI Creator Tools" ? "active-radio" : ""
              }`}
            >
              AI Creator Tools
            </button>
            <button
              value="Facebook"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "Facebook" ? "active-radio" : ""
              }`}
            >
              Facebook
            </button>
            <button
              value="Affiliate"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "Affiliate" ? "active-radio" : ""
              }`}
            >
              Affiliate
            </button>
            <button
              value="Instagram"
              onClick={handleChangeCategory}
              className={`global-outlined-btn-2 whitespace-nowrap rounded px-5 py-4 text-white ${
                selectedCategory == "Instagram" ? "active-radio" : ""
              }`}
            >
              Instagram
            </button>
          </div>

          <div className="mb-10 flex h-20 w-full flex-row items-center justify-between">
            <div className="mr-5 flex flex-row gap-2">
              <button className="border-2 border-[#8844DA] text-white transition duration-300 hover:border-[#462eac] hover:bg-[#462eac] ">
                <KeyboardArrowLeftIcon />
              </button>
              <button className="border-2 border-[#8844DA] text-white transition duration-300 hover:border-[#462eac] hover:bg-[#462eac] ">
                <KeyboardArrowRightIcon />
              </button>
            </div>

            <div className="relative flex flex-row gap-4">
              <input
                className="blogs-filter-input w-full rounded px-5 md:min-w-[18rem]"
                placeholder="filter"
              />
              <BlogPostsFilter selectedCategory={selectedCategory} />
            </div>
          </div>

          <div className="mb-10 grid min-h-[50rem] w-full grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:gap-x-14 xl:grid-cols-3">
            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />

            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />

            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
            <BlogCard
              handleChangeCategory={handleChangeCategory}
              selectedCategory={selectedCategory}
            />
          </div>

          <div className="mb-10 flex h-20 w-full flex-col items-center justify-between gap-y-10 md:flex-row md:gap-y-0">
            <div className="flex flex-row gap-2">
              <button
                onClick={scrollUp}
                className="grid-back-to-top-btn px-2 py-1 text-white"
              >
                <ArrowUpwardIcon
                  style={{ marginRight: "25px", color: "#8844DA" }}
                />
                <span className="grid-back-to-top-text">Back to Top</span>
              </button>
            </div>

            <StyledPaginationComponent
              count={3}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              shape="rounded"
            />
          </div>
        </div>
      </section>

      <section className="global-section-background-3 flex flex-col items-center px-[5%] py-28 text-center xl:px-[18%]">
        <p className="global-header-text-1 mb-8">One-Time Deal</p>
        <h3 className="global-header-text-2 mb-8 max-w-[590px]">
          Sign up today to get everything you need for content creation
        </h3>
        <form className="global-promo-code-form flex flex-col md:flex-row">
          <a
            href="https://chasereiner.thrivecart.com/shine-ranker-deal"
            rel="noreferrer"
            target="_blank"
            className="global-primary-btn flex min-w-[15rem] items-center justify-center px-5 py-4"
          >
            Start Here
          </a>
        </form>
      </section>

      <ContactInfo />

      <FooterPage />
    </>
  );
}
