// @ts-check

import solidJs from "@astrojs/solid-js";
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://tbroz15.github.io",
    base: "/mod-name-counter",
    integrations: [solidJs({ devtools: true })],

    fonts: [
        {
            provider: fontProviders.fontsource(),
            name: "JetBrains Mono",
            cssVariable: "--font-jetbrains-mono",
        },
    ],

    vite: {
        plugins: [tailwindcss()],
    },
});
