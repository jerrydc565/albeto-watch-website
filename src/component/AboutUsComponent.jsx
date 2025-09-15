import React from "react";
import aboutImage from "../assets/smartWatch.png";
import { Link } from "react-router-dom";
function AboutUsComponent() {
  return (
    <section
      className="   w-full p-5 bg-[#d4d4d4]"
      style={{ "fontFamily": "Inter" }}
    >
      <div className="w-full max-w-[1050px] mx-auto flex  items-center justify-between gap-10">
        <div className="w-[40%]  p-1">
          <h2 className="text-[35px] font-bold  pt-0 mt-[10px] tracking-wide">
            About Us
          </h2>
          <h4 className="text-[20px] font-semibold mt-1 text-[#722d2d] leading-5">
            Three Generations of Horological Excellence
          </h4>
          <p className="text-[15px] leading-4 mt-3 text-[#3D3D3D]">
            Abelto company was founded in 1952 by master watchmaker Alberto
            Rossi, Alberto Watch Company has been serving discerning clientele
            for over seven decades. What began as a small repair shop in the
            heart of the city has evolved into a premier destination for luxury
            timepieces.
          </p>
          <Link to={"/about-us"}>
            <button className="mt-4 text-[11px] font-medium bg-[#722d2d] text-white px-6 p-1 rounded-[7px] hover:text-[#d9d9d9] hover:bg-[#5a2323] transition-all duration-300 cursor-[url(hand.cur),_pointer] ...">
              {" "}
              Learn More
            </button>
          </Link>
        </div>
        <div className="w-[50%]  ">
          <img src={aboutImage} alt="" className="w-[400px]" />
        </div>
      </div>
    </section>
  );
}

export default AboutUsComponent;
