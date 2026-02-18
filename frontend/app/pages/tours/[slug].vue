<template>
  <div v-if="tour" class="bg-dark-950 min-h-screen">
    <!-- Navbar Spacing -->
    <div class="pt-32" />

    <!-- Hero Gallery -->
    <div class="px-4 max-w-7xl mx-auto">
      <div class="relative h-[40vh] lg:h-[60vh] overflow-hidden rounded-3xl border border-white/10 shadow-2xl group">
        <img :src="tour.gallery[activeImage]" :alt="tour.title[locale as 'th' | 'en']" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" >
        <div class="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/20 to-transparent" />
        
        <div class="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
          <div class="animate-reveal">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-bold tracking-widest uppercase border border-primary-500/30 mb-4">
              <Icon name="ph:map-pin-fill" class="w-3 h-3" />
              {{ tour.destination[locale as 'th' | 'en'] }}
            </span>
            <h1 class="text-3xl md:text-6xl font-heading font-bold text-white tracking-tight mb-6">{{ tour.title[locale as 'th' | 'en'] }}</h1>
            
            <div class="flex flex-wrap gap-3">
              <button
                v-for="(img, i) in tour.gallery.slice(0, 5)" 
                :key="i" 
                :class="['w-16 h-12 rounded-xl overflow-hidden border-2 transition-all duration-300 transform', activeImage === i ? 'border-primary-500 scale-110 shadow-lg shadow-primary-500/20' : 'border-white/20 hover:border-white/40 shadow-sm']"
                @click="activeImage = i"
              >
                <img :src="img" class="w-full h-full object-cover" >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-20">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Main Content -->
        <div class="flex-1 space-y-12 animate-slide-in-left">
          <!-- Quick Info Cards -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="info in quickInfo" :key="info.label" class="glass-card p-6 border border-white/10 hover:border-primary-500/30 transition-all duration-500">
              <div class="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4 border border-primary-500/20">
                <Icon :name="info.icon" class="w-5 h-5 text-primary-400" />
              </div>
              <p class="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">{{ info.label }}</p>
              <p class="text-base font-bold text-white tracking-wide">{{ info.value }}</p>
            </div>
          </div>

          <!-- Description -->
          <div class="glass-card p-8 border border-white/10">
            <h2 class="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full" />
              {{ locale === 'th' ? 'รายละเอียดโปรแกรม' : 'Tour Description' }}
            </h2>
            <p class="text-white/60 leading-relaxed text-lg">{{ tour.description[locale as 'th' | 'en'] }}</p>
          </div>

          <!-- Highlights -->
          <div class="glass-card p-8 border border-white/10">
            <h2 class="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full" />
              {{ $t('tour.highlights') }}
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="h in tour.highlights[locale as 'th' | 'en']" :key="h" class="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary-500/20 transition-all duration-300">
                <div class="mt-1 w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                  <Icon name="ph:check-bold" class="w-3 h-3 text-primary-400" />
                </div>
                <span class="text-white/80 font-medium">{{ h }}</span>
              </div>
            </div>
          </div>

          <!-- Itinerary -->
          <div class="glass-card p-8 border border-white/10">
            <h2 class="text-2xl font-heading font-bold text-white mb-10 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full" />
              {{ $t('tour.itinerary') }}
            </h2>
            <div class="relative space-y-12">
              <div class="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary-500 via-primary-500/20 to-transparent" />
              
              <div v-for="(day, i) in tour.itinerary" :key="i" class="relative pl-12">
                <div class="absolute left-0 top-0 w-10 h-10 rounded-full bg-dark-900 border-4 border-primary-500 text-white flex items-center justify-center font-bold text-sm z-10 shadow-lg shadow-primary-500/30 transition-transform duration-300 hover:scale-110">
                  {{ day.day }}
                </div>
                <div class="group">
                  <h4 class="text-xl font-heading font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{{ day.title[locale as 'th' | 'en'] }}</h4>
                  <p class="text-white/50 leading-relaxed">{{ day.description[locale as 'th' | 'en'] }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Includes / Excludes -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="glass-card p-8 border border-emerald-500/20 bg-emerald-500/[0.03]">
              <h3 class="text-xl font-heading font-bold text-emerald-400 mb-6 flex items-center gap-3">
                <Icon name="ph:check-circle-bold" class="w-6 h-6" />
                {{ $t('tour.includes') }}
              </h3>
              <ul class="space-y-4">
                <li v-for="item in tour.includes[locale as 'th' | 'en']" :key="item" class="text-white/70 flex items-start gap-3">
                  <Icon name="ph:check-bold" class="w-4 h-4 text-emerald-500/80 mt-1 flex-shrink-0" />
                  <span class="text-sm">{{ item }}</span>
                </li>
              </ul>
            </div>
            <div class="glass-card p-8 border border-rose-500/20 bg-rose-500/[0.03]">
              <h3 class="text-xl font-heading font-bold text-rose-400 mb-6 flex items-center gap-3">
                <Icon name="ph:x-circle-bold" class="w-6 h-6" />
                {{ $t('tour.excludes') }}
              </h3>
              <ul class="space-y-4">
                <li v-for="item in tour.excludes[locale as 'th' | 'en']" :key="item" class="text-white/70 flex items-start gap-3">
                  <Icon name="ph:x-bold" class="w-4 h-4 text-rose-500/80 mt-1 flex-shrink-0" />
                  <span class="text-sm">{{ item }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Reviews -->
          <div class="glass-card p-8 border border-white/10">
            <h2 class="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <div class="w-1 h-8 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full" />
              {{ $t('tour.reviews') }} ({{ tourReviews.length }})
            </h2>
            <div class="space-y-6">
              <div v-for="review in tourReviews" :key="review.id" class="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300">
                <div class="flex items-center gap-4 mb-4">
                  <img :src="review.avatar" class="w-12 h-12 rounded-full border border-white/10" >
                  <div class="flex-1">
                    <div class="flex items-center justify-between">
                      <p class="font-bold text-white tracking-wide">{{ review.userName }}</p>
                      <span class="text-xs text-white/30">{{ review.date }}</span>
                    </div>
                    <div class="flex items-center gap-3 mt-1">
                      <div class="flex gap-0.5">
                        <Icon v-for="s in 5" :key="s" name="ph:star-fill" :class="s <= review.rating ? 'text-amber-400' : 'text-white/10'" class="w-4 h-4" />
                      </div>
                      <span v-if="review.verified" class="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary-500/10 text-primary-400 text-[10px] font-bold border border-primary-500/20">
                        <Icon name="ph:seal-check-fill" class="w-3 h-3" />
                        {{ $t('review.verified') }}
                      </span>
                    </div>
                  </div>
                </div>
                <p class="text-white/60 text-sm leading-relaxed italic border-l-2 border-white/10 pl-4">"{{ review.comment[locale as 'th' | 'en'] }}"</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Booking Sidebar -->
        <aside class="lg:w-[380px] flex-shrink-0">
          <div class="glass-card p-8 border border-white/10 shadow-2xl sticky top-32 animate-slide-in-right">
            <div class="text-center mb-8 pb-8 border-b border-white/10">
              <span class="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-2 block">{{ $t('tour.from') }}</span>
              <div class="flex items-baseline justify-center gap-3">
                <span v-if="tour.originalPrice" class="text-xl text-white/20 line-through">
                  {{ tour.currency === 'THB' ? '฿' : '¥' }}{{ tour.originalPrice.toLocaleString() }}
                </span>
                <span class="text-5xl font-bold gradient-text">
                  {{ tour.currency === 'THB' ? '฿' : '¥' }}{{ tour.price.toLocaleString() }}
                </span>
              </div>
              <span class="text-xs font-bold text-white/30 uppercase tracking-widest mt-2 block">{{ $t('tour.per_person') }}</span>
            </div>

            <div class="space-y-6 mb-8">
              <div class="space-y-2">
                <label class="text-xs font-bold text-white/50 uppercase tracking-widest ml-1">{{ $t('booking.date') }}</label>
                <div class="relative group">
                  <Icon name="ph:calendar-blank-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                  <select class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500/50 appearance-none cursor-pointer transition-all">
                    <option v-for="d in tour.departures" :key="d" :value="d" class="bg-dark-900">{{ d }}</option>
                  </select>
                  <Icon name="ph:caret-down-bold" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold text-white/50 uppercase tracking-widest ml-1">{{ $t('booking.adults') }}</label>
                <div class="relative group">
                  <Icon name="ph:users-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                  <select class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500/50 appearance-none cursor-pointer transition-all">
                    <option v-for="n in 10" :key="n" :value="n" class="bg-dark-900">{{ n }} {{ n === 1 ? 'Adult' : 'Adults' }}</option>
                  </select>
                  <Icon name="ph:caret-down-bold" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
                </div>
              </div>
            </div>

            <button class="btn-gradient w-full py-5 text-xl font-bold shadow-lg shadow-primary-500/20 group" @click="handleBook">
              <Icon name="ph:ticket-bold" class="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
              {{ $t('tour.book_now') }}
            </button>

            <div class="mt-6 flex items-center justify-center gap-2 text-white/30">
              <Icon name="ph:shield-check-fill" class="w-4 h-4 text-primary-500/50" />
              <p class="text-[10px] font-bold uppercase tracking-widest">{{ locale === 'th' ? 'ยังไม่ต้องชำระเงินตอนนี้' : 'No payment required now' }}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tours, reviews } from '~/data/mockData'
import { useAppToast } from '~/composables/useAppToast'

const { locale, t } = useI18n()
const route = useRoute()
const toast = useAppToast()

const tour = computed(() => tours.find(t => t.slug === route.params.slug))
const tourReviews = computed(() => reviews.filter(r => r.tourId === tour.value?.id))
const activeImage = ref(0)

const quickInfo = computed(() => tour.value ? [
  { icon: 'material-symbols:schedule-rounded', label: t('tour.duration'), value: `${tour.value.duration.days} ${t('tour.days')}` },
  { icon: 'material-symbols:group-rounded', label: t('tour.group_size'), value: `${tour.value.groupSize.min}-${tour.value.groupSize.max}` },
  { icon: 'material-symbols:star-rounded', label: t('tour.rating'), value: `${tour.value.rating} (${tour.value.reviewCount})` },
  { icon: 'material-symbols:signal-cellular-alt-rounded', label: t('tour.difficulty'), value: tour.value.difficulty }
] : [])

const handleBook = () => {
  toast.success(t('toast.booking_success'))
}

useHead({ title: computed(() => tour.value ? `${tour.value.title[locale.value as 'th' | 'en']} — Voyara` : 'Tour — Voyara') })
</script>
