import React from 'react'
import { useState, useEffect } from "react";
import apple from "../assets/smartwatch.jpg";
import samsung from "../assets/samsung.jpg";
import tagh from "../assets/tag-h.jpg";
import ultra from "../assets/ultra.jpg";
import { smartData } from "../component/watchData";


  
 
    
function SmartWatch() {
  const smartWatchItems = [apple, samsung, tagh, ultra];
  const [current, setCurrent] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <main>
      <div className=" w-full max-w-[500px] mx-auto text-center">
        <h2
          className="text-[35px] font-bold text-[#722D2D] mb-[-5px]"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Luxury Collection
        </h2>
        <p
          className="text-[30px] mb-2 "
          style={{ fontFamily: "Instrument Sans" }}
        >
          Where Excellence Meets Artistry
        </p>
        <p
          className="text-[16px] text-[#545454] leading-none"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Experience the pinnacle of horological artistry with our curated
          selection of premium luxury watches. Each timepiece represents decades
          of craftsmanship and innovation.
        </p>
      </div>

      <section className="grid w-full max-w-[1040px] relative mx-auto grid-cols-4 gap-4 p-5 mt-10">
        {smartWatchItems.map((item, index) => (
          <div
            key={item}
            className="object-cover cursor-[url(hand.cur),_pointer] ... object-center rounded-2xl h-[300px] hover:bg-[#00000062] shadow-xl transition-transform duration-500 overflow-hidden "
            onClick={() => {
              setCurrent(index);
              console.log("clicked", index);
            }}
          >
            <img
              src={item}
              alt=""
              className="hover:opacity-50 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </section>
      {current !== null && (
        <section
          className="w-full h-full backdrop-blur-xs  absolute flex items-center justify-center top-10  bg-[#0000008a]"
          onClick={() => setCurrent(null)}
        >
          <div
            className="bg-white popout rounded-2xl w-[60%] p-5  mt-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="watch-card flex items-center gap-10">
              <img
                src={smartData[current]?.image}
                alt=""
                className="w-[300px] h-[300px] mx-auto object-cover rounded-2xl shadow-[0px_2px_4px_5px_#c7c7c7] object-center border-2 border-white"
              />
              <div>
                {" "}
                <p className=" font-bold text-4xl mb-5 text-[#722D2D]">
                  {" "}
                  {smartData[current]?.style}{" "}
                </p>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {smartData[current]?.color}
                </li>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {smartData[current]?.descriptin}{" "}
                </li>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {smartData[current]?.display}{" "}
                </li>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {smartData[current]?.market_price}{" "}
                </li>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default SmartWatch