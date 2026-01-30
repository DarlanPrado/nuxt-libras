import { defineNuxtModule, addPlugin, createResolver, addComponentsDir } from '@nuxt/kit'
import { name, version } from '../package.json'

export default defineNuxtModule({
  meta: {
    name,
    version,
    configKey: name,
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },

  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    console.log('Nuxt Libras Module loaded')

    addComponentsDir({
      path: resolve('./runtime/components'),
      global: true,
    })

    addPlugin(resolve('./runtime/plugins/vlibras.ts'))
  },
})
