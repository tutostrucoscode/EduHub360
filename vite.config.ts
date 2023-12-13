import million from 'million/compiler'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const manifestForPlugin: Partial<VitePWAOptions> = {
    registerType: 'prompt',
    manifest: {
        name: 'EduHub360',
        short_name: 'EduHub360',
        description: 'Sistema de gestion educativa',
        display: 'standalone',
        orientation: 'portrait',
        start_url: '/',
        scope: '/',
        lang: 'es',
        icons: [
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    },
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [million.vite({ auto: true }), react(), VitePWA(manifestForPlugin)],
})
