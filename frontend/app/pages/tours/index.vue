<template>
  <div class="bg-dark-950 min-h-screen">
    <!-- Page Header -->
    <div class="relative pt-32 pb-20 px-4 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-950 z-0" />
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      
      <div class="relative z-10 max-w-7xl mx-auto text-center animate-reveal">
        <h1 class="text-4xl md:text-6xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
          {{ $t('nav.tours') }}
        </h1>
        <p class="text-white/50 text-lg max-w-2xl mx-auto font-medium">
          {{ $t('home.featured_subtitle') }}
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Filter Sidebar -->
        <aside class="lg:w-[320px] flex-shrink-0 animate-slide-in-left">
          <div class="glass-card p-8 border border-white/10 sticky top-32 shadow-2xl">
            <h3 class="text-xl font-heading font-bold text-white mb-8 flex items-center gap-3">
              <div class="w-1 h-6 bg-primary-500 rounded-full" />
              {{ $t('filter.title') }}
            </h3>

            <!-- Destination -->
            <div class="mb-8 space-y-3">
              <label class="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">{{ $t('filter.destination') }}</label>
              <div class="relative group">
                <Icon name="ph:map-pin-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <select v-model="filters.destination" class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500/50 appearance-none cursor-pointer transition-all">
                  <option value="" class="bg-dark-900">{{ locale === 'th' ? 'จุดหมายปลายทางทั้งหมด' : 'All Destinations' }}</option>
                  <option v-for="d in destinations" :key="d.value" :value="d.value" class="bg-dark-900">
                    {{ d.label[locale as 'th' | 'en'] }}
                  </option>
                </select>
                <Icon name="ph:caret-down-bold" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
              </div>
            </div>

            <!-- Category -->
            <div class="mb-8 space-y-3">
              <label class="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">{{ $t('filter.category') }}</label>
              <div class="flex flex-wrap gap-2 pt-1">
                <button
                  v-for="cat in categories"
                  :key="cat.value"
                  :class="filters.category === cat.value ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30' : 'bg-white/5 text-white/40 border border-white/10 hover:border-white/30'"
                  class="px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
                  @click="filters.category = filters.category === cat.value ? '' : cat.value"
                >
                  <Icon :name="cat.icon" class="w-4 h-4" />
                  {{ cat.label[locale as 'th' | 'en'] }}
                </button>
              </div>
            </div>

            <!-- Price Range -->
            <div class="mb-8 space-y-3">
              <div class="flex justify-between items-end ml-1">
                <label class="text-xs font-bold text-white/40 uppercase tracking-widest">{{ $t('filter.price_range') }}</label>
                <span class="text-sm font-bold text-primary-400 tracking-wider">฿{{ filters.maxPrice.toLocaleString() }}</span>
              </div>
              <input
                v-model.number="filters.maxPrice" type="range" min="0" max="150000" step="5000"
                class="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-500" 
              >
            </div>

            <!-- Sort -->
            <div class="mb-10 space-y-3">
              <label class="text-xs font-bold text-white/40 uppercase tracking-widest ml-1">{{ $t('filter.sort_by') }}</label>
              <div class="relative group">
                <Icon name="ph:arrows-down-up-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <select v-model="filters.sort" class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-primary-500/50 appearance-none cursor-pointer transition-all">
                  <option value="popular" class="bg-dark-900">{{ $t('filter.sort_popular') }}</option>
                  <option value="price_low" class="bg-dark-900">{{ $t('filter.sort_price_low') }}</option>
                  <option value="price_high" class="bg-dark-900">{{ $t('filter.sort_price_high') }}</option>
                  <option value="rating" class="bg-dark-900">{{ $t('filter.sort_rating') }}</option>
                </select>
                <Icon name="ph:caret-down-bold" class="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20 pointer-events-none" />
              </div>
            </div>

            <button class="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl text-xs font-bold text-white/30 border border-white/10 hover:bg-white/5 hover:text-white/60 transition-all uppercase tracking-widest" @click="clearFilters">
              <Icon name="ph:funnel-x-bold" class="w-4 h-4" />
              {{ $t('filter.clear') }}
            </button>
          </div>
        </aside>

        <!-- Tour Grid -->
        <div class="flex-1 animate-reveal">
          <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
            <h2 class="text-sm font-bold text-white/40 uppercase tracking-[0.2em]">
              {{ filteredTours.length }} {{ $t('filter.results') }}
            </h2>
          </div>
          
          <div v-if="filteredTours.length" class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            <TourCard v-for="tour in filteredTours" :key="tour.id" :tour="tour" />
          </div>
          
          <div v-else class="glass-card py-24 text-center border border-white/10">
            <div class="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
              <Icon name="ph:magnifying-glass-x-bold" class="w-10 h-10 text-white/20" />
            </div>
            <p class="text-xl font-heading font-bold text-white mb-2">{{ $t('common.no_results') }}</p>
            <p class="text-white/40 text-sm italic">{{ locale === 'th' ? 'ลองเปลี่ยนการตั้งค่าการค้นหาดูนะครับ' : 'Try changing your search filters' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { tours, categories, destinations } from '~/data/mockData'

const { locale } = useI18n()

const filters = reactive({
  destination: '',
  category: '',
  maxPrice: 150000,
  sort: 'popular'
})

const filteredTours = computed(() => {
  let result = [...tours]
  if (filters.destination) result = result.filter(t => t.destination.en.toLowerCase().includes(filters.destination))
  if (filters.category) result = result.filter(t => t.category === filters.category)
  result = result.filter(t => t.price <= filters.maxPrice)
  if (filters.sort === 'price_low') result.sort((a, b) => a.price - b.price)
  else if (filters.sort === 'price_high') result.sort((a, b) => b.price - a.price)
  else if (filters.sort === 'rating') result.sort((a, b) => b.rating - a.rating)
  return result
})

const clearFilters = () => {
  filters.destination = ''
  filters.category = ''
  filters.maxPrice = 150000
  filters.sort = 'popular'
}

useHead({ title: 'Tours — Voyara' })
</script>
