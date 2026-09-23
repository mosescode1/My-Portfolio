import { useState } from "react";

const links = [
  { href: "mailto:emosescode@gmail.com", label: "emosescode@gmail.com", kind: "email" },
  { href: "https://github.com/mosescode1", label: "github.com/mosescode1", kind: "github" },
  {
    href: "https://www.linkedin.com/in/eteng-moses-001954176",
    label: "in/eteng-moses",
    kind: "linkedin",
  },
];

const field =
  "h-12 rounded border border-night-field bg-night px-3.5 text-base text-paper placeholder:text-night-sub focus:border-accent-dark focus:outline-none";
const labelCls = "font-mono text-xs text-night-body md:text-[13px]";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Same behavior as before: simulated send. Wire to a real endpoint (e.g. Formspree/Resend) when ready.
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({ name: "", email: "", subject: "", message: "" });
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      className="mx-3 mt-20 scroll-mt-24 rounded-lg bg-night text-paper lg:mx-12 lg:mt-[140px]"
    >
      <div className="mx-auto grid max-w-[1344px] gap-8 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_600px] lg:gap-24 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-6 lg:gap-7">
          <p className="kicker text-accent-dark">§ 4 — Contact</p>
          <h2 className="section-title text-[56px] leading-[0.95] tracking-[-0.03em] lg:text-[96px]">
            Let’s <span className="italic">talk.</span>
          </h2>
          <p className="m-0 max-w-[520px] text-base leading-relaxed text-night-body lg:text-lg">
            Available for backend engineering opportunities, collaborations, and
            product-focused work involving APIs, microservices, secure file
            systems, workflow automation, and data-intensive applications.
          </p>
          <div className="flex flex-col border-t border-night-rule lg:mt-3">
            {links.map((l) => (
              <a
                key={l.kind}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex min-h-14 items-center justify-between border-b border-night-rule text-base text-paper no-underline hover:text-accent-dark lg:py-5 lg:text-lg"
              >
                <span>{l.label}</span>
                <span className="font-mono text-xs text-night-sub md:text-[13px]">{l.kind}</span>
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-[18px] rounded-md border border-night-rule bg-night-2 px-[18px] py-[22px] lg:gap-[22px] lg:p-10"
        >
          <div className="grid gap-[18px] sm:grid-cols-2 sm:gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className={labelCls}>Name</label>
              <input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className={field} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className={labelCls}>Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleChange} required className={field} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="subject" className={labelCls}>Subject</label>
            <input id="subject" name="subject" placeholder="Project, role, or collaboration topic" value={formData.subject} onChange={handleChange} required className={field} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className={labelCls}>Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Share a brief overview of your requirements…"
              value={formData.message}
              onChange={handleChange}
              required
              className={`${field} h-auto resize-y py-3.5`}
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
            <button
              type="submit"
              disabled={status === "sending"}
              className="h-[52px] cursor-pointer rounded-full border-0 bg-accent-dark px-7 text-base font-semibold text-night transition hover:bg-paper disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>
            <p role="status" className="m-0 font-mono text-[13px] text-code">
              {status === "sent" ? "Thanks — I’ll get back to you soon." : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
