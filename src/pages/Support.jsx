import React from "react";
import { useEffect } from "react";
function Support() {
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
          SUPPORT
        </h1>
        <h2 className="text-[20px] font-semibold text-white ml-10">
          {" "}
          HOME <span className="text-[#FFFF00]">/ SUPPORT</span>
        </h2>
      </section>
      <section
        className=" w-full max-w-[1040px] mx-auto grid grid-cols-2 gap-4 p-5 mt-5 "
        style={{ "fontFamily": "Inter" }}
      >
        <div className="p-6 bg-white rounded-[10px] shadow-[0px_2px_3px_1px_#919191]">
          {" "}
          <h3 className="font-bold text-[20px] mb-5 pb-2 border-b-1 border-[#f1f1f1] ">
            {" "}
            Get Help
          </h3>
          <ul className="relative pl-13">
            <button className="w-[40px] h-[40px] top-1 left-0 absolute bg-[#ffe9e9] rounded-4xl">
              <i class="fa-solid fa-phone text-[#9a7600]"></i>
            </button>{" "}
            <li className="flex mb-3  flex-col ">
              <span className="text-[15px] mb-[-7px]  text-[#919191]">
                Phone
              </span>{" "}
              <span className="text-[16px] font-medium">
                {" "}
                <a href="tel:+2347039434273">(123) 456-7890</a>
              </span>
            </li>
            <button className="w-[40px] h-[40px] top-13 left-0  absolute bg-[#ffe9e9] rounded-4xl">
              <i class="fa-solid fa-envelope text-[#9a7600]"></i>
            </button>
            <li className=" flex mb-3 flex-col">
              <span className="text-[15px] mb-[-7px]  text-[#919191]">
                Email
              </span>{" "}
              <span className="text-[16px]  font-medium">
                {" "}
                <a href="melto:info@albertowatchco.com">
                  info@albertowatchco.com
                </a>
              </span>
            </li>{" "}
            <button className="w-[40px] text-[#ff6363] h-[40px] top-27 left-0 absolute bg-[#ffe9e9] rounded-4xl">
              {" "}
              <i class="fa-solid ba  fa-triangle-exclamation"></i>
            </button>
            <li className=" flex mb-3 flex-col">
              <span className="text-[15px] mb-[-7px]  text-[#919191]">
                Emergency (24/7)
              </span>
              <span className="text-[16px] text-[#ae0000] font-medium">
                <a href="melto:emergency@albertowatchco.com">
                  {" "}
                  Emergency@albertowatchco.com
                </a>
              </span>
            </li>{" "}
          </ul>
          <h4 className="font-medium text-[18px] mb-4 mt-9">Business Hour</h4>
          <ul>
            <li className="flex justify-between mb-3 text-[#919191] text-[15px]">
              <span>Monday-Friday</span> <span>10 AM - 7 PM</span>
            </li>
            <li className="flex justify-between mb-3 text-[#919191] text-[15px]">
              {" "}
              <span>Saturday</span> <span>10 AM - 6 - PM</span>
            </li>
            <li className="flex justify-between mb-3 text-[#919191] text-[15px]">
              {" "}
              <span> Sunday</span> <span>12 PM - 5 - PM</span>
            </li>
            <li className="flex justify-between mb-3 text-[#960000] font-normal text-[16px]">
              {" "}
              <span>Emergency service </span> <span>24/7</span>
            </li>
          </ul>
        </div>
        <div className="p-6 bg-white relative rounded-[10px] shadow-[0px_2px_3px_1px_#919191]">
          <h3 className="font-bold text-[20px] mb-5  pb-2 border-b-1 border-[#f1f1f1] ">
            Our Service
          </h3>
          <h4 className="font-medium text-[18px] mb-4 ml-10"> Watch Repairs</h4>
          <ul className="text-[#919191] mb-5">
            {" "}
            <li className="flex justify-between text-[15px] mb-2 ml-10">
              {" "}
              <span>Battery replacement</span> <span>$23-$45</span>
            </li>
            <li className="flex justify-between  text-[15px] mb-2 ml-10">
              <span>Basic service</span> <span>$89</span>
            </li>
            <li className="flex justify-between text-[15px] mb-2 ml-10">
              <span>Complete overhaul</span> <span>$249</span>
            </li>
            <li className=" text-[14px] ml-10 italic">
              All repairs include 1-year warranty
            </li>
          </ul>

          <h4 className="font-medium flex text-[18px] gap-1 ml-3 items-center mb-4 mt-9">
            <i class="fa-solid text-[#9a7600] fa-shield"></i>
            Warranty Support
          </h4>
          <ul className="text-[#919191]">
            <li className="flex justify-between  text-[16px] mb-2 ml-10">
              <span>Rolex</span> <span>5 years</span>
            </li>
            <li className="flex justify-between  text-[16px] mb-2 ml-10">
              <span>Omega</span> <span>4 years</span>
            </li>
            <li className="flex justify-between  text-[16px] mb-2 ml-10">
              <span>Citizen</span> <span>5 years</span>
            </li>
            <li className="flex justify-between  text-[16px] mb-2 ml-10">
              <span>Michael Kors</span> <span>2 years</span>
            </li>
            <li className="flex justify-between  text-[16px] mb-2 ml-10">
              <span>Bulova</span> <span>3 years</span>
            </li>
          </ul>
        </div>
        <div className="p-6 bg-white rounded-[10px] shadow-[0px_2px_3px_1px_#919191]">
          <h3 className="font-bold text-[20px] mb-5  pb-2 border-b-1 border-[#f1f1f1] ">
            {" "}
            Quick Questions
          </h3>
          <h4 className="font-medium text-[16px]  mb-2 mt-9">
            {" "}
            How oftrn should i service my watch?
          </h4>
          <p className="text-[#919191] text-[15px]">
            mechanical watches every 3-5 years.
          </p>
          <h4 className="font-medium text-[16px]  mb-2 mt-6">
            Can you repair any brand?
          </h4>
          <p className="text-[#919191] text-[15px]">
            Yes, we service all major brands.
          </p>
          <h4 className="font-medium text-[16px]  mb-2 mt-6">
            What does warranty ccover?
          </h4>
          <p className="text-[#919191] text-[15px]">
            Manufacturing defects and movement issues.
          </p>
        </div>
        <div className="p-6  bg-white rounded-[10px] shadow-[0px_2px_3px_1px_#919191]">
          <h3 className="font-bold text-[20px] mb-5  pb-2 border-b-1 border-[#f1f1f1] ">
            Visit Us
          </h3>
          <h4 className="font-medium flex items-center gap-1 text-[16px] ml-10  mb-2 mt-9">
            <i class="fa-solid text-[#9a7600] fa-location-dot"></i>
            Flagship Store
          </h4>
          <p className="text-[#919191]  ml-10 text-[15px]">
            123 Luxury Lane, NYC
          </p>
          <h4 className="font-medium flex items-center gap-1 text-[16px] ml-10  mb-2 mt-6">
            <i class="fa-solid text-[#9a7600] fa-location-dot"></i> UES Boutique
          </h4>
          <p className="text-[#919191] ml-10 text-[15px]">
            456 Madison Avenue, NYC
          </p>
          <h4 className="font-medium flex items-center gap-1 text-[16px] ml-10  mb-2 mt-6">
            <i class="fa-solid fa-location-dot text-[#9a7600]"></i>
            Brooklyn Service
          </h4>
          <p className="text-[#919191] ml-10 text-[15px]">
            789 Atlantic Avenue, Brooklyn
          </p>
        </div>
      </section>
    </main>
  );
}

export default Support;