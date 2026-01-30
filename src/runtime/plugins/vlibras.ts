import { defineNuxtPlugin, useHead } from '#app'

declare global {
  interface Window {
    VLibras: {
      Widget: new (url: string) => void
    }
  }
}
export default defineNuxtPlugin(() => {
  useHead({
    script: [{
      src: 'https://vlibras.gov.br/app/vlibras-plugin.js',
      defer: true,
      onload: () => {
        if (window.VLibras) {
          new window.VLibras.Widget('https://vlibras.gov.br/app')
        }
      },
    }],
  })
})
