import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: "https://gabriel-dp.github.io/",
	plugins: [react(), tsconfigPaths(), svgr()],
});

