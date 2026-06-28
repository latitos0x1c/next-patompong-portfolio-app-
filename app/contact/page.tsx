import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Patompong — email, phone, GitHub, and download resume.",
};

const contactItems = [
  {
    id: "contact-email",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: "Email",
    value: "contact@shad.qzz.io",
    href: "mailto:contact@shad.qzz.io",
    accentColor: "#7c3aed",
    description: "Best way to reach me",
  },
  {
    id: "contact-phone",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.23h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 17z" />
      </svg>
    ),
    label: "Phone",
    value: "099-009-6491",
    href: "tel:0990096491",
    accentColor: "#06b6d4",
    description: "Mon–Fri, 9 AM – 6 PM",
  },
  {
    id: "contact-github",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/latitos0x1c ",
    href: "https://github.com/latitos0x1c ",
    accentColor: "#10b981",
    description: "Check out my repositories",
  },
];

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <div className="page-hero">
        <div
          className="orb orb-purple"
          style={{ width: "500px", height: "500px", top: "-150px", right: "-100px", opacity: 0.3 }}
        />
        <div
          className="orb orb-blue"
          style={{ width: "350px", height: "350px", bottom: "-100px", left: "-50px", opacity: 0.2 }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="animate-fade-in-up" style={{ maxWidth: "640px" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Let's Connect
            </span>
            <h1 className="section-title">
              Get In <span className="section-title-accent">Touch</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "var(--text-secondary)" }}>
              Whether you have a project in mind, want to collaborate, or just want to say hello — my inbox is always open!
            </p>
          </div>
        </div>
      </div>

      <div className="container section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — Contact Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
              Contact <span className="section-title-accent">Info</span>
            </h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
              Feel free to reach out via any of these channels:
            </p>

            {contactItems.map((item, i) => (
              <a
                key={item.id}
                id={item.id}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ textDecoration: "none" }}
                className="animate-fade-in-up"
              >
                <div
                  className="glass-card"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "1.25rem",
                    animationDelay: `${i * 0.15}s`,
                    animationFillMode: "both",
                  }}
                >
                  <div
                    style={{
                      width: "58px",
                      height: "58px",
                      borderRadius: "14px",
                      background: `linear-gradient(135deg, ${item.accentColor}25, ${item.accentColor}10)`,
                      border: `1px solid ${item.accentColor}40`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: item.accentColor,
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.1em",
                        color: "var(--text-muted)",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "1rem",
                        color: "var(--text-primary)",
                        marginBottom: "0.15rem",
                      }}
                    >
                      {item.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{item.description}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Right — Resume + Availability */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Download Resume Card */}
            <div
              className="glass-card animate-fade-in-up delay-300"
              style={{
                padding: "2.5rem",
                background: "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(79,70,229,0.05))",
                borderColor: "rgba(124,58,237,0.25)",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>📄</div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "1.4rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                Download My Resume
              </h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "1.75rem", fontSize: "0.9rem" }}>
                Get a PDF copy of my full resume with detailed work history and skills.
              </p>
              <a
                href="/resume.pdf"
                id="contact-download-resume"
                download
                className="btn btn-primary"
                style={{ width: "100%", justifyContent: "center", fontSize: "1rem" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>

            {/* Availability Card */}
            <div
              className="glass-card animate-fade-in-up delay-400"
              style={{ padding: "1.75rem" }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "var(--text-primary)",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    display: "inline-block",
                    animation: "pulse-glow 2s infinite",
                  }}
                />
                Currently Available
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {[
                  { label: "Job Type", value: "Full-time / Part-time" },
                  { label: "Work Mode", value: "On-site / Remote / Hybrid" },
                  { label: "Location", value: "Thailand (Flexible)" },
                  { label: "Response Time", value: "Within 24 hours" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "0.6rem 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: "0.85rem", color: "var(--accent-light)", fontFamily: "var(--font-code)" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
