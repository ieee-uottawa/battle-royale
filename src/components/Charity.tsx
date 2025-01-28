import React from "react";
import Button from "./Button";
import ccs from "../assets/ccs.svg";

export default function Charity() {
  return (
    <div className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10 mt-16">
      <div className="bg-gray-800 p-1 md:p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Fundraiser</h1>

            <img src={ccs} alt="Canadian Cancer Society" className=" bg-[#ffd81a] mx-auto my-16 p-2" />
          </div>
          <hr className="border-t border-gray-700 my-4" />
          <h3 className="text-center">
            About the{" "}
            <strong>
              <a href="https://cancer.ca/en/about-us" target="_blank" className="underline text-xl hover:text-yellow-400">
                Canadian Cancer Society.
              </a>
            </strong>
          </h3>
          <p className="text-center text-md">
            <br />
            <strong>Our Purpose:</strong> To unite and inspire all Canadians to take control of cancer.
            <br />
            <br />
            <strong>Our Mission:</strong> In trusted partnership with donors and volunteers, we improve the lives of all those affected by cancer through world-class research,
            transformative advocacy and compassionate support.
            <br />
          </p>
          <div className="mt-12 text-center">
            <h3 className="text-center mb-4">GOAL: $1000</h3>
            <Button
              variant="outline"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              onClick={() => window.open("https://fundraisemyway.cancer.ca/campaign/Battle-Royale-XVI", "_blank")}
            >
              Donate Now!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
