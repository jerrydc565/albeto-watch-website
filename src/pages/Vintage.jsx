import React from "react";
import { useState, useEffect } from "react";
import vintage1 from "../assets/classic-d.jpg";
import vintage2 from "../assets/sport-watch.jpg";
import vintage3 from "../assets/artdeco.webp";
import vintage4 from "../assets/military.jpeg";
import { watchData } from "../component/watchData";
function Vintage() {
  const watchItem = [vintage1, vintage2, vintage3, vintage4];
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
          Vintage Collections
        </h2>
        <p
          className="text-[30px] mb-2"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Rediscover Timeless Classics
        </p>
        <p
          className="text-[16px] text-[#545454] leading-none"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Step into history with our carefully restored vintage watches. Each
          piece carries the legacy of exceptional craftsmanship from bygone
          eras.
        </p>
      </div>

      <section className="grid w-full max-w-[1040px] relative mx-auto grid-cols-4 gap-4 p-5 mt-10">
        {watchItem.map((item, index) => (
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
            <div className="watch-card flex  items-center gap-10">
              <img
                src={watchData[current]?.image}
                alt=""
                className="w-[300px] h-[300px] mx-auto object-cover rounded-2xl shadow-[0px_2px_4px_5px_#c7c7c7] object-center border-2 border-white"
              />
              <div>
                {" "}
                <p className=" font-bold text-4xl mb-5 text-[#722D2D]">
                  {" "}
                  {watchData[current]?.style}{" "}
                </p>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {watchData[current]?.color}
                </li>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {watchData[current]?.descriptin}{" "}
                </li>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {watchData[current]?.display}{" "}
                </li>
                <li className="mb-2 list-disc leading-5 text-[#646464]">
                  {" "}
                  {watchData[current]?.market_price}{" "}
                </li>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default Vintage;
