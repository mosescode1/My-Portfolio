import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { FileApiDiagram, MicroservicesDiagram } from "./Diagrams";

interface FeatureProject {
  title: string;
  status: string;
  description: string;
  technologies: string[];
  link?: { href: string; label: string };
  diagram: ReactNode;
}

const featured: FeatureProject[] = [
  {
    title: "Go Microservices Architecture",
    status: "System architecture",
    description:
      "Distributed backend architecture built with Go, gRPC inter-service communication, Kafka event streaming, containerized services, and Kubernetes deployment readiness.",
    technologies: ["Go", "gRPC", "Kafka", "Docker", "Kubernetes"],
    // TODO: add the repository link for this project
    diagram: <MicroservicesDiagram />,
  },
  {
    title: "Secure File Management API",
    status: "API reference",
    description:
      "Backend API for digital file management with uploads, downloads, previews, sharing, role-based permissions, audit logs, and cloud-ready organization workflows.",
    technologies: ["Node.js", "Docker", "RabbitMQ", "PostgreSQL", "RBAC"],
    link: {
      href: "https://documenter.getpostman.com/view/36203711/2sB2qZDh35",
      label: "Read the API docs",
    },
    diagram: <FileApiDiagram />,
  },
];

const live = [
  {
    title: "Sellawise",
    description:
      "A live commerce-focused web platform built around product discovery, digital storefront experiences, and scalable business workflows for online sellers.",
    href: "https://sellawise.com",
    host: "sellawise.com",
  },
  {
    title: "Sojourn",
    description:
      "A live digital platform focused on travel and hospitality experiences, presenting user-facing product flows with a clean, accessible web interface.",
    href: "https://sojourn.ng",
    host: "sojourn.ng",
  },
];

const Projects = () => {
  return (
    <section
      id="work"
      className="mx-auto flex max-w-[1440px] scroll-mt-24 flex-col gap-5 px-5 pt-20 md:px-12 lg:gap-14 lg:px-24 lg:pt-[140px]"
    >
      <div className="grid gap-5 lg:grid-cols-[360px_minmax(0,1fr)] lg:items-end lg:gap-20">
        <div className="flex flex-col gap-4">
          <p className="kicker">§ 3 — Selected work</p>
          <h2 className="section-title text-[44px] lg:text-[64px]">Built work</h2>
        </div>
        <p className="m-0 max-w-[620px] text-base leading-relaxed text-sub lg:text-lg">
          Backend and product-focused projects across secure systems, workflow
          products, live platforms, and business-facing web applications.
        </p>
      </div>

      <div className="mt-2 grid gap-5 lg:mt-0 lg:grid-cols-2 lg:gap-8">
        {featured.map((p, i) => (
          <article
            key={p.title}
            className="flex flex-col overflow-hidden rounded-md border border-rule bg-surface"
          >
            <div className="flex items-center justify-center bg-night px-3 py-5 lg:h-[300px] lg:p-7">
              {p.diagram}
            </div>
            <div className="flex flex-col gap-3 px-5 py-6 lg:gap-4 lg:p-8">
              <span className="font-mono text-xs text-sub md:text-[13px]">
                0{i + 1} — {p.status}
              </span>
              <h3 className="m-0 font-serif text-[28px] font-normal leading-[1.1] lg:text-4xl">
                {p.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.65] text-sub lg:text-base">{p.description}</p>
              <p className="m-0 font-mono text-xs text-body md:text-[13px]">
                {p.technologies.join(" · ")}
              </p>
              {p.link && (
                <a
                  href={p.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 self-start text-[15px] font-medium hover:text-accent-hover"
                >
                  {p.link.label} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-2 flex flex-col border-t border-ink lg:mt-0">
        {live.map((p, i) => (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group grid gap-2 border-b border-rule py-[22px] no-underline lg:grid-cols-[80px_360px_minmax(0,1fr)_200px] lg:items-center lg:gap-8 lg:py-8"
          >
            <span className="hidden font-mono text-[13px] text-sub lg:block">0{i + 3}</span>
            <span className="font-serif text-[28px] group-hover:text-accent-hover lg:text-4xl">{p.title}</span>
            <span className="text-[15px] leading-relaxed text-sub lg:text-base">{p.description}</span>
            <span className="inline-flex items-center gap-2 font-mono text-[13px] lg:justify-end lg:text-sm">
              <span className="h-2 w-2 rounded-full bg-ok" />
              {p.host} ↗
            </span>
          </a>
        ))}
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <p className="m-0 hidden text-[17px] text-sub lg:block">
          More repositories include API experiments, backend services, and
          implementation-focused learning projects.
        </p>
        <a
          href="https://github.com/mosescode1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-12 items-center justify-center rounded-full border border-ink px-[22px] text-[15px] font-medium no-underline transition hover:bg-ink hover:text-paper"
        >
          github.com/mosescode1 ↗
        </a>
      </div>
    </section>
  );
};

export default Projects;
