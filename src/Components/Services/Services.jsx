import React from "react";
import SearchEngine from "../../assets/SearchEngine.svg";
import UiUxDesign from "../../assets/UiUxDesign.svg";
import Optimization from "../../assets/Optimization.svg";
import webdev from "../../assets/webdev.svg";
import webrepair from "../../assets/webrepair.svg";
import userexp from "../../assets/userexp.svg";

const Services = () => {
  return (
    <section className="mx-auto max-w-[1440px] pt-12 bg-gradient-to-b from-white via-gray-300 via-20% to-gray-100 w-screen">
      <div className="flex">
        <div className="mx-auto grid grid-cols-[550px] justify-center gap-10 md:gap-6 lg:gap-8 xl:grid-cols-[550px_550px] xl:gap-10">

          <div className="inline-flex w-[300px] md:w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#f3f3f3] p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23] sm:ml-[50px] sm:w-[500px] sm:p-12 lg:p-8 xl:m-0 xl:p-12 ml-2">
            <div className="inline-flex flex-col items-start justify-center gap-[90px]">
              <h2 className="flex flex-col items-start justify-start text-xl md:text-3xl font-medium text-slate-800 z-10">
                Search engine Optimization
              </h2>
              <div className="inline-flex items-center justify-start gap-[15px] font-['Space_Grotesk']">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  ></path>
                </svg>
                <span className="text-xl leading-7 font-normal text-slate-800 z-10">
                  Learn more
                </span>
              </div>
            </div>
            <img className="w-[210px] absolute z-0 opacity-40 md:relative md:z-auto md:opacity-100" src={SearchEngine} />
          </div>

          <div className="inline-flex w-[300px] md:w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#e1edd1] p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23] sm:ml-[-50px] sm:w-[550px] sm:p-12 lg:p-8 xl:m-0 xl:p-12 ml-2">
            <div className="inline-flex flex-col items-start justify-center gap-[90px]">
              <h2 className="flex flex-col items-start justify-start text-xl md:text-3xl font-medium text-slate-800 z-10">
                <span>UI/UX Design & Prototyping</span>
                <span>advertising</span>
              </h2>
              <div className="inline-flex items-center justify-start gap-[15px] font-['Space_Grotesk']">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  ></path>
                </svg>
                <span className="text-xl leading-7 font-normal text-slate-800 z-10">
                  Learn more
                </span>
              </div>
            </div>
            <img className="w-[210px] absolute z-0 opacity-40 md:relative md:z-auto md:opacity-100" src={UiUxDesign} />
          </div>

          <div className="inline-flex w-[300px] md:w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#191A23] p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23] sm:ml-[50px] sm:w-[550px] sm:p-12 lg:p-8 xl:m-0 xl:p-12 ml-2">
            <div className="inline-flex flex-col items-start justify-center gap-[90px]">
              <h2 className="flex flex-col items-start justify-start text-xl md:text-3xl font-medium text-slate-300 z-10">
                Full-Stack Web Development
              </h2>
              <div className="inline-flex items-center justify-start gap-[15px] font-['Space_Grotesk']">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="white"></circle>
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#000"
                  ></path>
                </svg>
                <span className="text-xl leading-7 font-normal text-slate-300 z-10">
                  Learn more
                </span>
              </div>
            </div>
            <img className="w-[210px] absolute z-0 opacity-40 md:relative md:z-auto md:opacity-100" src={webdev} />
          </div>

          <div className="inline-flex w-[300px] md:w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#f3f3f3] p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23] sm:ml-[-50px] sm:w-[550px] sm:p-12 lg:p-8 xl:m-0 xl:p-12 ml-2">
            <div className="inline-flex flex-col items-start justify-center gap-[90px]">
              <h2 className="flex flex-col items-start justify-start text-xl md:text-3xl font-medium text-slate-800 z-10">
                Performance Optimization
              </h2>
              <div className="inline-flex items-center justify-start gap-[15px] font-['Space_Grotesk']">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  ></path>
                </svg>
                <span className="text-xl leading-7 font-normal text-slate-800 z-10">
                  Learn more
                </span>
              </div>
            </div>
            <img className="w-[210px] absolute z-0 opacity-40 md:relative md:z-auto md:opacity-100" src={Optimization} />
          </div>

          <div className="inline-flex w-[300px] md:w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#e1edd1] p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23] sm:ml-[50px] sm:w-[550px] sm:p-12 lg:p-8 xl:m-0 xl:p-12 ml-2">
            <div className="inline-flex flex-col items-start justify-center gap-[90px]">
              <h2 className="flex flex-col items-start justify-start text-xl md:text-3xl font-medium text-slate-800 z-10">
                Website Maintenance & Support
              </h2>
              <div className="inline-flex items-center justify-start gap-[15px] font-['Space_Grotesk']">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="black"></circle>
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#B9FF66"
                  ></path>
                </svg>
                <span className="text-xl leading-7 font-normal text-slate-800 z-10">
                  Learn more
                </span>
              </div>
            </div>
            <img className="w-[210px] absolute z-0 opacity-40 md:relative md:z-auto md:opacity-100" src={webrepair} />
          </div>

          <div className="inline-flex w-[300px] md:w-[500px] items-center justify-between overflow-hidden rounded-[45px] bg-[#191A23] p-8 shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] outline outline-1 outline-offset-[-1px] outline-[#191a23] sm:ml-[-50px] sm:w-[550px] sm:p-12 lg:p-8 xl:m-0 xl:p-12 ml-2">
            <div className="inline-flex flex-col items-start justify-center gap-[90px]">
              <h2 className="flex flex-col items-start justify-start text-cl md:text-3xl font-medium text-slate-200 z-10">
                User-First Experience Design
              </h2>
              <div className="inline-flex items-center justify-start gap-[15px] font-['Space_Grotesk']">
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20.5" cy="20.5" r="20.5" fill="white"></circle>
                  <path
                    d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
                    fill="#000"
                  ></path>
                </svg>
                <span className="text-xl leading-7 font-normal text-slate-200 z-10">
                  Learn more
                </span>
              </div>
            </div>
            <img className="w-[210px] absolute z-0 opacity-30 md:relative md:z-auto md:opacity-100" src={userexp} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
