import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import PreviousSubmissions from "./components/PreviousSubmissions";
import Patronage from "./components/Patronage";
import Prizes from "./components/Prizes";
import Contact from "./components/Contact";
import Charity from "./components/Charity";
import Background from "./components/Background";

function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="charity">
          <Charity />
        </div>
        <div id="prizes">
          <Prizes />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="previous-results">
          <PreviousSubmissions />
        </div>
        <div id="patronage">
          <Patronage />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </main>
  );
}

export default App;
