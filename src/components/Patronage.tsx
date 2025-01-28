import React from "react";
import Button from "./Button";

export default function Patronage() {
  return (
    <div className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10 mt-16">
      <div className="bg-gray-800 p-1 md:p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Patronage</h1>
            <p className="text-2xl md:text-4xl font-bold text-green-400">$$$</p>
          </div>
          <hr className="border-t border-gray-700 my-4" />
          <h3 className="text-center">
            Looking to sponsor BR16? <br />
            Send us an email at{" "}
            <a href="mailto:patronage@battleroyale.ca " className="text-neon-green hover:text-neon-green hover:underline">
              patronage@battleroyale.ca
            </a>
          </h3>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
              onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")}
            >
              Send us an email!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
