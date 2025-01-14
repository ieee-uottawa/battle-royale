import Button from "./Button";

export default function Navbar() {
  return (
    <nav className=" backdrop-blur-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-neon-green">
          BR16
        </a>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#about"
              className="hover:text-neon-green transition-colors"
            >
              Submissions
            </a>
          </li>
          <li>
            <a
              href="#schedule"
              className="hover:text-neon-green transition-colors"
            >
              Results
            </a>
          </li>
          <li>
            <a
              href="#prizes"
              className="hover:text-neon-green transition-colors"
            >
              Prizes
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-neon-green transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
        <Button
          variant="outline"
          className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black"
        >
          Register Now
        </Button>
      </div>
    </nav>
  );
}
