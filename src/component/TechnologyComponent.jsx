import React from "react";
import checkRing from "../assets/check_ring@2x.png";
function TechnologyComponent() {
    return (
      <main className=" pt-20 bg-[#d4d4d4]" id="technology">
        <section
          className='  bg-cover bg-center  bg-[radial-gradient(circle_at_center,#260f01d0,rgb(0,0,0)),url("/img/layoutImage.png")] p-20'
          style={{ "fontFamily": "Poppins" }}
          id="technology"
        >
          <h2 className="text-[35px] font-light tracking-widest text-center text-white">
            {" "}
            OUR TECHNOLOGY
          </h2>
          <p className="text-[10px]   text-center text-white ">
            Our products adopt the best of trending technology and best
            practices.
          </p>
          <div className=" w-full max-w-[1050px] flex mx-auto gap-10">
            <div className=" w-[30%]  mt-10 p-5 text-white border-1 border-[#2F1303] rounded-[20px] backdrop-blur-[2px] relative shadow-[7px_33px_33px_0px_#00000070]">
              <h3 className="text-[22px] leading-none mb-3 font-medium">
                Swiss Movement Excellence
              </h3>
              <p className="text-[11px] leading-4 mb-8">
                The heart of precision: Discover the intricate world of
                mechanical movements, from traditional Swiss complications to
                innovative automatic winding systems.
              </p>
              <img
                src={checkRing}
                alt=""
                className="w-[30px] h-[30px] mt-2 absolute bottom-1  right-8"
              />
            </div>
            <div className=" w-[30%]  mt-10 p-5 text-white border-1 border-[#2F1303] rounded-[20px] backdrop-blur-[2px] relative shadow-[7px_33px_33px_0px_#00000070]">
              <h3 className="text-[22px] leading-none mb-3 font-medium w-[60%]">
                Eco-Drive Technology
              </h3>
              <p className="text-[11px] leading-4 mb-8 ">
                Power by life built for life :Explore Citizen's revolutionary
                Eco-Drive technology that harnesses any light source to power
                your timepiece indefinitely.
              </p>
              <img
                src={checkRing}
                alt=""
                className="w-[30px] h-[30px] mt-2 absolute bottom-2 right-2"
              />
            </div>
            <div className=" w-[30%]  mt-10 p-5 text-white border-1 border-[#2F1303] rounded-[20px] backdrop-blur-[2px] relative shadow-[7px_33px_33px_0px_#00000070]">
              <h3 className="text-[22px] leading-none mb-3 font-medium">
                Smart Technology Integration
              </h3>
              <p className="text-[11px] leading-4 mb-8 ">
                Connected Luxury: Learn how modern smart watches integrate
                health monitoring, connectivity, and traditional watchmaking
                craftsmanship.
              </p>
              <img
                src={checkRing}
                alt=""
                className="w-[30px] h-[30px] mt-2 absolute bottom-2 right-2"
              />
            </div>
          </div>
        </section>
      </main>
    );
}

export default TechnologyComponent;
