"use client";

import Image from "next/image";
import SignUpButton from "~/components/button/signupButton";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);
  return (
    <div
      className={`fixed w-full z-10 bg-white border-b md:bg-transparent md:border-none duration-300 ${
        isScrolled ? "md:bg-white md:border" : ""
      }`}
    >
      <div className="w-full container mx-4 h-20 md:mx-auto md:h-24 flex justify-between items-center">
        <div className="w-36 h-9 md:w-52 md:h-14 relative">
          <Image src={"/Logo.png"} fill={true} alt="Logo" quality={100} />
        </div>
        <div className="hidden md:flex md:flex-row md:justify-between md:items-center md:w-[403px] md:h-10">
          <div className="font-rubik text-sm font-medium text-linear">Home</div>
          <div className="font-rubik text-sm font-medium text-linear">
            About
          </div>
          <div className="relative">
            <div className="flex items-center justify-center h-5 w-9 text-2xs font-sans font-bold text-white bg-[#E7462D] rounded-lg absolute -right-4 bottom-5">
              HOT
            </div>
            <div className="font-rubik text-sm font-medium text-linear">
              Promotions
            </div>
          </div>
          <div className="font-rubik text-sm font-medium text-linear">
            Blogs
          </div>
          <div className="font-rubik text-sm font-medium text-linear">
            Contact Us
          </div>
        </div>
        <div className="w-52 h-10 flex justify-center items-center gap-6">
          <button className="hidden md:block font-rubik text-sm font-medium">
            Masuk
          </button>
          <SignUpButton />
        </div>
      </div>
    </div>
  );
}
