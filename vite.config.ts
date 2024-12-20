import { defineConfig } from 'vite'
import path from "path"
import legacy from '@vitejs/plugin-legacy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [legacy({
      targets: ['defaults', 'not IE 11'],
    })],
  build: {
      rollupOptions: {
          preserveEntrySignatures: 'strict',
          input: {
            'index': path.resolve(__dirname, "src/index.ts"),
            'toggle-switch': path.resolve(__dirname, "src/toggle-switch.ts"),
            'slider': path.resolve(__dirname, "src/slider.ts"),
            'minput': path.resolve(__dirname, "src/minput.ts"),
            'tabs': path.resolve(__dirname, "src/tabs.ts"),
            'modal': path.resolve(__dirname, "src/modal.ts"),
            'tooltip':path.resolve(__dirname, "src/tooltip.ts"),
            'md-input':path.resolve(__dirname, "src/md-input.ts"),
            'txtloop':path.resolve(__dirname, "src/txtloop.ts"),
            'dropdown':path.resolve(__dirname, "src/dropdown.ts"),
            'timetick':path.resolve(__dirname, "src/timetick.ts"),
            'navmenu':path.resolve(__dirname, "src/navmenu.ts"),
            'accordion': path.resolve(__dirname, 'src/accordion.ts'),
            'dtpick': path.resolve(__dirname, 'src/dtpick.ts'),
            'sgn-box': path.resolve(__dirname, 'src/suggestion-box.ts'),
            'scroller':path.resolve(__dirname, "src/scroller.ts")
          },
          output: [{
            format: 'es',
            entryFileNames: '[name].js'
          }]
      }
  },
  server: {
    host: "0.0.0.0",
    proxy: {
        '^/aalam/.*': 'http://192.168.122.233',
    }
  }
})

