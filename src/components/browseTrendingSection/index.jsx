import TrendingCard from "./card";

export default function BrowseTrending() {
  const fetchResult = {
    data: [
      {
        picture: "PizzaPepperoniCard.png",
        name: "Pizza Pepperoni",
        category: "Pizza",
        cardBackground: "#E6F3F5",
      },
      {
        picture: "PizzaMeat.png",
        name: "Pizza Meat",
        category: "Pizza",
        cardBackground: "#E6F3F5",
      },
      {
        picture: "DonerKebab.png",
        name: "Doner Kebab",
        category: "Kebab",
        cardBackground: "#EAEEFA",
      },
      {
        picture: "SalmonRoll.png",
        name: "Salmon Roll",
        category: "Salmon",
        cardBackground: "#F9EEF3",
      },
      {
        picture: "CupcakeChoco.png",
        name: "Cupcake Choco",
        category: "Cupcake",
        cardBackground: "#F0FEEB",
      },
      {
        picture: "DoughnutMilk.png",
        name: "Doughnut Milk",
        category: "Doughnut",
        cardBackground: "#F3F7D9",
      },
      {
        picture: "DoughnutUnicorn.png",
        name: "Doughnut Unicorn",
        category: "Doughnut",
        cardBackground: "#F3F7D9",
      },
      {
        picture: "KathiKebab.png",
        name: "Kathi Kebab",
        category: "Kebab",
        cardBackground: "#EAEEFA",
      },
    ],
  };
  return (
    <div className="mt-20">
      <div className="container px-4 md:mx-auto">
        <div className="w-[383px] h-[60px] md:w-[730px] md:h-[100px] md:mx-0">
          <div className="text-2xl md:text-4xl font-rubik font-medium">
            Browser Our Trending <br />
            <span className="text-primary-green">Receipt</span>
          </div>
        </div>
        <div className="pt-7 grid grid-cols-1 w-[386px] md:w-full md:grid-cols-4 gap-7">
          {fetchResult.data.map((item, index) => {
            return (
              <div key={index}>
                <TrendingCard item={item} />
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center pt-12 pb-10">
          <button className="w-40 h-[50px] bg-primary-green hidden md:flex items-center justify-center rounded-full font-rubik font-medium text-base leading-[18.96px] text-center text-white">
            ALL Receipt
          </button>
        </div>
      </div>
    </div>
  );
}
