export interface PrizeCat {
  title: string;
  logo: string;
  prizes: Prize[];
  color: string;
}

export default function PrizeCategory({ category }: { category: PrizeCategory }) {
  return (
    <div className="overflow-hidden rounded-lg bg-gray-900 border border-gray-800">
      <div className={`rounded-b-lg p-4 ${category.color}`}>
        <img src={category.logo} alt={category.title} className="w-32 h-16 mx-auto object-contain my-4" />
        {(category.title == "Game Jam" || category.title == "(2 rounds)") && <h2 className="text-white font-bold text-center mb-4">{category.title}</h2>}
        {category.prizes.map((prize, index) => (
          <div key={index} className="mb-2 last:mb-0 border border-gray-300 border-opacity-10 rounded-xl py-4 px-2 hover:border-opacity-50 transition-all duration-300">
            {prize.place ? (
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">{prize.place}</span>
                <span className="text-md font-extrabold">{prize.amount}</span>
              </div>
            ) : (
              <div className="text-center">
                <span className="text-sm font-bold">{prize.description}</span>
                <span className="text-md font-extrabold block">{prize.amount}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
