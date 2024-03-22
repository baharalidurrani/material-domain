import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  // base: "https://baharalidurrani.github.io/material-domain",
  plugins: [react(), basicSsl()],
  // optimizeDeps: {
  //   include: [
  //     "@mui/material/Tooltip",
  //     "@emotion/styled",
  //     "@mui/material/Unstable_Grid2",
  //   ],
  // },
  resolve: {
    alias: {
      src: "/src",
    },
  },
});
