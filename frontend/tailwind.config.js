import { defineConfig } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        asap: ["Asap", "sans-serif"],
        average: ["Average Sans", "sans-serif"],
        telex: ["Telex", "sans-serif"],
        tomorrow: ["Tomorrow", "sans-serif"],
      },
      textShadow: {
        glow: "0 0 10px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.4)",
      },
    },
  },
  plugins: [
    // your custom text-shadow util
    function ({ addUtilities, theme }) {
      const shadows = theme("textShadow");
      const utilities = Object.keys(shadows).map((key) => ({
        [`.text-${key}`]: { textShadow: shadows[key] },
      }));
      addUtilities(utilities);
    },

    // add the official line clamp plugin
    lineClamp,
  ],
});
