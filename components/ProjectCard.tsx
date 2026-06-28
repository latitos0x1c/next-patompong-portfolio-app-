"use client";

import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  role: string;
  year: string | number;
  image: string;
  liveUrl?: string;
  repoUrl?: string;
  priority?: boolean;
}

export default function ProjectCard({
  title,
  description,
  tech,
  role,
  year,
  image,
  liveUrl,
  repoUrl,
  priority = false,
}: ProjectCardProps) {
  return (
    <article
      className="glass-card"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      {/* Project Image */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "220px",
          overflow: "hidden",
          background: "rgba(124,58,237,0.08)",
        }}
      >
        <Image
          src={image}
          alt={`${title} project screenshot`}
          fill
          priority={priority}
          style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
          }}
        />
        {/* Overlay year badge */}
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            background: "rgba(10,10,18,0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            padding: "0.2rem 0.6rem",
            fontFamily: "var(--font-code)",
            fontSize: "0.75rem",
            color: "var(--accent-light)",
          }}
        >
          {year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.15rem",
            color: "var(--text-primary)",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </h3>

        {/* Role */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.35rem",
            marginBottom: "0.75rem",
            color: "var(--accent-light)",
            fontSize: "0.8rem",
            fontFamily: "var(--font-display)",
            fontWeight: 500,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
          </svg>
          {role}
        </div>

        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "0.875rem",
            lineHeight: 1.6,
            marginBottom: "1.25rem",
            flex: 1,
          }}
        >
          {description}
        </p>

        {/* Tech Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
          {tech.map((t) => (
            <span key={t} className="badge" style={{ fontSize: "0.72rem" }}>
              {t}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        {(liveUrl || repoUrl) && (
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ fontSize: "0.8rem", padding: "0.5rem 1.1rem", flex: 1, justifyContent: "center" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15,3 21,3 21,9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "0.8rem", padding: "0.5rem 1.1rem", flex: 1, justifyContent: "center" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
