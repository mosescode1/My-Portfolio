import { BriefcaseBusiness, Database, FileLock2, Network } from "lucide-react";

const currentFocus = [
  {
    icon: FileLock2,
    title: "Secure file management systems",
    description:
      "Designing file upload, access control, sharing, audit logging, and structured storage workflows for web-based platforms.",
  },
  {
    icon: Network,
    title: "Distributed microservices",
    description:
      "Developing service-oriented systems with gRPC, Kafka-based event processing, containerization, and Kubernetes-ready deployment patterns.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Business workflow applications",
    description:
      "Building invoice and business management workflows with scoped data ownership, status tracking, and reliable client-side persistence.",
  },
  {
    icon: Database,
    title: "Relational database design",
    description:
      "Modeling normalized schemas and relationships for marketplace-style products, booking flows, user data, reviews, and transactions.",
  },
];

const About = () => {
  return (
    <section id="about" className="section-shell">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xl text-[#c4a76d]">01.</span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            About Me
          </h2>
          <div className="section-heading-line hidden h-px flex-grow md:block" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="glass-panel rounded-[2rem] p-6 md:p-8">
            <p className="text-xl leading-9 text-slate-300">
              I’m Efa, a backend-focused software developer specializing in
              dependable API design, scalable service architecture, and
              well-structured data systems. I build backend solutions that are
              secure, maintainable, and aligned with real product requirements.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              I bring a product-minded engineering approach to backend
              development, with the ability to translate business requirements
              into secure, scalable, and maintainable technical solutions. I add
              value by improving system reliability, designing clear data flows,
              strengthening API architecture, and collaborating effectively
              across product and engineering teams.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Core technologies
              </p>
              <ul className="grid gap-3 text-sm font-mono text-slate-300 sm:grid-cols-2">
                {[
                  "Go",
                  "Node.js / TypeScript",
                  "PostgreSQL / MySQL",
                  "Redis / MongoDB",
                  "gRPC / GraphQL / REST",
                  "Docker / Kubernetes",
                  "RabbitMQ / Kafka",
                  "AWS / Azure",
                ].map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span className="mr-3 text-[#c4a76d]">▹</span> {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-slate-300/10 to-[#c4a76d]/10 blur-2xl" />
              <div className="glass-card relative overflow-hidden rounded-[2rem] p-3">
                <img
                  src="/image.jpeg"
                  alt="Moses Efa Eteng"
                  className="h-full w-full rounded-[1.5rem] object-cover grayscale-[15%] transition duration-500 hover:scale-[1.03] hover:grayscale-0"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {currentFocus.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="glass-card rounded-3xl p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#c4a76d]/20 bg-[#c4a76d]/10 text-[#d7c49e]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-semibold text-white">{title}</h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
