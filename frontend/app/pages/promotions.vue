<template>
  <div class="bg-dark-950">
    <div class="bg-gradient-to-br from-primary-900 to-primary-700 pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-white mb-3">{{ $t('promo.title') }}</h1>
        <p class="text-white/70 text-lg">{{ $t('promo.subtitle') }}</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="promo in promotions" :key="promo.id" class="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all group">
          <div class="relative aspect-[16/10] overflow-hidden">
            <img :src="promo.image" :alt="promo.title[locale as 'th' | 'en']" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" >
            <div class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1.5 rounded-xl font-bold text-lg shadow-lg">
              <span v-if="promo.discountType === 'percent'">{{ promo.discountValue }}% {{ $t('promo.off') }}</span>
              <span v-else>฿{{ promo.discountValue.toLocaleString() }} {{ $t('promo.off') }}</span>
            </div>
          </div>
          <div class="p-6">
            <h3 class="font-heading font-bold text-charcoal text-lg mb-2">{{ promo.title[locale as 'th' | 'en'] }}</h3>
            <p class="text-sm text-slate mb-4">{{ promo.description[locale as 'th' | 'en'] }}</p>

            <!-- Countdown -->
            <div class="flex gap-3 mb-4">
              <div v-for="unit in getCountdown(promo.expiresAt)" :key="unit.label" class="bg-surface rounded-lg p-2 text-center min-w-[50px]">
                <p class="text-lg font-bold text-primary">{{ unit.value }}</p>
                <p class="text-[10px] text-slate">{{ $t(unit.label) }}</p>
              </div>
            </div>

            <!-- Promo Code -->
            <div class="flex items-center gap-2 bg-primary-50 rounded-xl p-3 border border-dashed border-primary-200">
              <Icon name="material-symbols:confirmation-number-rounded" class="w-5 h-5 text-primary" />
              <span class="font-mono font-bold text-primary text-lg tracking-wider flex-1">{{ promo.code }}</span>
              <button class="text-xs text-primary font-semibold hover:underline" @click="copyCode(promo.code)">
                {{ locale === 'th' ? 'คัดลอก' : 'Copy' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { promotions } from '~/data/mockData'
import { useAppToast } from '~/composables/useAppToast'

const { locale } = useI18n()
const toast = useAppToast()

const getCountdown = (expiresAt: string) => {
  const diff = new Date(expiresAt).getTime() - Date.now()
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
  const hours = Math.max(0, Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
  const minutes = Math.max(0, Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)))
  return [
    { value: days, label: 'promo.days' },
    { value: hours, label: 'promo.hours' },
    { value: minutes, label: 'promo.minutes' }
  ]
}

const copyCode = (code: string) => {
  navigator.clipboard.writeText(code)
  toast.success(locale.value === 'th' ? 'คัดลอกโค้ดแล้ว!' : 'Code copied!')
}

useHead({ title: 'Promotions — Voyara' })
</script>
