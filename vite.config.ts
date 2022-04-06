import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueI18n from '@intlify/vite-plugin-vue-i18n';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueI18n({
      // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
      // compositionOnly: false,

      // you need to set i18n resource including paths !
      compositionOnly: true,
      defaultSFCLang: 'json',
      include: path.resolve(__dirname, './locales/**')
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-i18n', '@vueuse/core'],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true, // Default `false`
        filepath: 'src/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: 'readonly' // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    viteExternalsPlugin({
      vue: 'Vue'
      // '@BookingOnline/vue3-vite-component-library-template': 'vue3vitecomponentlibrarytemplate'
    })
  ]
});
