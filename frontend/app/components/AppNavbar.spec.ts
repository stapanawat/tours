import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppNavbar from './AppNavbar.vue'

describe('AppNavbar', () => {
    it('renders key elements', async () => {
        const component = await mountSuspended(AppNavbar, {
            global: {
                stubs: {
                    NuxtLink: {
                        template: '<a><slot /></a>',
                    },
                    Icon: true
                }
            }
        })

        expect(component.text()).toBeTruthy()
    })

    it('toggles language dropdown', async () => {
        const component = await mountSuspended(AppNavbar, {
            global: {
                stubs: {
                    NuxtLink: {
                        template: '<a><slot /></a>',
                    },
                    Icon: true
                }
            }
        })

        // Find language switcher button (it has a click handler to toggle langOpen)
        // Based on the code: <button @click="langOpen = !langOpen" ...>
        // It's the button that contains currentLocaleName

        const buttons = component.findAll('button')
        // The language switcher is likely the first button or we can find by class/content
        // inspecting AppNavbar.vue again...
        // The lang switcher button has "text-sm font-medium" and contains an Icon and currentLocaleName

        // Let's try to find it by the click action or class
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const langButton = buttons.find((b: any) => b.text().includes('English') || b.text().includes('ไทย'))

        if (!langButton) {
            // Fallback or fail
            // verify if mounted correctly
            console.log('HTML:', component.html())
            throw new Error('Language button not found')
        }

        await langButton.trigger('click')

        // After click, the dropdown should appear
        // <div v-if="langOpen" ...>
        // It contains buttons for availableLocales

        const dropdown = component.find('.absolute.right-0')
        expect(dropdown.exists()).toBe(true)
    })
})
