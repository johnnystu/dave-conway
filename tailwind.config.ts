import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f3ef",
        foreground: "#3d4a5c",
        card: "#ffffff",
        "card-foreground": "#3d4a5c",
        primary: "#5a7a5a",
        "primary-foreground": "#ffffff",
        secondary: "#e8e4dc",
        "secondary-foreground": "#3d4a5c",
        muted: "#ebe8e2",
        "muted-foreground": "#6b7a8c",
        accent: "#e0ebe0",
        "accent-foreground": "#3d4a5c",
        border: "#d8d4ca",
        input: "#e8e6e0",
        ring: "#5a7a5a",
        destructive: "#c45a4a",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Lora", "serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      animation: {
        "scroll-left": "scroll-left 30s linear infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
      keyframes: {
        "scroll-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
