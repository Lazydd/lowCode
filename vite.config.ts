import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 8080,
        open: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
                rewrite: (path) => path.replace("/^/api/", ""),
            },
        },
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                additionalData: '@import "./src/assets/global.less";',
            },
        },
    },
    base: "./",
    build: {
        outDir: "dist/test",
        terserOptions: {
            compress: {
                drop_console: false, //去掉console
                drop_debugger: false, // 去掉debugger
            },
        },
    },
});
