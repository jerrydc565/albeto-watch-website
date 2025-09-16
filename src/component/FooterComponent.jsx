import React from "react";
import { Link } from "react-router-dom";
function FooterComponent() {
  return (
    <section
      className="w-full bg-[#0F0303] pb-10"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex flex-col lg:flex-row justify-between gap-10 w-full p-6 sm:p-10 max-w-6xl mx-auto">
        {/* Quick Links */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0">
          <h3 className="text-[#FFFF00] text-xl sm:text-[23px] font-medium">
            Quick Links
          </h3>
          <ul className="text-white text-sm sm:text-[13px] mt-4">
            <li className="mb-2 hover:text-[#FFFF00]">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2 hover:text-[#FFFF00]">
              <Link to="/about-us ">About us</Link>
            </li>
            <li className="mb-2 hover:text-[#FFFF00]">
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li className="mb-2 hover:text-[#FFFF00]">
              <Link to="/site-map">Site Map</Link>
            </li>
            <Link to={"/privacy-policy"}>
              {" "}
              <li className="hover:text-[#FFFF00]">Privacy Policy</li>
            </Link>
          </ul>
        </div>
        {/* Newsletter Signup */}
        <div className="w-full lg:w-1/3 mb-8 lg:mb-0 p-6 sm:p-10 text-white border border-[#2F1303] rounded-[20px] backdrop-blur-[2px] shadow-[7px_33px_33px_0px_#00000070]">
          <h3 className="text-[#FFFF00] text-xl sm:text-[23px] font-medium">
            News Letter Signup
          </h3>
          <h4 className="mt-2 mb-6 text-sm sm:text-base">
            "Stay Updated on New Arrivals & Exclusive Offers"
          </h4>
          <p className="text-sm sm:text-[13px] font-light mb-4">
            Join our community of watch enthusiasts and be the first to know
            about new collections, special events, and expert tips.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="bg-[#5858586a] border-2 border-[#7B7B7B] rounded-[6px] p-2 text-sm sm:text-[13px] outline-0 flex-1"
            />
            <button
              className="bg-[#FFFF00] rounded-[6px] p-2 text-sm sm:text-[13px] text-black font-medium  mt-2 sm:mt-0 w-full sm:w-auto"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Testimonials */}
        <div className="w-full lg:w-1/3">
          <h3 className="text-[#FFFF00] text-xl sm:text-[23px] font-medium">
            Customer Testimonials
          </h3>
          <div className="mt-4 text-white bg-[#281111] border-l-4 border-[#FFFF00] p-6 rounded-2xl">
            <p className="text-sm sm:text-[13px] font-extralight italic leading-6 mb-2">
              "Alberto Watch Company restored my grandfather's 1950s Omega to
              perfection. The craftsmanship and attention to detail exceeded my
              expectations."
            </p>
            <h4 className="text-[14px] font-medium text-right text-[#FFFF00]">
              - Sarah M., Verified Customer
            </h4>
          </div>
        </div>
      </div>
      <hr className="border-[#717171] w-[90%] mx-auto" />
      <p className="text-sm sm:text-[13px] text-center mt-5">
        <span className="font-medium text-[#FFFF00]">
          Alberto Watch Company
        </span>{" "}
        -{" "}
        <span className="font-extralight text-white">
          Premium Timepieces & Expert Restoration
        </span>{" "}
        -{" "}
        <span className="font-extralight text-white">
          © 2025 All Rights Reserved
        </span>
      </p>
    </section>
  );
}

export default FooterComponent;