import React from "react";
import Repair from "../assets/watch (2).png";
import Support from "../assets/support.png";
import appraisal from "../assets/performance-appraisal (1).png";

function OurService() {
  return (
    <section
      id="service"
      className='bg-[url("/img/serviceImage.jpg")] w-full px-4 py-12 sm:py-16 md:py-20 bg-cover bg-center bg-blend-overlay bg-[#000000e8] mt-10'
    >
      <h2
        className="text-white text-2xl sm:text-3xl md:text-[35px] font-normal text-center tracking-wider mb-8"
        style={{ fontFamily: "poppins" }}
      >
        OUR SERVICE
      </h2>
      <section
        className="w-full max-w-[1050px] mx-auto flex flex-col md:flex-row gap-8 md:gap-10 mt-4 md:mt-10 text-white justify-center text-center"
        style={{ fontFamily: "Inter" }}
      >
        <div className="md:border-r md:border-r-white md:pr-6 pb-8 md:pb-5">
          <img
            src={Repair}
            alt="Watch Repair Services"
            className="w-12 sm:w-14 block m-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold mt-4">
            Watch Repair Services
          </h3>
          <p className="text-xs sm:text-sm leading-5 mt-2 max-w-xs mx-auto">
            Our certified master watchmakers provide comprehensive repair
            services for all timepiece types. From simple battery replacements
            to complex movement overhauls, we restore your timepiece to
            perfection.
          </p>
        </div>
        <div className="md:border-r md:border-r-white md:pr-6 pb-8 md:pb-5">
          <img
            src={appraisal}
            alt="Profession Appraisal Services"
            className="w-12 sm:w-14 block m-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold mt-4">
            Profession Appraisal
          </h3>
          <p className="text-xs sm:text-sm leading-5 mt-2 max-w-xs mx-auto">
            Get professional appraisal services for insurance, estate planning,
            or resale purposes. Our certified appraisers provide detailed
            documentation and current market valuations.
          </p>
        </div>
        <div>
          <img
            src={Support}
            alt="Retail Excellence"
            className="w-12 sm:w-14 block m-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold mt-4">
            Retail Excellence
          </h3>
          <p className="text-xs sm:text-sm leading-5 mt-2 max-w-xs mx-auto">
            Browse our extensive inventory of new and pre-owned luxury
            timepieces. Our knowledgeable staff helps you find the perfect watch
            for any occasion or investment portfolio.
          </p>
        </div>
      </section>
    </section>
  );
}

export default OurService;
