import typescript from '@rollup/plugin-typescript';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

const resolvePath = (file: string) => resolve(__dirname, file);

export default defineConfig({
  server: {
    port: 3000,
    strictPort: true, // throw error if port in use
    fs: {
      strict: false
    }
  },
  build: {
    lib: {
      entry: resolvePath('./src/main.ts'),
      name: 'toguro',
      fileName: (format) => `main.${format}.js`
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ['vue', '@vueuse/core', 'axios']
    }
  },
  plugins: [
    vue({
      script: {
        refSugar: true
      }
    }),
    typescript({
      target: 'es2020',
      rootDir: resolvePath('.'),
      declaration: true,
      declarationDir: resolvePath('dist'),
      exclude: resolvePath('node_modules/**'),
      allowSyntheticDefaultImports: true
    })
    // in case you want to integrate it to an existing application running vue under an alias
    // viteExternalsPlugin({
    //   vue: 'vue3',
    //   '@vueuse/core': 'VueUse'
    // })
  ],
  resolve: {
    dedupe: ['vue'],
    alias: {
      '@': resolvePath('./src'),
      '@assets': resolvePath('./src/assets'),
      '@styles': resolvePath('./src/assets/styles'),

      // Views
      '@components': resolvePath('./src/views/components'),
      '@pages': resolvePath('./src/views/pages'),

      // Services
      '@services': resolvePath('./src/services'),

      // Helpers
      '@helpers': resolvePath('./src/helpers'),

      // Store
      '@store': resolvePath('./src/store')
    }
  }
});
