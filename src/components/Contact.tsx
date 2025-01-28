import React from "react";
import Button from "./Button";
import { Mail, Phone, MapPin, Twitter, DiscIcon as Discord } from "lucide-react";
import { FaDiscord, FaInstagram } from "react-icons/fa";

const ContactSection: React.FC = () => {
  return (
    <div id="previous-submissions" className="bg-gray-900 text-gray-300 p-4 md:p-8 rounded-lg shadow-lg max-w-4xl mx-auto relative my-16">
      <div className="bg-gray-800 p-1 md:p-6 rounded-xl shadow-md py-16">
        <div className="container mx-auto px-4">
          <div className="text-center my-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Contact Us</h1>
            <p className="text-2xl md:text-4xl font-bold text-green-400">o_O</p>
          </div>
          <hr className="border-t border-gray-700 my-4" />
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-full space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-neon-blue">Co-leads</h3>
            <div className="flex flex-col gap-6">
              <a href="mailto:jad@battleroyale.ca" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-green/80">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <p className="text-white">jad@battleroyale.ca</p>
                </div>
              </a>
              <a href="mailto:adam@battleroyale.ca" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-green/80">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <p className="text-white">adam@battleroyale.ca</p>
                </div>
              </a>
            </div>
            <hr />
            <h3 className="text-2xl font-semibold mb-4 text-neon-blue">IEEE uOttawa</h3>
            <div className="flex items-center">
              <a href="mailto:exec@ieeeuottawa.ca" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-green/80">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <p className="text-white">exec@ieeeuottawa.ca</p>
                </div>
              </a>
            </div>
            <div className="flex items-center">
              <a href="https://www.instagram.com/ieeeuottawa/" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-green/80">
                <div className="flex items-center">
                  <FaInstagram className="w-6 h-6 mr-4" />
                  <p className="text-white">ieeeuottawa</p>
                </div>
              </a>
            </div>

            <div className="flex items-center">
              <a href="https://discord.gg/cTtZ4TDgpp" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-green/80">
                <div className="flex items-center">
                  <FaDiscord className="w-6 h-6 mr-4" />
                  <p className="text-white">IEEE uOttawa Community</p>
                </div>
              </a>
            </div>
            <hr />
            <h3 className="text-2xl font-semibold mb-4 text-neon-blue">IEEE Carleton</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <a href="mailto:chair@ieeecarleton.ca" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-green/80">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 mr-4" />
                    <p className="text-white">chair@ieeecarleton.ca</p>
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <a href="https://www.instagram.com/ieeecarleton/" target="_blank" rel="noopener noreferrer" className="text-neon-green hover:text-neon-green/80">
                  <div className="flex items-center">
                    <FaInstagram className="w-6 h-6 mr-4" />
                    <p className="text-white">ieeecarleton</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
