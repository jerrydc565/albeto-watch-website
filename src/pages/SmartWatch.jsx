import React, { useState, useEffect } from "react";
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
      {/* Header Section */}
      <div className="w-full max-w-[500px] mx-auto text-center px-3 mt-6">
        <h2
          className="text-2xl sm:text-3xl md:text-[35px] font-bold text-[#722D2D] mb-[-5px]"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Smart Watch Collection
        </h2>
        <p
          className="text-lg sm:text-xl md:text-[30px] mb-2"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Where Innovation Meets Style
        </p>
        <p
          className="text-sm sm:text-base md:text-[16px] text-[#545454] leading-normal"
          style={{ fontFamily: "Instrument Sans" }}
        >
          Discover the future of timekeeping with our curated selection of smart
          watches. Each piece blends advanced technology with elegant design.
        </p>
      </div>

      {/* Responsive Smart Watch Grid */}
      <section className="grid w-full max-w-[1040px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 sm:p-5 mt-10">
        {smartWatchItems.map((item, index) => (
          <div
            key={item}
            className="object-cover cursor-pointer object-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:bg-[#00000062] shadow-xl transition-transform duration-500 overflow-hidden"
            onClick={() => setCurrent(index)}
          >
            <img
              src={item}
              alt=""
              className="hover:opacity-50 w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </section>

      {/* Modal for Watch Details */}
      {current !== null && (
        <section
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0000008a] px-2"
          onClick={() => setCurrent(null)}
        >
          <div
            className="bg-white popout rounded-2xl w-full max-w-2xl p-4 sm:p-8 mt-10 mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="watch-card flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <img
                src={smartData[current]?.image}
                alt=""
                className="w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] mx-auto object-cover rounded-2xl shadow-[0px_2px_4px_5px_#c7c7c7] object-center border-2 border-white"
              />
              <div className="flex-1 mt-4 md:mt-0">
                <p className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 text-[#722D2D]">
                  {smartData[current]?.style}
                </p>
                <ul className="list-disc pl-5">
                  <li className="mb-2 leading-5 text-[#646464] text-sm sm:text-base">
                    {smartData[current]?.color}
                  </li>
                  <li className="mb-2 leading-5 text-[#646464] text-sm sm:text-base">
                    {smartData[current]?.descriptin}
                  </li>
                  <li className="mb-2 leading-5 text-[#646464] text-sm sm:text-base">
                    {smartData[current]?.display}
                  </li>
                  <li className="mb-2 leading-5 text-[#646464] text-sm sm:text-base">
                    {smartData[current]?.market_price}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default SmartWatch;
