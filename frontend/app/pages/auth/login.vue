<template>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark-950 px-4 py-20">
    <!-- Background Elements -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?w=1920&h=1080&fit=crop"
        alt="Login background"
        class="w-full h-full object-cover opacity-20 scale-105"
      >
      <div class="absolute inset-0 bg-gradient-to-b from-dark-950/80 via-dark-950/40 to-dark-950" />
      <div class="absolute inset-0 bg-grid-pattern opacity-20" />
    </div>

    <!-- Radial Glows -->
    <div class="absolute -top-24 -left-24 w-96 h-96 bg-primary-900/40 rounded-full blur-[120px] z-0" />
    <div class="absolute -bottom-24 -right-24 w-96 h-96 bg-gold/20 rounded-full blur-[120px] z-0" />

    <!-- Login Card -->
    <div class="relative z-10 w-full max-w-md animate-scale-in">
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
          <h1 class="text-2xl md:text-3xl font-heading font-bold text-white mb-2">{{ $t('nav.login') }}</h1>
          <p class="text-white/40 text-sm">{{ locale === 'th' ? 'ยินดีต้อนรับกลับสู่ประสบการณ์สุดพรีเมียม' : 'Welcome back to your premium experience' }}</p>
        </div>

        <!-- Form -->
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div class="space-y-4">
            <!-- Email / Username -->
            <div class="space-y-1.5">
              <label class="text-xs font-semibold text-white/50 uppercase tracking-widest ml-1">
                {{ locale === 'th' ? 'อีเมล หรือ ชื่อผู้ใช้' : 'Email or Username' }}
              </label>
              <div class="relative group">
                <Icon name="material-symbols:account-circle-outline-rounded" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input
                  v-model="identifier"
                  type="text"
                  class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  :placeholder="locale === 'th' ? 'ระบุอีเมล หรือ ชื่อผู้ใช้' : 'Enter email or username'"
                  required
                >
              </div>
            </div>

            <!-- Password -->
            <div class="space-y-1.5">
              <div class="flex items-center justify-between ml-1">
                <label class="text-xs font-semibold text-white/50 uppercase tracking-widest">{{ locale === 'th' ? 'รหัสผ่าน' : 'Password' }}</label>
                <NuxtLink to="#" class="text-xs text-primary-400 hover:text-primary-300 transition-colors font-medium">
                  {{ locale === 'th' ? 'ลืมรหัสผ่าน?' : 'Forgot password?' }}
                </NuxtLink>
              </div>
              <div class="relative group">
                <Icon name="material-symbols:lock-outline-rounded" class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/20 group-focus-within:text-primary-400 transition-colors" />
                <input
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  class="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-12 text-white placeholder:text-white/20 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                  placeholder="••••••••"
                  required
                >
                <button
                  type="button"
                  class="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/40 transition-colors"
                  @click="showPassword = !showPassword"
                >
                  <Icon :name="showPassword ? 'material-symbols:visibility-off-outline-rounded' : 'material-symbols:visibility-outline-rounded'" class="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <button
            type="submit"
            class="w-full btn-gradient py-4 text-base font-bold shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            :disabled="loading"
          >
            <Icon v-if="loading" name="svg-spinners:ring-resize" class="w-5 h-5" />
            {{ loading ? (locale === 'th' ? 'กำลังทำรายการ...' : 'Processing...') : $t('nav.login') }}
          </button>
        </form>

        <!-- Social Login -->
        <div class="mt-8">
          <div class="relative mb-6">
            <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-white/10"></div></div>
            <div class="relative flex justify-center text-xs uppercase"><span class="bg-dark-900/50 backdrop-blur px-2 text-white/30 tracking-widest">{{ locale === 'th' ? 'หรือเข้าสู่ระบบด้วย' : 'Or continue with' }}</span></div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <button class="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium">
              <Icon name="logos:google-icon" class="w-4 h-4" />
              Google
            </button>
            <button class="flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium">
              <Icon name="logos:apple" class="w-4 h-4 text-white" />
              Apple
            </button>
          </div>
        </div>

        <!-- Footer -->
        <p class="text-center mt-10 text-sm text-white/40">
          {{ locale === 'th' ? 'ยังไม่มีบัญชี?' : "Don't have an account?" }}
          <NuxtLink :to="localePath('/auth/register')" class="text-primary-400 font-bold hover:text-primary-300 transition-colors ml-1">
            {{ locale === 'th' ? 'สมัครสมาชิกตอนนี้' : 'Register now' }}
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
const { login: authLogin } = useAuth()

const identifier = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)

const handleLogin = async () => {
  if (!identifier.value || !password.value) return

  loading.value = true
  
  try {
    // Simulate API call with delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Set mock user data
    authLogin({
      id: '1',
      name: 'Voyara Guest',
      email: identifier.value.includes('@') ? identifier.value : 'guest@voyara.com',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop'
    })
    
    loading.value = false
    toast.success(locale.value === 'th' ? 'เข้าสู่ระบบสำเร็จ! ยินดีต้อนรับ' : 'Login successful! Welcome back.')
    
    // Smooth redirect
    return navigateTo(localePath('/'))
  } catch (error) {
    loading.value = false
    toast.error(locale.value === 'th' ? 'เกิดข้อผิดพลาดในการเข้าสู่ระบบ' : 'Login failed. Please try again.')
  }
}

useHead({
  title: `Login — Voyara`,
  bodyAttrs: {
    class: 'bg-dark-950'
  }
})
</script>
