import React from "react";
import VintageImg from "../assets/vintage1.jpg";
import SmartWatch from "../assets/smartwatch.jpg";
import LuxuryImg from "../assets/rolex1.jpg";
import { Link } from "react-router-dom";

function OurCollectionComponent() {
  return (
    <section
      className="w-full max-w-[1100px] mx-auto mb-20 px-3 sm:px-6"
      style={{ fontFamily: "Poppins" }}
      id="collection"
    >
      <h2 className="text-center font-normal text-2xl sm:text-3xl md:text-4xl mt-8 mb-8">
        OUR COLLECTION
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-stretch">
        {/* Vintage */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 flex-1 shadow-2xl overflow-hidden flex flex-col">
          <img
            src={VintageImg}
            alt="Vintage Collection"
            className="w-full h-56 sm:h-72 md:h-[350px] object-cover rounded-xl"
          />
          <h3 className="text-lg sm:text-xl md:text-[23px] text-center font-medium text-[#722D2D] mt-4">
            Vintage Collection
          </h3>
          <p className="text-sm sm:text-base m-4 text-center text-[#5f5f5f] flex-1">
            Step into history with our carefully restored vintage watches. Each
            piece carries the legacy of exceptional craftsmanship from bygone
            eras.
          </p>
          <Link to={"/vintage"} className="mt-2">
            <button className="w-full p-2 text-white rounded-[10px] bg-[#722D2D] hover:bg-[#5a2323] transition">
              View More
            </button>
          </Link>
        </div>
        {/* Luxury */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 flex-1 shadow-2xl overflow-hidden flex flex-col">
          <img
            src={LuxuryImg}
            alt="Luxury Collection"
            className="w-full h-56 sm:h-72 md:h-[350px] object-cover rounded-xl"
          />
          <h3 className="text-lg sm:text-xl md:text-[23px] font-medium text-center text-[#722D2D] mt-4">
            Luxury Collection
          </h3>
          <p className="text-sm sm:text-base m-4 text-center text-[#5f5f5f] flex-1">
            Experience the pinnacle of horological artistry with our curated
            selection of premium luxury watches. Each timepiece represents
            decades of craftsmanship and innovation.
          </p>
          <Link to={"/luxury"} className="mt-2">
            <button className="w-full p-2 text-white rounded-[10px] bg-[#722D2D] hover:bg-[#5a2323] transition">
              View More
            </button>
          </Link>
        </div>
        {/* Smart Watch */}
        <div className="bg-white rounded-2xl p-3 sm:p-4 flex-1 shadow-2xl overflow-hidden flex flex-col">
          <img
            src={SmartWatch}
            alt="Smart Watch Collection"
            className="w-full h-56 sm:h-72 md:h-[350px] object-cover rounded-xl"
          />
          <h3 className="text-lg sm:text-xl md:text-[23px] font-medium text-center text-[#722D2D] mt-4">
            Smart Watch Collection
          </h3>
          <p className="text-sm sm:text-base m-4 text-center text-[#5f5f5f] flex-1">
            Embrace the future of timekeeping with our selection of smart
            watches that seamlessly blend cutting-edge technology with classic
            design principles.
          </p>
          <Link to={"/smart-watch"} className="mt-2">
            <button className="w-full p-2 text-white rounded-[10px] bg-[#722D2D] hover:bg-[#5a2323] transition">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurCollectionComponent;
