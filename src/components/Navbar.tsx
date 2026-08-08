import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, Terminal, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 transition-all duration-300">
      <div
        className={cn(
          "container mx-auto flex h-16 items-center justify-between rounded-full border px-4 md:px-6 transition-all duration-300",
          scrolled
            ? "glass-panel border-white/15 bg-slate-950/60 shadow-2xl shadow-black/20"
            : "border-white/10 bg-white/[0.035] backdrop-blur-md",
        )}
      >
        <a href="#" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-slate-300/20 bg-white/5 text-slate-200 shadow-lg shadow-black/10 transition group-hover:scale-105">
            <Terminal className="h-5 w-5" />
          </span>
          <span className="font-mono text-lg font-bold tracking-tight text-white">
            dev.<span className="text-gradient">YareYare</span>
          </span>
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>

        <nav
          className={cn(
            "absolute left-4 right-4 top-24 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0",
            mobileMenuOpen ? "block" : "hidden",
          )}
        >
          <ul className="flex flex-col items-center gap-2 md:flex-row">
            {["about", "skills", "projects", "contact"].map((item, idx) => (
              <li key={item} className="w-full md:w-auto">
                <a
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group block rounded-full px-4 py-3 text-center text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white md:py-2"
                >
                  <span className="mr-1 font-mono text-[#c4a76d]">
                    {`${idx + 1}`.padStart(2, "0")}.
                  </span>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li className="w-full md:w-auto">
              <a
                href="https://drive.google.com/file/d/13YJdyKivXTL8nTIS9HVX1_x6bvemdYZm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full border border-[#c4a76d]/35 bg-[#c4a76d]/10 px-5 py-3 text-center text-sm font-semibold text-[#eadfc8] transition hover:-translate-y-0.5 hover:bg-[#c4a76d]/15 md:py-2"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
