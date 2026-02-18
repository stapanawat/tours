<template>
  <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300" :class="scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : 'bg-transparent'">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')" class="flex items-center gap-2 group">
          <div class="w-9 h-9 bg-gradient-to-br from-primary to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-xl group-hover:shadow-primary/40 transition-shadow">
            <Icon name="material-symbols:explore" class="w-5 h-5 text-white" />
          </div>
          <span class="text-xl font-heading font-bold" :class="scrolled ? 'text-charcoal' : 'text-white'">
            {{ $t('brand') }}
          </span>
        </NuxtLink>

        <!-- Desktop Nav -->
        <div class="hidden lg:flex items-center gap-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="localePath(link.to)"
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
            :class="scrolled ? 'text-charcoal hover:text-primary hover:bg-primary-50' : 'text-white/90 hover:text-white hover:bg-white/10'"
          >
            {{ $t(link.label) }}
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-2">
          <!-- Language Switcher -->
          <div ref="langDropdown" class="relative">
            <button
              class="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all"
              :class="scrolled ? 'text-charcoal hover:bg-surface' : 'text-white/90 hover:bg-white/10'"
              @click="langOpen = !langOpen"
            >
              <Icon name="material-symbols:language" class="w-5 h-5" />
              <span class="hidden sm:inline">{{ currentLocaleName }}</span>
              <Icon name="material-symbols:expand-more" class="w-4 h-4 transition-transform" :class="{ 'rotate-180': langOpen }" />
            </button>
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-1 scale-95"
              enter-to-class="opacity-100 translate-y-0 scale-100"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div v-if="langOpen" class="absolute right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1 min-w-[140px] z-50">
                <button
                  v-for="loc in availableLocales"
                  :key="loc.code"
                  class="w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-primary-50 hover:text-primary transition-colors"
                  :class="locale === loc.code ? 'text-primary font-semibold bg-primary-50/50' : 'text-charcoal'"
                  @click="switchLocale(loc.code)"
                >
                  <Icon
                    :name="locale === loc.code ? 'material-symbols:radio-button-checked' : 'material-symbols:radio-button-unchecked'"
                    class="w-4 h-4"
                  />
                  {{ loc.name }}
                </button>
              </div>
            </Transition>
          </div>

          <!-- Auth Buttons (Desktop) -->
          <div class="hidden lg:flex items-center gap-3">
            <template v-if="isLoggedIn">
              <div class="flex items-center gap-3">
                <div class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <img :src="user?.avatar" class="w-7 h-7 rounded-full border border-primary-500/30" >
                  <span class="text-sm font-bold" :class="scrolled ? 'text-charcoal' : 'text-white'">{{ user?.name }}</span>
                </div>
                <button
                  class="p-2 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                  @click="logout()"
                >
                  <Icon name="ph:sign-out-bold" class="w-5 h-5" />
                </button>
              </div>
            </template>
            <NuxtLink
              v-else
              :to="localePath('/auth/login')"
              class="btn-gradient px-6 py-2 text-sm rounded-xl font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              {{ $t('nav.login') }}
            </NuxtLink>
          </div>

          <!-- Mobile Menu Button -->
          <button
            class="lg:hidden p-2 rounded-lg transition-colors"
            :class="scrolled ? 'text-charcoal hover:bg-surface' : 'text-white hover:bg-white/10'"
            @click="mobileOpen = !mobileOpen"
          >
            <Icon :name="mobileOpen ? 'material-symbols:close' : 'material-symbols:menu'" class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-xl">
        <div class="px-4 py-3 space-y-1">
          <template v-if="isLoggedIn">
            <div class="flex items-center gap-4 px-4 py-4 border-b border-gray-50 mb-2">
              <img :src="user?.avatar" class="w-12 h-12 rounded-full border-2 border-primary-500/20" >
              <div>
                <p class="font-bold text-charcoal">{{ user?.name }}</p>
                <p class="text-xs text-slate">{{ user?.email }}</p>
              </div>
            </div>
          </template>
          
          <NuxtLink
            v-for="link in navLinks"
            :key="link.to"
            :to="localePath(link.to)"
            class="flex items-center gap-3 px-4 py-3 rounded-xl text-charcoal hover:bg-primary-50 hover:text-primary transition-colors"
            @click="mobileOpen = false"
          >
            <Icon :name="link.icon" class="w-5 h-5 text-slate" />
            {{ $t(link.label) }}
          </NuxtLink>
          <div class="border-t border-gray-100 my-2" />
          <div class="pt-2">
            <button
              v-if="isLoggedIn"
              class="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-bold text-rose-500 bg-rose-50 rounded-xl"
              @click="logout(); mobileOpen = false"
            >
              <Icon name="ph:sign-out-bold" class="w-5 h-5" />
              {{ locale === 'th' ? 'ออกจากระบบ' : 'Logout' }}
            </button>
            <NuxtLink
              v-else
              :to="localePath('/auth/login')"
              class="flex items-center justify-center w-full px-4 py-3 text-sm font-bold text-white btn-gradient rounded-xl shadow-lg shadow-primary/20"
              @click="mobileOpen = false"
            >
              {{ $t('nav.login') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const { user, isLoggedIn, logout } = useAuth()

const scrolled = ref(false)
const langOpen = ref(false)
const mobileOpen = ref(false)
const langDropdown = ref<HTMLElement>()

const navLinks = [
  { to: '/', label: 'nav.home', icon: 'material-symbols:home-rounded' },
  { to: '/tours', label: 'nav.tours', icon: 'material-symbols:tour-rounded' },
  { to: '/promotions', label: 'nav.promotions', icon: 'material-symbols:local-offer-rounded' },
  { to: '/blog', label: 'nav.blog', icon: 'material-symbols:article-rounded' },
  { to: '/gallery', label: 'nav.gallery', icon: 'material-symbols:photo-library-rounded' },
  { to: '/about', label: 'nav.about', icon: 'material-symbols:info-rounded' },
  { to: '/contact', label: 'nav.contact', icon: 'material-symbols:mail-rounded' }
]

const availableLocales = computed(() =>
  (locales.value as { code: string; name: string }[]).map(l => ({ code: l.code, name: l.name }))
)

const currentLocaleName = computed(() =>
  availableLocales.value.find(l => l.code === locale.value)?.name || locale.value
)

const switchLocale = (code: string) => {
  setLocale(code as 'th' | 'en')
  langOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 50
  })

  document.addEventListener('click', (e) => {
    if (langDropdown.value && !langDropdown.value.contains(e.target as Node)) {
      langOpen.value = false
    }
  })
})
</script>
