import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import IndexPage from './index.vue'

const TourCardStub = {
    template: '<div data-testid="tour-card"></div>',
    props: ['tour']
}

const globalStubs = {
    stubs: {
        TourCard: TourCardStub,
        NuxtLink: {
            template: '<a><slot /></a>'
        },
        Icon: true
    }
}

describe('IndexPage', () => {
    it('renders hero section correctly', async () => {
        const component = await mountSuspended(IndexPage, { global: globalStubs })

        // Check hero heading
        expect(component.find('h1').exists()).toBe(true)

        // Check search input
        expect(component.find('input').exists()).toBe(true)
    })

    it('renders featured tours section', async () => {
        const component = await mountSuspended(IndexPage, { global: globalStubs })

        // Check for tour cards rendered via the stub
        expect(component.find('[data-testid="tour-card"]').exists()).toBe(true)
    })

    it('renders features section', async () => {
        const component = await mountSuspended(IndexPage, { global: globalStubs })

        // Features are rendered as glass-card divs
        const glassCards = component.findAll('.glass-card')
        expect(glassCards.length).toBeGreaterThan(0)
    })
})
