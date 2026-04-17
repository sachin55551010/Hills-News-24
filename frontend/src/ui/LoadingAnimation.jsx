import { useState, useEffect } from "react";

export const LoadingAnimation = () => {
  return (
    <div style={styles.overlay}>
      <div style={styles.container}>
        {/* Logo Mark */}
        <div style={styles.logoWrapper}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            {/* Mountain silhouette */}
            <path
              d="M4 36 L16 14 L24 26 L30 18 L44 36 Z"
              fill="none"
              stroke="#E63946"
              strokeWidth="2.5"
              strokeLinejoin="round"
              strokeLinecap="round"
              style={{
                strokeDasharray: 120,
                strokeDashoffset: 0,
                animation: "drawPath 1.8s ease-in-out infinite",
              }}
            />
            {/* Signal arc */}
            <path
              d="M30 10 Q36 10 38 16"
              fill="none"
              stroke="#E63946"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                strokeDasharray: 20,
                strokeDashoffset: 0,
                animation: "drawPath 1.8s ease-in-out 0.3s infinite",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            />
            <circle
              cx="30"
              cy="9"
              r="1.5"
              fill="#E63946"
              style={{
                animation: "pulse 1.8s ease-in-out 0.5s infinite",
              }}
            />
          </svg>
        </div>

        {/* Brand Text */}
        <div style={styles.brandRow}>
          <span style={styles.hills}>HILLS</span>
          <span style={styles.news}>NEWS</span>
          <span style={styles.channel}>24</span>
        </div>

        {/* Progress Bar */}
        <div style={styles.progressTrack}>
          <div style={styles.progressFill} />
        </div>

        {/* Loading label */}
        <p style={styles.label}>Loading</p>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400&display=swap');

        @keyframes drawPath {
          0%   { stroke-dashoffset: 120; opacity: 0; }
          20%  { opacity: 1; }
          80%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0; transform: scale(0.6); }
          50%       { opacity: 1; transform: scale(1); }
        }

        @keyframes progress {
          0%   { width: 0%; opacity: 1; }
          85%  { width: 100%; opacity: 1; }
          100% { width: 100%; opacity: 0; }
        }

        @keyframes blink {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    animation: "fadeSlideIn 0.5s ease forwards",
  },
  logoWrapper: {
    marginBottom: "4px",
  },
  brandRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "6px",
    letterSpacing: "0.08em",
  },
  hills: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "28px",
    color: "#FFFFFF",
    lineHeight: 1,
  },
  news: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "28px",
    color: "#CCCCCC",
    lineHeight: 1,
  },
  channel: {
    fontFamily: "'Bebas Neue', sans-serif",
    fontSize: "28px",
    color: "#E63946",
    lineHeight: 1,
  },
  progressTrack: {
    width: "120px",
    height: "2px",
    backgroundColor: "#1E1E1E",
    borderRadius: "2px",
    overflow: "hidden",
    marginTop: "8px",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#E63946",
    borderRadius: "2px",
    animation: "progress 2s ease-in-out infinite",
  },
  label: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "11px",
    fontWeight: 300,
    color: "#555555",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    margin: 0,
    animation: "blink 1.4s ease-in-out infinite",
  },
};

// ─── Demo wrapper ────────────────────────────────────────────────────────────
export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {isLoading && <LoadingAnimation />}

      {!isLoading && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "22px", color: "#111", marginBottom: "8px" }}>
            Content Loaded ✓
          </h2>
          <p style={{ color: "#888", fontSize: "14px" }}>
            Hills News 18 — your news, your hills.
          </p>
          <button
            onClick={() => setIsLoading(true)}
            style={{
              marginTop: "20px",
              padding: "10px 24px",
              backgroundColor: "#E63946",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
          >
            Replay
          </button>
        </div>
      )}
    </div>
  );
}
