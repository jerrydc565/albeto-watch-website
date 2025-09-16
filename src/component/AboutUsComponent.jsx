import React from "react";
import aboutImage from "../assets/smartWatch.png";
import { Link } from "react-router-dom";

function AboutUsComponent() {
  return (
    <section
      className="w-full px-3 py-8 sm:py-12 bg-[#d4d4d4]"
      style={{ fontFamily: "Inter" }}
    >
      <div className="w-full max-w-[1050px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
        {/* Text Section */}
        <div className="w-full md:w-[48%] p-1">
          <h2 className="text-2xl sm:text-3xl md:text-[35px] font-bold mt-2 tracking-wide">
            About Us
          </h2>
          <h4 className="text-lg sm:text-xl md:text-[20px] font-semibold mt-1 text-[#722d2d] leading-5">
            Three Generations of Horological Excellence
          </h4>
          <p className="text-sm sm:text-base md:text-[15px] leading-5 mt-3 text-[#3D3D3D]">
            Abelto company was founded in 1952 by master watchmaker Alberto
            Rossi, Alberto Watch Company has been serving discerning clientele
            for over seven decades. What began as a small repair shop in the
            heart of the city has evolved into a premier destination for luxury
            timepieces.
          </p>
          <Link to={"/about-us"}>
            <button className="mt-4 text-xs sm:text-sm font-medium bg-[#722d2d] text-white px-6 py-2 rounded-[7px] hover:text-[#d9d9d9] hover:bg-[#5a2323] transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-[48%] flex justify-center">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full max-w-[350px] sm:max-w-[400px] rounded-xl "
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUsComponent;
