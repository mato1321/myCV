import { defineConfig } from '@lovable.dev/vite-tanstack-config'

export default defineConfig({
  vite: {
    // 你的網站放在 https://mato1321.github.io/myCV/ 底下
    base: '/myCV/',

    // prerender 會在背景開一台預覽伺服器，
    // GitHub Actions 的機器沒有 IPv6，不指定的話會直接掛掉
    preview: {
      host: '127.0.0.1',
    },
  },

  // 不要建置伺服器版本（GitHub Pages 只能放靜態檔案）
  nitro: false,

  tanstackStart: {
    server: {
      entry: 'server',
    },

    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      autoStaticPathsDiscovery: true,

      // 一定要 false，理由見下面
      crawlLinks: false,
    },
  },
})
