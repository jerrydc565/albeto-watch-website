import React from 'react'

function HeroSection() {
  return (
    <main className="w-full flex justify-between h-[100vh] max-h-[700px] mt-2  rounded-[60px] bg-[#EBEBEB] max-w-[1140px] mx-auto ">
      <section className="w-[30%] ">
        <div className="absolute w-[50%] bg-[#EBEBEB] rounded-[20px] top-50 left-50 p-[25px] shadow-[-15px_15px_20px_rgba(0,0,0,0.3)] ... pr-[30px] pl-[30px] ">
          <h1
            className="font-bold text-[50px] leading-none mb-5"
            style={{ "fontFamily": "Instrument Sans" }}
          >
            Timeless <span className="text-[#722D2D]">Elegance</span>,
            <span className="text-[#722D2D]"> Uncompromising</span> Precision
          </h1>
          <p
            className="text-[#545454] text-[15px] mb-5 leading-none "
            style={{ "fontFamily": "Inter" }}
          >
            Experience the finest selection of luxury timepieces with
            first-class service. From vintage classics to cutting-edge smart
            watches, discover your perfect timepiece at Alberto Watch Company.
          </p>
          <a href="#collection">
            <button
              className="bg-[#722D2D] p-[7px] rounded-[10px] pl-10 pr-10 text-white text-[14px] mr-5 cursor-[url(hand.cur),_pointer] ... hover:bg-[#5a2323] transition-all duration-300"
              style={{ "fontFamily": "Inter" }}
            >
              {" "}
              Explore Our Collection{" "}
            </button>
          </a>
        
        </div>
      </section>
      <section
        className='bg-[url("/img/watch1.jpg")] w-[70%] h-lvh bg-cover bg-[#00000096] bg-blend-overlay  rounded-r-[60px] '
        id="image-container"
      ></section>
    </main>
  );
}

export default HeroSection