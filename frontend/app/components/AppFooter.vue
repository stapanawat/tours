<template>
  <footer class="bg-primary-900 text-white pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="lg:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <div class="w-9 h-9 bg-gradient-to-br from-accent to-accent-500 rounded-xl flex items-center justify-center">
              <Icon name="material-symbols:explore" class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-heading font-bold text-white">{{ $t('brand') }}</span>
          </div>
          <p class="text-white/60 text-sm leading-relaxed mb-6">
            {{ $t('footer.description') }}
          </p>
          <!-- Social -->
          <div class="flex gap-3">
            <a
v-for="social in socials" :key="social.icon" :href="social.url" target="_blank"
              class="w-10 h-10 rounded-xl bg-white/10 hover:bg-accent flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
              <Icon :name="social.icon" class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="font-heading font-semibold text-white mb-4">{{ $t('footer.quick_links') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="localePath(link.to)" class="text-white/60 text-sm hover:text-accent transition-colors flex items-center gap-2">
                <Icon name="material-symbols:chevron-right" class="w-4 h-4" />
                {{ $t(link.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="font-heading font-semibold text-white mb-4">{{ $t('footer.support') }}</h4>
          <ul class="space-y-3">
            <li v-for="link in supportLinks" :key="link.to">
              <NuxtLink :to="localePath(link.to)" class="text-white/60 text-sm hover:text-accent transition-colors flex items-center gap-2">
                <Icon name="material-symbols:chevron-right" class="w-4 h-4" />
                {{ $t(link.label) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-heading font-semibold text-white mb-4">{{ $t('home.newsletter_title') }}</h4>
          <p class="text-white/60 text-sm mb-4">{{ $t('home.newsletter_subtitle') }}</p>
          <form class="flex gap-2" @submit.prevent="handleSubscribe">
            <input
              v-model="email"
              type="email"
              :placeholder="$t('home.newsletter_placeholder')"
              class="flex-1 px-4 py-2.5 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/10 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent text-sm"
            >
            <button type="submit" class="px-4 py-2.5 bg-accent hover:bg-accent-500 rounded-xl transition-colors">
              <Icon name="material-symbols:send-rounded" class="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      <!-- Contact Info Bar -->
      <div class="border-t border-white/10 pt-8 mb-8">
        <div class="flex flex-wrap gap-6 justify-center text-sm text-white/50">
          <a href="mailto:hello@voyara.co" class="flex items-center gap-2 hover:text-accent transition-colors">
            <Icon name="material-symbols:mail-rounded" class="w-4 h-4" />
            hello@voyara.co
          </a>
          <a href="tel:+6621234567" class="flex items-center gap-2 hover:text-accent transition-colors">
            <Icon name="material-symbols:phone-rounded" class="w-4 h-4" />
            +66 2 123 4567
          </a>
          <span class="flex items-center gap-2">
            <Icon name="material-symbols:location-on-rounded" class="w-4 h-4" />
            กรุงเทพมหานคร, ประเทศไทย
          </span>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <p>{{ $t('footer.copyright') }}</p>
        <div class="flex gap-4">
          <NuxtLink :to="localePath('/terms')" class="hover:text-accent transition-colors">{{ $t('footer.terms') }}</NuxtLink>
          <NuxtLink :to="localePath('/privacy')" class="hover:text-accent transition-colors">{{ $t('footer.privacy') }}</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useAppToast } from '~/composables/useAppToast'

const { t } = useI18n()
const localePath = useLocalePath()
const toast = useAppToast()
const email = ref('')

const quickLinks = [
  { to: '/tours', label: 'nav.tours' },
  { to: '/promotions', label: 'nav.promotions' },
  { to: '/blog', label: 'nav.blog' },
  { to: '/gallery', label: 'nav.gallery' },
  { to: '/about', label: 'nav.about' }
]

const supportLinks = [
  { to: '/contact', label: 'nav.contact' },
  { to: '/faq', label: 'nav.faq' },
  { to: '/terms', label: 'footer.terms' },
  { to: '/privacy', label: 'footer.privacy' }
]

const socials = [
  { icon: 'mdi:facebook', url: 'https://facebook.com' },
  { icon: 'mdi:instagram', url: 'https://instagram.com' },
  { icon: 'mdi:youtube', url: 'https://youtube.com' },
  { icon: 'mdi:twitter', url: 'https://twitter.com' },
  { icon: 'mdi:github', url: 'https://github.com/stapanawat/tours' }
]

const handleSubscribe = () => {
  if (email.value) {
    toast.success(t('toast.newsletter_success'))
    email.value = ''
  }
}
</script>
