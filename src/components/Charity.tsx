import React, { useState } from "react";
import Button from "./Button";
import unicef from "../assets/unicef.png";

export default function Charity() {
  const currentDonation = 0;
  const totalGoal = 1000;

  return (
    <div className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative z-10 mt-16">
      <div className="bg-gray-800 p-1 md:p-6 rounded-xl shadow-md">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-green-400 to-blue-500">
              Fundraiser
            </h1>

            <img
              src={unicef}
              alt="Unicef"
              className=" bg-white mx-auto my-16 p-2 w-96"
            />
          </div>
          <hr className="border-t border-gray-700 my-4" />
          <h3 className="text-center">
            About{" "}
            <strong>
              <a
                href="https://www.unicef.org/what-we-do"
                target="_blank"
                className="underline text-xl hover:text-yellow-400"
              >
                Unicef
              </a>
            </strong>
          </h3>
          <p className="text-center text-md">
            <br />
            <strong>What we do:</strong> UNICEF works in over 190 countries and
            territories to protect the rights of every child.
            <br />
            <br />
            <strong>How we do it:</strong> With decades of field-tested
            expertise, a passion for innovation, and a network that spans the
            globe, UNICEF turns commitment into action. See why we're the
            leading child rights organization on the planet.
            <br />
          </p>
          <div className="mt-12">
            {/* Donation Button */}
            <div className="text-center">
              <Button
                variant="outline-solid"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-3"
                onClick={() =>
                  window.open(
                    "https://fundraise.unicef.ca/unicef-canada-en/ieee-battle-royale-xvii-unicef-fundraiser",
                    "_blank",
                  )
                }
              >
                Donate Now!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
