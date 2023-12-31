import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sentryVitePlugin({
      org: "vivek-inc",
      project: "react-test",
      authToken: process.env?.VITE_APP_SENTRY_AUTH_TOKEN ?? "",
    }),
  ],

  build: {
    sourcemap: true,
  },
});
