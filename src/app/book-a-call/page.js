"use client"

import { useState } from 'react'

import FooterPage from '@/components/Footer/Footer'
import LimitedTimeOffer from '@/components/CTA/LimitedTimeOffer'
import ContactInfo from '@/components/Contacts/ContactInfo'

import CustomDatePicker from '@/components/DatePicker/page'

import "@/styles/bookacall.css"
import "@/styles/components.contacts.css"

export default function BookACall() {
  const [selectedSubject, setSelectedSubject] = useState("Book a demo");

  return (
    <>
      <header className="pt-[16rem] lg:pt-[20rem] pb-[8rem] px-[5%] xl:px-[18%] 2xl:px-[25%] book-a-call-hero-bg">
        <div className="flex flex-col">
          <h2 className="mb-6 global-header-text-1">
            Let’s have a chat
          </h2>
          <h1 className="mb-6 global-header-text-2">
            Book a Call
          </h1>
          <p className="max-w-[650px] global-header-text-3">
            We'll have a free 15-min discovery call to discuss which subscription fits best for your content, objectives and goals.
          </p>
        </div>
      </header>

      <section className='flex items-center md:px-[5%] xl:px-[18%] 2xl:px-[25%] md:py-40 bg-[#F1F1F1]'>
        <div className='w-full min-h-[35rem] flex flex-col lg:flex-row items-start pt-20 pb-32 px-4 md:p-8 rounded-[10px] bg-[#FFF]'>
          
          <div className='w-full h-full flex md:pr-6 mb-20 lg:mb-0 flex-col'>
            <div className='md:pl-2 lg:pl-10'>
              <div className='flex flex-row lg:flex-col items-center lg:items-start mb-4'>
                <div className='lg:min-h-[8rem]'>
                  <img
                    src="/images/BookACall/shinefy-robot-head.png"
                    alt="close icon"
                    width={100}
                    height={100}
                  />
                </div>

                <p className='text-[#100826] lg:mb-4 ml-6 lg:ml-0 book-a-call-custom-text-1'>
                  shine<span className='global-text-to-light-blue'>Ai</span>
                </p>
              </div>

              <hr className='border' />
              <p className='text-[#8844DA] mt-5 mb-10 book-a-call-custom-text-1'>
                Discovery Call
              </p>

              <div className='flex flex-row gap-x-3 mb-4'>
                <img
                  src="/images/BookACall/time.png"
                  alt="close icon"
                  width={28}
                  height={28}
                />

                <p className='book-a-call-custom-text-2'>
                  15 minutes
                </p>
              </div>

              <div className='flex flex-row gap-x-3 mb-10'>
                <img
                  src="/images/BookACall/zoom.png"
                  alt="close icon"
                  width={28}
                  height={28}
                />

                <p className='book-a-call-custom-text-2'>
                  Zoom
                </p>
              </div>

              <p className='book-a-call-custom-text-3'>
                Tell us about your content topics, objectives and goals for your channel. We will walk you through our process and our relevant experience. We will make suggestions so that you can use our AI tools to their full potential.
              </p>
            </div>
          </div>

          <div className='hidden lg:block w-[1px] h-[28rem] my-auto border'></div>

          <div className='w-full lg:max-w-[470px] h-full flex flex-col items-center md:px-4 lg:pl-8 lg:pr-0'>
            <div className='min-h-[6rem] lg:min-h-[8rem] w-full flex flex-wrap items-start justify-between'>
              <button onClick={() => setSelectedSubject("Features")} className={`${selectedSubject == "Features" ? "active-subject" : "unactive-subject"} px-4 py-3 rounded-xl`}>Features</button>
              <button onClick={() => setSelectedSubject("Services")} className={`${selectedSubject == "Services" ? "active-subject" : "unactive-subject"} px-4 py-3 rounded-xl`}>Services</button>
              <button onClick={() => setSelectedSubject("Blog")} className={`${selectedSubject == "Blog" ? "active-subject" : "unactive-subject"} px-4 py-3 rounded-xl`}>Blog</button>
              <button onClick={() => setSelectedSubject("Book a demo")} className={`${selectedSubject == "Book a demo" ? "active-subject" : "unactive-subject"} px-4 py-3 rounded-xl`}>Book a demo</button>
            </div>

            <p className='w-full text-[#0b3558] mb-8 mt-8 md:mt-0 book-a-call-custom-text-1'>
              Select a Date &amp; Time
            </p>

            <CustomDatePicker />

            <div className='w-full flex flex-row'>
              <img
                src="/images/BookACall/earth-globe.png"
                alt="close icon"
                width={20}
                height={20}
                className='self-center'
              />

              <select defaultValue={"+00:00"} name="selectedTimeZone" id="selectedTimeZone" className="w-full md:max-w-[380px] border-none timezone-select">
                <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                <option value="-10:00">(GMT -10:00) Hawaii</option>
                <option value="-09:50">(GMT -9:30) Taiohae</option>
                <option value="-09:00">(GMT -9:00) Alaska</option>
                <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                <option value="-06:00">(GMT -6:00) Central Time (US &amp; Canada), Mexico City</option>
                <option value="-05:00">(GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima</option>
                <option value="-04:50">(GMT -4:30) Caracas</option>
                <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                <option value="-03:50">(GMT -3:30) Newfoundland</option>
                <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
                <option value="+00:00">(GMT) Western Europe Time, London, Lisbon, Casablanca</option>
                <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                <option value="+03:50">(GMT +3:30) Tehran</option>
                <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                <option value="+04:50">(GMT +4:30) Kabul</option>
                <option value="+05:00">(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent</option>
                <option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
                <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                <option value="+08:75">(GMT +8:45) Eucla</option>
                <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
              </select>
            </div>
          </div>

        </div>
      </section>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    
    </>
  )
}
