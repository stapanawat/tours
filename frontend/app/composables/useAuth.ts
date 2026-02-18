export interface User {
    id: string
    name: string
    email: string
    avatar?: string
}

export const useAuth = () => {
    const user = useCookie<User | null>('voyara_user', {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: '/'
    })

    const isLoggedIn = computed(() => !!user.value)

    const login = (userData: User) => {
        user.value = userData
    }

    const logout = () => {
        user.value = null
        const localePath = useLocalePath()
        return navigateTo(localePath('/auth/login'))
    }

    return {
        user,
        isLoggedIn,
        login,
        logout
    }
}
