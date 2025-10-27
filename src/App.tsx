import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Contact } from "./components/Contact";
import { ThemeProvider } from "./components/ThemeProvider";
import { NeuralNetworkBackground } from "./components/NeuralNetworkBackground";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <NeuralNetworkBackground className="absolute inset-0 -z-10" />
        <div className="relative z-10 bg-black/0"> {/* bg-black/0 ensures transparency */}
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4 text-center">
              <p>&copy; 2025 Yashanjali Chavan. All rights reserved.</p>
              <p className="text-sm text-white/80 mt-2"></p>
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  );
}