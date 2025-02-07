import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <svg viewBox="0 0 500 500" className="w-full h-full opacity-20">
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="500"
            fontWeight="bold"
            fill="#3dffd2"
            style={{
              filter: "drop-shadow(0 0 20px rgba(57, 255, 20, 0.5))",
            }}
          >
            16
          </text>
        </svg>
      </div>
      <div className="container mx-auto px-4 text-center z-10">
        <svg viewBox="0 0 1000 200" className="w-full max-w-4xl mx-auto mb-8">
          <defs>
            <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#39ff14" />
              <stop offset="100%" stopColor="#4d4dff" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="120"
            fontWeight="bold"
            fill="url(#titleGradient)"
            stroke="#000"
            strokeWidth="2"
            style={{ textShadow: "0 4px 4px rgba(0,0,0,0.5)" }}
          >
            BATTLE ROYALE
          </text>
        </svg>
        <div className="flex flex-wrap gap-2 text-center justify-center">
          <Button
            size="lg"
            variant="outline"
            className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black px-2 md:px-4"
            onClick={() => window.open("https://www.twitch.tv/ieeebattleroyale", "_blank")}
          >
            Twitch.tv
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black px-2 md:px-4"
            onClick={() => window.open("https://discord.gg/vFC4Cn49", "_blank")}
          >
            Join the Discord
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-black px-2 md:px-4"
            onClick={() => window.open("https://docs.google.com/spreadsheets/d/1PyDkTg6oNtPSsIYSyHldNYzwrC--tLwviM4uBHDF3VA/edit?usp=sharing", "_blank")}
          >
            Schedule
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black px-2 md:px-4"
            onClick={() => window.open("https://itch.io/jam/battle-royal-xvi-malfunction-game-jam", "_blank")}
          >
            Game Jam
          </Button>
        </div>
      </div>
    </section>
  );
}
