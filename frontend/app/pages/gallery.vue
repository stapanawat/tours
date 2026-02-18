<template>
  <div class="bg-dark-950">
    <div class="bg-gradient-to-br from-primary-900 to-primary-700 pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-white mb-3">{{ $t('gallery.title') }}</h1>
        <p class="text-white/70 text-lg">{{ $t('gallery.subtitle') }}</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-12">
      <!-- Masonry Grid -->
      <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <div
          v-for="(img, i) in galleryImages"
          :key="i"
          class="break-inside-avoid overflow-hidden rounded-2xl cursor-pointer group relative"
          @click="openLightbox(i)"
        >
          <img :src="img.url" :alt="img.caption" class="w-full object-cover group-hover:scale-105 transition-transform duration-500" >
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
            <div>
              <p class="text-white font-heading font-semibold text-sm">{{ img.caption }}</p>
              <p class="text-white/60 text-xs flex items-center gap-1">
                <Icon name="material-symbols:location-on-rounded" class="w-3 h-3" />
                {{ img.location }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="lightboxOpen" class="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4" @click.self="lightboxOpen = false">
          <button class="absolute top-4 right-4 p-2 text-white/70 hover:text-white" @click="lightboxOpen = false">
            <Icon name="material-symbols:close" class="w-8 h-8" />
          </button>
          <button class="absolute left-4 p-2 text-white/70 hover:text-white" @click="prev">
            <Icon name="material-symbols:chevron-left" class="w-10 h-10" />
          </button>
          <img v-if="galleryImages[lightboxIndex]" :src="galleryImages[lightboxIndex].url" class="max-w-full max-h-[85vh] object-contain rounded-xl" >
          <button class="absolute right-4 p-2 text-white/70 hover:text-white" @click="next">
            <Icon name="material-symbols:chevron-right" class="w-10 h-10" />
          </button>
          <div v-if="galleryImages[lightboxIndex]" class="absolute bottom-6 text-center text-white">
            <p class="font-heading font-semibold">{{ galleryImages[lightboxIndex].caption }}</p>
            <p class="text-sm text-white/50">{{ lightboxIndex + 1 }} / {{ galleryImages.length }}</p>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=1000&fit=crop', caption: 'Tokyo Tower at Night', location: 'Tokyo, Japan' },
  { url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop', caption: 'Fushimi Inari Shrine', location: 'Kyoto, Japan' },
  { url: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&h=900&fit=crop', caption: 'Northern Lights', location: 'Iceland' },
  { url: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&h=600&fit=crop', caption: 'Swiss Alps Village', location: 'Switzerland' },
  { url: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=800&h=800&fit=crop', caption: 'Seoul Night Market', location: 'Seoul, Korea' },
  { url: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?w=800&h=1100&fit=crop', caption: 'Aurora Reflection', location: 'Iceland' },
  { url: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=600&fit=crop', caption: 'Cherry Blossoms', location: 'Tokyo, Japan' },
  { url: 'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&h=700&fit=crop', caption: 'Dotonbori Lights', location: 'Osaka, Japan' },
  { url: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&h=900&fit=crop', caption: 'Sakura Season', location: 'Kyoto, Japan' }
]

const openLightbox = (i: number) => {
  lightboxIndex.value = i
  lightboxOpen.value = true
}

const prev = () => { lightboxIndex.value = (lightboxIndex.value - 1 + galleryImages.length) % galleryImages.length }
const next = () => { lightboxIndex.value = (lightboxIndex.value + 1) % galleryImages.length }

useHead({ title: 'Gallery — Voyara' })
</script>
