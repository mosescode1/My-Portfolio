import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: `Something went wrong ${error}`,
        description: "Your message couldn't be sent. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "h-12 rounded-2xl border-white/12 bg-white/[0.065] text-white placeholder:text-gray-500 shadow-inner shadow-white/5 backdrop-blur-xl focus-visible:border-[#ccf720]/60 focus-visible:ring-[#ccf720]/20";

  return (
    <section id="contact" className="section-shell">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-14 grid gap-6 md:grid-cols-[0.7fr_1fr] md:items-end">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="mt-3 text-5xl font-black uppercase tracking-tighter md:text-7xl">
              Let’s talk
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-gray-300">
            I’m available for backend engineering opportunities, collaborations,
            and product-focused work involving APIs, microservices, secure file
            systems, workflow automation, and data-intensive applications.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="minimal-card shine-surface rounded-[2rem] p-6">
            <h3 className="text-2xl font-black uppercase tracking-tight text-white">
              Professional contact
            </h3>
            <p className="mt-4 leading-7 text-gray-400">
              If you need support with API design, backend architecture, data
              modeling, access control, or service integration, send a message
              and I’ll follow up promptly.
            </p>

            <div className="mt-8 space-y-3">
              {[
                {
                  href: "mailto:emosescode@gmail.com",
                  icon: Mail,
                  label: "emosescode@gmail.com",
                },
                {
                  href: "https://github.com/mosescode1",
                  icon: Github,
                  label: "github.com/mosescode1",
                },
                {
                  href: "https://www.linkedin.com/in/eteng-moses-001954176",
                  icon: Linkedin,
                  label: "LinkedIn profile",
                },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  className="glass-pill flex items-center gap-3 rounded-2xl p-4 text-sm text-gray-300 transition hover:-translate-y-1 hover:border-[#ccf720]/40 hover:text-[#ccf720]"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ccf720] text-[#111111]">
                    <Icon className="h-5 w-5" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="minimal-card-soft shine-surface rounded-[2rem] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="subject" className="text-gray-300">
                Subject
              </Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Project, role, or collaboration topic"
                value={formData.subject}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>

            <div className="mt-6 space-y-2">
              <Label htmlFor="message" className="text-gray-300">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Share a brief overview of your requirements..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="rounded-2xl border-white/12 bg-white/[0.065] text-white placeholder:text-gray-500 shadow-inner shadow-white/5 backdrop-blur-xl focus-visible:border-[#ccf720]/60 focus-visible:ring-[#ccf720]/20"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "mt-8 h-12 w-full rounded-full bg-[#ccf720] font-bold text-[#111111] shadow-lg shadow-[#ccf720]/15 transition hover:-translate-y-1 hover:scale-105 hover:bg-white sm:w-auto",
                isSubmitting &&
                  "cursor-not-allowed opacity-70 hover:translate-y-0 hover:scale-100",
              )}
            >
              {isSubmitting ? "Sending..." : "Send Message"}{" "}
              {!isSubmitting && <Send className="h-4 w-4" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
