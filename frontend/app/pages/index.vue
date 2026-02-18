<template>
  <div class="bg-dark-950">
    <!-- ============ HERO ============ -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&h=1080&fit=crop"
          alt="Hero background"
          class="w-full h-full object-cover scale-105"
        >
        <div class="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-900/40 to-dark-950" />
        <div class="absolute inset-0 bg-gradient-to-r from-dark-950/50 to-transparent" />
      </div>

      <!-- Grid pattern overlay -->
      <div class="absolute inset-0 bg-grid-pattern opacity-30" />

      <!-- Radial glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow opacity-40" />

      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <!-- Top badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8 animate-fade-in-up">
          <span class="w-2 h-2 rounded-full bg-primary-400 animate-pulse-soft" />
          <span class="text-sm text-white/70 font-medium">{{ locale === 'th' ? '✨ ทัวร์พรีเมียม กว่า 45+ เส้นทาง' : '✨ 45+ Premium Tour Experiences' }}</span>
        </div>

        <h1 class="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 animate-fade-in-up leading-tight tracking-tight">
          {{ locale === 'th' ? 'ค้นพบประสบการณ์' : 'Discover' }}
          <br>
          <span class="gradient-text">{{ locale === 'th' ? 'ที่เหนือจินตนาการ' : 'Extraordinary' }}</span>
        </h1>

        <p class="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto animate-fade-in-up font-light leading-relaxed" style="animation-delay: 0.2s">
          {{ $t('hero.subtitle') }}
        </p>

        <!-- Search Bar -->
        <div class="glass-dark rounded-2xl p-2.5 max-w-2xl mx-auto animate-fade-in-up border border-white/10" style="animation-delay: 0.4s">
          <div class="flex flex-col sm:flex-row gap-2">
            <div class="flex-1 relative">
              <Icon name="material-symbols:search-rounded" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
              <input
                v-model="searchQuery"
                :placeholder="$t('hero.search_placeholder')"
                class="w-full pl-12 pr-4 py-4 bg-white/5 text-white placeholder:text-white/25 rounded-xl border border-white/5 focus:border-primary-500/50 focus:outline-none focus:ring-1 focus:ring-primary-500/30 transition-all text-base"
              >
            </div>
            <NuxtLink
              :to="localePath('/tours')"
              class="btn-gradient px-8 py-4 text-base"
            >
              <Icon name="material-symbols:search-rounded" class="w-5 h-5" />
              {{ $t('common.search') }}
            </NuxtLink>
          </div>
        </div>

        <!-- Stats -->
        <div class="flex flex-wrap justify-center gap-10 mt-16 animate-fade-in-up" style="animation-delay: 0.6s">
          <div v-for="stat in stats" :key="stat.label" class="text-center group">
            <div class="text-3xl md:text-4xl font-bold text-gold font-heading group-hover:scale-110 transition-transform">{{ stat.value }}</div>
            <div class="text-sm text-white/40 mt-1">{{ $t(stat.label) }}</div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span class="text-xs text-white/30 uppercase tracking-widest">{{ locale === 'th' ? 'เลื่อนลง' : 'Scroll' }}</span>
        <div class="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>

    <!-- ============ FEATURED TOURS ============ -->
    <section class="relative py-24 px-4">
      <!-- Subtle background -->
      <div class="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950" />
      <div class="absolute inset-0 bg-grid-pattern opacity-20" />

      <div class="relative max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-14">
          <div>
            <p class="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3">{{ locale === 'th' ? 'ทัวร์แนะนำ' : 'Featured' }}</p>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white gold-underline">{{ $t('home.featured_title') }}</h2>
            <p class="text-white/40 mt-4 max-w-lg">{{ $t('home.featured_subtitle') }}</p>
          </div>
          <NuxtLink :to="localePath('/tours')" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-primary-500/50 hover:bg-white/5 transition-all font-medium text-sm">
            {{ $t('home.view_all') }}
            <Icon name="material-symbols:arrow-forward-rounded" class="w-5 h-5" />
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          <TourCard v-for="(tour, i) in featuredTours" :key="tour.id" :tour="tour" class="animate-reveal" :style="{ animationDelay: `${i * 0.1}s` }" />
        </div>

        <div class="text-center mt-10 md:hidden">
          <NuxtLink :to="localePath('/tours')" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 text-white/70 hover:text-white hover:border-primary-500/50 transition-all font-medium text-sm">
            {{ $t('home.view_all') }}
            <Icon name="material-symbols:arrow-forward-rounded" class="w-5 h-5" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ============ FEATURES / WHY CHOOSE US ============ -->
    <section class="relative py-24 px-4 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-dark-900 via-primary-900/30 to-dark-900" />
      <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-radial-glow opacity-30" />

      <div class="relative max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-3">{{ locale === 'th' ? 'ทำไมต้องเรา' : 'Why Us' }}</p>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{{ $t('home.features_title') }}</h2>
          <p class="text-white/40 mx-auto max-w-xl">{{ $t('home.features_subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(feature, i) in features"
            :key="feature.key"
            class="glass-card p-7 group animate-reveal"
            :style="{ animationDelay: `${i * 0.08}s` }"
          >
            <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300', feature.bgClass]">
              <Icon :name="feature.icon" :class="['w-7 h-7', feature.iconClass]" />
            </div>
            <h3 class="font-heading font-bold text-white text-lg mb-2">{{ $t(feature.titleKey) }}</h3>
            <p class="text-sm text-white/40 leading-relaxed">{{ $t(feature.descKey) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TESTIMONIALS ============ -->
    <section class="relative py-24 px-4">
      <div class="absolute inset-0 bg-dark-950" />
      <div class="absolute inset-0 bg-grid-pattern opacity-15" />

      <div class="relative max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <p class="text-gold text-sm font-semibold uppercase tracking-widest mb-3">{{ locale === 'th' ? 'เสียงจากนักเดินทาง' : 'Testimonials' }}</p>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{{ $t('home.testimonials_title') }}</h2>
          <p class="text-white/40 mx-auto max-w-xl">{{ $t('home.testimonials_subtitle') }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-7">
          <div
            v-for="(item, i) in testimonialData"
            :key="item.id"
            class="glass-card p-7 animate-reveal"
            :style="{ animationDelay: `${i * 0.1}s` }"
          >
            <!-- Stars -->
            <div class="flex gap-0.5 mb-5">
              <Icon
                v-for="s in 5"
                :key="s"
                name="material-symbols:star-rounded"
                :class="s <= item.rating ? 'text-amber-400' : 'text-white/10'"
                class="w-5 h-5"
              />
            </div>
            <!-- Quote -->
            <p class="text-white/70 leading-relaxed mb-6 text-sm italic">
              "{{ item.text[locale as 'th' | 'en'] }}"
            </p>
            <!-- Author -->
            <div class="flex items-center gap-3 pt-5 border-t border-white/5">
              <img :src="item.avatar" :alt="item.name" class="w-11 h-11 rounded-full object-cover ring-2 ring-primary-500/30">
              <div>
                <p class="text-sm font-semibold text-white">{{ item.name }}</p>
                <p class="text-xs text-white/30">{{ item.location[locale as 'th' | 'en'] }} · {{ item.tourTitle[locale as 'th' | 'en'] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CTA SECTION ============ -->
    <section class="relative py-28 px-4 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=1920&h=600&fit=crop"
          alt="CTA background"
          class="w-full h-full object-cover"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-900/85 to-primary-900/70" />
      </div>

      <!-- Radial glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-glow opacity-30" />

      <div class="relative z-10 max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-5xl font-heading font-bold text-white mb-5 leading-tight">
          {{ locale === 'th' ? 'พร้อมออกเดินทาง' : 'Ready to Start' }}
          <br>
          <span class="gradient-text">{{ locale === 'th' ? 'กับเราหรือยัง?' : 'Your Journey?' }}</span>
        </h2>
        <p class="text-lg text-white/40 mb-10 max-w-xl mx-auto">
          {{ locale === 'th' ? 'เลือกทัวร์ที่ใช่ แล้วเราจะดูแลทุกอย่างให้คุณ' : 'Choose your perfect tour and we\'ll take care of everything for you.' }}
        </p>
        <div class="flex flex-wrap gap-4 justify-center">
          <NuxtLink :to="localePath('/tours')" class="btn-gradient text-lg px-10 py-4">
            <Icon name="material-symbols:explore-rounded" class="w-5 h-5" />
            {{ $t('hero.cta') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 font-semibold rounded-xl hover:bg-white/5 hover:border-white/30 hover:text-white transition-all text-lg">
            <Icon name="material-symbols:mail-rounded" class="w-5 h-5" />
            {{ $t('nav.contact') }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { tours, testimonials } from '~/data/mockData'

const { locale } = useI18n()
const localePath = useLocalePath()
const searchQuery = ref('')

const featuredTours = computed(() => tours.filter(t => t.featured).slice(0, 6))
const testimonialData = testimonials

const stats = [
  { value: '12,500+', label: 'about.stats_travelers' },
  { value: '45+', label: 'about.stats_tours' },
  { value: '15+', label: 'about.stats_destinations' },
  { value: '7', label: 'about.stats_years' }
]

const features = [
  { key: 'expert', icon: 'material-symbols:verified-rounded', titleKey: 'features.expert_guides', descKey: 'features.expert_guides_desc', bgClass: 'bg-primary-500/10 group-hover:bg-primary-500/20', iconClass: 'text-primary-400' },
  { key: 'custom', icon: 'material-symbols:travel-explore-rounded', titleKey: 'features.custom_trips', descKey: 'features.custom_trips_desc', bgClass: 'bg-gold/10 group-hover:bg-gold/20', iconClass: 'text-gold' },
  { key: 'price', icon: 'material-symbols:savings-rounded', titleKey: 'features.best_price', descKey: 'features.best_price_desc', bgClass: 'bg-emerald-500/10 group-hover:bg-emerald-500/20', iconClass: 'text-emerald-400' },
  { key: 'support', icon: 'material-symbols:support-agent-rounded', titleKey: 'features.support_247', descKey: 'features.support_247_desc', bgClass: 'bg-blue-500/10 group-hover:bg-blue-500/20', iconClass: 'text-blue-400' },
  { key: 'safe', icon: 'material-symbols:shield-with-heart-rounded', titleKey: 'features.safe_travel', descKey: 'features.safe_travel_desc', bgClass: 'bg-rose-500/10 group-hover:bg-rose-500/20', iconClass: 'text-rose-400' },
  { key: 'authentic', icon: 'material-symbols:explore-rounded', titleKey: 'features.authentic', descKey: 'features.authentic_desc', bgClass: 'bg-purple-500/10 group-hover:bg-purple-500/20', iconClass: 'text-purple-400' }
]

useHead({
  title: 'Voyara — Premium Tour Experiences'
})

useSeoMeta({
  title: 'Voyara — Premium Tour Experiences',
  ogTitle: 'Voyara — Premium Tour Experiences',
  description: 'Discover extraordinary travel experiences with expert local guides.',
  ogDescription: 'Discover extraordinary travel experiences with expert local guides.',
})
</script>
