import React from "react";
import Button from "./Button";

export default function Patronage() {
  return (
    <div className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10 mt-16">
      <div className="bg-gray-800 p-1 md:p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-lg md:text-3xl font-bold text-center mb-12 text-neon-green">
            Patronage
          </h2>
          <hr className="border-t border-gray-700 my-4" />
          <h3 className="text-center">
            Looking to sponsor BR16? <br />
            Send us an email at{" "}
            <a
              href="mailto:patronage@battleroyale.ca "
              className="text-neon-green hover:text-neon-green hover:underline"
            >
              patronage@battleroyale.ca
            </a>
          </h3>

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
              Send us an email!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
