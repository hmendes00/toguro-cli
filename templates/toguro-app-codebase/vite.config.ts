import typescript from '@rollup/plugin-typescript';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

const resolvePath = (file: string) => resolve(__dirname, file);

export default defineConfig(({ mode }) => {
  let externals;
  if (mode === 'production') {
    externals = viteExternalsPlugin({
      vue: 'vue3',
      '@vueuse/core': 'vueUse'
    });
  }

  return {
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
        external: ['vue', '@vueuse/core'],
        output: {
          sourcemap: mode !== 'production'
        }
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
        allowSyntheticDefaultImports: true,
        sourceMap: mode !== 'production',
        inlineSources: mode !== 'production'
      }),
      // in case you want to integrate it to an existing application running vue under an alias
      externals
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

        // Models
        '@models': resolvePath('./src/models'),

        // Store
        '@store': resolvePath('./src/store')
      }
    }
  };
});
