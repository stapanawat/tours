<template>
  <NuxtLink :to="localePath(`/tours/${tour.slug}`)" class="glass-card group block">
    <!-- Image -->
    <div class="relative overflow-hidden aspect-[4/3]">
      <img
        :src="tour.image"
        :alt="tour.title[locale as 'th' | 'en']"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      >
      <!-- Overlay gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-dark-900/20 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

      <!-- Badges -->
      <div class="absolute top-3 left-3 flex gap-2">
        <span v-if="tour.originalPrice" class="badge-gold text-xs">
          <Icon name="material-symbols:local-offer-rounded" class="w-3.5 h-3.5" />
          {{ Math.round(100 - (tour.price / tour.originalPrice * 100)) }}% OFF
        </span>
        <span v-if="tour.popular" class="badge bg-primary-500/90 text-white text-xs backdrop-blur-sm">
          <Icon name="material-symbols:trending-up-rounded" class="w-3.5 h-3.5" />
          {{ locale === 'th' ? 'ยอดนิยม' : 'Popular' }}
        </span>
      </div>

      <!-- Wishlist -->
      <button
        class="absolute top-3 right-3 w-9 h-9 rounded-full bg-dark-900/40 backdrop-blur-md flex items-center justify-center hover:bg-dark-900/60 transition-all border border-white/10 group/heart"
        @click.prevent="toggleWishlist"
      >
        <Icon
          :name="wishlisted ? 'material-symbols:favorite-rounded' : 'material-symbols:favorite-outline-rounded'"
          :class="wishlisted ? 'text-red-400' : 'text-white/60 group-hover/heart:text-red-400'"
          class="w-5 h-5 transition-colors"
        />
      </button>

      <!-- Duration -->
      <div class="absolute bottom-3 right-3 badge bg-dark-900/60 text-white/90 text-xs backdrop-blur-md border border-white/10">
        <Icon name="material-symbols:schedule-rounded" class="w-3.5 h-3.5" />
        {{ tour.duration.days }} {{ $t('tour.days') }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <!-- Destination & Rating -->
      <div class="flex items-center justify-between mb-2.5">
        <span class="text-xs text-primary-400 font-semibold flex items-center gap-1">
          <Icon name="material-symbols:location-on-rounded" class="w-3.5 h-3.5" />
          {{ tour.destination[locale as 'th' | 'en'] }}
        </span>
        <span class="text-xs text-amber-400 font-semibold flex items-center gap-1">
          <Icon name="material-symbols:star-rounded" class="w-3.5 h-3.5" />
          {{ tour.rating }} ({{ tour.reviewCount }})
        </span>
      </div>

      <!-- Title -->
      <h3 class="font-heading font-bold text-white mb-2 group-hover:text-primary-400 transition-colors line-clamp-1">
        {{ tour.title[locale as 'th' | 'en'] }}
      </h3>

      <!-- Description -->
      <p class="text-sm text-white/50 line-clamp-2 mb-4">
        {{ tour.shortDescription[locale as 'th' | 'en'] }}
      </p>

      <!-- Price -->
      <div class="flex items-end justify-between pt-3 border-t border-white/10">
        <div>
          <span class="text-xs text-white/40">{{ $t('tour.from') }}</span>
          <div class="flex items-baseline gap-1.5">
            <span v-if="tour.originalPrice" class="text-sm text-white/30 line-through">
              ¥{{ tour.originalPrice.toLocaleString() }}
            </span>
            <span class="text-lg font-bold text-gold">
              {{ tour.currency === 'THB' ? '฿' : '¥' }}{{ tour.price.toLocaleString() }}
            </span>
          </div>
        </div>
        <span class="text-sm text-primary-400 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
          {{ $t('tour.view_details') }}
          <Icon name="material-symbols:arrow-forward-rounded" class="w-4 h-4" />
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { Tour } from '~/data/mockData'
import { useAppToast } from '~/composables/useAppToast'

defineProps<{ tour: Tour }>()
const { locale, t } = useI18n()
const localePath = useLocalePath()
const toast = useAppToast()

const wishlisted = ref(false)

const toggleWishlist = () => {
  wishlisted.value = !wishlisted.value
  toast.success(wishlisted.value ? t('toast.wishlist_added') : t('toast.wishlist_removed'))
}
</script>
