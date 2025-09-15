import React from 'react'
import VintageImg from "../assets/vintage1.jpg"
import SmartWatch from "../assets/smartwatch.jpg"
import LuxuryImg from "../assets/rolex1.jpg"

import { Link } from 'react-router-dom'
function OurCollectionComponent() {
  return (
    <section
      className="w-full max-w-[1100px] mx-auto mb-20"
      style={{ fontFamily: "Poppins" }}
      id='collection'
    >
      <h2 className="text-center font-normal text-4xl mt-[30px] mb-[30px]  ">
        {" "}
        OUR COLLECTION
      </h2>
      <div className="flex gap-10  items-center">
        <div className="bg-white rounded-2xl p-2 w-full shadow-2xl overflow-hidden ">
          <img
            src={VintageImg}
            alt=""
            className="w-full h-[350px] object-cover "
          />
          <h3 className="text-[23px] text-center font-medium text-[#722D2D]">
            Vintage Collection
          </h3>
          <p className="text-[14px] m-5 text-center text-[#5f5f5f]">
            {" "}
            Step into history with our carefully restored vintage watches. Each
            piece carries the legacy of exceptional craftsmanship from bygone
            eras.
          </p>
          <Link to={"/vintage"}>
            {" "}
            <button className="w-full p-2 text-white rounded-[10px] bg-[#722D2D]">
              View More
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl p-2 w-full shadow-2xl overflow-hidden">
          <img
            src={LuxuryImg}
            alt=""
            className="w-full mx-auto h-[350px] object-cover"
          />{" "}
          <h3 className="text-[23px] font-medium text-center text-[#722D2D]">
            Luxury Collection
          </h3>
          <p className="text-[14px] m-5 text-center text-[#5f5f5f]">
            {" "}
            Experience the pinnacle of horological artistry with our curated
            selection of premium luxury watches. Each timepiece represents
            decades of craftsmanship and innovation.
          </p>
          <Link to={"/luxury"}>
            {" "}
            <button className="w-full p-2 text-white rounded-[10px] bg-[#722D2D]">
              View More
            </button>
          </Link>
        </div>
        <div className="bg-white rounded-2xl p-2 w-full shadow-2xl overflow-hidden ">
          <img
            src={SmartWatch}
            alt=""
            className="w-full h-[350px] object-cover"
          />
          <h3 className="text-[23px] font-medium text-center text-[#722D2D]">
            Smart Watch Collection
          </h3>
          <p className="text-[14px] m-5 text-center text-[#5f5f5f]">
            {" "}
            Embrace the future of timekeeping with our selection of smart
            watches that seamlessly blend cutting-edge technology with classic
            design principles.
          </p>
          <Link to={"/smart-watch"}>
            {" "}
            <button className="w-full p-2 text-white rounded-[10px] bg-[#722D2D]">
              View More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurCollectionComponent