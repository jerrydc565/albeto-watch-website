import React, { useState } from "react";
import { useEffect } from "react";
import DressImage1 from "../assets/dress-watch1.jpg";
import DressImage2 from "../assets/dress-watch2.jpg";
import DressImage3 from "../assets/dress-watch3.jpg";
import DressImage4 from "../assets/dress-watch4.jpg";
import DressImage5 from "../assets/dress-watch5.jpg";
import DressImage6 from "../assets/dress-watch6.jpg";

import { watchData } from "../component/watchData";

function DressWatch() {

  const images = [
    DressImage1,
    DressImage2,
    DressImage3,
    DressImage4,
    DressImage5,
    DressImage6,
  ];
  const [current, setCurrent] = useState(null)
  // Always scroll to top when this component is rendered
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      <section
        className="w-full   mt-2  bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[500px] p-10"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-[50px] font-bold text-white mt-30 ml-10">
          {" "}
          CLASSIC DRESS WATCHES
        </h1>
        <h2 className="text-[20px] font-semibold text-white ml-10">
          {" "}
          HOME <span className="text-[#FFFF00]">/ CLASSIC DRESS WATCHES</span>
        </h2>
      </section>
      <section className="grid w-full max-w-[1040px] relative mx-auto grid-cols-3 gap-4 p-5 mt-10">
        {images.map((item, index) => (
          <div
            onClick={()=> setCurrent(index)}
            key={index}
            className="object-cover cursor-[url(hand.cur),_pointer] ... object-center rounded-2xl h-[300px] hover:scale-80 shadow-xl transition-transform duration-500 overflow-hidden "
          >
            <img src={item} alt="" />
          </div>
        ))}
      </section>
      {current && (
        <section className="w-full h-[117vh] backdrop-blur-xs absolute flex items-center justify-center top-145 bg-[#0000008a]" onClick={()=> setCurrent(null)}>
          <div className="bg-white popout rounded-2xl w-[30%] p-10  mt-10" onClick={(e) => e.stopPropagation()}>
            <div className="watch-card">
              <img
                src={watchData[current]?.image}
                alt=""
                className="w-[300px] h-[300px] mx-auto object-cover rounded-2xl shadow-[0px_2px_4px_5px_#c7c7c7] object-center border-2 border-white"
              />
              <p> {watchData[current]?.style}  </p>
              <p> { watchData[current]?.color}</p>
              <p> {watchData[current]?.descriptin} </p>
              <p> {watchData[current]?.display} </p>
              <p> {watchData[current]?.market_price} </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}


  export default DressWatch;