import SocialLinksButtons from "@/components/SocialLinksButtons";
import ContactInfo from "@/components/Contacts/ContactInfo";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";
import FooterPage from "@/components/Footer/Footer";

import BlogLimitedTimeOffer from "./BlogLimitedTimeOffer";
import SuggestedBlogs from "./SuggestedBlogs";

import "@/styles/blogs.css";

export default function SingleBlog() {
  return (
    <>
      <section className="global-header-section-bg px-[5%] pt-[16rem] lg:pt-[11rem] xl:px-[10%] 2xl:px-[20%]">
        <div className="legal-categories mb-10">
          <a href="/">Home</a>
          <span> {`>`} </span>
          <a href="/">Blogs</a>
          <span> {`>`} </span>
          <a href="#" className="legal-category-current">
            Article Title here
          </a>
        </div>

        <div className="mb-10 flex w-full flex-col gap-x-10 lg:flex-row">
          <div className="border border-[#4d2fbb] p-2 pb-12 font-karla md:p-5">
            <p className="mb-4 font-montserrat text-[21px] font-bold leading-[120%] text-[#7BDCDE]">
              Eget proin nisl sed urna in tortor suspendisse. Quam nulla nibh
              dignissim ut ullamcorper ipsum.
            </p>
            <p className="mb-4 text-[12px] text-[#AEAEAE]">
              Today <span>5 MIN READ</span>
            </p>
            <p className="mb-8 text-base leading-[120%] text-white">
              Pharetra magna odio aliquam vitae. At tortor id libero ultricies
              tellus scelerisque. Fermentum dignissim donec nam in morbi
              venenatis enim. Molestie enim montes eget lectus. Ultricies
              curabitur non sit blandit proin sed. Mi cursus gravida nulla
              porttitor neque. Non eget fermentum nunc felis commodo
              consectetur. Vel sed nibh nunc elementum quam. Quis scelerisque
              cras purus urna eget. Ipsum ridiculus iaculis dolor pharetra
              aliquet egestas non.
            </p>
            <div className="mb-8 flex justify-center rounded bg-[#D9D9D9] py-16">
              <img
                src="/images/global/image-placeholder.png"
                alt="Filter Icon"
                className="h-[140px] w-[140px] self-center"
              />
            </div>
            <p className="mb-6 text-[18px] font-bold leading-[120%] text-[#7BDCDE]">
              Pharetra amet vitae pretium malesuada nunc pellentesque
              scelerisque ut nulla. Cras quisque at pellentesque volutpat in
              tortor viverra duis mattis.
            </p>
            <p className="mb-8 text-base leading-[120%] text-white">
              Rhoncus maecenas risus cursus sollicitudin velit aliquam purus
              diam. Sed etiam nec vivamus suscipit enim ultricies donec. Tempor
              porta sit donec tempus tellus enim elit diam id. Nulla eu non ac
              pellentesque posuere aliquam. Amet mattis luctus tellus vitae
              elit. Eleifend dictumst eget quis nunc aenean lacus. Tempus
              pretium id facilisi sodales egestas. Sagittis dignissim cum
              praesent elementum magna consequat imperdiet nunc magna. Id sed
              aliquet vulputate eros. Eu nisl faucibus dolor mi ipsum. Dictum
              commodo magna duis pharetra bibendum congue tristique luctus. Et
              lacus aliquet morbi morbi mollis morbi malesuada cras et. Pulvinar
              interdum scelerisque orci pulvinar quis sed porttitor ut. Odio
              nunc interdum adipiscing semper. Amet aliquam commodo nunc
              faucibus cras nunc.
            </p>

            <div className="mb-8 bg-[#150e3b] px-4 py-10 md:p-10">
              <BlogLimitedTimeOffer />
            </div>

            <p className="mb-6 text-[18px] font-bold leading-[120%] text-[#7BDCDE]">
              Felis quisque eget in nisl urna diam quam. Proin aliquet urna
              massa in fusce neque at iaculis. Pharetra lorem malesuada enim
              volutpat volutpat ipsum at sit.
            </p>

            <p className="mb-6 text-base leading-[120%] text-white">
              Sapien id odio eget nec faucibus. Egestas suspendisse semper
              pellentesque id turpis. Quis neque magna ligula nascetur. Aliquet
              diam praesent sit tincidunt. Lacus ut id suspendisse massa.
              Facilisis mi leo volutpat ac massa et amet ultrices. Est eleifend
              sed ac orci pretium turpis bibendum. Cras eget vel vel metus diam
              tortor cursus nisi. Quis odio integer augue bibendum urna. Tortor
              integer cursus morbi eget morbi sit. Dui a urna orci mattis eget.
              Et tristique viverra vitae non fermentum faucibus enim.
            </p>

            <p className="mx-auto mb-6 max-w-[500px] text-base leading-[120%] text-white">
              Eget nunc accumsan id mauris et interdum turpis ultrices non.
              Ornare quis turpis interdum sit. Adipiscing ultricies consectetur
              ultricies fusce tincidunt varius.
            </p>

            <p className="mb-16 text-base leading-[120%] text-white">
              Sed sed magna lectus non. Hac arcu fringilla ut phasellus est.
              Accumsan nec justo odio in netus sit nunc turpis eleifend. Donec
              sed bibendum interdum non posuere sit ornare vel. Purus a
              porttitor faucibus fames.
            </p>

            <button
              value="AI Video Generator"
              className="global-outlined-btn-2 active-radio mb-10 rounded p-2 text-white"
            >
              SHARE THIS!
            </button>

            <div className="flex w-full flex-row justify-between md:max-w-[300px]">
              <SocialLinksButtons />
            </div>
          </div>

          <div className="mt-20 lg:mt-0">
            <div className="mb-8 w-full rounded bg-[#8844DA] px-4 py-5 font-karla">
              <p className="mb-3 text-center text-[20px] font-bold text-white lg:text-start">
                Stay Connected!
              </p>
              <p className="mb-4 px-2 text-center text-base leading-[120%] text-white lg:text-start">
                Subscribe to shineAI newsletter and get the latest updates on
                generating income using AI tools.
              </p>
              <div className="flex flex-row">
                <input
                  className="blog-input w-full rounded-l bg-[#7c3fd3] px-4 text-center lg:text-start"
                  placeholder="Enter email address"
                />
                <button className="rounded-r bg-[#3DCB80] px-4 py-3 text-white transition duration-300 hover:bg-[#3a287c] md:px-14 lg:px-4">
                  Send
                </button>
              </div>
            </div>

            <div className="blog-limited-time-offer-card-bg mb-8 flex min-h-[35rem] flex-col items-center justify-center rounded px-8 lg:items-start xl:min-h-[40rem] xl:px-12">
              <p className="mb-4 font-karla text-[18px] text-[#3DCB80]">
                LIMITED-TIME OFFER
              </p>
              <p className="custom-text-1 mb-4 whitespace-nowrap px-2 py-4 text-center font-montserrat text-[65px] font-bold leading-[89%] text-white lg:text-start lg:text-[55px] xl:text-[65px]">
                BEST <br /> $1 DEAL
              </p>
              <p className="mb-8 w-full text-center font-montserrat text-[24px] font-bold leading-[120%] text-white md:w-[70%] lg:w-full lg:text-start">
                Start creating content that will give you a flowing passive
                income.
              </p>
              <a
                href="https://chasereiner.thrivecart.com/shine-ranker-deal"
                rel="noreferrer"
                target="_blank"
                className="limited-time-offer-btn flex w-[150px] max-w-[20rem] items-center justify-center"
              >
                Sign Up Today!
              </a>
            </div>

            <div className="mb-8 flex w-full flex-col gap-y-7 rounded bg-[#0e0a2c] px-3 pb-10 pt-5 font-karla">
              <p className="text-[20px] font-bold text-white">Related Topics</p>

              <SuggestedBlogs />
              <SuggestedBlogs />
              <SuggestedBlogs />
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
