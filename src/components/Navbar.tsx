import { useState } from "react";
import { Menu, Terminal, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = ["about", "skills", "projects", "contact"];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-5">
      <div className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3">
        <a href="#" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ccf720] text-[#111111]">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-white">
            Efa.dev
          </span>
        </a>

        <button
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white md:hidden"
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
            "absolute left-4 right-4 top-20 rounded-3xl border border-white/10 bg-[#111111]/95 p-4 backdrop-blur-xl md:static md:block md:border-0 md:bg-transparent md:p-0",
            mobileMenuOpen ? "block" : "hidden",
          )}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="magnetic-link block rounded-full px-4 py-2 text-center text-sm font-medium capitalize text-gray-200 transition hover:bg-white/10 hover:text-[#ccf720]"
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="md:ml-2">
              <a
                href="https://drive.google.com/file/d/13YJdyKivXTL8nTIS9HVX1_x6bvemdYZm/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-full bg-[#ccf720] px-5 py-2 text-center text-sm font-bold text-[#111111] shadow-lg shadow-[#ccf720]/15 transition hover:-translate-y-0.5 hover:scale-105 hover:bg-white"
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
