import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="glass-nav container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-[2rem] px-6 py-6 text-center md:flex-row md:text-left">
        <div>
          <p className="font-mono text-sm font-bold uppercase tracking-[0.22em] text-[#ccf720]">
            Efa.dev
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Portfolio designed and developed by{" "}
            <span className="text-white">Moses Efa Eteng</span>
          </p>
          <p className="mt-1 text-xs text-gray-600">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="flex items-center gap-3">
          {[
            {
              href: "https://github.com/mosescode1",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/eteng-moses-001954176",
              icon: Linkedin,
              label: "LinkedIn",
            },
            { href: "mailto:emosescode@gmail.com", icon: Mail, label: "Email" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-gray-300 transition hover:-translate-y-1 hover:scale-110 hover:border-[#ccf720]/50 hover:text-[#ccf720]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
