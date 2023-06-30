import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env.API_RANDOM_BACKGROUD': JSON.stringify(process.env.API_RANDOM_BACKGROUD),
        'process.env.ACCESS_KEY_API_RANDOM_BACKGROUND': JSON.stringify(process.env.ACCESS_KEY_API_RANDOM_BACKGROUND)
    },
    plugins: [
        react({
            jsxRuntime: 'automatic' // Add this line
        }),
        viteTsconfigPaths()
    ],
    server: {
        port: Number(process.env.PORT)
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
    // base: '/dashboard/'
});
