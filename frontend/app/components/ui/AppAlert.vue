<template>
  <div
    v-if="visible"
    :class="[
      'rounded-xl p-4 flex items-start gap-3 border-l-4 animate-fade-in',
      alertStyles[type].bg,
      alertStyles[type].border
    ]"
  >
    <Icon
      :name="alertStyles[type].icon"
      :class="['w-5 h-5 flex-shrink-0 mt-0.5', alertStyles[type].iconColor]"
    />
    <div class="flex-1 min-w-0">
      <p v-if="title" :class="['font-semibold text-sm mb-0.5', alertStyles[type].text]">{{ title }}</p>
      <p :class="['text-sm', alertStyles[type].text, { 'opacity-80': title }]">
        <slot>{{ message }}</slot>
      </p>
    </div>
    <button
      v-if="dismissible"
      class="flex-shrink-0 p-0.5 rounded-lg hover:bg-black/5 transition-colors"
      @click="visible = false"
    >
      <Icon name="material-symbols:close" class="w-4 h-4 text-gray-400" />
    </button>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'success' | 'error' | 'warning' | 'info'
  title?: string
  message?: string
  dismissible?: boolean
}>(), {
  type: 'info',
  dismissible: false,
  title: undefined,
  message: undefined
})

const visible = ref(true)

const alertStyles = {
  success: {
    bg: 'bg-emerald-50',
    border: 'border-emerald-500',
    icon: 'material-symbols:check-circle-rounded',
    iconColor: 'text-emerald-500',
    text: 'text-emerald-800'
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-500',
    icon: 'material-symbols:error-rounded',
    iconColor: 'text-red-500',
    text: 'text-red-800'
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-500',
    icon: 'material-symbols:warning-rounded',
    iconColor: 'text-amber-500',
    text: 'text-amber-800'
  },
  info: {
    bg: 'bg-teal-50',
    border: 'border-teal-500',
    icon: 'material-symbols:info-rounded',
    iconColor: 'text-teal-500',
    text: 'text-teal-800'
  }
}
</script>
