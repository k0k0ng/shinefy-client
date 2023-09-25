import React from 'react'

import EastIcon from '@mui/icons-material/East';

export default function BlogCard({handleChangeCategory, selectedCategory}) {
  return (
    <div className="min-h-[30rem] pb-8 bg-[#0D0D0D]">
      <div className="flex justify-center mb-6 py-16 bg-[#D9D9D9]">
        <img
          src="/images/global/image-placeholder.png"
          alt="Filter Icon"
          className="self-center h-[140px] w-[140px]"
        />
      </div>
      <div className="flex flex-row items-center mb-6 px-6 justify-between">
        <button 
          value="Affiliate"
          onClick={handleChangeCategory}
          className={`whitespace-nowrap py-4 px-5 text-white rounded global-outlined-btn-2 active-radio`} 
        >
          {selectedCategory}
        </button>
        <p className="blogs-card-created-date">August 23, 2023</p>
      </div>
      <div className="px-6">
        <p className="mb-6 blogs-card-title-text">Netus justo sit tincidunt molestie. Id sed o dio et magna ipsum congue.</p>
        <p className="mb-3 blogs-card-content-text">
          Fringilla quisque orci fermentum donec. Magna eu suspendisse non cras urna sed nibh. Etiam rhoncus quis 
          diam purus eu. Ornare tellus vitae non interdum enim consequat justo ut. Massa eu phasellus at egestas in.
        </p>

        <button className="p-3 blogs-card-read-more-btn">
          <span className='mr-10'>Read More</span>
          <EastIcon style={{width:"15px"}}/>
        </button>
      </div>

    </div>
  )
}
