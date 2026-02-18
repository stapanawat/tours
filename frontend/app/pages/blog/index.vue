<template>
  <div class="bg-dark-950 min-h-screen">
    <div class="bg-gradient-to-br from-primary-900 to-primary-700 pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-white mb-3">{{ $t('blog.title') }}</h1>
        <p class="text-white/70 text-lg">{{ $t('blog.subtitle') }}</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink
          v-for="post in blogPosts"
          :key="post.id"
          :to="localePath(`/blog/${post.slug}`)"
          class="glass-card group block animate-reveal"
        >
          <div class="aspect-[16/10] overflow-hidden">
            <img :src="post.image" :alt="post.title[locale as 'th' | 'en']" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" >
          </div>
          <div class="p-5">
            <div class="flex items-center gap-3 mb-3">
              <span class="badge bg-primary-500/20 text-primary-400 text-xs font-semibold">{{ post.category[locale as 'th' | 'en'] }}</span>
              <span class="text-xs text-white/40 flex items-center gap-1">
                <Icon name="material-symbols:schedule-rounded" class="w-3.5 h-3.5" />
                {{ post.readTime }} {{ $t('blog.min_read') }}
              </span>
            </div>
            <h3 class="font-heading font-bold text-white group-hover:text-primary-400 transition-colors mb-2 line-clamp-1">
              {{ post.title[locale as 'th' | 'en'] }}
            </h3>
            <p class="text-sm text-white/50 line-clamp-2 mb-4 leading-relaxed">{{ post.excerpt[locale as 'th' | 'en'] }}</p>
            <div class="flex items-center gap-3 pt-4 border-t border-white/5">
              <img :src="post.authorAvatar" class="w-8 h-8 rounded-full border border-white/10" >
              <div>
                <p class="text-xs font-semibold text-white/80">{{ post.author }}</p>
                <p class="text-[10px] text-white/30 uppercase tracking-widest">{{ post.date }}</p>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { blogPosts } from '~/data/mockData'
const { locale } = useI18n()
const localePath = useLocalePath()
useHead({ title: 'Blog — Voyara' })
</script>
