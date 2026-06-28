"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/me/skills", label: "Skills" },
  { href: "/me/projects", label: "Projects" },
  { href: "/me/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled
          ? "rgba(10, 10, 18, 0.85)"
          : "rgba(10, 10, 18, 0.4)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.4rem",
            textDecoration: "none",
            background: "var(--gradient-accent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: "-0.5px",
          }}
        >
          &lt;Portfolio  /&gt;
        </Link>

        {/* Desktop Links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "0.5rem 0.9rem",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "0.9rem",
                    transition: "all 0.25s ease",
                    color: isActive ? "var(--accent-light)" : "var(--text-secondary)",
                    background: isActive ? "rgba(124, 58, 237, 0.15)" : "transparent",
                    border: isActive ? "1px solid rgba(124,58,237,0.25)" : "1px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger button (mobile) */}
        <button
          id="nav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          style={{
            display: "none",
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "0.5rem",
            cursor: "pointer",
            color: "var(--text-primary)",
            transition: "all 0.25s",
          }}
          className="hamburger-btn"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          id="nav-mobile-menu"
          style={{
            background: "rgba(10, 10, 18, 0.97)",
            backdropFilter: "blur(16px)",
            borderTop: "1px solid var(--border)",
            padding: "1rem 1.5rem 1.5rem",
            animation: "fadeInUp 0.25s ease",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    id={`nav-mobile-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                    style={{
                      display: "block",
                      padding: "0.75rem 1rem",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "1rem",
                      color: isActive ? "var(--accent-light)" : "var(--text-primary)",
                      background: isActive ? "rgba(124, 58, 237, 0.15)" : "rgba(255,255,255,0.03)",
                      border: `1px solid ${isActive ? "rgba(124,58,237,0.3)" : "rgba(255,255,255,0.06)"}`,
                      transition: "all 0.2s",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
