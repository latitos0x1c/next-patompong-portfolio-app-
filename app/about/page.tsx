import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about Patompong — personal background, education, career objective, strengths, interests, and hobbies.",
};

const education = [
  {
    degree: "Bachelor of Technology (Digital Technology and Innovation)",
    school: "Southeast Asia University",
    year: "2568 – 2569",
    gpa: "GPA 3.57",
  },
  {
    degree: "High vocational certificate (Information Technology)",
    school: "Phetkasem Management Technological College",
    year: "2566 – 2568",
    gpa: "GPA 3.78",
  },
  {
    degree: "Vocational certificate (Computer Business)",
    school: "Nakhon Pathom Industrial and Community Education College",
    year: "2563 – 2565",
    gpa: "GPA 2.49",
  }
];

const strengths = [
  { icon: "🧠", title: "Fast Learner", desc: "Quickly adapt to new technologies and frameworks" },
  { icon: "🤝", title: "Team Player", desc: "Collaborate effectively in agile environments" },
  { icon: "🎯", title: "Detail-Oriented", desc: "Pay close attention to UI/UX polish and code quality" },
  { icon: "💡", title: "Problem Solver", desc: "Break down complex problems into clear solutions" },
];

const interests = [
  { icon: "🌐", label: "Web Development" },
  { icon: "📱", label: "Mobile Apps" },
  { icon: "☁️", label: "Cloud & DevOps" },
  { icon: "🤖", label: "AI & Machine Learning" },
  { icon: "🔒", label: "Cybersecurity" },
];

const hobbies = [
  { icon: "🎮", label: "Gaming" },
  { icon: "📸", label: "Photography" },
  { icon: "🎵", label: "Music" },
  { icon: "📚", label: "Reading" },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <div className="page-hero">
        <div
          className="orb orb-purple"
          style={{ width: "500px", height: "500px", top: "-200px", right: "-100px", opacity: 0.3 }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="animate-fade-in-up" style={{ maxWidth: "640px" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
              About Me
            </span>
            <h1 className="section-title">
              The Story <span className="section-title-accent">Behind the Code</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              I'm a passionate developer who believes great software is where technology meets great design. I love building things that make people's lives easier and more enjoyable.
            </p>
          </div>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>

          {/* ── Personal Info ── */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Personal <span className="section-title-accent">Background</span>
            </h2>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "1.5rem",
                }}
              >
                {[
                  { label: "Full Name", value: "ปฐมพงษ์ จันทร์สมบูรณ์" },
                  { label: "Date of Birth", value: "08/01/2005" },
                  { label: "Nationality", value: "Thai" },
                  { label: "Location", value: "Nakhon Pathom, Thailand" },
                  { label: "Languages", value: "Thai, English" },
                  { label: "Status", value: "Available for Work" },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        fontSize: "0.95rem",
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Education ── */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Education <span className="section-title-accent">Timeline</span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="glass-card animate-fade-in-up"
                  style={{
                    padding: "1.5rem 2rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    animationDelay: `${i * 0.15}s`,
                    animationFillMode: "both",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      background: "var(--gradient-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "1.2rem",
                    }}
                  >
                    🎓
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", alignItems: "flex-start" }}>
                      <div>
                        <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                          {edu.degree}
                        </h3>
                        <p style={{ color: "var(--accent-light)", fontFamily: "var(--font-display)", fontWeight: 500, fontSize: "0.875rem", margin: 0 }}>
                          {edu.school}
                        </p>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
                        <span className="badge badge-secondary" style={{ fontSize: "0.75rem" }}>{edu.year}</span>
                        {edu.gpa && <span style={{ color: "var(--text-muted)", fontSize: "0.78rem", fontFamily: "var(--font-code)" }}>{edu.gpa}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Career Objective ── */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Career <span className="section-title-accent">Objective</span>
            </h2>
            <div
              className="glass-card"
              style={{
                padding: "2.5rem",
                background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.04))",
                borderColor: "rgba(124,58,237,0.2)",
              }}
            >
              <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <span style={{ fontSize: "2rem", flexShrink: 0 }}>🚀</span>
                <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "var(--text-secondary)", margin: 0 }}>
                  To secure a challenging position as a <strong style={{ color: "var(--accent-light)" }}>Front-end / Full Stack Developer</strong> where I can apply my technical skills and creative problem-solving abilities to build impactful digital products. I aim to grow within a dynamic team, contribute to innovative projects, and continuously develop my expertise in modern web technologies.
                </p>
              </div>
            </div>
          </div>

          {/* ── Strengths ── */}
          <div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              My <span className="section-title-accent">Strengths</span>
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem" }}>
              {strengths.map((s, i) => (
                <div
                  key={s.title}
                  className="glass-card animate-fade-in-up"
                  style={{ padding: "1.5rem", animationDelay: `${i * 0.1}s`, animationFillMode: "both" }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1rem", color: "var(--text-primary)", marginBottom: "0.4rem" }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Interests & Hobbies ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }} className="about-bottom-grid">
            <div>
              <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
                <span className="section-title-accent">Interests</span>
              </h2>
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                  {interests.map((item) => (
                    <div
                      key={item.label}
                      className="badge badge-secondary"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.4rem 0.9rem" }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title" style={{ marginBottom: "1.25rem" }}>
                <span className="section-title-accent">Hobbies</span>
              </h2>
              <div className="glass-card" style={{ padding: "1.5rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                  {hobbies.map((item) => (
                    <div
                      key={item.label}
                      className="badge badge-secondary"
                      style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.4rem 0.9rem" }}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-bottom-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
