import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Code,
  Database,
  Server,
  Sparkles,
  Terminal,
} from "lucide-react";

const Hero = () => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [languageFade, setLanguageFade] = useState(true);
  const [specialtyFade, setSpecialtyFade] = useState(true);

  const languageSets = [
    ["TypeScript", "Node.js", "Golang"],
    ["PostgreSQL", "MongoDB", "Redis"],
    ["Docker", "Kubernetes", "AWS"],
    ["gRPC", "GraphQL", "REST"],
  ];

  const specialties = [
    "secure backend platforms",
    "distributed service architectures",
    "business workflow systems",
    "scalable data models",
    "production-ready APIs",
  ];

  useEffect(() => {
    const langTimer = setInterval(() => {
      setLanguageFade(false);
      setTimeout(() => {
        setLanguageIndex((i) => (i + 1) % languageSets.length);
        setLanguageFade(true);
      }, 300);
    }, 3000);

    const specTimer = setInterval(() => {
      setSpecialtyFade(false);
      setTimeout(() => {
        setSpecialtyIndex((i) => (i + 1) % specialties.length);
        setSpecialtyFade(true);
      }, 300);
    }, 4000);

    return () => {
      clearInterval(langTimer);
      clearInterval(specTimer);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 md:px-6">
      <div className="absolute left-[8%] top-28 h-32 w-32 rounded-full bg-slate-300/10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[12%] h-40 w-40 rounded-full bg-[#c4a76d]/10 blur-3xl animate-float" />

      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-200 shadow-lg shadow-black/10 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-[#c4a76d]" /> Backend Engineer •
              API & Systems Development
            </div>

            <p className="mb-5 font-mono text-[#d7c49e]">
              <span className="inline-flex items-center gap-2">
                <Terminal className="h-5 w-5" /> Hello, I'm
              </span>
            </p>

            <h1 className="max-w-4xl text-5xl font-black tracking-tight text-white md:text-7xl lg:text-8xl">
              Moses Efa Eteng
            </h1>

            <div className="mt-5 min-h-20 text-3xl font-bold leading-tight text-slate-300 md:text-5xl">
              <span
                className={cn(
                  "block transition-all duration-500",
                  specialtyFade
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0",
                )}
              >
                Engineering{" "}
                <span className="text-gradient">
                  {specialties[specialtyIndex]}
                </span>
              </span>
            </div>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Backend-focused software developer specializing in reliable APIs,
              service-oriented architecture, secure access control, and
              data-driven application design for practical business use cases.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-[#d7c49e] px-6 font-semibold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#eadfc8]"
              >
                <a href="#contact">
                  Get in Touch <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-12 rounded-full border-white/15 bg-white/8 px-6 text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/12"
              >
                <a href="#projects">View My Work</a>
              </Button>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "4", label: "Project Domains" },
                { value: "API", label: "Driven Design" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-r from-slate-300/10 via-blue-900/10 to-[#c4a76d]/10 blur-3xl" />
            <div
              className={cn(
                "glass-panel relative overflow-hidden rounded-[2rem] p-5 font-mono transition-all duration-300 md:p-7",
                languageFade
                  ? "scale-100 opacity-100"
                  : "scale-[0.98] opacity-90",
              )}
            >
              <div className="mb-5 flex items-center gap-2 text-sm">
                <div className="h-3 w-3 rounded-full bg-red-400/80" />
                <div className="h-3 w-3 rounded-full bg-[#d7c49e]" />
                <div className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <div className="ml-3 text-slate-400">
                  engineering-profile.ts
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 text-sm leading-7 text-slate-200">
                <span className="text-emerald-300">const</span>{" "}
                <span className="text-[#9fb8c8]">focus</span> = {"{"}
                <br />
                &nbsp;&nbsp;
                <span className="text-[#d7c49e]">specialization:</span> "
                <span className="text-slate-100">
                  {specialties[specialtyIndex]}
                </span>
                ",
                <br />
                &nbsp;&nbsp;<span className="text-[#d7c49e]">stack:</span> [
                {languageSets[languageIndex].map((lang, index) => (
                  <span key={lang}>
                    <span className="text-slate-100">"{lang}"</span>
                    {index < languageSets[languageIndex].length - 1 && ", "}
                  </span>
                ))}
                ],
                <br />
                &nbsp;&nbsp;<span className="text-[#d7c49e]">
                  principles:
                </span>{" "}
                ["secure", "scalable", "maintainable"],
                <br />
                &nbsp;&nbsp;<span className="text-[#d7c49e]">location:</span> "
                <span className="text-slate-100">Lagos, Nigeria</span>",
                <br />
                &nbsp;&nbsp;<span className="text-[#d7c49e]">
                  available:
                </span>{" "}
                <span className="text-emerald-300">true</span>
                <br />
                {"};"}
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  { icon: Server, label: "Services" },
                  { icon: Database, label: "Data Models" },
                  { icon: Code, label: "API Design" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center text-slate-300"
                  >
                    <Icon className="mx-auto mb-2 h-5 w-5 text-[#d7c49e]" />
                    <span className="text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
