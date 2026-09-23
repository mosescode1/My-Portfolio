import { ArrowRight } from "lucide-react";

const focusAreas = [
  "Backend Engineering",
  "System Design & Architecture",
  "Distributed Systems",
  "Cloud & Infrastructure",
];

const Hero = () => {
  return (
    <section id="top" className="mx-auto max-w-[1440px]">
      <div className="grid gap-12 px-5 pb-12 pt-10 md:px-12 md:pt-16 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-20 lg:px-24 lg:pb-[88px] lg:pt-24">
        <div className="flex flex-col gap-6 lg:gap-9">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-rule bg-surface px-3 py-1.5 font-mono text-xs text-sub md:text-sm">
            <span className="h-2 w-2 rounded-full bg-ok" />
            Available for backend engineering roles
          </span>

          <div className="flex flex-col gap-5">
            <p className="kicker text-[13px] md:text-[15px]">Backend Software Developer</p>
            <h1 className="font-serif text-[64px] font-normal leading-[0.92] tracking-[-0.035em] sm:text-[96px] xl:text-[132px]">
              Moses
              <br />
              <span className="italic">Efa Eteng</span>
            </h1>
          </div>

          <p className="max-w-[640px] text-[17px] leading-relaxed text-body md:text-[21px]">
            I design and build backend systems for product teams that need
            reliable APIs, secure access control, scalable data models, and
            service architectures that can evolve with real business needs.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#work"
              className="inline-flex h-[52px] items-center justify-center gap-2.5 rounded-full bg-ink px-[26px] font-medium text-paper no-underline transition hover:bg-accent"
            >
              View selected work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-[52px] items-center justify-center rounded-full border border-ink px-[26px] font-medium no-underline transition hover:bg-ink hover:text-paper"
            >
              Contact me
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <figure className="m-0 flex flex-col gap-3">
            <img
              src="/image.jpeg"
              alt="Portrait of Moses Efa Eteng"
              className="aspect-square w-full rounded object-cover object-[50%_30%]"
            />
            <figcaption className="flex justify-between font-mono text-xs text-sub md:text-[13px]">
              <span>fig. 01 — Efa</span>
              <span>APIs · Databases · Microservices</span>
            </figcaption>
          </figure>

          <div
            className="rounded bg-night px-5 py-4 font-mono text-xs leading-[1.75] text-night-text md:text-[13px]"
            aria-label="Summary as an API response"
          >
            <div className="mb-2.5 flex justify-between border-b border-night-rule pb-2.5 text-night-sub">
              <span>
                <span className="text-accent-dark">GET</span> /v1/engineer/efa
              </span>
              <span>200 OK</span>
            </div>
            <div>{"{"}</div>
            <div className="pl-[18px]">
              "role": <span className="text-code">"backend"</span>,
            </div>
            <div className="pl-[18px]">
              "experience_years": <span className="text-accent-dark">5</span>,
            </div>
            <div className="pl-[18px]">
              "focus": [<span className="text-code">"apis"</span>,{" "}
              <span className="text-code">"distributed-systems"</span>],
            </div>
            <div className="pl-[18px]">
              "open_to_work": <span className="text-accent-dark">true</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>

      <div className="mx-5 grid grid-cols-2 border-y border-b-rule border-t-ink md:mx-12 lg:mx-24 lg:grid-cols-5">
        <div className="col-span-2 flex items-baseline gap-3.5 border-b border-rule py-5 lg:col-span-1 lg:flex-col lg:gap-1.5 lg:border-b-0 lg:py-6 lg:pr-6">
          <span className="font-serif text-5xl leading-none lg:text-[56px]">5+</span>
          <span className="text-sm text-sub">years of backend-focused development</span>
        </div>
        {focusAreas.map((area, i) => (
          <div
            key={area}
            className={`flex flex-col justify-between gap-2.5 py-4 lg:border-l lg:border-rule lg:p-6 ${
              i % 2 === 1 ? "border-l border-rule pl-3" : "pr-3"
            } ${i < 2 ? "border-b border-rule lg:border-b-0" : ""}`}
          >
            <span className="font-mono text-xs text-accent md:text-[13px]">0{i + 1}</span>
            <span className="text-[15px] font-medium lg:text-[17px]">{area}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
