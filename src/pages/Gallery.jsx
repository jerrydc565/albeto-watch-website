import React from 'react'
import { useEffect } from 'react';
function Gallery() {
    // Always scroll to top when this component is rendered
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <main>
      <section
        className="w-full   mt-2  bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[500px] p-10"
        style={{ "fontFamily": "Poppins" }}
      >
        <h1 className="text-[50px] font-bold text-white mt-30 ml-10">
          {" "}
          Gallery
        </h1>
        <h2 className="text-[20px] font-semibold text-white ml-10">
          {" "}
          HOME <span className="text-[#FFFF00]">/ Gallery</span>
        </h2>
      </section>
      <section className="grid grid-cols-3 gap-4 p-5 mt-20">
        <div className="bg-[url(/img/gallery1.jpg)] bg-cover cursor-[url(hand.cur),_pointer] ... bg-center rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500 "></div>
        <div className="bg-[url(/img/gallery2.jpg)] bg-cover cursor-[url(hand.cur),_pointer] ... bg-center rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery3.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery4.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery5.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery6.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery7.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery8.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery9.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery10.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery11.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500"></div>
        <div className="bg-[url(/img/gallery12.jpg)] bg-cover bg-center cursor-[url(hand.cur),_pointer] ... rounded-2xl h-[300px] hover:scale-105 transition-transform duration-500 "></div>
      </section>

      
    </main>
  );
}

export default Gallery