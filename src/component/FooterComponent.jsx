import React from "react";
import { Link } from "react-router-dom";
function FooterComponent() {
  return (
    <section
      className="w-full  bg-[#0F0303] pb-10 "
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex justify-around gap-10 w-full p-10">
        <div className="w-full">
          <h3 className="text-[#FFFF00] text-[23px] font-medium">
            Quick Links
          </h3>
          <ul className="text-white text-[13px] mt-4 ">
            <li className="mb-2">Home</li>
            <li className="mb-2">About us</li>
            <li className="mb-2">Contact us</li>
            <Link to={"/site-map"}>
              <li className="mb-2">Site Map</li>
            </Link>
          </ul>
        </div>
        <div className="w-[100%]  p-10 text-white border-1 border-[#2F1303] rounded-[20px] backdrop-blur-[2px] relative shadow-[7px_33px_33px_0px_#00000070] ">
          <h3 className="text-[#FFFF00] text-[23px] font-medium">
            {" "}
            News Letter Signup
          </h3>
          <h4 className="mt-2 mb-6">
            {" "}
            " Stay Updated on New Arrivals Exclusive offers "
          </h4>
          <p className="text-[13px] font-light mb-4">
            Join our community of watch enthusiasts and be the first to know
            about new collections, special event and expert tips.
          </p>
          <form>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="bg-[#5858586a] border-2 border-[#7B7B7B] rounded-[6px] p-2 text-[13px] outline-0"
            />
            <button className="bg-[#FFFF00] rounded-[6px] p-2 text-[13px] text-black font-medium px-6 ml-3">
              Subscribe
            </button>
          </form>
        </div>
        <div className="w-[90%]">
          <h3 className="text-[#FFFF00] text-[23px] font-medium">
            Customer Testimonials
          </h3>
          <div className="mt-4 text-white bg-[#281111] border-l-10 border-white p-6 rounded-2xl">
            <p className="text-[13px] font-extralight italic leading-6 mb-2">
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
      <p className="text-[13px] text-center mt-5">
        <span className="font-medium text-[#FFFF00]">
          Alberto Watch Company
        </span>{" "}
        -{" "}
        <span className="font-extralight text-white">
          Premium Timepieces & Expert Restoration
        </span>{" "}
        -{" "}
        <span className="font-extralight text-white">
          @ 2025 All Rights Reserved{" "}
        </span>
      </p>
    </section>
  );
}

export default FooterComponent;
