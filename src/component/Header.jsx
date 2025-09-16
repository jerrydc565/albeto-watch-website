import React, { useEffect } from "react";
import Logo from "../assets/clock.png";
import Down from "../assets/down.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import Up from "../assets/upload.png";
function Header() {
  const [more, setMore] = useState("Hide");
  const [product, setProduct] = useState("Hide");

  const handleClick = () => {
    if (more === "Hide") {
      setMore("Show");
    } else {
      setMore("Hide");
    }
  };

  const click = () => {
    if (more === "Show") {
      setMore("Hide");
    } else {
      setMore("Show");
    }
  };

  const close = () => {
    if (more === "Show") {
      setMore("Hide");
    }
  };
  const otherClose = () => {
    if (product === "Show") {
      setProduct("Hide");
    }
  };

  const openNav = () => {
    if (product === "Hide") {
      setProduct("Show");
    } else {
      setProduct("Hide");
    }
  };
  const closeNav = () => {
    if (product === "Show") {
      setProduct("Hide");
    } else {
      setProduct("Show");
    }
  };

  return (
    <div className="w-full sticky top-0 z-100" onClick={close}>
      <header
        className="flex items-center justify-between bg-[#b3b3b3cf] rounded-[88px] w-full max-w-[1140px] h-fit mx-auto p-[10px] mt-2 mb-5 pl-20 pr-20  shadow-[-2px_2px_10px_3px_#bcbcbccf] backdrop-blur-[3px]"
        style={{ fontFamily: "Inter" }}
        onClick={otherClose}
      >
        <div className="flex items-center">
          <img src={Logo} alt="" className=" w-[40px]" />
          <h2 className="font-bold ml-[-10px] text-[14px] text-[#3B3B3B]">
            Alberto Watch{" "}
          </h2>
        </div>

        <ul className="hidden md:flex items-center gap-[20px]">
          <Link to={"/"}>
            <li className="transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Home
            </li>
          </Link>

          <li className="flex items-center transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D] cursor-[url(hand.cur),_pointer] ...">
            Product{" "}
            <span>
              {" "}
              <i
                class="fa-solid fa-angle-down text-[10px] "
                onClick={openNav}
                style={{
                  display: product === "Show" ? "none" : "block",
                }}
              ></i>
            </span>
            <span>
              <i
                class="fa-solid fa-angle-up text-[10px]"
                style={{
                  display: product === "Hide" ? "none" : "block",
                }}
                onClick={closeNav}
              ></i>
            </span>
          </li>
          <a href="/#technology">
            <li className="transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Technology
            </li>
          </a>

          <Link to={"/service"}>
            <li className="transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Service
            </li>
          </Link>

          <Link to={"/about-us"}>
            <li className="transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              About us
            </li>
          </Link>

          <Link to={"/gallery"}>
            <li className=" transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Gallery
            </li>
          </Link>

          <li className="flex items-center transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D] cursor-[url(hand.cur),_pointer] ...">
            {" "}
            More{" "}
            <span>
              <i
                class="fa-solid fa-angle-down text-[10px] "
                onClick={handleClick}
                style={{
                  display: more === "Show" ? "none" : "block",
                }}
              ></i>
            </span>
            <span>
              <i
                class="fa-solid fa-angle-up text-[10px]"
                style={{
                  display: more === "Hide" ? "none" : "block",
                }}
                onClick={click}
              ></i>
            </span>
          </li>
        </ul>

        <ul
          className=" hidden-ul hidden absolute ... top-13 right-55 bg-[white] p-3 rounded-2xl shadow-2xl fadeInScale"
          style={{
            display: more === "Hide" ? "none" : "block",
          }}
        >
          <Link to={"/support"}>
            <li className="m-5 transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Support
            </li>
          </Link>

<Link to={"/contact-us"}> <li className="m-5 transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Contact us
            </li></Link>          
           
          
        </ul>

        <button className="bg-[#722D2D] p-[5px] rounded-[30px] pl-5 pr-5 text-white text-[12px]">
          Visitor 0
        </button>
        <ul
          style={{
            display: product === "Hide" ? "none" : "block",
          }}
          className=" hidden hidden-ul absolute ... top-15 left-100 bg-[white] p-3 rounded-2xl shadow-2xl fadeInScale"
        >
          <Link to={"/vintage"}>
            {" "}
            <li className="transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Vintage{" "}
            </li>
          </Link>
          <Link to={"/luxury"}>
            {" "}
            <li className="transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              {" "}
              Luxury{" "}
            </li>
          </Link>
          <Link to={"smart-watch"}>
            {" "}
            <li className="transition-all duration-300 border-b-2 border-transparent hover:text-[#722D2D] hover:border-b-2 hover:border-b-[#722D2D]">
              Smart Watch
            </li>
          </Link>
        </ul>
      </header>
    </div>
  );
}

export default Header;
