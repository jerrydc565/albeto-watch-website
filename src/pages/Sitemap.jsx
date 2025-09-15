import React from 'react'
import { Link } from 'react-router-dom'
function Sitemap() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f3] to-[#e7d5c9] flex items-center justify-center py-10">
      <div className="w-full max-w-3xl bg-white/90 rounded-3xl shadow-2xl p-10 border border-[#e5e5e5]">
        <h1 className="text-4xl font-extrabold text-[#722D2D] mb-2 text-center tracking-tight drop-shadow">
          Site Map
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Explore all pages and sections of the Alberto Watch website.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Navigation */}
          <div>
            <h2 className="text-xl font-semibold text-[#722D2D] mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#722D2D] rounded-full"></span>
              Main Pages
            </h2>
            <ul className="space-y-3 pl-2">
              <li>
                <Link
                  to="/"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about-us"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <a
                  href="/#technology"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  Technology{" "}
                  <span className="text-xs text-gray-400">(section)</span>
                </a>
              </li>
            </ul>
          </div>
          {/* Product Navigation */}
          <div>
            <h2 className="text-xl font-semibold text-[#722D2D] mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-[#722D2D] rounded-full"></span>
              Product Categories
            </h2>
            <ul className="space-y-3 pl-2">
              <li>
                <Link
                  to="/vintage"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  Vintage
                </Link>
              </li>
              <li>
                <Link
                  to="/luxury"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  Luxury
                </Link>
              </li>
              <li>
                <Link
                  to="/smart-watch"
                  className="hover:underline hover:text-[#722D2D] font-medium"
                >
                  Smart Watch
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* More Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-[#722D2D] mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#722D2D] rounded-full"></span>
            More
          </h2>
          <ul className="flex flex-wrap gap-6 pl-2">
            <li>
              <Link
                to="/support"
                className="hover:underline hover:text-[#722D2D] font-medium"
              >
                Support
              </Link>
            </li>
            <li>
              <a
                href="/#ContactUs"
                className="hover:underline hover:text-[#722D2D] font-medium"
              >
                Contact Us{" "}
                <span className="text-xs text-gray-400">(section)</span>
              </a>
            </li>
          </ul>
        </div>
        {/* Visual Divider */}
        <div className="my-10 border-t border-[#e5e5e5]"></div>
        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/favicon.ico"
              alt="Logo"
              className="w-7 h-7 rounded-full"
            />
            <span className="font-bold text-[#722D2D] text-lg">
              Alberto Watch
            </span>
          </div>
          <span className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Alberto Company. All rights
            reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sitemap