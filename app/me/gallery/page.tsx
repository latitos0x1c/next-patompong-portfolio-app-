import type { Metadata } from "next";
import Image from "next/image";
import img1 from "@/public/gallery/coding-1.png";
import img2 from "@/public/gallery/coding-2.png";
import img3 from "@/public/gallery/coding-3.png";
import img4 from "@/public/gallery/coding-4.png";
import img5 from "@/public/gallery/coding-5.png";
import img6 from "@/public/gallery/coding-6.png";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Gallery of photos from Patompong's developer journey — coding, building, and creating.",
};

const galleryImages = [
  { src: img1, alt: "Coding at night with dual monitors", caption: "Late night coding session" },
  { src: img2, alt: "Typing on a mechanical keyboard", caption: "In the zone — keyboard & code" },
  { src: img3, alt: "Working at a cafe with laptop", caption: "Remote work at my favourite cafe" },
  { src: img4, alt: "Developer desk setup flat lay", caption: "My desk setup" },
  { src: img5, alt: "Monitor showing a dashboard UI", caption: "Working on a dashboard project" },
  { src: img6, alt: "Presenting a project to team", caption: "Team project presentation" },
];

export default function GalleryPage() {
  return (
    <div style={{ paddingTop: "68px" }}>
      {/* Hero */}
      <div className="page-hero">
        <div
          className="orb orb-purple"
          style={{ width: "400px", height: "400px", top: "-100px", left: "50%", opacity: 0.25 }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="animate-fade-in-up" style={{ maxWidth: "600px" }}>
            <span className="badge" style={{ marginBottom: "1rem", display: "inline-block" }}>
              Gallery
            </span>
            <h1 className="section-title">
              My <span className="section-title-accent">Dev Journey</span>
            </h1>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)" }}>
              A visual diary of moments from my life as a developer — the setups, the sessions, and the people I build with.
            </p>
          </div>
        </div>
      </div>

      <div className="container section">
        {/* Gallery Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.25rem",
          }}
          className="gallery-grid"
        >
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="glass-card animate-fade-in-up"
              style={{
                overflow: "hidden",
                animationDelay: `${i * 0.1}s`,
                animationFillMode: "both",
                cursor: "pointer",
                padding: 0,
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "4/3",
                  overflow: "hidden",
                  background: "rgba(124,58,237,0.08)",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="gallery-img"
                  style={{ objectFit: "cover" }}
                  priority={i === 0}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(10,10,18,0.9) 0%, transparent 60%)",
                    opacity: 0,
                    transition: "opacity 0.35s ease",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: "1rem",
                  }}
                  className="gallery-overlay"
                >
                  <p
                    style={{
                      color: "#fff",
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      margin: 0,
                    }}
                  >
                    {img.caption}
                  </p>
                </div>
              </div>
              {/* Caption (always visible on mobile) */}
              <div
                style={{
                  padding: "0.85rem 1rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    margin: 0,
                  }}
                >
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Photo count badge */}
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <span
            className="badge badge-secondary"
            style={{ fontSize: "0.85rem", padding: "0.5rem 1.25rem" }}
          >
            📷 {galleryImages.length} photos
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
        }
        .glass-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
}
