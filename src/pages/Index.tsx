import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="portfolio-shell relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 subtle-grid opacity-45" />
      <div className="pointer-events-none fixed left-[-10rem] top-20 -z-10 h-80 w-80 rounded-full bg-[#ccf720]/10 aurora-orb" />
      <div className="pointer-events-none fixed bottom-20 right-[-8rem] -z-10 h-96 w-96 rounded-full bg-white/6 aurora-orb" />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
