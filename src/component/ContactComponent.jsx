import React from "react";
import rolex from "../assets/rolex.jpg";

function ContactComponent() {
  return (
    <div className="bg-white relative pb-10" id="ContactUs">
      <section
        className="flex flex-col md:flex-row gap-8 md:gap-10 pt-10 sm:pt-16 w-full max-w-[1050px] mx-auto px-3 sm:px-6"
        style={{ fontFamily: "Poppins" }}
      >
        {/* Contact Info */}
        <div className="bg-white w-full md:w-1/2 border-2 border-[#722D2D] rounded-b-2xl rounded-tl-2xl shadow-[0px_3px_4px_4px_#7a7a7a] p-5">
          <h2 className="font-medium text-2xl sm:text-3xl md:text-[35px] tracking-widest text-[#722d2d] mb-4">
            CONTACT US
          </h2>
          <h3 className="font-medium text-lg sm:text-xl mb-1">
            Store Information:
          </h3>
          <p className="text-xs sm:text-sm w-full sm:w-[80%] mb-4 text-[#545454]">
            Visit Our Showroom: Alberto Watch Company 123 luxury lane, Timepiece
            District Metropolitan City, State 12345.
          </p>
          <h3 className="font-medium text-lg sm:text-xl mb-1">
            Contact Details
          </h3>
          <p className="text-xs sm:text-sm w-full sm:w-[80%] text-[#545454]">
            Phone:{" "}
            <a
              href="tel:+11234567890"
              className="hover:underline hover:text-blue-600"
            >
              (123) 456-7890
            </a>
          </p>
          <p className="text-xs sm:text-sm w-full sm:w-[80%] text-[#545454]">
            Email:{" "}
            <a
              href="mailto:info@albertowatchco.com"
              className="hover:underline hover:text-blue-600"
            >
              info@albertowatchco.com
            </a>
          </p>
          <p className="text-xs sm:text-sm w-full sm:w-[80%] mb-4 text-[#545454]">
            Emergency Repairs:{" "}
            <a
              href="mailto:emergency@albertowatchco.com"
              className="hover:underline hover:text-blue-600"
            >
              emergency@albertowatchco.com
            </a>
          </p>
          <h3 className="font-medium text-lg sm:text-xl mb-1">Open Hours</h3>
          <p className="text-xs sm:text-sm w-full sm:w-[80%] text-[#545454]">
            Monday - Friday: 10:00 AM - 7:00 PM
          </p>
          <p className="text-xs sm:text-sm w-full sm:w-[80%] text-[#545454]">
            Saturday: 10:00 AM - 6:00 PM
          </p>
          <p className="text-xs sm:text-sm w-full sm:w-[80%] text-[#545454]">
            Sunday: 12:00 PM - 5:00 PM
          </p>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2 min-h-[220px] h-48 sm:h-64 md:h-auto bg-[url(/img/manwatch.jpg)] bg-cover bg-center rounded-b-2xl rounded-tl-2xl shadow-[0px_3px_4px_4px_#7a7a7a]"></div>
        {/* Rolex Image */}
        <img
          src={rolex}
          alt=""
          className="hidden md:block w-32 absolute bottom-5 right-20 rounded-bl-2xl rounded-t-2xl shadow-[0px_2px_4px_1px_#7a7a7a]"
        />
      </section>
      {/* Rolex image for mobile, placed below content */}
      <div className="flex md:hidden justify-center mt-6">
        <img
          src={rolex}
          alt=""
          className="w-32 rounded-bl-2xl rounded-t-2xl shadow-[0px_2px_4px_1px_#7a7a7a]"
        />
      </div>
    </div>
  );
}

export default ContactComponent;
