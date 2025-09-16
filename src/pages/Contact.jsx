import React from "react";
import ContactComponent from "../component/ContactComponent";
import MapEmbed from "../component/MapEmbed";

function Contact() {
  return (
    <main className="bg-[#f4f4f4] min-h-screen pt-4 pb-10">
      {/* Hero Section */}
      <section
        className="w-full mt-2 bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[180px] sm:h-[260px] md:h-[350px] flex flex-col justify-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-[50px] font-bold text-white mt-10 sm:mt-20 ml-4 sm:ml-10">
          CONTACT US
        </h1>
        <h2 className="text-base sm:text-lg md:text-[20px] font-semibold text-white ml-4 sm:ml-10">
          HOME <span className="text-[#FFFF00]">/ CONTACT US</span>
        </h2>
      </section>

      {/* Contact Info & Form */}
      <section className="mt-10">
        <ContactComponent />
      </section>

      {/* Map Section */}
      <section className="w-full max-w-4xl mx-auto mt-10 px-3">
        <h2
          className="text-xl sm:text-2xl font-semibold text-[#722D2D] mb-4 text-center"
          style={{ fontFamily: "Poppins" }}
        >
          Find Us On The Map
        </h2>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <MapEmbed />
        </div>
      </section>
    </main>
  );
}

export default Contact;
