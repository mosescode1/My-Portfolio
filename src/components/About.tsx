const valueAreas = [
  {
    title: "Security-first backend design",
    description:
      "I design APIs and workflows with authentication, authorization, ownership boundaries, and auditability in mind from the start.",
  },
  {
    title: "Scalable service architecture",
    description:
      "I structure services, messaging, and integrations so systems remain understandable as products and teams grow.",
  },
  {
    title: "Product-aware execution",
    description:
      "I translate business requirements into practical engineering decisions that support usability, maintainability, and delivery speed.",
  },
  {
    title: "Reliable data modeling",
    description:
      "I build clear relational models and data flows that reduce ambiguity and support consistent product behavior.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-[1440px] scroll-mt-24 gap-5 px-5 pt-20 md:px-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20 lg:px-24 lg:pt-[140px]"
    >
      <div className="flex flex-col gap-4">
        <p className="kicker">§ 1 — About</p>
        <h2 className="section-title text-[44px] lg:text-[64px]">How I work</h2>
      </div>

      <div className="flex flex-col gap-10 lg:gap-14">
        <p className="font-serif text-[23px] leading-[1.4] lg:text-[32px]">
          I’m Efa, a backend-focused software developer specializing in API
          design, service architecture, and data systems. I build backend
          solutions that are secure, maintainable, and aligned with real
          product requirements.
        </p>

        <div className="grid gap-7 md:grid-cols-2 md:gap-x-14 md:gap-y-11">
          {valueAreas.map(({ title, description }, i) => (
            <article key={title} className="flex flex-col gap-2 border-t border-rule pt-4 lg:gap-3 lg:pt-5">
              <span className="font-mono text-xs text-sub md:text-[13px]">0{i + 1}</span>
              <h3 className="m-0 text-[19px] font-semibold lg:text-[21px]">{title}</h3>
              <p className="m-0 text-[15px] leading-[1.65] text-sub lg:text-base">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
