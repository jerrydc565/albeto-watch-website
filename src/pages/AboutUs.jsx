import React from "react";
import { useEffect } from "react";
import MenWatch from "../assets/image.png";
import showroom from "../assets/showroom.jpg";
import manyWatch from "../assets/many-watch.jpg";
function AboutUs() {

    // Always scroll to top when this component is rendered
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  
  
  return (
    <main className="bg-[#f4f4f4]">
      <section
        className="w-full   mt-2  bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[500px] p-10"
        style={{ "fontFamily": "Poppins" }}
      >
        <h1 className="text-[50px] font-bold text-white mt-30 ml-10">
          {" "}
          ABOUT US
        </h1>
        <h2 className="text-[20px] font-semibold text-white ml-10">
          {" "}
          HOME <span className="text-[#FFFF00]">/ ABOUT US</span>
        </h2>
      </section>
      <section className="mt-20 flex justify-between gap-10 px-20 p-10 items-center">
        <div
          className="w-[50%]    text-[#3b3b3b] "
          style={{ "fontFamily": "Inter" }}
        >
          <h2 className="text-[30px] font-bold leading-6 mb-2">
            {" "}
            Three Generations of Horological Excellence
          </h2>
          <p className="text-[15px] leading-6 mb-4">
            Since 1985, Alberto Watch Company has been the trusted destination
            for watch enthusiasts, collectors, and anyone who appreciates fine
            timepieces. Founded by Master Watchmaker Alberto Rodriguez, our
            family-owned business has grown from a small repair shop to a
            full-service luxury watch destination.
          </p>
        </div>
        <div className=" w-[60%]  rounded-2xl">
          <img
            src={MenWatch}
            alt="About Us"
            className="w-[600px] h-[300px] object-cover rounded-2xl"
          />
        </div>
      </section>
      <section className="mt-10 flex justify-between gap-10 px-20 p-10 items-center">
        <div>
          {" "}
          <img
            src={showroom}
            alt=""
            className="w-[600px] h-[300px] object-cover rounded-2xl"
          />
        </div>
        <div className="w-[50%]   mt-20  text-[#3b3b3b]">
          <h2 className="text-[30px] font-bold object-center leading-6 mb-2">
            {" "}
            Our Mission
          </h2>
          <p className="text-[15px] leading-6 mb-4">
            To preserve the art of traditional watchmaking while embracing
            modern innovation, providing our customers with exceptional
            timepieces and unparalleled service.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-[25px] font-medium  mt-5 mb-1 text-center">
          Our Values
        </h2>
        <p className="text-[15px]  mb-4 text-center">
          We believe in quality, craftsmanship, and customer satisfaction.
        </p>
        <section
          className="grid grid-cols-2 gap-10 px-20 p-10 text-[#3b3b3b]"
          style={{ "fontFamily": "Inter" }}
        >
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-[100%] text-center  ">
            <i className="fa-solid fa-gear text-[25px] mb-2"></i>
            <h3 className="text-[18px] font-semibold"> Craftsmanship</h3>
            <p className="text-[13px] leading-5 mt-2">
              Every service performed to perfection. We approach each timepiece
              with the meticulous attention it deserves, ensuring precision in
              every detail.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-[100%] text-center  ">
            <i className="fa-solid fa-handshake text-[25px] mb-2"></i>
            <h3 className="text-[18px] font-semibold">Integrity</h3>
            <p className="text-[13px] leading-5 mt-2">
              Honest appraisals and transparent pricing. We believe in building
              trust through complete honesty about your timepiece's condition
              and repair costs.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-[100%] text-center  ">
            <i className="fa-solid fa-star text-[25px] mb-2"></i>
            <h3 className="text-[18px] font-semibold">Excellence</h3>
            <p className="text-[13px] leading-5 mt-2">
              Exceeding customer expectations. We don't just meet standards—we
              set them, delivering service that goes beyond what you thought
              possible.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-[100%] text-center  ">
            {" "}
            <i className="fa-solid fa-building-columns text-[25px] mb-2"></i>
            <h3 className="text-[18px] font-semibold">Heritage</h3>
            <p className="text-[13px] leading-5 mt-2">
              Preserving horological traditions. We honor centuries-old
              techniques while embracing modern precision, keeping the art of
              watchmaking alive.
            </p>
          </div>
        </section>
      </section>
      <section className="mt-10 flex justify-between gap-10 px-20 p-10 items-center">
        <div className="w-[50%]   mt-20  text-[#3b3b3b]">
          {" "}
          <h2 className="text-[30px] font-bold object-center leading-6 mb-2">
            {" "}
            Our Team
          </h2>
          <p className="text-[15px] leading-6 mb-4">
            Our master watchmakers combine decades of experience with ongoing
            education in the latest techniques and technologies. Each team
            member is passionate about horology and committed to maintaining the
            highest standards of service.
          </p>
        </div>
        <div>
          <img
            src={manyWatch}
            alt=""
            className="w-[600px] h-[300px] object-cover object-center rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
