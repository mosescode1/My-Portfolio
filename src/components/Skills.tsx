const skillCategories = [
  {
    title: "Languages & runtimes",
    skills: ["Go", "TypeScript", "JavaScript", "SQL", "Node.js"],
  },
  {
    title: "Backend frameworks",
    skills: [
      "Express",
      "NestJS",
      "Fiber",
      "Echo",
      "Go Kit",
      "Hibernate",
      "JUnit",
    ],
  },
  {
    title: "Databases & persistence",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Cassandra",
    ],
  },
  {
    title: "Infrastructure & messaging",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "Terraform",
      "RabbitMQ",
      "Kafka",
    ],
  },
  {
    title: "API & system design",
    skills: [
      "REST",
      "GraphQL",
      "gRPC",
      "WebSockets",
      "Microservices",
      "RBAC",
      "Audit Logging",
    ],
  },
];

const capabilities = [
  "API architecture",
  "Database schema design",
  "Access control systems",
  "Event-driven services",
  "Containerized deployment",
  "Backend performance planning",
];

const Skills = () => {
  return (
    <section id="skills" className="section-shell">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Technical Expertise</p>
            <h2 className="mt-3 text-5xl font-black uppercase tracking-tighter md:text-7xl">
              Backend stack
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-gray-300">
            A practical backend toolkit for building secure APIs, data-driven
            products, distributed services, and cloud-ready infrastructure.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="minimal-card shine-surface rounded-[2rem] p-6">
            <p className="section-kicker">Capabilities</p>
            <div className="mt-6 grid gap-3">
              {capabilities.map((capability) => (
                <div
                  key={capability}
                  className="glass-pill group flex items-center justify-between rounded-2xl px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#ccf720]/35 hover:bg-white/[0.08]"
                >
                  <span className="font-medium text-white">{capability}</span>
                  <span className="h-2 w-2 rounded-full bg-[#ccf720] transition group-hover:scale-[1.8]" />
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {skillCategories.map((category) => (
              <article
                key={category.title}
                className="minimal-card-soft group rounded-[2rem] p-5 transition duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-white transition group-hover:text-[#ccf720]">
                  {category.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-wide text-gray-300 transition hover:border-[#ccf720]/35 hover:text-[#ccf720]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
