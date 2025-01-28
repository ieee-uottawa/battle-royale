import Button from "./Button";

export default function Navbar() {
  return (
    <nav className=" backdrop-blur-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-neon-green">
          BR16
        </a>
        <div className="hidden md:flex">
          <ul className="space-x-6 flex">
            <li>
              <a href="#about" className="hover:text-neon-green transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#previous-submissions" className="hover:text-neon-green transition-colors">
                Previous Submissions
              </a>
            </li>
            <li>
              <a href="#prizes" className="hover:text-neon-green transition-colors">
                Prizes
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-neon-green transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <Button
          variant="outline"
          className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
          onClick={() => window.open("https://www.start.gg/tournament/battle-royale-16/details", "_blank")}
        >
          Register
        </Button>
      </div>
    </nav>
  );
}
