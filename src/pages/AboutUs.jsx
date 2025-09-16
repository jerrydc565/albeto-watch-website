import React, { useEffect } from "react";
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
      {/* Hero Section */}
      <section
        className="w-full mt-2 bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[220px] sm:h-[320px] md:h-[500px] flex flex-col justify-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-[50px] font-bold text-white mt-10 sm:mt-20 ml-4 sm:ml-10">
          ABOUT US
        </h1>
        <h2 className="text-base sm:text-lg md:text-[20px] font-semibold text-white ml-4 sm:ml-10">
          HOME <span className="text-[#FFFF00]">/ ABOUT US</span>
        </h2>
      </section>

      {/* Section 1 */}
      <section className="mt-10 sm:mt-20 flex flex-col md:flex-row justify-between gap-8 md:gap-10 px-4 sm:px-8 md:px-20 py-6 sm:py-10 items-center">
        <div
          className="w-full md:w-1/2 text-[#3b3b3b]"
          style={{ fontFamily: "Inter" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-[30px] font-bold leading-6 mb-2">
            Three Generations of Horological Excellence
          </h2>
          <p className="text-sm sm:text-base md:text-[15px] leading-6 mb-4">
            Since 1985, Alberto Watch Company has been the trusted destination
            for watch enthusiasts, collectors, and anyone who appreciates fine
            timepieces. Founded by Master Watchmaker Alberto Rodriguez, our
            family-owned business has grown from a small repair shop to a
            full-service luxury watch destination.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={MenWatch}
            alt="About Us"
            className="w-full max-w-[600px] h-[180px] sm:h-[250px] md:h-[300px] object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Section 2 */}
      <section className="mt-6 sm:mt-10 flex flex-col md:flex-row justify-between gap-8 md:gap-10 px-4 sm:px-8 md:px-20 py-6 sm:py-10 items-center">
        <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
          <img
            src={showroom}
            alt=""
            className="w-full max-w-[600px] h-[180px] sm:h-[250px] md:h-[300px] object-cover rounded-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-20 text-[#3b3b3b] order-1 md:order-2">
          <h2 className="text-xl sm:text-2xl md:text-[30px] font-bold object-center leading-6 mb-2">
            Our Mission
          </h2>
          <p className="text-sm sm:text-base md:text-[15px] leading-6 mb-4">
            To preserve the art of traditional watchmaking while embracing
            modern innovation, providing our customers with exceptional
            timepieces and unparalleled service.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <h2 className="text-lg sm:text-[25px] font-medium mt-5 mb-1 text-center">
          Our Values
        </h2>
        <p className="text-sm sm:text-[15px] mb-4 text-center">
          We believe in quality, craftsmanship, and customer satisfaction.
        </p>
        <section
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 px-4 sm:px-8 md:px-20 py-6 sm:py-10 text-[#3b3b3b]"
          style={{ fontFamily: "Inter" }}
        >
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-full text-center">
            <i className="fa-solid fa-gear text-[25px] mb-2"></i>
            <h3 className="text-base sm:text-[18px] font-semibold">
              Craftsmanship
            </h3>
            <p className="text-xs sm:text-[13px] leading-5 mt-2">
              Every service performed to perfection. We approach each timepiece
              with the meticulous attention it deserves, ensuring precision in
              every detail.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-full text-center">
            <i className="fa-solid fa-handshake text-[25px] mb-2"></i>
            <h3 className="text-base sm:text-[18px] font-semibold">
              Integrity
            </h3>
            <p className="text-xs sm:text-[13px] leading-5 mt-2">
              Honest appraisals and transparent pricing. We believe in building
              trust through complete honesty about your timepiece's condition
              and repair costs.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-full text-center">
            <i className="fa-solid fa-star text-[25px] mb-2"></i>
            <h3 className="text-base sm:text-[18px] font-semibold">
              Excellence
            </h3>
            <p className="text-xs sm:text-[13px] leading-5 mt-2">
              Exceeding customer expectations. We don't just meet standards—we
              set them, delivering service that goes beyond what you thought
              possible.
            </p>
          </div>
          <div className="bg-white p-5 rounded-2xl shadow-[0px_2px_5px_1px_#7a7a7a] hover:scale-105 transition-transform duration-500 w-full text-center">
            <i className="fa-solid fa-building-columns text-[25px] mb-2"></i>
            <h3 className="text-base sm:text-[18px] font-semibold">Heritage</h3>
            <p className="text-xs sm:text-[13px] leading-5 mt-2">
              Preserving horological traditions. We honor centuries-old
              techniques while embracing modern precision, keeping the art of
              watchmaking alive.
            </p>
          </div>
        </section>
      </section>

      {/* Section 3 */}
      <section className="mt-6 sm:mt-10 flex flex-col md:flex-row justify-between gap-8 md:gap-10 px-4 sm:px-8 md:px-20 py-6 sm:py-10 items-center">
        <div className="w-full md:w-1/2 mt-6 md:mt-20 text-[#3b3b3b]">
          <h2 className="text-xl sm:text-2xl md:text-[30px] font-bold object-center leading-6 mb-2">
            Our Team
          </h2>
          <p className="text-sm sm:text-base md:text-[15px] leading-6 mb-4">
            Our master watchmakers combine decades of experience with ongoing
            education in the latest techniques and technologies. Each team
            member is passionate about horology and committed to maintaining the
            highest standards of service.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={manyWatch}
            alt=""
            className="w-full max-w-[600px] h-[180px] sm:h-[250px] md:h-[300px] object-cover object-center rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
