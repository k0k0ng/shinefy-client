import {useState} from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

export default function CreamOfTheCropSection() {
  const [selectedCreamOfCropCategory, setSelectedCreamOfCropCategory] = useState("General Purpose");

  const handleChangeCreamOfCropCategory = (event) => {
    setSelectedCreamOfCropCategory(event.target.value);
  };

  return (
    <section className="py-20 px-[10%] 2xl:px-[20%]">
      <h4 className="mb-6 text-center global-header-text-1">The Cream of the Crop</h4>
      <h3 className="mb-6 text-center global-header-text-2">Captivating Videos & Pictography</h3>
      <p className="mb-12 text-center global-header-text-3">Our tools create seamless videos and timings that binds your content and make it viral on any platform.</p>
      
      <div className="max-w-[700px] flex flex-row flex-wrap justify-center gap-3 mx-auto mb-12">

        {/* Temporarily hidden because these categories are not yet available - JOHN 18/09/23 */}
        {/* <button 
          value="Motivational"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Motivational" ? "active-radio" : ""}`} 
        >
            Motivational
        </button>
        <button 
          value="TikTok"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="TikTok" ? "active-radio" : ""}`} 
        >
            TikTok
        </button>
        <button 
          value="YouTube Shorts"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="YouTube Shorts" ? "active-radio" : ""}`} 
        >
            YouTube Shorts
        </button>
        <button 
          value="Storytelling"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Storytelling" ? "active-radio" : ""}`} 
        >
            Storytelling
        </button>
        <button 
          value="Trivia"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Trivia" ? "active-radio" : ""}`} 
        >
            Trivia
        </button>
        <button 
          value="Viral Videos"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Viral Videos" ? "active-radio" : ""}`} 
        >
            Viral Videos
        </button>
        <button 
          value="Affiliate"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Affiliate" ? "active-radio" : ""}`} 
        >
            Affiliate
        </button>
        <button 
          value="Instastories"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Instastories" ? "active-radio" : ""}`} 
        >
            Instastories
        </button>
        <button 
          value="Promotional"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Promotional" ? "active-radio" : ""}`} 
        >
            Promotional
        </button>
        <button 
          value="Informational"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Informational" ? "active-radio" : ""}`} 
        >
            Informational
        </button> */}

        <button 
          value="General Purpose"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="General Purpose" ? "active-radio" : ""}`} 
        >
          General Purpose
        </button>
        <button 
          value="Video Enahncer"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Video Enahncer" ? "active-radio" : ""}`} 
        >
          Video Enahncer
        </button>
        

      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
          1700: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        className=""
      >
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Top5hacksADHD.png"
              alt="Top5hacksADHD Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Motivational
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Marie Curie.png"
              alt="Marie Curie Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Information
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/ShineRanker.png"
              alt="ShineRanker Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Promotional
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Samuel.png"
              alt="Samuel Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Storytelling
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Why Indonesians dont speak dutch.png"
              alt="Why Indonesians dont speak dutch Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Trivia
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/uranium.png"
              alt="uranium Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Recent Viral
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Top5hacksADHD.png"
              alt="Top5hacksADHD Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Motivational
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Marie Curie.png"
              alt="Marie Curie Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Information
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/ShineRanker.png"
              alt="ShineRanker Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Promotional
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Samuel.png"
              alt="Samuel Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Storytelling
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/Why Indonesians dont speak dutch.png"
              alt="Why Indonesians dont speak dutch Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Trivia
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <img
              src="/images/home/CreamOfCrop/uranium.png"
              alt="uranium Video thumbnail"
              className="min-h-[300px] min-w-[15rem] md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px] mb-4 rounded"
            />
            <button className="py-2 px-8 rounded text-white cream-of-crop-custom-text">
              Recent Viral
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}
