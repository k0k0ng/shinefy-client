"use client"

import { useRef, useState } from "react"

import FilterListIcon from '@mui/icons-material/FilterList';

export default function BlogPostsFilter({selectedCategory}) {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const [dateFilter, setDateFilter] = useState("");
  const filterDialogRef = useRef();

  const showFilterDialog = () => {
    if(!filterIsOpen){
      setFilterIsOpen(true);
      filterDialogRef.current.show();
    }else{
      setFilterIsOpen(false);
      filterDialogRef.current.close();
    }
  }

  const hideFilterDialog = () => {
    setDateFilter("");
    setFilterIsOpen(false);
    filterDialogRef.current.close();
  }

  const applyFilters = () => {
    setFilterIsOpen(false);
    filterDialogRef.current.close();
  }

  return (
    <>
      <button onClick={showFilterDialog}>
        <FilterListIcon className="w-10 h-10 transition duration-300 text-[#8844DA] hover:text-[#4d2fbb]"/>
      </button>

      <dialog  ref={filterDialogRef} className="w-full md:min-w-[18rem] absolute top-[55px] p-5 bg-[#110a27]">
        <p className="mb-4 blogs-filter-custom-text-1">Refined Results</p>

        <hr className="mb-4 border border-[#190e3c]"/>

        <p className="mb-3 blogs-filter-custom-text-2">Category</p>
        <button 
          className={`mb-3 py-2 px-4  rounded blogs-filter-active-btn`} 
        >
          {selectedCategory}
        </button>

        <hr className="mb-4 border border-[#190e3c]"/>

        <p className="mb-3 blogs-filter-custom-text-2">Date</p>
        <div className="flex flex-row justify-start gap-x-8 mb-3">
          <button 
            onClick={() => setDateFilter("Month")}
            className={`py-2 px-4 rounded ${dateFilter == "Month" ? "blogs-filter-active-btn" : "blogs-filter-unactive-btn"}`} 
          >
            Month
          </button>
          <button 
            onClick={() => setDateFilter("Year")}
            className={`py-2 px-4 rounded ${dateFilter == "Year" ? "blogs-filter-active-btn" : "blogs-filter-unactive-btn"}`} 
          >
            Year
          </button>
        </div>

        <hr className="mb-4 border border-[#190e3c]"/>

        <p className="mb-5 blogs-filter-custom-text-2">Popularity</p>
        <button 
          className="flex flex-row justify-center whitespace-nowrap mb-1 py-1 px-2 text-white" 
        >
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
        </button>
        <button 
          className="flex flex-row justify-center whitespace-nowrap mb-1 py-1 px-2 text-white" 
        >
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button>
        <button 
          className="flex flex-row justify-center whitespace-nowrap mb-1 py-1 px-2 text-white" 
        >
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button>
        <button 
          className="flex flex-row justify-center whitespace-nowrap mb-1 py-1 px-2 text-white" 
        >
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button>
        <button 
          className="flex flex-row justify-center whitespace-nowrap mb-1 py-1 px-2 text-white" 
        >
          <img src="/svg/home/star.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
          <img src="/svg/home/star outline.svg" alt="star icon" height="24" />
        </button>

        <div className="flex flex-row justify-evenly mt-5">
          <button onClick={hideFilterDialog} className="text-[#8844DA] py-2 px-6 rounded blogs-filter-unactive-btn">
            Cancel
          </button>
          <button onClick={applyFilters} className="text-[#8844DA] py-2 px-6 rounded blogs-filter-active-btn">
            Apply
          </button>
        </div>
      </dialog>
    </>
  )
}
