import Button from "./Button";

export default function Navbar() {
  return (
    <nav className=" backdrop-blur-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-br-teal">
          <img
            src="/br17_logo.png"
            alt="Battle Royale Logo"
            className="size-10"
          />
        </a>
        <div className="hidden lg:flex">
          <ul className="space-x-6 flex">
            <li>
              <a
                href="#fundraiser"
                className="hover:text-br-teal transition-colors"
              >
                Fundraiser
              </a>
            </li>
            <li className="text-white">•</li>
            <li>
              <a
                href="#prizes"
                className="hover:text-br-teal transition-colors"
              >
                Prizes
              </a>
            </li>
            <li className="text-white">•</li>
            <li>
              <a href="#about" className="hover:text-br-teal transition-colors">
                About
              </a>
            </li>
            <li className="text-white">•</li>
            <li>
              <a
                href="#patronage"
                className="hover:text-br-teal transition-colors"
              >
                Patronage
              </a>
            </li>
            <li className="text-white">•</li>
            <li>
              <a
                href="#contact"
                className="hover:text-br-teal transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Button
          variant="outline-solid"
          className="border-br-teal text-br-teal hover:bg-br-teal hover:text-black"
          onClick={() =>
            window.open(
              "https://www.start.gg/tournament/battle-royale-16/details",
              "_blank",
            )
          }
        >
          Register
        </Button>
      </div>
    </nav>
  );
}
