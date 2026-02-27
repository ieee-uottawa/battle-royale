import React, { useState, useEffect } from "react";
import Button from "./Button";
import unicef from "../assets/unicef.png";
import {
  fetchDonationData,
  formatCurrency,
  DonationData,
} from "../services/donationService";

export default function Charity() {
  const [donationData, setDonationData] = useState<DonationData>({
    current: 0,
    goal: 1000,
    currency: "CAD",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  useEffect(() => {
    const loadDonationData = async () => {
      try {
        const data = await fetchDonationData();
        setDonationData(data);
        setLastUpdated(new Date());
      } catch (error) {
        console.error("Failed to fetch donation data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Load immediately
    loadDonationData();

    // Refresh every 30 seconds
    const interval = setInterval(loadDonationData, 30000);

    return () => clearInterval(interval);
  }, []);

  const progressPercentage = Math.min(
    (donationData.current / donationData.goal) * 100,
    100,
  );

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

          {/* Donation Progress Bar */}
          <div className="mt-12 mb-8">
            <div className="max-w-2xl mx-auto">
              {isLoading ? (
                <div className="text-center py-4">
                  <div className="animate-pulse text-gray-400">
                    Loading donation data...
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-300">
                      Raised:{" "}
                      {formatCurrency(
                        donationData.current,
                        donationData.currency,
                      )}
                    </span>
                    <span className="text-sm font-semibold text-gray-300">
                      Goal:{" "}
                      {formatCurrency(donationData.goal, donationData.currency)}
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-8 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500 ease-out flex items-center justify-center"
                      style={{ width: `${progressPercentage}%` }}
                    >
                      {progressPercentage > 10 && (
                        <span className="text-white font-bold text-sm px-2">
                          {progressPercentage.toFixed(1)}%
                        </span>
                      )}
                    </div>
                  </div>
                  {progressPercentage <= 10 && (
                    <div className="text-center mt-1">
                      <span className="text-xs text-gray-400">
                        {progressPercentage.toFixed(1)}%
                      </span>
                    </div>
                  )}
                  <div className="text-center mt-4 text-sm text-yellow-400">
                    <a
                      href="https://www.twitch.tv/ieeebattleroyale"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-300 underline"
                    >
                      Watch Live on Twitch 🎮
                    </a>
                  </div>
                  {lastUpdated && (
                    <div className="text-center mt-2 text-xs text-gray-500">
                      Last updated: {lastUpdated.toLocaleTimeString()}
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

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
