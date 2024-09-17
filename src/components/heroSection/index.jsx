import Image from "next/image";
import SignUpButton from "../button/signupButton";

export default function HeroSection() {
  return (
    <div className="w-full h-[724px] md:h-[653px] relative ">
      <Image
        src={"/HeroBackground.png"}
        fill={true}
        alt="Hero Section"
        quality={100}
        className="opacity-5 object-cover"
      />
      <div className="container mx-4 md:mx-auto w-[418px] md:w-screen ">
        <div className="absolute flex flex-col md:flex-row">
          <div className="pt-32 md:pt-44">
            <div className="w-[482px] md:h-72 flex md:flex-col md:gap-8">
              <div className="text-hero-mobile md:text-hero text-primary-green font-medium font-rubik">
                Good Food Us <br /> Good Mood
              </div>
              <div className="text-xs md:text-lg text-linear font-normal leading-7 font-rubik hidden md:block">
                I would think that conserving our natural resources should be a
                conservative position: Not to waste food, and not to throw away
                a lot of the food that we buy.
              </div>
            </div>
            <div className="hidden md:flex md:flex-row gap-4 items-center">
              <SignUpButton shadow="drop-shadow-button" />
              <button className="w-[98px] h-[42px] bg-[#F2F2F2] rounded-full text-sm text-[#333333] font-medium leading-6 font-rubik py-2.5 px-[18px]">
                About Us
              </button>
            </div>
          </div>
          <div className="pt-12 md:pt-24 md:pl-72">
            <div className=" size-[290px] md:size-[500px] bg-[rgba(196,196,196,0.2)] rounded-full flex items-center justify-center relative">
              <div className=" size-[230px] md:size-[412px] bg-black rounded-full relative">
                <Image
                  src={"/HeroImage.png"}
                  fill={true}
                  alt="Image"
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="w-[292px] h-[93px] absolute -right-28 md:-left-10 bottom-2">
                <div className="w-full h-full relative ">
                  <Image
                    src={"/CardProfile.png"}
                    fill={true}
                    alt="Image"
                    quality={100}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="pb-7 flex flex-col gap-7 md:hidden">
            <div className="pt-7 text-lg text-left w-[418px] h-[116px] text-linear font-normal leading-7 font-rubik">
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </div>
            <div className="pt-4 flex gap-4 items-center">
              <SignUpButton shadow="drop-shadow-button" />
              <button className="w-[98px] h-[42px] bg-[#F2F2F2] rounded-full text-sm text-[#333333] font-medium leading-6 font-rubik py-2.5 px-[18px]">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
