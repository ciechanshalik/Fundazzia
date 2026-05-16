/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        serif: ['"Playfair Display"', "Georgia", "serif"]
      },
      colors: {
        ink: "#07120f",
        forest: "#0b3b2e",
        moss: "#2f6f55",
        cream: "#f7f0e4",
        porcelain: "#fffaf1",
        gold: "#c69a48",
        ember: "#d8793f"
      },
      boxShadow: {
        glow: "0 24px 90px rgba(198,154,72,.18)",
        panel: "0 30px 80px rgba(7,18,15,.12)"
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 20%, rgba(198,154,72,.13), transparent 30%), radial-gradient(circle at 80% 0%, rgba(47,111,85,.20), transparent 30%)"
      }
    }
  },
  plugins: []
};
