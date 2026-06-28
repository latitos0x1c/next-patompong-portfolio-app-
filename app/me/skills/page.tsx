import type { Metadata } from "next";
import SkillCard from "@/components/SkillCard";

export const metadata: Metadata = {
  title: "Skills",
  description: "Technical skills and expertise of Patompong — Frontend, Backend, Database, and Tools.",
};

const skillCategories = [
  {
    category: "Frontend",
    accentColor: "#06b6d4",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "TailwindCSS" },
    ],
  },
  {
    category: "Backend",
    accentColor: "#10b981",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    ),
    skills: [
      { name: "Node.js" },
      { name: "REST API" },
      { name: "GraphQL" },
    ],
  },
  {
    category: "Database",
    accentColor: "#f59e0b",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
      { name: "Supabase" },
      { name: "MongoDB" },
      { name: "Redis" },
    ],
  },
  {
    category: "Tools & DevOps",
    accentColor: "#ec4899",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Docker" },
      { name: "Docker Compose" },
      { name: "Figma" },
      { name: "Vercel" },
    ],
  },
];

const proficiencyLevels = [
  { label: "Expert", color: "#7c3aed", count: 2 },
  { label: "Advanced", color: "#06b6d4", count: 5 },
  { label: "Intermediate", color: "#10b981", count: 8 },
  { label: "Learning", color: "#f59e0b", count: 4 },
];

export default function SkillsPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <div className="page-hero">
        <div
          className="orb orb-blue"
          style={{ width: "500px", height: "500px", top: "-100px", left: "-100px", opacity: 0.3 }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="animate-fade-in-up" style={{ maxWidth: "600px" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Technical Skills
            </span>
            <h1 className="section-title">
              My <span className="section-title-accent">Tech Stack</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)" }}>
              Tools, languages, and frameworks I use to bring ideas to life — from pixel-perfect UIs to robust back-end systems.
            </p>
          </div>
        </div>
      </div>

      <div className="container section">

        {/* Proficiency Legend */}
        <div
          className="glass-card animate-fade-in"
          style={{
            padding: "1.25rem 2rem",
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            alignItems: "center",
            marginBottom: "3rem",
          }}
        >
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.85rem", color: "var(--text-muted)" }}>
            Proficiency:
          </span>
          {proficiencyLevels.map((lvl) => (
            <div key={lvl.label} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: lvl.color }} />
              <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", fontFamily: "var(--font-display)" }}>
                {lvl.label}
              </span>
            </div>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${i * 0.12}s`, animationFillMode: "both" }}
            >
              <SkillCard
                category={cat.category}
                icon={cat.icon}
                skills={cat.skills}
                accentColor={cat.accentColor}
              />
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div style={{ marginTop: "3rem" }}>
          <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
            Additional <span className="section-title-accent">Knowledge</span>
          </h2>
          <div className="glass-card" style={{ padding: "1.75rem" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
              {[
                "Agile / Scrum",
                "UI/UX Design",
                "Responsive Design",
                "SEO Optimization",
                "Performance Tuning",
                "Code Review",
                "Unit Testing",
                "CI/CD",
                "Accessibility (a11y)",
                "PWA",
                "WebSockets",
                "OAuth / JWT",
              ].map((skill) => (
                <span key={skill} className="badge badge-secondary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
