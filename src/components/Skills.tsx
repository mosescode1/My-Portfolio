const skillCategories = [
  { title: "Languages & runtimes", skills: ["Go", "TypeScript", "JavaScript", "SQL", "Node.js"] },
  {
    title: "Backend frameworks",
    skills: ["Express", "NestJS", "Fiber", "Echo", "Go Kit", "Hibernate", "JUnit"],
  },
  {
    title: "Databases & persistence",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"],
  },
  {
    title: "Infrastructure & messaging",
    skills: ["Docker", "Kubernetes", "AWS", "Azure", "Terraform", "RabbitMQ", "Kafka"],
  },
  {
    title: "API & system design",
    skills: ["REST", "GraphQL", "gRPC", "WebSockets", "Microservices", "RBAC", "Audit Logging"],
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
    <section
      id="stack"
      className="mx-auto grid max-w-[1440px] scroll-mt-24 gap-5 px-5 pt-20 md:px-12 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-20 lg:px-24 lg:pt-[140px]"
    >
      <div className="flex flex-col gap-4">
        <p className="kicker">§ 2 — Stack</p>
        <h2 className="section-title text-[44px] lg:text-[64px]">Backend toolkit</h2>
        <p className="m-0 text-base leading-relaxed text-sub lg:mt-3 lg:text-[17px]">
          A practical toolkit for building secure APIs, data-driven products,
          distributed services, and cloud-ready infrastructure.
        </p>

        <div className="order-last mt-7 hidden flex-col lg:flex">
          <CapabilityList />
        </div>
      </div>

      <div className="flex flex-col border-t border-ink">
        {skillCategories.map((category, i) => (
          <div
            key={category.title}
            className="grid gap-3 border-b border-rule py-5 md:grid-cols-[260px_minmax(0,1fr)] md:items-baseline md:gap-8 md:py-[26px]"
          >
            <div className="flex items-baseline gap-3.5">
              <span className="font-mono text-xs text-accent md:text-[13px]">0{i + 1}</span>
              <h3 className="m-0 text-[17px] font-semibold md:text-lg">{category.title}</h3>
            </div>
            <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0 md:gap-2">
              {category.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-chip bg-surface px-2.5 py-1 font-mono text-[13px] md:px-3 md:py-1.5 md:text-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-col lg:hidden">
        <CapabilityList />
      </div>
    </section>
  );
};

const CapabilityList = () => (
  <>
    <p className="mb-3.5 mt-0 font-mono text-xs text-sub md:text-[13px]">Capabilities</p>
    <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
      {capabilities.map((c, i) => (
        <li
          key={c}
          className={`text-[15px] md:text-base ${i < capabilities.length - 1 ? "border-b border-rule pb-2.5" : ""}`}
        >
          {c}
        </li>
      ))}
    </ul>
  </>
);

export default Skills;
