import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'nuxt',
        // optimizeDeps: {
        //   include: ['@nuxt/test-utils', 'happy-dom']
        // }
    }
})
