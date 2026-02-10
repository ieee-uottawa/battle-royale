import React, { useState } from "react";
import Button from "./Button";
import unicef from "../assets/unicef.png";

export default function Charity() {

  const currentDonation = 0
  const totalGoal = 1000;

  const milestones = [
    { amount: 5, activity: "Pushup", type: "recurring", icon: "💪" },
    { amount: 10, activity: "Pie", type: "recurring", icon: "🥧" },
    { amount: 50, activity: "30-sec Karaoke of Requested Song", type: "recurring", icon: "🎤" },
    { amount: 100, activity: "One Step of Makeup Routine", type: "recurring", icon: "💄" },
    { amount: 500, activity: "Cold Water Pour During Closing Ceremonies Outside", type: "milestone", icon: "🧊" },
    { amount: 750, activity: "Aparna Dyes Her Hair Blue", type: "milestone", icon: "💙" },
    { amount: 1000, activity: "Jorja and Sam Dye Their Hair Blue", type: "milestone", icon: "🔵" }
  ];

  const progressPercentage = Math.min((currentDonation / totalGoal) * 100, 100);

  const getCompletedCount = (milestoneAmount: number, type: string) => {
    if (type === "recurring") {
      return Math.floor(currentDonation / milestoneAmount);
    } else {
      return currentDonation >= milestoneAmount ? 1 : 0;
    }
  };

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
            About {" "}
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
            <strong>What we do:</strong> UNICEF works in over 190 countries and territories to protect the rights of every child.
            <br />
            <br />
            <strong>How we do it:</strong> With decades of field-tested expertise, a passion for innovation, and a network that spans the globe, UNICEF turns commitment into action. See why we're the leading child rights organization on the planet.
            <br />
          </p>
          <div className="mt-12">
            {/* Progress Bar Section */}
            <div className="bg-gray-700 p-6 rounded-lg mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Donation Progress</h3>
                <p className="text-lg">
                  <span className="text-green-400 font-bold">${currentDonation}</span> raised of{" "}
                  <span className="text-blue-400 font-bold">${totalGoal}</span> goal
                </p>
              </div>

              {/* Progress Bar */}
              <div className="relative bg-gray-600 rounded-full h-6 mb-6 overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
                  {progressPercentage.toFixed(1)}%
                </div>
              </div>

              {/* Milestone Markers on Progress Bar */}
              <div className="relative mb-8">
                {milestones.slice(4).map((milestone) => {
                  const position = (milestone.amount / totalGoal) * 100;
                  const isReached = currentDonation >= milestone.amount;
                  return (
                    <div
                      key={milestone.amount}
                      className="absolute transform -translate-x-1/2 -translate-y-2"
                      style={{ left: `${position}%`, top: '-8px' }}
                    >
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          isReached
                            ? 'bg-green-400 border-green-400'
                            : 'bg-gray-600 border-gray-400'
                        }`}
                      ></div>
                      <div className="text-xs mt-1 whitespace-nowrap text-center">
                        ${milestone.amount}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Milestones Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {milestones.map((milestone, index) => {
                const completedCount = getCompletedCount(milestone.amount, milestone.type);
                const isUnlocked = milestone.type === "recurring" 
                  ? currentDonation >= milestone.amount
                  : currentDonation >= milestone.amount;

                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                      isUnlocked
                        ? 'border-green-400 bg-green-900/30'
                        : 'border-gray-600 bg-gray-800/50'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{milestone.icon}</span>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-yellow-400">
                              {milestone.type === "recurring" ? `Every $${milestone.amount}` : `At $${milestone.amount}`}
                            </span>
                            {isUnlocked && (
                              <span className="text-xs bg-green-600 px-2 py-1 rounded-full">
                                UNLOCKED
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-300">{milestone.activity}</p>
                          {milestone.type === "recurring" && completedCount > 0 && (
                            <p className="text-xs text-green-400 mt-1">
                              Completed: {completedCount} time{completedCount !== 1 ? 's' : ''}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Donation Button */}
            <div className="text-center">
              <Button
                variant="outline-solid"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black text-lg px-8 py-3"
                onClick={() => 
                  window.open(
                    "https://www.twitch.tv/ieeebattleroyale",
                    "_blank",
                  )
                }
              >
                🎯 Donate Now & Unlock Activities! 🎯
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
