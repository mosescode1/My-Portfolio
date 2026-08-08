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

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
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
    "h-11 rounded-2xl border-white/10 bg-white/[0.055] text-white placeholder:text-slate-500 focus-visible:border-[#c4a76d]/50 focus-visible:ring-[#c4a76d]/20";

  return (
    <section id="contact" className="section-shell">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="font-mono text-xl text-[#c4a76d]">04.</span>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Contact
            </h2>
          </div>
          <p className="text-slate-400">
            I’m available for backend engineering opportunities, technical
            collaborations, and product-focused work involving APIs,
            microservices, secure file systems, workflow automation, and
            data-intensive applications.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="glass-card rounded-[2rem] p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
              Professional contact
            </p>
            <h3 className="mt-3 text-2xl font-bold text-white">
              Let’s discuss your backend requirements.
            </h3>
            <p className="mt-4 leading-7 text-slate-400">
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
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-sm text-slate-300 transition hover:bg-white/[0.075] hover:text-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#c4a76d]/10 text-[#d7c49e]">
                    <Icon className="h-5 w-5" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="glass-panel rounded-[2rem] p-6 md:p-8"
          >
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">
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
                <Label htmlFor="email" className="text-slate-300">
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
              <Label htmlFor="subject" className="text-slate-300">
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
              <Label htmlFor="message" className="text-slate-300">
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
                className="rounded-2xl border-white/10 bg-white/[0.055] text-white placeholder:text-slate-500 focus-visible:border-[#c4a76d]/50 focus-visible:ring-[#c4a76d]/20"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "mt-8 h-12 w-full rounded-full bg-[#d7c49e] font-semibold text-slate-950 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#eadfc8] sm:w-auto",
                isSubmitting &&
                  "cursor-not-allowed opacity-70 hover:translate-y-0",
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
