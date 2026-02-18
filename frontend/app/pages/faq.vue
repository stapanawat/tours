<template>
  <div class="bg-dark-950">
    <div class="bg-gradient-to-br from-primary-900 to-primary-700 pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-white mb-3">{{ $t('faq.title') }}</h1>
        <p class="text-white/70 text-lg">{{ $t('faq.subtitle') }}</p>
      </div>
    </div>

    <div class="max-w-3xl mx-auto px-4 py-12">
      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq.id" class="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            class="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-surface transition-colors"
            @click="toggle(faq.id)"
          >
            <span class="font-heading font-semibold text-charcoal">{{ faq.question[locale as 'th' | 'en'] }}</span>
            <Icon
              name="material-symbols:expand-more-rounded"
              class="w-6 h-6 text-slate transition-transform duration-300 flex-shrink-0"
              :class="openIds.includes(faq.id) ? 'rotate-180' : ''"
            />
          </button>
          <Transition
            enter-active-class="transition-all duration-300 ease-out overflow-hidden"
            enter-from-class="max-h-0 opacity-0"
            enter-to-class="max-h-96 opacity-100"
            leave-active-class="transition-all duration-200 ease-in overflow-hidden"
            leave-from-class="max-h-96 opacity-100"
            leave-to-class="max-h-0 opacity-0"
          >
            <div v-if="openIds.includes(faq.id)" class="px-5 pb-5">
              <p class="text-sm text-slate leading-relaxed border-t border-gray-100 pt-4">
                {{ faq.answer[locale as 'th' | 'en'] }}
              </p>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { faqs } from '~/data/mockData'
const { locale } = useI18n()
const openIds = ref<number[]>([])

const toggle = (id: number) => {
  if (openIds.value.includes(id)) {
    openIds.value = openIds.value.filter(i => i !== id)
  } else {
    openIds.value.push(id)
  }
}

useHead({ title: 'FAQ — Voyara' })
</script>
