import { defineConfig, loadEnv } from 'vite';

export default defineConfig((command) => {
  // reusable config for both dev and preview
  const serverConfig = {
    host: true,
    port: Number(process.env.PORT),
    strictPort: true,
  };

  const env = loadEnv(command.mode, process.cwd(), '');

  return {
    base: '/',
    build: {
      manifest: true,
      outDir: 'build',
      minify: true,
      sourcemap: env.VITE_DEBUG_MODE === 'true' ? true : false,
      rollupOptions: {
        output: {
          entryFileNames: env.VITE_DX_INTEGRATION === 'true' ? `assets/[name].js` : `assets/[name].[hash].js`,
          chunkFileNames: env.VITE_DX_INTEGRATION === 'true' ? `assets/[name].js` : `assets/[name].[hash].js`,
          assetFileNames: env.VITE_DX_INTEGRATION === 'true' ? `assets/[name].[ext]` : `assets/[name].[hash].[ext]`,
        }
      },
    },
    assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.3dm'],
    preview: serverConfig,
    server: serverConfig,
  };
});
