import type { Config } from "tailwindcss";

/**
 * Paleta extraída do PPT original "1 Onboarding (Cartão de TODOS e VMK)".
 * laranja #DE642E (faixas de título), laranja escuro #C4511F, verde #00AA89 (títulos de seção),
 * azul-ardósia #2C3E50 (texto). Os tons "-ink" são variações mais escuras para garantir
 * contraste AA quando a cor aparece em texto sobre fundo claro.
 */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        laranja: { DEFAULT: "#DE642E", escuro: "#C4511F", ink: "#A9441A", claro: "#FBEDE6" },
        verde: { DEFAULT: "#00AA89", ink: "#00775F", claro: "#E3F5F0" },
        ardosia: { DEFAULT: "#2C3E50", suave: "#5A6B7B" },
        papel: "#F4F6F7",
        linha: "#DCE1E5",
      },
      fontFamily: {
        sans: ['"Figtree"', "system-ui", "-apple-system", '"Segoe UI"', "Roboto", "sans-serif"],
      },
      maxWidth: { leitura: "68ch" },
    },
  },
  plugins: [],
} satisfies Config;
