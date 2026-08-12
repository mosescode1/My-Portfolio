import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const technologies = [
  "Go",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "gRPC",
  "Kafka",
  "Redis",
  "AWS",
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-4 pb-10 pt-28 md:px-6">
      <div className="pointer-events-none absolute right-[8%] top-28 h-44 w-44 rounded-full border border-[#ccf720]/20 orbit-ring" />
      <div className="pointer-events-none absolute right-[12%] top-36 h-20 w-20 rounded-full bg-[#ccf720]/10 blur-2xl" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-12 lg:grid-cols-[1fr_380px]">
          <div className="animate-fade-in">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="glass-pill inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-gray-200">
                <span className="h-2 w-2 rounded-full bg-[#ccf720] animate-pulse-dot" />
                Available for backend engineering roles
              </span>
              <a
                href="#projects"
                className="glass-pill magnetic-link rounded-full px-4 py-2 text-sm text-gray-300 transition hover:border-[#ccf720]/40 hover:text-white"
              >
                Explore selected work
              </a>
            </div>

            <p className="section-kicker mb-5">Backend Software Developer</p>

            <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.88] tracking-tighter text-white transition duration-500 hover:tracking-[-0.08em] md:text-8xl lg:text-9xl">
              Moses
              <span className="block outline-text">Efa Eteng</span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
              I design and build backend systems for product teams that need
              reliable APIs, secure access control, scalable data models, and
              service architectures that can evolve with real business needs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                asChild
                className="h-12 rounded-full bg-[#ccf720] px-6 font-bold text-[#111111] shadow-none transition hover:-translate-y-1 hover:scale-105 hover:bg-white"
              >
                <a href="#projects">
                  View Selected Work <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-12 rounded-full border-white/15 bg-transparent px-6 text-white transition hover:-translate-y-1 hover:scale-105 hover:border-[#ccf720]/45 hover:bg-white/8"
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/10 py-6">
              {[
                { value: "3+", label: "Years Experience" },
                { value: "API", label: "Backend Focus" },
                { value: "Cloud", label: "Ready Systems" },
              ].map((stat) => (
                <div key={stat.label} className="pr-5">
                  <div className="text-3xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-gray-500">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="minimal-card shine-surface group rounded-[2rem] p-5 transition duration-500 hover:-translate-y-2 hover:rotate-1 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5">
              <img
                src="/image.jpeg"
                alt="Moses Efa Eteng"
                className="h-[420px] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-5">
                <p className="text-sm font-semibold text-[#ccf720]">
                  Backend Engineering
                </p>
                <p className="mt-1 text-sm text-gray-300">
                  APIs • Databases • Microservices
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
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
                {
                  href: "mailto:emosescode@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="glass-pill flex flex-col items-center justify-center rounded-2xl py-4 text-xs text-gray-300 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#ccf720]/40 hover:bg-[#ccf720]/10 hover:text-[#ccf720]"
                >
                  <Icon className="mb-2 h-5 w-5" />
                  {label}
                </a>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-8 overflow-hidden border-y border-white/10 py-5 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max gap-8 animate-slide-track">
            {[...technologies, ...technologies].map((tech, index) => (
              <span
                key={`${tech}-${index}`}
                className="text-sm font-bold uppercase tracking-[0.25em] text-gray-500"
              >
                {tech} <span className="ml-8 text-[#ccf720]">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
