import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Background from "./components/Background";

function App() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div id="about">
          <About />
        </div>
      </div>
    </main>
  );
}

export default App;
