"use client";

import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

export default function MobileFooter() {
  const [showFooter, setShowFooter] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScroll) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
      setLastScroll(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScroll]);

  return (
    <div
      className={`fixed bottom-0 w-full h-[89px] border-t bg-white flex items-center justify-center md:hidden transition-transform duration-300 ${
        showFooter ? "translate-y-0" : "translate-y-96"
      }`}
    >
      <div className="flex justify-between items-center w-full container mx-4 h-full">
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="size-[39px] flex items-center justify-center">
            <CiMenuBurger className="size-full" />
          </div>
          <div className="font-rubik text-sm leading-6 text-linear">Home</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="size-[39px] flex items-center justify-center">
            <CiMenuBurger className="size-full" />
          </div>
          <div className="font-rubik text-sm leading-6 text-linear">
            Promotions
          </div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <div className="size-[39px] flex items-center justify-center">
            <CiMenuBurger className="size-full" />
          </div>
          <div className="font-rubik text-sm leading-6 text-linear">Others</div>
        </div>
      </div>
    </div>
  );
}
