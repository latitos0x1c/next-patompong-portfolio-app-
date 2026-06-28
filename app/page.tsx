import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import profilePic from "@/public/profile.png";
import TypedText from "@/components/TypedName";

export const metadata: Metadata = {
  title: "Home | Patompong Portfolio",
  description:
    "Welcome to Patompong's portfolio — Full Stack Developer specializing in Next.js, React, and modern web technologies.",
};

const quickLinks = [
  {
    href: "/about",
    label: "About Me",
    desc: "My story, education & interests",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
      </svg>
    ),
  },
  {
    href: "/me/skills",
    label: "Skills",
    desc: "Tech stack & expertise",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    href: "/me/projects",
    label: "Projects",
    desc: "Work I'm proud of",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    href: "/me/gallery",
    label: "Gallery",
    desc: "Photos from my dev journey",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    desc: "Let's work together",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
];

const roles = [
  "Front-end Developer",
  "Full Stack Developer",
  "Software Developer",
  "Web Developer",
];

export default function HomePage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "var(--gradient-hero)",
        }}
      >
        {/* Background Orbs */}
        <div
          className="orb orb-purple animate-float"
          style={{ width: "600px", height: "600px", top: "-200px", right: "-100px", opacity: 0.6 }}
        />
        <div
          className="orb orb-blue animate-float delay-300"
          style={{ width: "400px", height: "400px", bottom: "-100px", left: "-100px", opacity: 0.4 }}
        />
        <div
          className="orb orb-pink"
          style={{ width: "300px", height: "300px", top: "40%", left: "50%", opacity: 0.2 }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
              alignItems: "center",
              minHeight: "85vh",
            }}
            className="hero-grid"
          >
            {/* Text Column */}
            <div className="animate-fade-in-up">
              {/* Status badge */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 1rem",
                  borderRadius: "50px",
                  background: "rgba(34, 197, 94, 0.1)",
                  border: "1px solid rgba(34,197,94,0.3)",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 8px #22c55e",
                    animation: "pulse-glow 2s infinite",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: "0.8rem", color: "#86efac", fontFamily: "var(--font-display)", fontWeight: 500 }}>
                  Available for opportunities
                </span>
              </div>

              <h1
                style={{
                  marginBottom: "0.5rem",
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm{" "}
                <TypedText strings={["Patompong"]} />
              </h1>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                {roles.map((role) => (
                  <span key={role} className="badge badge-secondary" style={{ fontSize: "0.78rem" }}>
                    {role}
                  </span>
                ))}
              </div>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: 1.75,
                  marginBottom: "2.5rem",
                  maxWidth: "520px",
                  color: "var(--text-secondary)",
                }}
              >
                <TypedText
                  strings={[
                    "Passionate developer who loves crafting beautiful, responsive, and performant web experiences. I turn ideas into reality with clean code and thoughtful design — from pixel-perfect UIs to scalable back-end systems.",
                  ]}
                  className=""
                  typeSpeed={25}
                  startDelay={1200}
                  loop={false}
                  showCursor={false}
                />
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                <Link href="/me/projects" className="btn btn-primary" id="hero-view-projects">
                  View My Projects
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link href="/contact" className="btn btn-outline" id="hero-contact">
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Profile Image Column */}
            <div
              className="animate-fade-in delay-300"
              style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
              <div style={{ position: "relative" }}>
                {/* Glow ring */}
                <div
                  className="animate-pulse-glow"
                  style={{
                    position: "absolute",
                    inset: "-4px",
                    borderRadius: "50%",
                    background: "var(--gradient-accent)",
                    zIndex: 0,
                  }}
                />
                {/* Profile image */}
                <div
                  style={{
                    position: "relative",
                    width: "320px",
                    height: "320px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    border: "4px solid var(--bg-primary)",
                    zIndex: 1,
                  }}
                >
                  <Image
                    src={profilePic}
                    alt="Patompong — Developer Profile Photo"
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                    sizes="320px"
                  />
                </div>

                {/* Floating tech badge */}
                <div
                  className="animate-float delay-200"
                  style={{
                    position: "absolute",
                    bottom: "-16px",
                    left: "-24px",
                    padding: "0.75rem 1rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    zIndex: 2,
                    minWidth: "160px",
                    background: "rgba(10, 10, 20, 0.85)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(139, 92, 246, 0.4)",
                    borderRadius: "12px",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>⚡</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "#ffffff",
                        textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                      }}
                    >
                      Full Stack
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-code)",
                        fontSize: "0.72rem",
                        color: "#a78bfa",
                        textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                      }}
                    >
                      React · Next.js
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            color: "var(--text-muted)",
            fontSize: "0.75rem",
            fontFamily: "var(--font-display)",
            animation: "fadeIn 1s 1s ease both",
          }}
        >
          <span>Scroll to explore</span>
          <div
            style={{
              width: "24px",
              height: "36px",
              border: "1.5px solid var(--border)",
              borderRadius: "12px",
              display: "flex",
              justifyContent: "center",
              paddingTop: "6px",
            }}
          >
            <div
              style={{
                width: "4px",
                height: "8px",
                borderRadius: "2px",
                background: "var(--accent-light)",
                animation: "float 1.5s ease-in-out infinite",
              }}
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .hero-grid {
              grid-template-columns: 1fr !important;
              text-align: center;
              gap: 2rem !important;
              padding: 2rem 0 !important;
            }
          }
        `}</style>
      </section>

      {/* ── Quick Navigation ── */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 className="section-title">
              Explore My <span className="section-title-accent">Portfolio</span>
            </h2>
            <p className="section-subtitle">Navigate to any section to learn more about me</p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {quickLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                id={`quick-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="glass-card animate-fade-in-up"
                  style={{
                    padding: "1.75rem",
                    textAlign: "center",
                    animationDelay: `${i * 0.1}s`,
                    animationFillMode: "both",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "var(--gradient-card)",
                      border: "1px solid var(--border-hover)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      color: "var(--accent-light)",
                    }}
                  >
                    {link.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {link.label}
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                    {link.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
