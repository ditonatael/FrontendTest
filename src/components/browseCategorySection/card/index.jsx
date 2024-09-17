import Image from "next/image";

export default function ProfileCard({ item, index }) {
  return (
    <div
      className={`w-[200px] md:w-[230px] h-[175px] flex flex-col items-center justify-center rounded-lg relative md:hover:scale-105 transition-transform duration-300 hover:cursor-pointer `}
      style={{ backgroundColor: item.cardBackground }}
    >
      <Image
        src={"/HeroBackground.png"}
        fill={true}
        alt="Hero Section"
        quality={100}
        className="opacity-0 md:hover:opacity-5 object-cover"
      />

      <div className="w-[52px] h-[52px] flex items-center justify-center relative">
        <Image
          src={`/${item.icon}`}
          fill={true}
          alt="Card Icon"
          quality={100}
          className=" object-cover"
        />
      </div>
      <div className="pt-4 font-rubik text-base leading-5 font-medium">
        {item.name}
      </div>
      <div className="font-rubik font-normal text-sm leading-5">
        {item.quantity} items
      </div>
    </div>
  );
}
