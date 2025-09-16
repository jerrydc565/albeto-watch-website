import React, { useEffect } from "react";

function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <section
        className="w-full mt-2 bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[220px] sm:h-[320px] md:h-[500px] flex flex-col justify-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-[50px] font-bold text-white mt-10 sm:mt-20 ml-4 sm:ml-10">
          Gallery
        </h1>
        <h2 className="text-base sm:text-lg md:text-[20px] font-semibold text-white ml-4 sm:ml-10">
          HOME <span className="text-[#FFFF00]">/ Gallery</span>
        </h2>
      </section>

      {/* Responsive Gallery Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 sm:p-6 md:p-10 mt-10 sm:mt-16">
        <div className="bg-[url('/img/gallery1.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery2.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery3.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery4.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery5.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery6.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery7.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery8.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery9.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery10.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery11.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
        <div className="bg-[url('/img/gallery12.jpg')] bg-cover bg-center rounded-2xl h-[180px] xs:h-[220px] sm:h-[250px] md:h-[300px] hover:scale-105 transition-transform duration-500 cursor-pointer"></div>
      </section>
    </main>
  );
}

export default Gallery;
