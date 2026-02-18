<template>
  <Teleport to="body">
    <div class="fixed top-4 right-4 z-[9999] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      <TransitionGroup
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 translate-x-full"
      >
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="[
            'pointer-events-auto rounded-xl p-4 shadow-lg border flex items-start gap-3',
            toastStyles[toast.type].bg,
            toastStyles[toast.type].border
          ]"
        >
          <Icon
            :name="toastStyles[toast.type].icon"
            :class="['w-6 h-6 flex-shrink-0 mt-0.5', toastStyles[toast.type].iconColor]"
          />
          <p :class="['flex-1 text-sm font-medium', toastStyles[toast.type].text]">
            {{ toast.message }}
          </p>
          <button
            class="flex-shrink-0 p-0.5 rounded-lg hover:bg-black/5 transition-colors"
            @click="removeToast(toast.id)"
          >
            <Icon name="material-symbols:close" class="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useAppToast } from '~/composables/useAppToast'

const { toasts, removeToast } = useAppToast()

const toastStyles = {
  success: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    icon: 'material-symbols:check-circle-rounded',
    iconColor: 'text-emerald-500',
    text: 'text-emerald-800'
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    icon: 'material-symbols:error-rounded',
    iconColor: 'text-red-500',
    text: 'text-red-800'
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: 'material-symbols:warning-rounded',
    iconColor: 'text-amber-500',
    text: 'text-amber-800'
  },
  info: {
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    icon: 'material-symbols:info-rounded',
    iconColor: 'text-teal-500',
    text: 'text-teal-800'
  }
}
</script>
