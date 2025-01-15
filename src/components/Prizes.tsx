import React from "react";
import Button from "./Button";

interface PrizeProps {
  place: string;
  amount: string;
  color: string;
  height: string;
  rewards: string[];
}

const PrizeColumn: React.FC<PrizeProps> = ({
  place,
  amount,
  color,
  height,
  rewards,
}) => (
  <div className={`flex flex-col items-center ${height}`}>
    <div className={`w-full ${color} rounded-t-lg p-4 text-center`}>
      <h3 className="text-2xl font-bold">{place}</h3>
      <p className="text-3xl font-extrabold">{amount}</p>
    </div>
    <div className="bg-gray-900 w-full flex-grow p-4 rounded-b-lg">
      <ul className="list-disc list-inside text-sm">
        {rewards.map((reward, index) => (
          <li key={index} className="mb-2">
            {reward}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Prizes: React.FC = () => {
  const prizes = [
    {
      place: "2nd Place",
      amount: "$75",
      color: "bg-gray-600",
      height: "h-[400px]",
      rewards: ["BR16 Silver Medal", "Social media feature", "Bragging rights"],
    },
    {
      place: "1st Place",
      amount: "$100",
      color: "bg-yellow-600",
      height: "h-[450px]",
      rewards: [
        "BR16 Gold Medal",
        "Social media feature",
        "Bragging rights",
        "Even more bragging rights",
      ],
    },
    {
      place: "3rd Place",
      amount: "$50",
      color: "bg-orange-800",
      height: "h-[350px]",
      rewards: ["BR16 Bronze Medal", "Social media feature"],
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-300 p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10 mt-16">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-neon-green">
            BR16 Prizes
          </h2>
          <div className="flex md:flex-row justify-center items-end space-y-8 md:space-y-0 xl:space-x-8 space-x-2">
            {prizes.map((prize, index) => (
              <PrizeColumn key={index} {...prize} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-4 text-neon-blue">
              Additional Prizes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-yellow-600">
                  People's Choice Award
                </h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Perhaps a prize...</li>
                </ul>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-pink-400">
                  Best Newcomer
                </h4>
                <ul className="list-disc list-inside text-sm">
                  <li>Maybe a prize...</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                  "_blank"
                )
              }
            >
              Click for a prize
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
