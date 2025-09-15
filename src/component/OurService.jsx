import React from 'react'
import Repair from "../assets/watch (2).png";
import Support from "../assets/support.png"
import appraisal from "../assets/performance-appraisal (1).png"
function OurService() {
  return (
    <section id='service' className='bg-[url("/img/serviceImage.jpg")] w-full p-20 bg-cover bg-center bg-blend-overlay bg-[#000000e8] mt-30'>
      <h2
        className="text-white text-[35px] font-normal text-center pt-0 mt-[-50px] tracking-wider"
        style={{ "fontFamily": "poppins" }}
      >
        OUR SERVICE
      </h2>
      <section
        className="w-full max-w-[1050px] mx-auto flex gap-10 mt-10 text-white justify-center text-center "
        style={{ "fontFamily": "Inter" }}
      >
        <div className="border-r-1 border-r-white pr-3 pb-5 ">
          <img
            src={Repair}
            alt="Watch Repair Services"
            className="w-10 block m-auto"
          />
          <h3 className="text-[18px] font-semibold mt-2">
            Watch Repair Services
          </h3>
          <p className="text-[13px] leading-4 mt-2">
            Our certified master watchmakers provide comprehensive repair
            services for all timepiece types. From simple battery replacements
            to complex movement overhauls, we restore your timepiece to
            perfection.
          </p>
        </div>
        <div className="border-r-1 border-r-white pr-3 pb-5">
          <img
            src={appraisal}
            alt="profession appraisal Services"
            className="w-10 block m-auto"
          />
          <h3 className="text-[18px] font-semibold mt-2">
            Profession Appraisal
          </h3>
          <p className="text-[13px] leading-4  mt-2">
            Get professional appraisal services for insurance, estate planning,
            or resale purposes. Our certified appraisers provide detailed
            documentation and current market valuations.
          </p>
        </div>
        <div>
          <img
            src={Support}
            alt="Retail Excellence"
            className="w-10 block m-auto"
          />
          <h3 className="text-[18px] font-semibold mt-2">Retail Excellence</h3>
          <p className="text-[13px] leading-4  mt-2">
            Browse our extensive inventory of new and pre-owned luxury
            timepieces. Our knowledgeable staff helps you find the perfect watch
            for any occasion or investment portfolio.
          </p>
        </div>
      </section>
    </section>
  );
}

export default OurService