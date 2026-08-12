import { ArrowRight, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  image: string;
  status: string;
}

const projects: Project[] = [
  {
    title: "Business Invoice Management Platform",
    description:
      "Business operations application for organization-level account management, invoice creation, status tracking, scoped data ownership, local persistence, and authenticated access flows.",
    technologies: ["React", "TypeScript", "Context API", "Auth Flow"],
    image: "/image1.jpeg",
    status: "In development",
  },
  {
    title: "Secure File Management API",
    description:
      "Backend API for digital file management with uploads, downloads, previews, sharing, role-based permissions, audit logs, and cloud-ready organization workflows.",
    technologies: ["Node.js", "Docker", "RabbitMQ", "PostgreSQL", "RBAC"],
    demoUrl: "https://documenter.getpostman.com/view/36203711/2sB2qZDh35",
    image: "/api.png",
    status: "API reference",
  },
  {
    title: "Go Microservices Architecture",
    description:
      "Distributed backend architecture built with Go, gRPC inter-service communication, Kafka event streaming, containerized services, and Kubernetes deployment readiness.",
    technologies: ["Go", "Kubernetes", "gRPC", "Kafka", "AWS"],
    image: "/project.png",
    status: "System architecture",
  },
  {
    title: "Marketplace Database Schema Design",
    description:
      "Normalized relational database model for an Airbnb-style marketplace covering users, listings, bookings, reviews, and transactional product relationships.",
    technologies: ["DrawSQL", "PostgreSQL", "RDBMS"],
    demoUrl: "https://drawsql.app/teams/alx-connect/diagrams/airbnb",
    image: "/database.png",
    status: "Database design",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker">Selected Projects</p>
            <h2 className="mt-3 text-5xl font-black uppercase tracking-tighter md:text-7xl">
              Built work
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-gray-300">
            Practical backend and data-focused projects that reflect my current
            engineering direction: secure systems, workflow products,
            distributed services, and database design.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="minimal-card shine-surface group overflow-hidden rounded-[2rem] transition duration-500 hover:-translate-y-3 hover:rotate-[0.35deg] hover:border-[#ccf720]/45"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-95 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent" />
                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="rounded-full bg-[#ccf720] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#111111]">
                    {project.status}
                  </span>
                  <span className="font-mono text-xs text-gray-300">
                    0{index + 1}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black uppercase tracking-tight text-white transition group-hover:text-[#ccf720]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-mono uppercase tracking-wide text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-bold text-[#ccf720] transition hover:gap-3"
                  >
                    View reference <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 border-y border-white/10 py-8 md:flex-row md:items-center">
          <p className="max-w-2xl text-gray-300">
            More repositories include API experiments, backend services, and
            implementation-focused learning projects.
          </p>
          <a
            href="https://github.com/mosescode1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#ccf720] px-5 py-3 font-bold text-[#111111] shadow-lg shadow-[#ccf720]/15 transition hover:-translate-y-1 hover:scale-105 hover:bg-white"
          >
            GitHub Profile <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
