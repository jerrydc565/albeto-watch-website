import React, { useEffect } from "react";
import repair from "../assets/repairWatch.jpg";
import appr from "../assets/appr.jpg";
import retail from "../assets/retail.jpg";
import { Link } from "react-router-dom";

function Service() {
  // Always scroll to top when this component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section
        className="w-full mt-2 bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[300px] sm:h-[400px] md:h-[500px] flex flex-col justify-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-white mt-10 sm:mt-20 ml-4 sm:ml-10">
          SERVICE
        </h1>
        <h2 className="text-base sm:text-lg md:text-[20px] font-semibold text-white ml-4 sm:ml-10">
          HOME <span className="text-[#FFFF00]">/ SERVICE</span>
        </h2>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 p-4 sm:p-10 md:p-20">
        {/* Watch Repair */}
        <div className="w-full overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col h-full bg-white">
          <img
            src={repair}
            alt=""
            className="w-full h-48 sm:h-[220px] md:h-[300px] hover:scale-105 transition-transform duration-500 object-cover object-center rounded-t-2xl"
          />
          <h2 className="text-xl sm:text-2xl md:text-[30px] font-semibold text-[#722D2D] text-center px-4 mt-4">
            Watch Repair
          </h2>
          <p className="italic text-center text-[#808080] text-sm sm:text-[14px] mt-1 mb-3">
            "Expert Restoration, Precision Care"
          </p>
          <p className="text-xs sm:text-[12px] px-4 text-[#808080] mb-3">
            Our certified master watchmakers provide comprehensive repair
            services for all timepiece types. From simple battery replacements
            to complex movement, we restore your timepiece to perfection.
          </p>
          <ul className="px-4 text-[#808080] mb-3 mt-5">
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>Battery Replacement
              & Water Resistance Testing
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>Movement Cleaning &
              Calibration
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>Case & Bracelet
              Restoration
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>Crystal Replacement
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>Vintage Watch
              Restoration
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>Annual Maintenance
              Programs
            </li>
          </ul>
          <Link to={"/contact-us"} className="mt-auto px-4 pb-4">
            <button className="bg-[#722D2D] text-white py-2 px-4 rounded-md hover:bg-[#5a2222] transition-all duration-200 w-full">
              CONTACT US
            </button>
          </Link>
        </div>
        {/* Appraisal */}
        <div className="w-full overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col h-full bg-white">
          <img
            src={appr}
            alt=""
            className="w-full h-48 sm:h-[220px] md:h-[300px] hover:scale-105 transition-transform duration-500 object-cover object-center rounded-t-2xl"
          />
          <h2 className="text-xl sm:text-2xl md:text-[30px] text-[#722D2D] font-semibold text-center px-4 mt-4">
            Professional Appraisal
          </h2>
          <p className="italic text-[#808080] text-center text-sm sm:text-[14px] mt-1 mb-3">
            "Accurate Valuations, Certified Expertise"
          </p>
          <p className="text-xs sm:text-[12px] text-[#808080] px-4 mb-3">
            Get professional appraisal services for insurance, estate planning,
            or resale purposes. Our certified appraisers provide detailed
            documentation and current market valuations.
          </p>
          <ul className="px-4 text-[#808080] mb-3 mt-5">
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Insurance Documentation
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Estate Planning Valuations
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Market Analysis Reports
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Authentication Services
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Condition Assessment
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Historical Research
            </li>
          </ul>
          <Link to={"/contact-us"} className="mt-auto px-4 pb-4">
            <button className="bg-[#722D2D] text-white py-2 px-4 rounded-md hover:bg-[#5a2222] transition-all duration-200 w-full">
              CONTACT US
            </button>
          </Link>
        </div>
        {/* Retail */}
        <div className="w-full overflow-hidden shadow-[0px_4px_30px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col h-full bg-white">
          <img
            src={retail}
            alt=""
            className="w-full h-48 sm:h-[220px] md:h-[300px] hover:scale-105 transition-transform duration-500 object-cover object-center rounded-t-2xl"
          />
          <h2 className="text-xl sm:text-2xl md:text-[30px] text-[#722D2D] font-semibold text-center px-4 mt-4">
            Retail Excellence
          </h2>
          <p className="italic text-center text-[#808080] text-sm sm:text-[14px] mt-1 mb-3">
            "Unparalleled Selection, First-Class Service"
          </p>
          <p className="text-xs sm:text-[12px] text-[#808080] px-4 mb-3">
            Browse our extensive inventory of new and pre-owned luxury
            timepieces. Our knowledgeable staff helps you find the perfect watch
            for any occasion or investment portfolio.
          </p>
          <ul className="px-4 text-[#808080] mb-3 mt-5">
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Luxury Timepiece Collection
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Pre-owned Certified Watches
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Investment Consultation
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Custom Procurement
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Trade-in Service
            </li>
            <li className="flex items-center gap-2 text-xs sm:text-[12px] mb-3">
              <i className="fa-solid fa-gear text-[9px]"></i>
              Financing Options
            </li>
          </ul>
          <Link to={"/contact-us"} className="mt-auto px-4 pb-4">
            <button className="bg-[#722D2D] text-white py-2 px-4 rounded-md hover:bg-[#5a2222] transition-all duration-200 w-full">
              CONTACT US
            </button>
          </Link>
        </div>
      </section>

      {/* Technology Excellence Section */}
      <section className="bg-[#e7e7e7] p-4 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl md:text-[30px] font-bold text-[#722D2D] text-center">
          Technology Excellence
        </h2>
        <p className="text-center italic text-sm sm:text-[14px]">
          Innovation Meets Traditional Craftsmanship
        </p>
        <section className="flex flex-col md:flex-row mt-8 md:mt-10 gap-6 md:gap-10">
          {/* Card 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-full md:w-1/3 text-center mx-auto">
            <i className="fa-solid fa-gear text-[23px] text-[#808080]"></i>
            <h3 className="text-lg sm:text-[20px] font-medium mt-3 text-[#722D2D]">
              Swiss Movement Excellence
            </h3>
            <p className="text-sm sm:text-[15px] text-[#808080] mb-3 mt-3">
              "The Heart of Precision"
            </p>
            <p className="text-xs sm:text-[14px] text-[#808080]">
              Discover the intricate world of mechanical movements, from
              traditional Swiss complications to innovative automatic winding
              systems.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-full md:w-1/3 text-center mx-auto">
            <i className="fa-solid fa-star text-[25px] text-[#808080] mb-2"></i>
            <h3 className="text-lg sm:text-[20px] font-medium mt-3 text-[#722D2D]">
              Eco-Drive Technology
            </h3>
            <p className="text-sm sm:text-[15px] text-[#808080] mb-3 mt-3">
              "Powered by Light, Built for Life"
            </p>
            <p className="text-xs sm:text-[14px] text-[#808080]">
              Explore Citizen's revolutionary Eco-Drive technology that
              harnesses any light source to power your timepiece indefinitely.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-5 sm:p-10 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-full md:w-1/3 text-center mx-auto">
            <i className="fa-solid fa-gear text-[23px] text-[#808080]"></i>
            <h3 className="text-lg sm:text-[20px] font-medium mt-3 text-[#722D2D]">
              Smart Technology Integration
            </h3>
            <p className="text-sm sm:text-[15px] text-[#808080] mb-3 mt-3">
              "Connected Luxury"
            </p>
            <p className="text-xs sm:text-[14px] text-[#808080]">
              Learn how modern smart watches integrate health monitoring,
              connectivity, and traditional watchmaking craftsmanship.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

export default Service;
