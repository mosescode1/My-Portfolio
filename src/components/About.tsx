import { BriefcaseBusiness, Database, FileLock2, Network } from "lucide-react";

const valueAreas = [
  {
    icon: FileLock2,
    title: "Security-first backend design",
    description:
      "I design APIs and workflows with authentication, authorization, ownership boundaries, and auditability in mind from the start.",
  },
  {
    icon: Network,
    title: "Scalable service architecture",
    description:
      "I structure services, messaging, and integrations so systems remain understandable as products and teams grow.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Product-aware execution",
    description:
      "I translate business requirements into practical engineering decisions that support usability, maintainability, and delivery speed.",
  },
  {
    icon: Database,
    title: "Reliable data modeling",
    description:
      "I build clear relational models and data flows that reduce ambiguity and support consistent product behavior.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.45fr_1fr] md:items-end">
          <div>
            <p className="section-kicker">About</p>
            <h2 className="mt-3 text-5xl font-black uppercase tracking-tighter md:text-7xl">
              How I work
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-gray-300">
            I’m Efa, a backend-focused software developer specializing in API
            design, service architecture, and data systems. I build backend
            solutions that are secure, maintainable, and aligned with real
            product requirements.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {valueAreas.map(({ icon: Icon, title, description }, index) => (
            <article
              key={title}
              className="minimal-card shine-surface group rounded-[2rem] p-6 transition duration-500 hover:-translate-y-2 hover:rotate-[0.5deg] hover:border-[#ccf720]/45"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#ccf720] text-[#111111] transition duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-sm text-gray-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white transition group-hover:text-[#ccf720]">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-gray-400">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
