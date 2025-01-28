// src/components/AboutSection.jsx
import React, { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left text-xl text-purple-400 font-semibold bg-gray-800 p-4 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-purple-500"
      >
        {question}
      </button>
      <div className={`mt-2 text-gray-300 bg-gray-800 p-4 rounded-lg transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        {answer}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const faqBRData = [
    {
      question: "What is BR?",
      answer: "Battle Royale is a weekend-long event where participants can compete in video-game tournaments and/or a game jam.",
    },
    {
      question: "When is BR16?",
      answer:
        "BR16 starts on February 6th, and ends on Feb 9th, at 10AM EST. Game Jam judging will start at 12PM EST and winners will be announced live on our Twitch channel during the closing ceremony.",
    },
    {
      question: "What video-games are played this year?",
      answer: "The games played at BR16 are Valorant, League of Legends, Minecraft, Stardew Valley and Jack of All Games.",
    },
    {
      question: "How do I enter the tournaments?",
      answer: "You can sign up for the tournament with the link at the top of our website. Registration is free!",
    },
    {
      question: "Who is organizing BR16?",
      answer: "BR16 is organized by IEEE uOttawa, IEEE Carleton, IEEE Algonquin, IEEE UBC, and the uOttawa Game Dev Club.",
    },
  ];

  const faqGameJamData = [
    {
      question: "Who can enter the jam?",
      answer: "Anyone 13 years or older can participate. You can work in teams of 1 to 4.",
    },
    {
      question: "What is the theme?",
      answer: "The theme will be revealed in our opening ceremonies!",
    },
    {
      question: "What can I make my game in?",
      answer: "Anything, provided you include instructions to run it on Windows or browsers using a standard keyboard and mouse.",
    },
    {
      question: "What assets can I use?",
      answer: "You can use pre-existing code and legal art/audio assets, but the game should be developed during the jam.",
    },
    {
      question: "What will the games be judged on?",
      answer: `Creativity, Fun, Theme, Mood, Graphics, Audio, and Overall Game Feel. Judges value innovation, polish, and enjoyment.`,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10 mt-16">
      <div className="bg-gray-800 p-2 md:p-6 rounded-xl shadow-md pt-8">
        <div className="text-center my-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">About BR16</h1>
          <p className="text-2xl md:text-4xl font-bold text-green-400">General</p>
        </div>
        <hr className="border-t border-gray-700 my-4" />
        {faqBRData.map((item, index) => (
          <React.Fragment key={index}>
            <AccordionItem question={item.question} answer={item.answer} />
            {index < faqBRData.length - 1 && <hr className="border-t border-gray-700 my-4" />}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-gray-800 p-2 md:p-6 rounded-xl shadow-md pt-8 mt-8">
        <div className="text-center my-12">
          <p className="text-2xl md:text-4xl font-bold text-green-400">Game Jam</p>
        </div>
        <hr className="border-t border-gray-700 my-4" />
        {faqGameJamData.map((item, index) => (
          <React.Fragment key={index}>
            <AccordionItem question={item.question} answer={item.answer} />
            {index < faqGameJamData.length - 1 && <hr className="border-t border-gray-700 my-4" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
