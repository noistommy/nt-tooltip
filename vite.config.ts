import { defineConfig, type UserConfig, type LibraryFormats } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

const reactExternal = [
  'react',
  'react-dom',
  'react/jsx-runtime',
  'react/jsx-dev-runtime',
  /^react\//,
  /^react-dom\//,
]


const commonConfig = {
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  plugins: [react()],
}

const libFormats: LibraryFormats[] = ['es', 'umd', 'cjs']

const libConfig: UserConfig = {
  ...commonConfig,
  build: {
    lib: {
      entry: resolve(__dirname, './src/tooltip.ts'),
      name: 'NtTooltip',
      formats: libFormats,
      fileName: (format) => {
        switch(format) {
          case 'es': return 'nt-tooltip.js'
          case 'umd': return 'nt-tooltip.umd.js'
          case 'cjs': return 'nt-tooltip.cjs'
          default: return `nt-tooltip.${format}.js`
        }
      }
    },
    rollupOptions: {
      external: reactExternal,
      output: {
        globals: {
          react: "React",
          'react-dom': 'ReactDom'
        },
        // Use `index.css` for css
        assetFileNames: () => {
          // if (assetInfo.name == "style.css") return "nt-tooltip.css"
          return "nt-tooltip.css"
        }
      }
    }
  }
}

const demoConfig: UserConfig = {
  ...commonConfig,
  root: "./demo",
  base: process.env.NODE_ENV === 'production' ? '/react-nt-tooltip/' : '/',
  server: {
    port: 5911
  }
}

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const executionMode = mode || "lib";
  process.env.NODE_ENV = command === 'build' ? "production" : "development";

  if(executionMode === 'demo') {
    return demoConfig
  } else {
    return libConfig
  }
})
