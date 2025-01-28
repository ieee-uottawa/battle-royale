import React from "react";
import Button from "./Button";

interface SubmissionCard {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const submissions: SubmissionCard[] = [
  {
    title: "UFO (Unbearably Freaking Overwhelmed)",
    description: "An alien on a badly designed spaceship.",
    imageUrl: "https://img.itch.zone/aW1nLzEyOTE1MzkzLnBuZw==/315x250%23c/TFEJcy.png",
    link: "https://itch.io/jam/br14/rate/1431241",
  },
  {
    title: "Space Jam",
    description: "A basketball space game made with Pygame. Shoot hoops in space!",
    imageUrl: "https://img.itch.zone/aW1nLzgzNjA3NjgucG5n/315x250%23c/8sfhPJ.png",
    link: "https://itch.io/jam/br14/rate/1431225",
  },
];

const PreviousSubmissions: React.FC = () => {
  return (
    <div id="previous-submissions" className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative mt-16">
      <div className="bg-gray-800 p1 md:p-6 rounded-xl shadow-md py-16">
        <div className="container mx-auto px-4">
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Previous Submissions</h1>
            <p className="text-2xl md:text-4xl font-bold text-green-400">BR14 Game Jam</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {submissions.map((submission, index) => (
              <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                <img src={submission.imageUrl || "/placeholder.svg"} alt={submission.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-neon-blue">{submission.title}</h3>
                  <p className="text-gray-300 mb-4">{submission.description}</p>
                  <Button
                    variant="outline"
                    className="w-full border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
                    onClick={() => window.open(submission.link, "_blank")}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviousSubmissions;
