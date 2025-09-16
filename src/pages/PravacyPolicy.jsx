import React, { useEffect } from "react";

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="bg-[#f4f4f4] min-h-screen pt-4 pb-10">
      <section
        className="w-full mt-2 bg-[url('/img/aboutus2.png')] bg-cover bg-center h-[180px] sm:h-[260px] md:h-[350px] flex flex-col justify-center"
        style={{ fontFamily: "Poppins" }}
      >
        <h1 className="text-2xl sm:text-4xl md:text-[50px] font-bold text-white mt-10 sm:mt-20 ml-4 sm:ml-10">
          Privacy Policy
        </h1>
        <h2 className="text-base sm:text-lg md:text-[20px] font-semibold text-white ml-4 sm:ml-10">
          HOME <span className="text-[#FFFF00]">/ PRIVACY POLICY</span>
        </h2>
      </section>

      <section
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 sm:p-10 mt-10"
        style={{ fontFamily: "Inter" }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-[#722D2D] mb-4">
          Your Privacy Matters
        </h2>
        <p className="text-sm sm:text-base text-[#545454] mb-6">
          Alberto Watch Company is committed to protecting your privacy and
          ensuring the security of your personal information. This policy
          explains how we collect, use, and safeguard your data when you
          interact with our website and services.
        </p>

        <h3 className="text-lg font-semibold text-[#722D2D] mb-2">
          Information We Collect
        </h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-[#545454] mb-6">
          <li>
            Contact details you provide (name, email, phone) when you reach out
            via our contact forms or newsletter signup.
          </li>
          <li>
            Order and service information when you purchase or request
            repairs/appraisals.
          </li>
          <li>
            Technical data such as browser type, device, and IP address for
            analytics and security.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-[#722D2D] mb-2">
          How We Use Your Information
        </h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-[#545454] mb-6">
          <li>To respond to your inquiries and provide customer support.</li>
          <li>
            To process orders, repairs, appraisals, and warranty services.
          </li>
          <li>
            To send you updates, newsletters, and exclusive offers (if you opt
            in).
          </li>
          <li>
            To improve our website, products, and services through analytics.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-[#722D2D] mb-2">
          Data Protection
        </h3>
        <p className="text-sm sm:text-base text-[#545454] mb-6">
          We implement industry-standard security measures to protect your data
          from unauthorized access, alteration, or disclosure. Your information
          is never sold or shared with third parties except as required to
          fulfill your requests or comply with legal obligations.
        </p>

        <h3 className="text-lg font-semibold text-[#722D2D] mb-2">
          Cookies & Tracking
        </h3>
        <p className="text-sm sm:text-base text-[#545454] mb-6">
          Our website may use cookies and similar technologies to enhance your
          browsing experience and analyze site usage. You can adjust your
          browser settings to refuse cookies if you prefer.
        </p>

        <h3 className="text-lg font-semibold text-[#722D2D] mb-2">
          Your Rights
        </h3>
        <ul className="list-disc pl-5 text-sm sm:text-base text-[#545454] mb-6">
          <li>
            You may request access to, correction, or deletion of your personal
            data at any time.
          </li>
          <li>
            You may unsubscribe from our newsletter or marketing communications
            at any time.
          </li>
        </ul>

        <h3 className="text-lg font-semibold text-[#722D2D] mb-2">
          Contact Us
        </h3>
        <p className="text-sm sm:text-base text-[#545454] mb-2">
          If you have any questions about this privacy policy or your data,
          please contact us at:
        </p>
        <p className="text-sm sm:text-base text-[#545454] mb-2">
          <span className="font-medium">Email:</span> info@albertowatchco.com
        </p>
        <p className="text-sm sm:text-base text-[#545454] mb-2">
          <span className="font-medium">Phone:</span> (123) 456-7890
        </p>

        <p className="text-xs text-[#888] mt-6">
          Last updated: September 16, 2025
        </p>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
