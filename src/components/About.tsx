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
      <div
        className={`mt-2 text-gray-300 bg-gray-800 p-4 rounded-lg transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

const AboutSection = () => {
  const faqData = [
    {
      question: "Who can enter?",
      answer:
        "Anyone 13 years or older can participate. You can work in teams of 1 to 4.",
    },
    {
      question: "When is the jam?",
      answer:
        "The jam starts on March 4th, 2022 at 12:30 PM EST and ends on March 6th, 2022 at 6 PM EST. The judging period will be from 6 PM to 8 PM EST on Sunday, March 6th, and winners will be announced live on our Twitch channel during the closing ceremony.",
    },
    {
      question: "Is there a Discord I can join?",
      answer:
        "Yes! There is a dedicated section for the game jam on the Battle Royale server.",
    },
    { question: "What is the theme?", answer: "Outer space! Space jam!" },
    {
      question: "What are the fields?",
      answer: `Game Design: Advertise a creative game idea through a website, document, video, or presentation.\nGame Development: Create a game using any engine or language with the theme announced during the opening ceremony.`,
    },
    {
      question: "What can I make my game in?",
      answer:
        "Anything, provided you include instructions to run it on Windows or browsers using a standard keyboard and mouse.",
    },
    {
      question: "What assets can I use?",
      answer:
        "You can use pre-existing code and legal art/audio assets, but the game should be developed during the jam.",
    },
    {
      question: "Who will judge the games?",
      answer:
        "Graduate students from Carleton University will volunteer as judges.",
    },
    {
      question: "What will the games be judged on?",
      answer: `Creativity, Fun, Theme, Mood, Graphics, Audio, and Overall Game Feel. Judges value innovation, polish, and enjoyment.`,
    },
  ];

  return (
    <div className="bg-gray-900 text-gray-300 p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10">
      <div className="bg-gray-800 p-6 rounded-xl shadow-md">
        <h2 className="text-3xl font-bold text-green-500 border-b-2 border-purple-500 pb-2 mb-6 text-center">
          About Battle Royale Game Jam
        </h2>
        {faqData.map((item, index) => (
          <React.Fragment key={index}>
            <AccordionItem question={item.question} answer={item.answer} />
            {index < faqData.length - 1 && (
              <hr className="border-t border-gray-700 my-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
