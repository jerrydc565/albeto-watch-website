import React from 'react'

function HeroSection() {
  return (
    <main className="w-full max-w-[1140px] mx-auto mt-2 rounded-[30px] md:rounded-[60px] bg-[#EBEBEB] flex flex-col md:flex-row h-auto md:h-[80vh] max-h-[700px] overflow-hidden shadow-lg">
      {/* Text Section */}
      <section className="relative w-full md:w-[45%] flex items-center justify-center py-8 md:py-0">
        <div className="w-[95%] sm:w-[80%] md:w-[90%]   p-5 sm:p-8 md:p-10 ">
          <h1
            className="font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-tight mb-5"
            style={{ fontFamily: "Instrument Sans" }}
          >
            Timeless <span className="text-[#722D2D]">Elegance</span>,
            <span className="text-[#722D2D]"> Uncompromising</span> Precision
          </h1>
          <p
            className="text-[#545454] text-sm xs:text-base sm:text-lg mb-6 leading-snug"
            style={{ fontFamily: "Inter" }}
          >
            Experience the finest selection of luxury timepieces with
            first-class service. From vintage classics to cutting-edge smart
            watches, discover your perfect timepiece at Alberto Watch Company.
          </p>
          <a href="#collection">
            <button
              className="bg-[#722D2D] py-2 px-6 sm:px-8 rounded-[10px] text-white text-sm sm:text-base font-medium hover:bg-[#5a2323] transition-all duration-300"
              style={{ fontFamily: "Inter" }}
            >
              Explore Our Collection
            </button>
          </a>
        </div>
      </section>
      {/* Image Section */}
      <section
        className='w-full md:w-[55%] h-[220px] xs:h-[270px] sm:h-[350px] md:h-auto bg-[url("/img/watch1.jpg")] bg-cover bg-center bg-[#00000096] bg-blend-overlay rounded-b-[30px] md:rounded-b-none md:rounded-r-[60px]'
        id="image-container"
      ></section>
    </main>
  );
}

export default HeroSection