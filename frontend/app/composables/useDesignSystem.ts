export const useDesignSystem = () => {
    const { locale } = useI18n()

    const tokens = {
        colors: {
            primary: '#14B8A6',
            gold: '#D4A853',
            dark: '#060B18'
        },
        animations: {
            reveal: 'animate-reveal',
            scale: 'animate-scale-in',
            slideLeft: 'animate-slide-in-left',
            slideRight: 'animate-slide-in-right'
        }
    }

    const getGlassClass = (intensity: 'thin' | 'medium' | 'thick' = 'medium') => {
        return `glass-${intensity}`
    }

    return {
        tokens,
        getGlassClass,
        locale
    }
}
