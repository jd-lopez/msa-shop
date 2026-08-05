// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

const configuredSite =
  process.env.PUBLIC_SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = configuredSite
  ? configuredSite.startsWith("http")
    ? configuredSite
    : `https://${configuredSite}`
  : undefined;

// https://astro.build/config
export default defineConfig({
  site,
  redirects: {
    "/inicio": "/",
    "/home": "/",
    "/services": "/servicios",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
