<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950 px-4 py-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop"
        alt="Register background"
        class="w-full h-full object-cover opacity-20 scale-105"
      >
      <div class="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/40 to-dark-950" />
      <div class="absolute inset-0 bg-grid-pattern opacity-20" />
    </div>

    <!-- Radial Glows -->
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-primary-900/40 rounded-full blur-[120px] z-0" />
    <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/20 rounded-full blur-[120px] z-0" />

    <!-- Register Card -->
    <div class="relative z-10 w-full max-w-lg animate-scale-in">
      <div class="glass-card p-8 md:p-10 border border-white/10 shadow-2xl shadow-black/50">
        <!-- Logo/Header -->
        <div class="text-center mb-10">
          <NuxtLink :to="localePath('/')" class="inline-flex items-center gap-2 mb-6 group">
            <div class="w-12 h-12 bg-gradient-to-br from-primary to-primary-700 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
              <Icon name="material-symbols:explore" class="w-7 h-7 text-white" />
            </div>
            <span class="text-2xl font-heading font-bold text-white tracking-tight">
              {{ $t('brand') }}
            </span>
          </NuxtLink>
          <h1 class="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{{ $t('nav.register') }}</h1>
          <p class="text-white/40 text-sm">{{ $t('auth.register_subtitle') }}</p>
        </div>

        <!-- Form -->
        <form class="space-y-6" @submit.prevent="handleRegister">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Full Name -->
            <div class="space-y-1.5 md:col-span-2">
              <label class="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">{{ $t('auth.name') }}</label>
              <div class="relative group">
                <Icon name="material-symbols:person-outline-rounded" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  :placeholder="locale === 'th' ? 'กรุณากรอกชื่อ-นามสกุล' : 'Enter your full name'"
                  required
                >
              </div>
            </div>

            <!-- Email -->
            <div class="space-y-1.5 md:col-span-2">
              <label class="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">{{ $t('auth.email') }}</label>
              <div class="relative group">
                <Icon name="material-symbols:mail-outline-rounded" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input
                  v-model="form.email"
                  type="email"
                  class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  placeholder="name@example.com"
                  required
                >
              </div>
            </div>

            <!-- Password -->
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">{{ $t('auth.password') }}</label>
              <div class="relative group">
                <Icon name="material-symbols:lock-outline-rounded" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input
                  v-model="form.password"
                  type="password"
                  class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  placeholder="••••••••"
                  required
                >
              </div>
            </div>

            <!-- Confirm Password -->
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">{{ $t('auth.confirm_password') }}</label>
              <div class="relative group">
                <Icon name="material-symbols:lock-reset-rounded" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input
                  v-model="form.confirmPassword"
                  type="password"
                  class="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  placeholder="••••••••"
                  required
                >
              </div>
            </div>
          </div>

          <!-- Terms -->
          <div class="flex items-start gap-3 ml-1">
            <div class="relative flex items-center mt-1">
              <input
                id="terms"
                v-model="form.agree"
                type="checkbox"
                class="w-4 h-4 rounded border-white/10 bg-white/5 text-primary-500 focus:ring-primary-500/20 transition-all cursor-pointer"
                required
              >
            </div>
            <label for="terms" class="text-xs text-white/40 leading-relaxed cursor-pointer select-none">
              {{ $t('auth.terms_agree') }}
              <NuxtLink to="#" class="text-primary-400 font-bold hover:text-primary-300 transition-colors">
                {{ $t('auth.terms_link') }}
              </NuxtLink>
              {{ $t('auth.and') }}
              <NuxtLink to="#" class="text-primary-400 font-bold hover:text-primary-300 transition-colors">
                {{ $t('auth.privacy_link') }}
              </NuxtLink>
            </label>
          </div>

          <button
            type="submit"
            class="w-full btn-gradient py-4 text-base font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            :disabled="loading"
          >
            <Icon v-if="loading" name="svg-spinners:ring-resize" class="w-5 h-5" />
            {{ loading ? (locale === 'th' ? 'กำลังสร้างบัญชี...' : 'Creating account...') : $t('nav.register') }}
          </button>
        </form>

        <!-- Footer -->
        <p class="text-center mt-10 text-sm text-white/40">
          {{ $t('auth.have_account') }}
          <NuxtLink :to="localePath('/auth/login')" class="text-primary-400 font-bold hover:text-primary-300 transition-colors ml-1">
            {{ $t('nav.login') }}
          </NuxtLink>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppToast } from '~/composables/useAppToast'

const { locale } = useI18n()
const localePath = useLocalePath()
const toast = useAppToast()

const loading = ref(false)
const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  agree: false
})

const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    toast.error(locale.value === 'th' ? 'รหัสผ่านไม่ตรงกัน' : 'Passwords do not match')
    return
  }

  loading.value = true
  // Simulate API call
  setTimeout(() => {
    loading.value = false
    toast.success(locale.value === 'th' ? 'สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ' : 'Registration successful! Please login.')
    navigateTo(localePath('/auth/login'))
  }, 1500)
}

useHead({
  title: `Register — Voyara`,
  bodyAttrs: {
    class: 'bg-dark-950'
  }
})
</script>
