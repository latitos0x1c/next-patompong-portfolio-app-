import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "Portfolio projects by Patompong — web applications built with Next.js, React, Node.js, and more.",
};

const projects = [
  {
    title: "ShopFlow — E-Commerce Platform",
    description:
      "A full-featured e-commerce web application with product catalog, cart management, secure checkout, user authentication, and an admin dashboard for inventory management.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "TailwindCSS", "Stripe"],
    role: "Full Stack Developer",
    year: "2024",
    image: "/projects/ecommerce.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "DataViz — Analytics Dashboard",
    description:
      "A real-time analytics dashboard displaying complex data with interactive charts and graphs. Features role-based access control, dark mode, and export capabilities.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Chart.js", "Docker"],
    role: "Frontend & Backend Developer",
    year: "2024",
    image: "/projects/dashboard.png",
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    title: "ChatSphere — Real-time Chat App",
    description:
      "A modern real-time messaging application with private/group chats, emoji reactions, file sharing, push notifications, and end-to-end encryption.",
    tech: ["React", "Node.js", "WebSockets", "MongoDB", "JWT", "Cloudinary"],
    role: "Full Stack Developer",
    year: "2023",
    image: "/projects/chatapp.png",
    liveUrl: "#",
    repoUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <div className="page-hero">
        <div
          className="orb orb-pink"
          style={{ width: "450px", height: "450px", top: "-100px", right: "-50px", opacity: 0.35 }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="animate-fade-in-up" style={{ maxWidth: "600px" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Portfolio
            </span>
            <h1 className="section-title">
              Featured <span className="section-title-accent">Projects</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)" }}>
              A selection of projects that demonstrate my technical skills, problem-solving ability, and passion for building great user experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="container section">
        {/* Stats Bar */}
        <div
          className="glass-card animate-fade-in"
          style={{
            padding: "1.5rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            marginBottom: "3rem",
          }}
        >
          {[
            { value: "3+", label: "Projects Completed" },
            { value: "5+", label: "Technologies Used" },
            { value: "100%", label: "Passion for Code" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.8rem",
                  background: "var(--gradient-accent)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.15}s`, animationFillMode: "both" }}
            >
              <ProjectCard {...project} priority={i === 0} />
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div
          className="glass-card"
          style={{
            marginTop: "3rem",
            padding: "2.5rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(14,165,233,0.05))",
            borderColor: "rgba(124,58,237,0.2)",
          }}
        >
          <p style={{ fontSize: "1.1rem", marginBottom: "1.25rem", color: "var(--text-secondary)" }}>
            Interested in working together? Let's build something amazing.
          </p>
          <a href="/contact" className="btn btn-primary" id="projects-cta-contact">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
