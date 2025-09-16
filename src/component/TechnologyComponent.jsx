import React from "react";
import checkRing from "../assets/Checkring.png";
function TechnologyComponent() {
  return (
    <main className="pt-10 sm:pt-16 bg-[#d4d4d4]" id="technology">
      <section
        className='bg-cover bg-center bg-[radial-gradient(circle_at_center,#260f01d0,rgb(0,0,0)),url("/img/layoutImage.png")] px-3 py-10 sm:py-16 md:py-20'
        style={{ fontFamily: "Poppins" }}
        id="technology"
      >
        <h2 className="text-2xl sm:text-3xl md:text-[35px] font-light tracking-widest text-center text-white">
          OUR TECHNOLOGY
        </h2>
        <p className="text-xs sm:text-sm text-center text-white mt-2">
          Our products adopt the best of trending technology and best practices.
        </p>
        <div className="w-full max-w-[1050px] flex flex-col md:flex-row mx-auto gap-6 md:gap-10 mt-8">
          {/* Card 1 */}
          <div className="w-full md:w-1/3 mt-4 md:mt-10 p-5 text-white border border-[#2F1303] rounded-[20px] backdrop-blur-[2px] relative shadow-[7px_33px_33px_0px_#00000070] flex flex-col min-h-[240px]">
            <h3 className="text-lg sm:text-xl md:text-[22px] leading-none mb-3 font-medium">
              Swiss Movement Excellence
            </h3>
            <p className="text-xs sm:text-[11px] leading-4 mb-8 flex-1">
              The heart of precision: Discover the intricate world of mechanical
              movements, from traditional Swiss complications to innovative
              automatic winding systems.
            </p>
            <img
              src={checkRing}
              alt=""
              className="w-[30px] h-[30px] mt-2 absolute bottom-2 right-4"
            />
          </div>
          {/* Card 2 */}
          <div className="w-full md:w-1/3 mt-4 md:mt-10 p-5 text-white border border-[#2F1303] rounded-[20px] backdrop-blur-[2px] relative shadow-[7px_33px_33px_0px_#00000070] flex flex-col min-h-[240px]">
            <h3 className="text-lg sm:text-xl md:text-[22px] leading-none mb-3 font-medium">
              Eco-Drive Technology
            </h3>
            <p className="text-xs sm:text-[11px] leading-4 mb-8 flex-1">
              Power by life built for life: Explore Citizen's revolutionary
              Eco-Drive technology that harnesses any light source to power your
              timepiece indefinitely.
            </p>
            <img
              src={checkRing}
              alt=""
              className="w-[30px] h-[30px] mt-2 absolute bottom-2 right-4"
            />
          </div>
          {/* Card 3 */}
          <div className="w-full md:w-1/3 mt-4 md:mt-10 p-5 text-white border border-[#2F1303] rounded-[20px] backdrop-blur-[2px] relative shadow-[7px_33px_33px_0px_#00000070] flex flex-col min-h-[240px]">
            <h3 className="text-lg sm:text-xl md:text-[22px] leading-none mb-3 font-medium">
              Smart Technology Integration
            </h3>
            <p className="text-xs sm:text-[11px] leading-4 mb-8 flex-1">
              Connected Luxury: Learn how modern smart watches integrate health
              monitoring, connectivity, and traditional watchmaking
              craftsmanship.
            </p>
            <img
              src={checkRing}
              alt=""
              className="w-[30px] h-[30px] mt-2 absolute bottom-2 right-4"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default TechnologyComponent;
