import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { IoLogoInstagram } from "react-icons/io";

export default function DesktopFooter() {
  return (
    <div className="hidden md:block container mx-auto h-[423px] pt-40">
      <div className="h-[359px] w-full bg-[#F9FFF6] rounded-[20px]">
        <div className="container px-20 h-full flex items-center justify-around">
          <div>
            <div className="w-[335px] h-[127px]">
              <div className="w-[207px] h-[50px] relative">
                <Image src={"/Logo.png"} fill={true} alt="Logo" quality={100} />
              </div>
              <div className="w-full h-[60px] font-rubik text-sm text-linear leading-5 pt-7">
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan
                Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
                12950
              </div>
            </div>
            <div className="flex pt-12">
              <div className="size-14 rounded-full bg-transparent hover:bg-primary-green text-primary-green hover:text-white relative flex items-center justify-center">
                <CiMail className="object-cover text-3xl font-medium" />
              </div>
              <div className="size-14 rounded-full bg-transparent hover:bg-primary-green text-primary-green hover:text-white relative flex items-center justify-center">
                <LuPhone className="object-cover text-2xl font-medium" />
              </div>
              <div className="size-14 rounded-full bg-transparent hover:bg-primary-green text-primary-green hover:text-white relative flex items-center justify-center">
                <IoLogoInstagram className="object-cover text-3xl font-medium" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-rubik font-medium text-lg leading-6">
              Categories
            </div>
            <div className="flex flex-col gap-4 font-rubik text-sm leading-4 text-linear pt-5">
              <div>Cupcake</div>
              <div>Pizza</div>
              <div>Kebab</div>
              <div>Salmon</div>
              <div>Doughnut</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pb-[63px]">
            <div className="font-rubik font-medium text-lg leading-6">
              About Us
            </div>
            <div className="flex flex-col gap-4 font-rubik text-sm leading-4 text-linear pt-5">
              <div>About Us</div>
              <div>FAQ</div>
              <div>Report Problem</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-[25px]">
            <div className="font-rubik font-medium text-lg leading-6">
              Newsletter
            </div>
            <div className="flex flex-col gap-4 font-rubik text-sm leading-4 text-linear pt-5">
              <div>
                Get now free 50% discount for all <br /> products on your first
                order
              </div>
              <div className="w-[250px] h-[40px] flex justify-center items-center">
                <div className="w-3/4 h-full">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="w-full h-full border border-black rounded-tl-lg rounded-bl-lg pl-2"
                  />
                </div>
                <div className="w-1/4 h-full">
                  <button className="w-full h-full bg-primary-green flex items-center justify-center rounded-tr-lg rounded-br-lg text-white">
                    <div className="font-rubik font-medium text-sm leading-6">
                      SEND
                    </div>
                  </button>
                </div>
              </div>
              <div className="w-[177px] h-[24px] flex items-center justify-start gap-2">
                <div className="font-bold text-primary-green text-sm">
                  <CiMail className="w-full h-full" />
                </div>
                <div className="font-rubik text-sm leading-6">
                  elemesid@gmail.com
                </div>
              </div>
              <div className="w-[177px] h-[24px] flex items-center justify-start gap-2">
                <div className="font-bold text-primary-green text-sm">
                  <LuPhone className="w-full h-full" />
                </div>
                <div className="font-rubik text-sm leading-6">
                  0888 1111 2222
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-8 font-rubik text-lg leading-4 text-linear text-left">
        © 2021 Elemes id. All rights reserved
      </div>
    </div>
  );
}
