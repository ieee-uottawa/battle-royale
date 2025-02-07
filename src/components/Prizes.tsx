import PrizeCategory from "./PrizeCategory";
import jg from "../assets/jg.svg";
import lol from "../assets/lol.png";
import mc from "../assets/mc.svg";
import val from "../assets/val.svg";
import sdv from "../assets/sdv.png";
import gdc from "../assets/gdc.svg";
import bonus from "../assets/bonus.png";

export interface Prize {
  place?: string;
  amount: string;
  description?: string;
}

const prizeCategories = [
  {
    title: "Valorant",
    logo: val,
    color: "bg-red-900/50",
    prizes: [
      { place: "1st", amount: "$310.70" },
      { place: "2nd", amount: "$100" },
      { place: "3rd", amount: "$50" },
      { description: "Best Clip", amount: "$15" },
    ],
  },
  {
    title: "League of Legends",
    logo: lol,
    color: "bg-yellow-900/50",
    prizes: [
      { place: "1st", amount: "$150" },
      { place: "2nd", amount: "$75" },
      { place: "3rd", amount: "$25" },
      { description: "1st Low ELO", amount: "$100" },
      { description: "2nd Low ELO", amount: "$50" },
      { description: "3rd Low ELO", amount: "$25" },
      { description: "Best Clips", amount: "$15" },
    ],
  },
  {
    title: "Minecraft",
    logo: mc,
    color: "bg-green-900/50",
    prizes: [
      { description: "Ender Dragon Speed Run", amount: "$75" },
      { description: "Heart of the Sea Speed Run", amount: "$25" },
      { description: "Enchanted Apple Speed Run", amount: "$25" },
      { description: "Build Challenge Winners", amount: "$15" },
      { description: "Build Challenge Overall", amount: "$75" },
    ],
  },
  {
    title: "StarDew Valley",
    logo: sdv,
    color: "bg-orange-900/50",
    prizes: [
      { description: "Top 3", amount: "Plushies" },
      { description: "Surprise Gift", amount: "TBD" },
    ],
  },
  {
    title: "(2 rounds)",
    logo: jg,
    color: "bg-pink-900/50",
    prizes: [
      { place: "1st (x2)", amount: "$124.28$" },
      { place: "2nd (x2)", amount: "$62.14$" },
    ],
  },
  {
    title: "Game Jam",
    logo: gdc,
    color: "bg-blue-900/50",
    prizes: [
      { place: "1st", amount: "$250" },
      { place: "2nd", amount: "$100" },
      { place: "3rd", amount: "$50" },
    ],
  },
  {
    title: "Bonus Prizes",
    logo: bonus,
    color: "bg-yellow-700",
    prizes: [
      { description: "Zero Latency voucher (4ppl)", amount: "~$220" },
      { description: "Total in Gift Cards", amount: "~$683.54" },
    ],
  },
];

export default function Prizes() {
  return (
    <div className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10 mt-16">
      <div className="bg-gray-800 p-1 md:p-6 rounded-xl shadow-md">
        <div className="text-center my-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Prizes</h1>
          <p className="text-2xl md:text-4xl font-bold text-green-400">$2600 TOTAL</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prizeCategories.map((category, index) => (
            <PrizeCategory key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
