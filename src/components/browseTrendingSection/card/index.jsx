import Image from "next/image";

export default function TrendingCard({ item }) {
  return (
    <div
      className="w-[402px] h-[292px] md:w-[287.5px] md:h-[306px] rounded-2xl p-4 flex flex-col items-start justify-center drop-shadow-card relative"
      style={{ backgroundColor: item.cardBackground }}
    >
      <Image
        src={"/HeroBackground.png"}
        fill={true}
        alt="Hero Section"
        quality={100}
        className="opacity-0 md:hover:opacity-5 object-cover hover:cursor-pointer"
      />
      <div className="w-[118.15px] h-[120px] rounded-md relative">
        <Image
          src={`/${item.picture}`}
          fill={true}
          alt="Star Rate"
          quality={100}
          className="object-cover"
        />
      </div>
      <div className="font-rubik font-medium text-[26px] leading-[50px]">
        {item.name}
      </div>
      <div className="font-rubik font-medium text-lg leading-[21.33px] text-primary-green">
        {item.category}
      </div>
      <div className="w-[68.23px] h-[10.66px] relative flex items-center justify-center mt-5">
        <Image
          src={"/Star.png"}
          fill={true}
          alt="Star Rate"
          quality={100}
          className="object-cover"
        />
      </div>
    </div>
  );
}
