import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0A0500",
        surface: "#110800",
        surfaceElevated: "#1A0D00",
        mid: "#321001",
        accent: "#F0B52A",
        accentDark: "#8A5008",
        text: "#FFD966",
        textMuted: "#B89A4D",
        textDim: "#8A7A3A",
        primary: "#F0B52A",
        primaryHover: "#FFC940",
        success: "#57F287",
        error: "#ED4245",
        warning: "#FEE75C",
        info: "#5865F2",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-hero":
          "linear-gradient(135deg, #0A0500 0%, #1A0D00 50%, #0A0500 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #8A5008 0%, #F0B52A 50%, #FFD966 100%)",
        "gradient-surface": "linear-gradient(180deg, #110800 0%, #0A0500 100%)",
      },
      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "20px",
        xl: "28px",
      },
      boxShadow: {
        card: "0 4px 24px rgba(0,0,0,0.4)",
        glow: "0 0 40px rgba(240,181,42,0.15)",
        glowStrong: "0 0 60px rgba(240,181,42,0.3)",
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        section: "80px",
        sectionMobile: "40px",
        sectionTablet: "60px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(240,181,42,0.25)" },
          "50%": { boxShadow: "0 0 40px rgba(240,181,42,0.55)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glowPulse: "glowPulse 2.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
