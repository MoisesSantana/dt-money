import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/pages': path.resolve(__dirname, 'src/pages'),
      '@/components': path.resolve(__dirname, 'src/components'),
      '@/enums': path.resolve(__dirname, 'src/enums'),
      '@/hooks': path.resolve(__dirname, 'src/hooks'),
      '@/interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@/schemas': path.resolve(__dirname, 'src/schemas'),
      '@/styles': path.resolve(__dirname, 'src/styles'),
      '@/utils': path.resolve(__dirname, 'src/utils'),
    }
  },
});
