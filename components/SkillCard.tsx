interface Skill {
  name: string;
  level?: number; // 0-100
}

interface SkillCardProps {
  category: string;
  icon: React.ReactNode;
  skills: Skill[];
  accentColor?: string;
}

export default function SkillCard({
  category,
  icon,
  skills,
  accentColor = "var(--accent)",
}: SkillCardProps) {
  return (
    <div
      className="glass-card"
      style={{ padding: "1.75rem", height: "100%" }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "12px",
            background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}11)`,
            border: `1px solid ${accentColor}44`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: accentColor,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "var(--text-primary)",
            margin: 0,
          }}
        >
          {category}
        </h3>
      </div>

      {/* Skills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {skills.map((skill) => (
          <span
            key={skill.name}
            className="badge"
            style={{
              background: `${accentColor}18`,
              color: accentColor === "var(--accent)" ? "var(--accent-light)" : accentColor,
              borderColor: `${accentColor}30`,
              fontFamily: "var(--font-code)",
              fontSize: "0.8rem",
            }}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
