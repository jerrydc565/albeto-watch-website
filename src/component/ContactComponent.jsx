import React from "react";
import rolex from "../assets/rolex.jpg"
function ContactComponent() {
    return (
      <div className="bg-white relative pb-15" id="ContactUs">
        <section
          className="flex gap-10  pt-20 w-full max-w-[1050px] mx-auto   "
          style={{ "fontFamily": "Poppins" }}
        >
          <div className="bg-white w-[50%] border-2 border-[#722D2D] rounded-b-2xl rounded-tl-2xl shadow-[0px_3px_4px_4px_#7a7a7a] p-5  ">
            <h2 className="font-medium text-[35px] tracking-widest text-[#722d2d] ml-5">
              CONTACT US
            </h2>
            <h3 className="font-medium text-[22px] mb-1">Store Information:</h3>
            <p className="text-[13px] w-[55%] ml-5 mb-4 text-[#545454]">
              Visit Our Showroom: Alberto Watch Company 123 luxury lane,
              Timepiece District Metropolitan City, State 12345.
            </p>
            <h3 className="font-medium text-[22px] mb-1"> Contact Details</h3>
            <p className="text-[13px] w-[55%] ml-5  text-[#545454]">
              Phone:{" "}
              <a
                href="tel:+11234567890"
                className="hover:underline hover:text-blue-600"
              >
                (123) 456-7890
              </a>
            </p>
            <p className="text-[13px] w-[55%] ml-5  text-[#545454]">
              Email:{" "}
              <a
                href="mailto:info@albertowatchco.com "
                className="hover:underline hover:text-blue-600"
              >
                info@albertowatchco.com
              </a>
            </p>
            <p className="text-[13px] w-[55%] ml-5 mb-4 text-[#545454]">
              Emergency Repairs:{" "}
              <a
                href="mailto:emergency@albertowatchco.com"
                className="hover:underline hover:text-blue-600"
              >
                emergency@albertowatchco.com
              </a>
            </p>
            <h3 className="font-medium text-[22px] mb-1"> Open Hours</h3>
            <p className="text-[13px] w-[55%] ml-5  text-[#545454]">
              Monday - Friday: 10:00 AM - 7:00 PM
            </p>
            <p className="text-[13px] w-[55%] ml-5  text-[#545454]">
              Saturday: 10:00 AM - 6:00 PM
            </p>
            <p className="text-[13px] w-[55%] ml-5 text-[#545454]">
              Sunday: 12:00 PM - 5:00 PM
            </p>
          </div>
          <div className="bg-[url(/img/manwatch.jpg)] bg-cover bg-center rounded-b-2xl rounded-tl-2xl shadow-[0px_3px_4px_4px_#7a7a7a] w-[50%]  "></div>
          <img
            src={rolex}
            alt=""
            className="w-30 absolute bottom-5 right-20 rounded-bl-2xl rounded-t-2xl shadow-[0px_2px_4px_1px_#7a7a7a]"
          />
        </section>
      </div>
    );
}

export default ContactComponent;
