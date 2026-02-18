<template>
  <div class="bg-dark-950 min-h-screen">
    <div class="bg-gradient-to-br from-primary-900 to-primary-700 pt-32 pb-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-white mb-3 tracking-tight">{{ $t('contact.title') }}</h1>
        <p class="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">{{ $t('contact.subtitle') }}</p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-20">
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Contact Info Cards -->
        <div class="space-y-6 animate-slide-in-left">
          <div v-for="(item, i) in contactInfo" :key="item.icon" 
            class="glass-card p-6 border border-white/10 flex items-start gap-5 hover:border-primary-500/30 transition-all duration-500 animate-reveal"
            :style="{ animationDelay: `${i * 0.1}s` }"
          >
            <div class="w-12 h-12 rounded-2xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 border border-primary-500/20">
              <Icon :name="item.icon" class="w-6 h-6 text-primary-400" />
            </div>
            <div>
              <p class="font-heading font-bold text-white/40 text-xs uppercase tracking-widest mb-1">{{ item.title }}</p>
              <p class="text-base font-semibold text-white tracking-wide">{{ item.value }}</p>
            </div>
          </div>

          <!-- Map Container -->
          <div class="glass-card overflow-hidden border border-white/10 h-[300px] shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.6!2d100.53!3d13.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2sth!4v1"
              width="100%" height="100%" style="border:0;" allowfullscreen loading="lazy"
              class="opacity-60 hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </div>

        <!-- Contact Form Card -->
        <div class="lg:col-span-2 glass-card border border-white/10 p-8 md:p-10 shadow-2xl animate-slide-in-right relative overflow-hidden">
          <!-- Background Decoration -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl" />
          
          <h2 class="text-2xl font-heading font-bold text-white mb-8 flex items-center gap-3">
            <Icon name="material-symbols:edit-note-outline-rounded" class="w-8 h-8 text-primary-400" />
            {{ locale === 'th' ? 'ส่งข้อความถึงเรา' : 'Send us a Message' }}
          </h2>

          <form class="space-y-6 relative z-10" @submit.prevent="handleSubmit">
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-white/30 uppercase tracking-widest ml-1">{{ $t('contact.name') }}</label>
                <div class="relative group">
                  <Icon name="ph:user-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400" />
                  <input v-model="form.name" class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all" :placeholder="locale === 'th' ? 'ชื่อของคุณ' : 'Your name'" required >
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-white/30 uppercase tracking-widest ml-1">{{ $t('contact.email') }}</label>
                <div class="relative group">
                  <Icon name="ph:envelope-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400" />
                  <input v-model="form.email" type="email" class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all" placeholder="name@example.com" required >
                </div>
              </div>
            </div>
            
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-white/30 uppercase tracking-widest ml-1">{{ $t('contact.phone') }}</label>
                <div class="relative group">
                  <Icon name="ph:phone-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400" />
                  <input v-model="form.phone" type="tel" class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all" placeholder="+66" >
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="text-xs font-semibold text-white/30 uppercase tracking-widest ml-1">{{ $t('contact.subject') }}</label>
                <div class="relative group">
                  <Icon name="ph:chat-centered-text-bold" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400" />
                  <input v-model="form.subject" class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all" :placeholder="locale === 'th' ? 'หัวข้อที่ต้องการติดต่อ' : 'Contact subject'" required >
                </div>
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-white/30 uppercase tracking-widest ml-1">{{ $t('contact.message') }}</label>
              <textarea v-model="form.message" rows="5" class="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none" :placeholder="locale === 'th' ? 'พิมพ์ข้อความของคุณที่นี่...' : 'Type your message here...'" required />
            </div>

            <button type="submit" class="btn-gradient w-full py-4 text-lg font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-3">
              <Icon name="material-symbols:send-rounded" class="w-6 h-6" />
              {{ $t('contact.send') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppToast } from '~/composables/useAppToast'

const { t, locale } = useI18n()
const toast = useAppToast()

const form = reactive({ name: '', email: '', phone: '', subject: '', message: '' })

const contactInfo = [
  { icon: 'ph:envelope-simple-fill', title: 'Email', value: 'hello@voyara.co' },
  { icon: 'ph:phone-fill', title: t('contact.phone'), value: '+66 2 123 4567' },
  { icon: 'ph:map-pin-fill', title: t('contact.address'), value: '123 Sathorn Rd, Bangkok 10120' },
  { icon: 'ph:clock-fill', title: t('contact.office_hours'), value: t('contact.office_hours_text') }
]

const handleSubmit = () => {
  toast.success(t('toast.save_success'))
  Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' })
}

useHead({ title: 'Contact — Voyara' })
</script>

