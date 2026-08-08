import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card flex flex-col items-center justify-between gap-6 rounded-[2rem] p-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-mono text-sm text-[#d7c49e]">dev.YareYare</p>
            <p className="mt-2 text-sm text-slate-400">
              Portfolio designed and developed by{" "}
              <span className="text-slate-100">Moses Efa Eteng</span>
            </p>
            <p className="mt-1 text-xs text-slate-500">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mosescode1"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/eteng-moses-001954176"
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:emosescode@gmail.com"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
