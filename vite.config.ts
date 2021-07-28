import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ViteMDX from 'vite-plugin-mdx-vue'
import Components from 'vite-plugin-components'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import { componentResolver } from '@chakra-ui/vue-auto-import'
import { handleSSG } from './src/utils/ssg'
import { MdxComponents } from './src/utils/MdxComponents'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.mdx$/] }),
    Pages({
      extensions: ['mdx', 'vue'],
      pagesDir: ['./src/pages']
    }),
    Components({
      customComponentResolvers: [componentResolver],
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'mdx'],

      // allow auto import and register components used in markdown
      customLoaderMatcher: (path) => path.endsWith('.mdx'),
    }),
    ViteMDX({
      wrapperComponent: 'mdx-layout-wrapper',
      mdxComponents: MdxComponents,
    }),
    Layouts({
      layoutsDir: './src/layouts'
    }),
  ],
  // @ts-ignore
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
    onPageRendered: handleSSG,
  },
})
