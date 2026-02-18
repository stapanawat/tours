<template>
  <div class="bg-dark-950 min-h-screen">
    <!-- Hero -->
    <div class="relative pt-32 pb-20 px-4 overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=600&fit=crop"
          alt="About hero background"
          class="w-full h-full object-cover opacity-30"
        >
        <div class="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/60 to-dark-950" />
      </div>

      <div class="relative z-10 max-w-7xl mx-auto text-center animate-reveal">
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-white mb-3 tracking-tight">{{ $t('about.title') }}</h1>
        <p class="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">{{ $t('about.subtitle') }}</p>
      </div>
    </div>

    <!-- Story -->
    <section class="py-24 px-4 relative">
      <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-900/20 rounded-full blur-[120px] z-0" />
      
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div class="animate-slide-in-left">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Icon name="material-symbols:history-rounded" class="w-4 h-4" />
            {{ $t('about.story_title') }}
          </div>
          <h2 class="text-2xl md:text-4xl font-heading font-bold text-white mb-6 leading-tight">
            {{ locale === 'th' ? 'เราเชื่อว่าทุกการเดินทาง' : 'We Believe Every Journey' }}
            <br>
            <span class="gradient-text">{{ locale === 'th' ? 'คือการค้นพบสิ่งใหม่' : 'is a New Discovery' }}</span>
          </h2>
          <p class="text-white/60 leading-relaxed mb-8 text-lg">{{ $t('about.story_text') }}</p>
          
          <div class="glass-card p-6 border border-white/10 group hover:border-primary-500/30 transition-all duration-500">
            <h3 class="font-heading font-bold text-primary-400 mb-2 flex items-center gap-2 text-xl">
              <div class="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="material-symbols:flag-rounded" class="w-6 h-6" />
              </div>
              {{ $t('about.mission') }}
            </h3>
            <p class="text-white/40 leading-relaxed">{{ $t('about.mission_text') }}</p>
          </div>
        </div>
        
        <div class="relative animate-slide-in-right">
          <div class="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10 group">
            <img
              src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=800&fit=crop"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="About us"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent opacity-60" />
          </div>
          
          <!-- Experience Badge -->
          <div class="absolute -bottom-8 -left-8 glass-card p-6 border border-white/20 shadow-2xl z-20 animate-bounce-subtle">
            <p class="text-4xl font-bold gradient-text mb-1">7+</p>
            <p class="text-xs text-white/40 font-bold uppercase tracking-widest">{{ $t('about.stats_years') }}</p>
          </div>

          <!-- Decorative Glow -->
          <div class="absolute -bottom-10 -right-10 w-48 h-48 bg-gold/20 rounded-full blur-[80px] z-0" />
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto glass-card border border-white/5 py-12 px-8 grid grid-cols-2 md:grid-cols-4 gap-12 bg-white/[0.02]">
        <div v-for="(stat, i) in stats" :key="stat.label" class="text-center animate-reveal" :style="{ animationDelay: `${i * 0.1}s` }">
          <div class="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-5 border border-white/5 group-hover:border-primary-500/30 transition-colors">
            <Icon :name="stat.icon" class="w-7 h-7 text-primary-400" />
          </div>
          <p class="text-3xl md:text-4xl font-bold text-white mb-2">{{ stat.value }}</p>
          <p class="text-xs text-white/30 font-bold uppercase tracking-widest">{{ $t(stat.label) }}</p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="py-24 px-4 bg-dark-900/30">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <span class="text-primary-400 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">{{ locale === 'th' ? 'พบกับเรา' : 'MEET US' }}</span>
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{{ $t('about.team_title') }}</h2>
          <div class="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full" />
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(member, i) in teamMembers" :key="member.id" class="glass-card group overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-500 animate-reveal" :style="{ animationDelay: `${i * 0.1}s` }">
            <div class="aspect-[4/5] overflow-hidden relative">
              <img :src="member.avatar" :alt="member.name[locale as 'th' | 'en']" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" >
              <div class="absolute inset-0 bg-gradient-to-t from-dark-950 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <!-- Social Icons (Placeholder) -->
              <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <button v-for="s in 3" :key="s" class="w-8 h-8 rounded-lg bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center hover:bg-primary transition-colors">
                  <Icon name="material-symbols:link" class="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
            
            <div class="p-6 text-center">
              <h3 class="font-heading font-bold text-white text-lg mb-1">{{ member.name[locale as 'th' | 'en'] }}</h3>
              <p class="text-sm text-primary-400 font-medium mb-4">{{ member.role[locale as 'th' | 'en'] }}</p>
              <p class="text-xs text-white/40 leading-relaxed line-clamp-2">{{ member.bio[locale as 'th' | 'en'] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { teamMembers } from '~/data/mockData'
const { locale } = useI18n()

const stats = [
  { icon: 'material-symbols:group-rounded', value: '12,500+', label: 'about.stats_travelers' },
  { icon: 'material-symbols:tour-rounded', value: '45+', label: 'about.stats_tours' },
  { icon: 'material-symbols:globe-asia-rounded', value: '15+', label: 'about.stats_destinations' },
  { icon: 'material-symbols:calendar-month-rounded', value: '7+', label: 'about.stats_years' }
]

useHead({ title: 'About — Voyara' })
</script>
