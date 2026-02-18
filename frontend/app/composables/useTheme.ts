export type Theme = 'luxury' | 'noble' | 'royal' | 'emerald'

export const useTheme = () => {
    const theme = useCookie<Theme>('voyara_theme', {
        default: () => 'luxury',
        path: '/'
    })

    const setTheme = (newTheme: Theme) => {
        theme.value = newTheme
        if (import.meta.client) {
            document.documentElement.setAttribute('data-theme', newTheme)
        }
    }

    const initTheme = () => {
        if (import.meta.client) {
            document.documentElement.setAttribute('data-theme', theme.value)
        }
    }

    return {
        theme,
        setTheme,
        initTheme
    }
}
