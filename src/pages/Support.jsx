import React, { useEffect } from "react";

function Support() {
  // Always scroll to top when this component is rendered
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
          SUPPORT
        </h1>
        <h2 className="text-base sm:text-lg md:text-[20px] font-semibold text-white ml-4 sm:ml-10">
          HOME <span className="text-[#FFFF00]">/ SUPPORT</span>
        </h2>
      </section>

      {/* Responsive Support Grid */}
      <section
        className="w-full max-w-[1040px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-4 sm:p-5 mt-5"
        style={{ fontFamily: "Inter" }}
      >
        {/* Get Help */}
        <div className="p-6 bg-white rounded-[10px] shadow-[0px_2px_3px_1px_#919191] relative">
          <h3 className="font-bold text-lg sm:text-[20px] mb-5 pb-2 border-b border-[#f1f1f1]">
            Get Help
          </h3>
          <ul className="relative pl-0">
            <li className="flex items-start gap-3 mb-5">
              <span className="w-10 h-10 flex items-center justify-center bg-[#ffe9e9] rounded-full">
                <i className="fa-solid fa-phone text-[#9a7600]"></i>
              </span>
              <div>
                <span className="text-[15px] text-[#919191]">Phone</span>
                <div className="text-[16px] font-medium">
                  <a href="tel:+2347039434273">(123) 456-7890</a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 mb-5">
              <span className="w-10 h-10 flex items-center justify-center bg-[#ffe9e9] rounded-full">
                <i className="fa-solid fa-envelope text-[#9a7600]"></i>
              </span>
              <div>
                <span className="text-[15px] text-[#919191]">Email</span>
                <div className="text-[16px] font-medium">
                  <a href="mailto:info@albertowatchco.com">albeto@gmail.com</a>
                </div>
              </div>
            </li>
            <li className="flex items-start gap-3 mb-5">
              <span className="w-10 h-10 flex items-center justify-center bg-[#ffe9e9] rounded-full">
                <i className="fa-solid fa-phone text-[#9a7600]"></i>
              </span>
              <div>
                <span className="text-[15px] text-[#919191]">
                  Emergency(24/7)
                </span>
                <div className="text-[16px] font-medium">
                  <a href="mailto:emergency@albertowatchco.com">
                    emergen@g.com
                  </a>
                </div>
              </div>
            </li>
          </ul>
          <h4 className="font-medium text-[18px] mb-4 mt-9">Business Hour</h4>
          <ul>
            <li className="flex justify-between mb-3 text-[#919191] text-[15px]">
              <span>Monday-Friday</span> <span>10 AM - 7 PM</span>
            </li>
            <li className="flex justify-between mb-3 text-[#919191] text-[15px]">
              <span>Saturday</span> <span>10 AM - 6 PM</span>
            </li>
            <li className="flex justify-between mb-3 text-[#919191] text-[15px]">
              <span>Sunday</span> <span>12 PM - 5 PM</span>
            </li>
            <li className="flex justify-between mb-3 text-[#960000] font-normal text-[16px]">
              <span>Emergency service</span> <span>24/7</span>
            </li>
          </ul>
        </div>

        {/* Our Service */}
        <div className="p-6 bg-white rounded-[10px] shadow-[0px_2px_3px_1px_#919191]">
          <h3 className="font-bold text-lg sm:text-[20px] mb-5 pb-2 border-b border-[#f1f1f1]">
            Our Service
          </h3>
          <h4 className="font-medium text-[18px] mb-4">Watch Repairs</h4>
          <ul className="text-[#919191] mb-5">
            <li className="flex justify-between text-[15px] mb-2">
              <span>Battery replacement</span> <span>$23-$45</span>
            </li>
            <li className="flex justify-between text-[15px] mb-2">
              <span>Basic service</span> <span>$89</span>
            </li>
            <li className="flex justify-between text-[15px] mb-2">
              <span>Complete overhaul</span> <span>$249</span>
            </li>
            <li className="text-[14px] italic">
              All repairs include 1-year warranty
            </li>
          </ul>
          <h4 className="font-medium flex text-[18px] gap-1 items-center mb-4 mt-9">
            <i className="fa-solid text-[#9a7600] fa-shield"></i>
            Warranty Support
          </h4>
          <ul className="text-[#919191]">
            <li className="flex justify-between text-[16px] mb-2">
              <span>Rolex</span> <span>5 years</span>
            </li>
            <li className="flex justify-between text-[16px] mb-2">
              <span>Omega</span> <span>4 years</span>
            </li>
            <li className="flex justify-between text-[16px] mb-2">
              <span>Citizen</span> <span>5 years</span>
            </li>
            <li className="flex justify-between text-[16px] mb-2">
              <span>Michael Kors</span> <span>2 years</span>
            </li>
            <li className="flex justify-between text-[16px] mb-2">
              <span>Bulova</span> <span>3 years</span>
            </li>
          </ul>
        </div>

        {/* Quick Questions */}
        <div className="p-6 bg-white rounded-[10px] shadow-[0px_2px_3px_1px_#919191]">
          <h3 className="font-bold text-lg sm:text-[20px] mb-5 pb-2 border-b border-[#f1f1f1]">
            Quick Questions
          </h3>
          <h4 className="font-medium text-[16px] mb-2 mt-9">
            How often should I service my watch?
          </h4>
          <p className="text-[#919191] text-[15px]">
            Mechanical watches every 3-5 years.
          </p>
          <h4 className="font-medium text-[16px] mb-2 mt-6">
            Can you repair any brand?
          </h4>
          <p className="text-[#919191] text-[15px]">
            Yes, we service all major brands.
          </p>
          <h4 className="font-medium text-[16px] mb-2 mt-6">
            What does warranty cover?
          </h4>
          <p className="text-[#919191] text-[15px]">
            Manufacturing defects and movement issues.
          </p>
        </div>

        {/* Visit Us */}
        <div className="p-6 bg-white rounded-[10px] shadow-[0px_2px_3px_1px_#919191]">
          <h3 className="font-bold text-lg sm:text-[20px] mb-5 pb-2 border-b border-[#f1f1f1]">
            Visit Us
          </h3>
          <h4 className="font-medium flex items-center gap-1 text-[16px] mb-2 mt-9">
            <i className="fa-solid text-[#9a7600] fa-location-dot"></i>
            Flagship Store
          </h4>
          <p className="text-[#919191] text-[15px]">123 Luxury Lane, NYC</p>
          <h4 className="font-medium flex items-center gap-1 text-[16px] mb-2 mt-6">
            <i className="fa-solid text-[#9a7600] fa-location-dot"></i>
            UES Boutique
          </h4>
          <p className="text-[#919191] text-[15px]">456 Madison Avenue, NYC</p>
          <h4 className="font-medium flex items-center gap-1 text-[16px] mb-2 mt-6">
            <i className="fa-solid fa-location-dot text-[#9a7600]"></i>
            Brooklyn Service
          </h4>
          <p className="text-[#919191] text-[15px]">
            789 Atlantic Avenue, Brooklyn
          </p>
        </div>
      </section>
    </main>
  );
}

export default Support;