<template>
  <div class="min-h-screen bg-dark-950 px-4 py-20">
    <div class="max-w-6xl mx-auto space-y-20">
      
      <!-- Header -->
      <section class="text-center space-y-4">
        <h1 class="text-5xl font-heading font-bold gradient-text uppercase tracking-widest">
          Dark Luxury Mood & Tone
        </h1>
        <p class="text-white/40 text-lg max-w-2xl mx-auto font-medium">
          The official design language for Voyara. Standardized tokens for color, typography, and glassmorphism.
        </p>
      </section>

      <!-- Theme Presets -->
      <section class="space-y-8 animate-reveal">
        <h2 class="text-2xl font-heading font-bold text-white flex items-center gap-3">
          <div class="w-1 h-8 bg-primary-500 rounded-full" />
          Mood & Tone Presets
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            v-for="t in themes"
            :key="t.id"
            :class="[
              'p-6 rounded-2xl border transition-all duration-300 text-left space-y-3 group',
              theme === t.id ? 'bg-primary-500/10 border-primary-500 shadow-lg shadow-primary-500/20' : 'bg-white/5 border-white/10 hover:border-white/20'
            ]"
            @click="setTheme(t.id as any)"
          >
            <div :class="['w-10 h-10 rounded-xl flex items-center justify-center border', t.previewBorder]">
              <div :class="['w-4 h-4 rounded-full', t.previewBg]" />
            </div>
            <div>
              <p :class="['font-bold uppercase tracking-widest text-xs', theme === t.id ? 'text-primary-400' : 'text-white/40']">
                {{ t.name }}
              </p>
              <p class="text-[10px] text-white/30 leading-tight mt-1">{{ t.desc }}</p>
            </div>
          </button>
        </div>
      </section>

      <!-- Color Palette -->
      <section class="space-y-8">
        <h2 class="text-2xl font-heading font-bold text-white flex items-center gap-3">
          <div class="w-1 h-8 bg-primary-500 rounded-full" />
          Color Palette
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          <div v-for="color in colors" :key="color.name" class="space-y-3">
            <div :class="color.bg" class="h-24 w-full rounded-2xl border border-white/10 shadow-lg" />
            <div>
              <p class="text-sm font-bold text-white uppercase">{{ color.name }}</p>
              <p class="text-xs text-white/30 font-mono">{{ color.hex }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Glassmorphism -->
      <section class="space-y-8">
        <h2 class="text-2xl font-heading font-bold text-white flex items-center gap-3">
          <div class="w-1 h-8 bg-gold rounded-full" />
          Glassmorphism Utilities
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="glass-thin p-8 space-y-4">
            <p class="text-white/40 text-xs font-bold uppercase tracking-widest">.glass-thin</p>
            <h3 class="text-xl font-bold text-white">Light Frost</h3>
            <p class="text-white/60 text-sm italic">Subtle and elegant, used for inner panels or tooltips.</p>
          </div>
          <div class="glass-medium p-8 space-y-4">
            <p class="text-white/40 text-xs font-bold uppercase tracking-widest">.glass-medium</p>
            <h3 class="text-xl font-bold text-white">Standard Luxury</h3>
            <p class="text-white/60 text-sm italic">The primary card style for content and sections.</p>
          </div>
          <div class="glass-thick p-8 space-y-4">
            <p class="text-white/40 text-xs font-bold uppercase tracking-widest">.glass-thick</p>
            <h3 class="text-xl font-bold text-white">Deep Obsidian</h3>
            <p class="text-white/60 text-sm italic">Dense and heavy, perfect for menus and footers.</p>
          </div>
        </div>
      </section>

      <!-- Interactive Elements -->
      <section class="space-y-8">
        <h2 class="text-2xl font-heading font-bold text-white flex items-center gap-3">
          <div class="w-1 h-8 bg-primary-400 rounded-full" />
          Interactive Components
        </h2>
        <div class="glass-medium p-10 flex flex-wrap gap-8 items-center justify-center">
          <button class="btn-gradient">Primary Action</button>
          <button class="px-6 py-3 rounded-xl border border-white/20 text-white font-bold hover:bg-white/5 transition-all">Outline Action</button>
          <div class="flex items-center gap-4">
             <div class="w-12 h-12 rounded-2xl bg-primary-500/20 border border-primary-500/30 flex items-center justify-center">
                <Icon name="ph:shooting-star-fill" class="w-6 h-6 text-primary-400" />
             </div>
             <div>
                <p class="text-white font-bold">Icon Pair</p>
                <p class="text-white/30 text-xs">Phoshor Icon Set</p>
             </div>
          </div>
        </div>
      </section>

      <!-- Typography -->
      <section class="space-y-8">
        <h2 class="text-2xl font-heading font-bold text-white flex items-center gap-3">
          <div class="w-1 h-8 bg-white/20 rounded-full" />
          Typography Scale
        </h2>
        <div class="glass-medium p-10 space-y-8">
          <div class="border-b border-white/5 pb-8">
            <p class="text-xs text-white/20 mb-2 font-mono">Hero Title</p>
            <h1 class="text-6xl font-heading font-bold text-white tracking-tighter">Premium Collection</h1>
          </div>
          <div class="border-b border-white/5 pb-8">
            <p class="text-xs text-white/20 mb-2 font-mono">Accent Span</p>
            <span class="text-xs font-bold text-primary-400 uppercase tracking-[0.3em]">Curated Experiences by Experts</span>
          </div>
          <div>
            <p class="text-xs text-white/20 mb-2 font-mono">Body Prose</p>
            <p class="text-white/60 leading-relaxed max-w-xl italic">
              Experience the pinnacle of travel where every detail is meticulously crafted to ensure your comfort and delight. From private guides to exclusive accesses, Voyara redefine luxury.
            </p>
          </div>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const { theme, setTheme } = useTheme()

const themes = [
  { id: 'luxury', name: 'Dark Luxury', desc: 'Teal & Gold - Default premium feel', previewBg: 'bg-primary-500', previewBorder: 'border-primary-500/30' },
  { id: 'noble', name: 'Classic Noble', desc: 'Blue & Silver - Formal and reliable', previewBg: 'bg-blue-500', previewBorder: 'border-blue-500/30' },
  { id: 'royal', name: 'Royal Sunset', desc: 'Purple & Amber - Rich and energetic', previewBg: 'bg-purple-500', previewBorder: 'border-purple-500/30' },
  { id: 'emerald', name: 'Pure Emerald', desc: 'Green & Gold - Natural and fresh', previewBg: 'bg-emerald-500', previewBorder: 'border-emerald-500/30' }
]

const colors = [
  { name: 'Primary 500', bg: 'bg-primary-500', hex: '#14B8A6' },
  { name: 'Gold', bg: 'bg-gold', hex: '#D4A853' },
  { name: 'Dark 950', bg: 'bg-dark-950', hex: '#060B18' },
  { name: 'Emerald', bg: 'bg-emerald-500', hex: '#10B981' },
  { name: 'Rose', bg: 'bg-rose-500', hex: '#F43F5E' },
  { name: 'Obsidian', bg: 'bg-dark-900', hex: '#0B1426' }
]

useHead({
  title: 'Design System — Voyara'
})
</script>
