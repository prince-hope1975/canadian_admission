import solid from "solid-start/vite";
import netlify from "solid-start-vercel";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    solid({
      adapter: netlify({
        edge: true,
      }),
    }),
  ],
});
