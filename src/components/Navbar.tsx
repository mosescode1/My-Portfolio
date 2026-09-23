import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

const RESUME_URL =
  "https://docs.google.com/document/d/10kGHa8ZWaRtJNoCi7mOWmq7-zwnFaGbrzjCoKpjYqHw/edit?usp=sharing";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-3 md:px-12 md:py-5 lg:px-24">
        <a href="#top" className="flex min-h-11 items-center gap-3 no-underline">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="font-mono text-[15px] font-medium tracking-wide">efa.dev</span>
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-chip md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>

        <nav
          aria-label="Primary"
          className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full flex-col gap-1 border-b border-rule bg-paper px-5 pb-5 md:static md:flex md:flex-row md:items-center md:gap-9 md:border-0 md:bg-transparent md:p-0`}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center text-[15px] no-underline hover:text-accent-hover"
            >
              {item.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full border border-ink px-5 text-[15px] font-medium no-underline transition hover:bg-ink hover:text-paper md:mt-0"
          >
            Résumé <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
