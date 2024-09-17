import ProfileCard from "./card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function BrowseCategory() {
  const fetchResult = {
    data: [
      {
        icon: "CupcakeCard.png",
        name: "Cupcake",
        quantity: 22,
        cardBackground: "#F0FEEB",
      },
      {
        icon: "PizzaCard.png",
        name: "Pizza",
        quantity: 25,
        cardBackground: "#E4F2F4",
      },
      {
        icon: "KebabCard.png",
        name: "Kebab",
        quantity: 12,
        cardBackground: "#EAEEFA",
      },
      {
        icon: "SalmonCard.png",
        name: "Salmon",
        quantity: 22,
        cardBackground: "#F9EEF3",
      },
      {
        icon: "DoughnutCard.png",
        name: "Doughnut",
        quantity: 11,
        cardBackground: "#F3F7D9",
      },
      {
        icon: "CupcakeCard.png",
        name: "Cupcake",
        quantity: 22,
        cardBackground: "#F0FEEB",
      },
      {
        icon: "PizzaCard.png",
        name: "Pizza",
        quantity: 25,
        cardBackground: "#E4F2F4",
      },
      {
        icon: "KebabCard.png",
        name: "Kebab",
        quantity: 12,
        cardBackground: "#EAEEFA",
      },
      {
        icon: "SalmonCard.png",
        name: "Salmon",
        quantity: 22,
        cardBackground: "#F9EEF3",
      },
      {
        icon: "DoughnutCard.png",
        name: "Doughnut",
        quantity: 11,
        cardBackground: "#F3F7D9",
      },
    ],
  };
  return (
    <div className="mt-32 md:mt-7">
      <div className="container md:mx-auto w-full ">
        <div className="w-[383px] h-[60px] mx-4 md:w-[730px] md:h-[100px] md:mx-0">
          <div className="text-2xl md:text-4xl font-rubik font-medium">
            Browser Our Category <br />
            <span className="text-primary-green">Receipt</span>
          </div>
        </div>
        <Carousel
          className="w-[420px] md:w-full flex flex-col"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <div className="h-56 w-full p-2.5 flex justify-center items-center gap-2.5">
            <CarouselContent>
              {fetchResult.data.map((item, index) => {
                return (
                  <CarouselItem className=" basis-52 md:basis-60" key={index}>
                    <ProfileCard item={item} index={index} />
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </div>
          <div className="hidden md:flex md:flex-row items-center justify-end gap-7 pt-7">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
