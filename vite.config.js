import { defineConfig } from 'vite';

export default defineConfig({
    // You can add more config here
    server: {
        host: '0.0.0.0', // Allow access on local network for testing on mobile
        port: 5173,       // Optional: set a specific port
    },
});