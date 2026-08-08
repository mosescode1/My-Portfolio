import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  image: string;
  status?: string;
}

const projects: Project[] = [
  {
    title: "Business Invoice Management Platform",
    description:
      "A business operations application that supports organization-level account management, invoice creation, status tracking, scoped data ownership, local persistence, and authenticated business access flows.",
    technologies: [
      "React",
      "TypeScript",
      "Context API",
      "LocalStorage",
      "Auth Flow",
    ],
    image: "/image1.jpeg",
    status: "In development",
  },
  {
    title: "Secure File Management API",
    description:
      "A backend API for digital file management with upload, download, preview, sharing, role-based access control, audit logging, and cloud-ready file organization workflows.",
    technologies: ["Node.js", "Docker", "RabbitMQ", "PostgreSQL", "RBAC"],
    demoUrl: "https://documenter.getpostman.com/view/36203711/2sB2qZDh35",
    image: "/api.png",
    status: "API reference",
  },
  {
    title: "Go Microservices Architecture",
    description:
      "A distributed backend architecture built with Go, gRPC-based inter-service communication, Kafka event streaming, containerized services, and Kubernetes deployment readiness.",
    technologies: ["Go", "Kubernetes", "gRPC", "Kafka", "AWS"],
    image: "/project.png",
    status: "System architecture",
  },
  {
    title: "Marketplace Database Schema Design",
    description:
      "A normalized relational database model for an Airbnb-style marketplace, covering users, property listings, bookings, reviews, and the relationships required for transactional product workflows.",
    technologies: ["DrawSQL", "PostgreSQL", "RDBMS", "Schema Design"],
    demoUrl: "https://drawsql.app/teams/alx-connect/diagrams/airbnb",
    image: "/database.png",
    status: "Database design",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="group glass-card overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:border-white/20">
      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
        {project.status && (
          <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-slate-950/65 px-3 py-1 text-xs font-medium text-[#eadfc8] backdrop-blur-xl">
            {project.status}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-mono text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#c4a76d]/25 bg-[#c4a76d]/10 px-4 py-2 text-sm font-medium text-[#eadfc8] transition hover:bg-[#c4a76d]/15"
            >
              Open <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section-shell">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-mono text-xl text-[#c4a76d]">03.</span>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Selected Projects
          </h2>
          <div className="section-heading-line hidden h-px flex-grow md:block" />
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="glass-panel mt-12 flex flex-col items-start justify-between gap-5 rounded-[2rem] p-6 md:flex-row md:items-center md:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Additional work
            </p>
            <p className="mt-2 max-w-2xl text-slate-300">
              These selected projects represent my current backend engineering
              focus. Additional repositories include API experiments, backend
              services, and implementation-focused learning projects.
            </p>
          </div>
          <a
            href="https://github.com/mosescode1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#d7c49e] px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-[#eadfc8]"
          >
            View GitHub <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
