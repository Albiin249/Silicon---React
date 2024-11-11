import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // Detta kommer göra att varje SCSS-fil får main.scss importerat automatiskt
        additionalData: `@import "/src/components/css/main.css";`
      }
    }
  }
})
