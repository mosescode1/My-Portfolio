interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="glass-card rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
    <h3 className="mb-4 text-lg font-semibold text-white">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-sm font-mono text-slate-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Runtimes",
      skills: ["Go", "JavaScript", "TypeScript", "SQL", "Node.js"],
    },
    {
      title: "Backend Frameworks & Tooling",
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
      title: "Data Management & Persistence",
      skills: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Elasticsearch",
        "Cassandra",
        "LocalStorage",
      ],
    },
    {
      title: "Infrastructure, Cloud & Messaging",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Azure",
        "Linode",
        "Terraform",
        "CI/CD",
        "RabbitMQ",
        "Kafka",
      ],
    },
    {
      title: "API Architecture & System Design",
      skills: [
        "REST APIs",
        "GraphQL",
        "gRPC",
        "WebSockets",
        "Microservices",
        "RBAC",
        "Audit Logging",
      ],
    },
  ];

  const strengths = [
    { name: "Backend Development", level: 95 },
    { name: "Database & Schema Design", level: 90 },
    { name: "API Architecture", level: 92 },
    { name: "Microservices & Messaging", level: 86 },
    { name: "DevOps & Deployment", level: 80 },
  ];

  return (
    <section id="skills" className="section-shell">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xl text-[#c4a76d]">02.</span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Technical Expertise
          </h2>
          <div className="section-heading-line hidden h-px flex-grow md:block" />
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>

        <div className="glass-panel mt-12 rounded-[2rem] p-6 md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                Backend capability
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Core engineering strengths
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-400">
              These capabilities reflect my work across API development, secure
              file platforms, invoice workflow systems, microservices, and
              database-centered product design.
            </p>
          </div>

          <div className="space-y-6">
            {strengths.map((skill) => (
              <div key={skill.name}>
                <div className="mb-2 flex justify-between">
                  <span className="text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                  <span className="font-mono text-sm text-[#d7c49e]">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/8">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#9fb8c8] to-[#d7c49e]"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
